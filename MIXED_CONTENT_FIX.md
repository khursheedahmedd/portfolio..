# 🔒 Mixed Content Error Fix

## ✅ Solution Implemented

**Problem**: Your HTTPS website (`https://www.khursheed.online/`) cannot make direct requests to an HTTP chatbot server (`http://195.35.22.46:5000`) due to browser Mixed Content security restrictions.

**Solution**: Created a **Next.js API Route** that acts as a **server-side proxy**. The frontend makes HTTPS requests to your Next.js server, which then makes HTTP requests to the chatbot backend.

---

## 🏗️ Architecture

```
Client (HTTPS) → Next.js API Route (/api/chatbot) → Chatbot Backend (HTTP)
     ✅ Secure           ✅ Server-side proxy         ✅ No browser restrictions
```

### Flow:

1. User sends message from frontend (HTTPS)
2. Frontend calls `/api/chatbot` (same HTTPS domain)
3. Next.js API route proxies request to `http://195.35.22.46:5000`
4. Response is sent back through the API route
5. Frontend receives response (all over HTTPS)

---

## 📁 Files Created/Modified

### 1. **API Route** (`app/api/chatbot/route.ts`)

- Handles POST requests from the frontend
- Proxies to your chatbot backend
- Includes error handling

### 2. **Component Update** (`components/AIChatbot.tsx`)

- Changed from direct backend calls to using `/api/chatbot`
- No more mixed content errors!

### 3. **Environment Variable** (`.env.local`)

- `CHATBOT_API_URL` - Points to your chatbot backend
- Server-side only (not exposed to client)

---

## ⚙️ Configuration

### For Production:

Create `.env.local` in your portfolio root:

```env
CHATBOT_API_URL=http://195.35.22.46:5000
```

### For Development:

The API route defaults to `http://195.35.22.46:5000` if the env variable is not set.

---

## 🚀 Benefits

✅ **No Mixed Content Errors**: All requests are HTTPS-to-HTTPS  
✅ **Security**: Backend URL stays server-side (not exposed to clients)  
✅ **Flexibility**: Easy to change backend URL without frontend changes  
✅ **Error Handling**: Better error messages and handling  
✅ **Works in Production**: Compatible with Vercel, Netlify, etc.

---

## 🧪 Testing

### 1. Local Testing

```bash
# Start Next.js dev server
npm run dev

# The chatbot will use /api/chatbot which proxies to your backend
# Test by opening the chatbot and asking a question
```

### 2. Production Testing

1. Deploy to production
2. Set `CHATBOT_API_URL` environment variable
3. Test the chatbot - should work without mixed content errors!

---

## 📊 API Endpoints

### Frontend → API Route

```
POST /api/chatbot
Body: { question: "...", use_conversation_history: false }
```

### API Route → Backend

```
POST http://195.35.22.46:5000/query
Body: { question: "...", use_conversation_history: false }
```

---

## 🔧 Troubleshooting

### Issue: Still getting mixed content errors

**Solution**: Make sure you're not using `NEXT_PUBLIC_CHATBOT_API_URL` in the frontend. The component now uses `/api/chatbot` directly.

### Issue: API route returns 500 error

**Solution**:

1. Check that `CHATBOT_API_URL` is set correctly in `.env.local`
2. Verify your chatbot backend is running and accessible
3. Check Next.js server logs for error details

### Issue: Timeout errors

**Solution**: Add timeout handling to the API route if needed, or increase Next.js timeout settings.

---

## 📝 Code Changes Summary

### Before (Direct Call):

```typescript
// ❌ This causes mixed content error in production
fetch(`http://195.35.22.46:5000/query`, {
  method: "POST",
  body: JSON.stringify({ question }),
});
```

### After (API Proxy):

```typescript
// ✅ All requests go through HTTPS
fetch("/api/chatbot", {
  method: "POST",
  body: JSON.stringify({ question }),
});
```

---

## ✅ Success Indicators

- ✅ No mixed content errors in browser console
- ✅ Chatbot works on HTTPS website
- ✅ All requests show as HTTPS in Network tab
- ✅ Responses come through successfully

---

## 🔐 Security Notes

- Backend URL is **never exposed** to the client
- All client requests are to your Next.js domain (HTTPS)
- Server-side proxy ensures secure communication
- No API keys or secrets exposed to browser

---

## 🎯 Next Steps

1. ✅ API route created (`app/api/chatbot/route.ts`)
2. ✅ Component updated (`components/AIChatbot.tsx`)
3. ✅ Environment variable documented
4. ⏭️ **Deploy to production** and test!

---

**Your chatbot is now fully compatible with HTTPS websites!** 🚀
