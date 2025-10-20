# 🤖 AI Chatbot Integration Guide

## ✅ Successfully Integrated!

Your portfolio now has an AI-powered chatbot that can answer questions about your skills, projects, and experience.

---

## 🎯 Features

✨ **Floating Chat Icon** - Beautiful gradient AI icon positioned above WhatsApp icon  
💬 **Hover Tooltip** - Shows "Chat with Khursheed" when hovering  
🎨 **Seamless Design** - Matches your portfolio's gradient theme  
⚡ **Real-time Responses** - Powered by your RAG system (Groq + ChromaDB)  
📱 **Responsive** - Works perfectly on mobile and desktop  
🔄 **Smooth Animations** - Beautiful Framer Motion transitions  
💡 **Suggested Questions** - Helps users get started  
📚 **Source Citations** - Shows which sources were used for answers

---

## 📍 Component Location

### Created Files:

- `components/AIChatbot.tsx` - Main chatbot component
- `.env.local.example` - Environment configuration example

### Modified Files:

- `app/page.tsx` - Added AIChatbot component

---

## 🚀 How to Use

### Step 1: Start the Chatbot Backend

```bash
cd chatbot
./start.sh  # or start.bat on Windows
```

The backend should be running at http://localhost:8000

### Step 2: Ingest Your Data (if not done yet)

```bash
curl -X POST "http://localhost:8000/ingest/file" \
  -F "file=@data/portfolio_info.txt"
```

### Step 3: Start Your Next.js Portfolio

```bash
cd ..  # back to portfolio root
npm run dev
```

Visit http://localhost:3000 and you'll see:

1. WhatsApp icon at bottom-right (green)
2. AI Chatbot icon above it (gradient purple-cyan)

---

## 🎨 Visual Layout

```
                    [Screen]




              [💬 AI Chat Icon]  ← Gradient (Purple→Cyan)
                   ↕ ~10px gap
              [📱 WhatsApp Icon] ← Green


          Bottom-Right Corner
```

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local` in your portfolio root (optional):

```env
NEXT_PUBLIC_CHATBOT_API_URL=http://localhost:8000
```

Default is `http://localhost:8000` if not set.

### For Production:

Update to your deployed chatbot API:

```env
NEXT_PUBLIC_CHATBOT_API_URL=https://your-chatbot-api.azurewebsites.net
```

---

## 💡 How It Works

### User Flow:

1. **User hovers** over AI icon → Sees "Chat with Khursheed"
2. **User clicks** → Chat dialog opens with a greeting
3. **User types** question → Sends to RAG backend
4. **Backend processes** → Retrieves relevant context from ChromaDB
5. **Groq LLM generates** answer → Sends back to frontend
6. **User sees** answer with source citations

### Technical Flow:

```
Frontend (Next.js) → API Call → FastAPI Backend
                                     ↓
                              Vector Search (ChromaDB)
                                     ↓
                              Context Retrieval
                                     ↓
                              LLM Generation (Groq)
                                     ↓
                              Response ← Frontend
```

---

## 🎨 Customization

### Change Position

Edit `components/AIChatbot.tsx`:

```tsx
// Current: 90px from bottom (above WhatsApp)
className = "fixed bottom-[90px] right-5";

// Make it higher:
className = "fixed bottom-[120px] right-5";

// Change side:
className = "fixed bottom-[90px] left-5"; // Left side
```

### Change Colors

Already uses your portfolio's gradient theme:

- Primary: `#A293FF` (Purple)
- Secondary: `#00F0FF` (Cyan)

To customize, edit the `from-primary to-secondary` classes in the component.

### Change Icon

Replace `IoSparkles` with any React Icon:

```tsx
import { IoChatbubbles } from "react-icons/io5";
// Then use <IoChatbubbles /> instead
```

### Modify Suggested Questions

Edit the `suggestedQuestions` array:

```tsx
const suggestedQuestions = [
  "Your custom question 1",
  "Your custom question 2",
  // ...
];
```

### Change Chat Window Size

```tsx
// Current
className = "w-[380px] md:w-[420px] h-[600px]";

// Larger
className = "w-[400px] md:w-[480px] h-[700px]";
```

---

## 🐛 Troubleshooting

### Issue: Chat icon appears but no responses

**Solution:** Make sure the chatbot backend is running

```bash
cd chatbot
./start.sh
# Check: curl http://localhost:8000/health
```

### Issue: CORS errors in browser console

**Solution:** Update chatbot's `.env` file:

```env
CORS_ORIGINS=http://localhost:3000,http://localhost:3001
```

Then restart the backend.

### Issue: "Make sure the chatbot server is running" message

**Solution:**

1. Verify backend is running: `curl http://localhost:8000/health`
2. Check data is ingested: `curl http://localhost:8000/collection/info`
3. Verify API URL is correct in `AIChatbot` component

### Issue: Chat window appears behind other elements

**Solution:** The component has `z-50` which should be high enough. If issues persist, increase to `z-[100]`:

```tsx
className = "... z-[100]";
```

### Issue: Animations not working

**Solution:** Ensure framer-motion is installed:

```bash
npm install framer-motion
```

---

## 📱 Mobile Responsiveness

The chatbot is fully responsive:

- **Mobile**: 380px width, slides up from bottom
- **Desktop**: 420px width, positioned at bottom-right
- Touch-friendly buttons and tap targets
- Scrollable message area

---

## 🚀 Deployment Checklist

### Before deploying to production:

1. ✅ Deploy chatbot backend (Azure/AWS/etc.)
2. ✅ Get production API URL
3. ✅ Update `.env.local`:
   ```env
   NEXT_PUBLIC_CHATBOT_API_URL=https://your-api.com
   ```
4. ✅ Update CORS in chatbot backend:
   ```env
   CORS_ORIGINS=https://yourdomain.com
   ```
5. ✅ Test on production domain
6. ✅ Monitor backend logs for errors

---

## 📊 Integration Summary

### What Changed:

- ✅ Added `AIChatbot.tsx` component
- ✅ Updated `app/page.tsx` to include chatbot
- ✅ Created `.env.local.example` for configuration
- ✅ No changes to existing functionality
- ✅ WhatsApp component unchanged

### What Works:

- ✅ Floating AI chat icon with tooltip
- ✅ Opens/closes chat dialog smoothly
- ✅ Sends questions to RAG backend
- ✅ Displays AI responses with sources
- ✅ Suggested questions for new users
- ✅ Loading states during API calls
- ✅ Error handling if backend is down
- ✅ Mobile responsive design

---

## 🎯 Next Steps

### Immediate:

1. Start chatbot backend
2. Test the integration
3. Try asking questions

### Optional Enhancements:

1. Add conversation persistence (localStorage)
2. Add typing indicators
3. Add voice input support
4. Add download chat history feature
5. Add feedback buttons (👍/👎)
6. Add analytics tracking
7. Add rate limiting for requests

---

## 📚 Related Documentation

- Main Chatbot README: `chatbot/README.md`
- Backend Setup: `chatbot/SETUP.md`
- Project Overview: `chatbot/PROJECT_OVERVIEW.md`
- API Documentation: http://localhost:8000/docs

---

## 💬 Example Questions to Try

- "What are Khursheed's main skills?"
- "Tell me about the Vibe Terminal project"
- "What experience does Khursheed have with AI?"
- "Show me projects built with Next.js"
- "What certifications does he have?"
- "Does he work with LangChain?"
- "What hackathons has he won?"
- "Tell me about Smart Grade AI"

---

## ✅ Success!

Your AI chatbot is now fully integrated and ready to impress your portfolio visitors! 🎉

**Built with:** React + Next.js + Framer Motion + FastAPI + Groq + ChromaDB + LangChain

---

**Need Help?**

- Check backend logs: `chatbot/` directory
- Test API: http://localhost:8000/docs
- Review this guide for troubleshooting
