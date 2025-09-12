import { useState, useRef, useEffect } from "react";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm Alarm chatbot 🤖. How can I help?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputMode, setInputMode] = useState("text");
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Initialize speech recognition
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onstart = () => {
        setIsListening(true);
      };

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // Call FastAPI backend
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({ user_input: input })
      });

      if (!response.ok) throw new Error("Server error");

      const data = await response.json();

      const botMessage = {
        sender: "bot",
        text: data.reply || "⚠️ No response"
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Error calling server:", error);
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "⚠️ Error connecting to server." }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  const handleInputModeChange = (mode) => {
    setInputMode(mode);
    setInput("");
    if (isListening) {
      stopListening();
    }
  };

  return (
    <div className="chat-container">
      {/* Chat messages */}
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="message bot">⏳ Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input mode selection */}
      <div className="input-mode-container">
        <div className="radio-group">
          <label className="radio-label">
            <input
              type="radio"
              name="inputMode"
              value="text"
              checked={inputMode === "text"}
              onChange={() => handleInputModeChange("text")}
            />
            <span className="radio-text">💬 Text</span>
          </label>
          <label className="radio-label">
            <input
              type="radio"
              name="inputMode"
              value="voice"
              checked={inputMode === "voice"}
              onChange={() => handleInputModeChange("voice")}
              disabled={!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)}
            />
            <span className="radio-text">🎙️ Voice</span>
          </label>
        </div>
      </div>

      {/* Fixed chat input */}
      <div className="input-container">
        {inputMode === "text" ? (
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
          />
        ) : (
          <div className="voice-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={isListening ? "Listening..." : "Click mic to speak or type here..."}
              readOnly={isListening}
            />
            <button 
              className={`mic-button ${isListening ? 'listening' : ''}`}
              onClick={isListening ? stopListening : startListening}
              type="button"
            >
              {isListening ? '⏹️' : '🎙️'}
            </button>
          </div>
        )}
        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          Send
        </button>
      </div>
    </div>
  );
}