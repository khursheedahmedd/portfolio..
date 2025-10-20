"use client";

import React from "react";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export default function MarkdownRenderer({ content, className = "" }: MarkdownRendererProps) {
  const renderMarkdown = (text: string) => {
    // Split by lines
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: string[] = [];
    let inCodeBlock = false;
    let codeBlockContent: string[] = [];
    let codeLanguage = "";

    const flushListItems = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-1 my-2">
            {listItems.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: processInlineMarkdown(item) }} />
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeBlockContent.length > 0) {
        elements.push(
          <pre
            key={`code-${elements.length}`}
            className="bg-gray-800 text-gray-100 p-3 rounded-lg overflow-x-auto my-2 text-sm"
          >
            <code>{codeBlockContent.join("\n")}</code>
          </pre>
        );
        codeBlockContent = [];
        codeLanguage = "";
      }
    };

    lines.forEach((line, index) => {
      // Code blocks
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          flushCodeBlock();
          inCodeBlock = false;
        } else {
          flushListItems();
          inCodeBlock = true;
          codeLanguage = line.substring(3).trim();
        }
        return;
      }

      if (inCodeBlock) {
        codeBlockContent.push(line);
        return;
      }

      // Headings
      if (line.startsWith("### ")) {
        flushListItems();
        elements.push(
          <h3 key={index} className="font-bold text-base mt-3 mb-1">
            {line.substring(4)}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        flushListItems();
        elements.push(
          <h2 key={index} className="font-bold text-lg mt-3 mb-1">
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("# ")) {
        flushListItems();
        elements.push(
          <h1 key={index} className="font-bold text-xl mt-3 mb-2">
            {line.substring(2)}
          </h1>
        );
      }
      // Lists
      else if (line.match(/^[-*]\s+/)) {
        listItems.push(line.substring(2));
      } else if (line.match(/^\d+\.\s+/)) {
        listItems.push(line.replace(/^\d+\.\s+/, ""));
      }
      // Horizontal rule
      else if (line.match(/^---+$/)) {
        flushListItems();
        elements.push(<hr key={index} className="my-3 border-gray-300" />);
      }
      // Empty line
      else if (line.trim() === "") {
        flushListItems();
        elements.push(<div key={index} className="h-2" />);
      }
      // Regular paragraph
      else {
        flushListItems();
        elements.push(
          <p
            key={index}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: processInlineMarkdown(line) }}
          />
        );
      }
    });

    flushListItems();
    flushCodeBlock();

    return elements;
  };

  const processInlineMarkdown = (text: string): string => {
    return text
      // Bold
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.+?)__/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/_(.+?)_/g, "<em>$1</em>")
      // Inline code
      .replace(/`(.+?)`/g, '<code class="bg-gray-200 px-1.5 py-0.5 rounded text-sm">$1</code>')
      // Links
      .replace(
        /\[(.+?)\]\((.+?)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>'
      )
      // Line breaks
      .replace(/  $/gm, "<br />");
  };

  return <div className={`markdown-content ${className}`}>{renderMarkdown(content)}</div>;
}

