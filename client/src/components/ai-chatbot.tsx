import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm Kirril's AI assistant. I can help you with DSCR loans, bank statement loans, LLC mortgages, and fix & flip financing. What questions do you have?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Mortgage knowledge base from the uploaded document
  const getMortgageResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // DSCR Loan responses
    if (message.includes('dscr') || message.includes('debt service coverage')) {
      return "DSCR (Debt Service Coverage Ratio) loans are perfect for real estate investors! You need a minimum DSCR of 1.25, which means your property's monthly rental income should be at least 25% higher than your monthly debt payments (PITIA). No W-2s or tax returns required - we qualify you based on the property's income potential. Rates typically start around 7-8% for investment properties.";
    }
    
    // Bank Statement loans
    if (message.includes('bank statement') || message.includes('self employed')) {
      return "Bank Statement loans are ideal for self-employed borrowers! We can use 12-24 months of bank statements to verify your income instead of tax returns. This works great for business owners, contractors, freelancers, and entrepreneurs who have strong cash flow but complex tax situations. We typically use 50% of your deposits as qualifying income.";
    }
    
    // LLC Mortgages
    if (message.includes('llc') || message.includes('business entity')) {
      return "LLC Mortgages allow you to purchase investment properties in your business name! This provides asset protection and potential tax benefits. The LLC must be seasoned (typically 2+ years) and have good credit history. We can close with the LLC as the borrower, keeping the property separate from your personal assets.";
    }
    
    // Fix & Flip loans
    if (message.includes('fix') || message.includes('flip') || message.includes('rehab')) {
      return "Fix & Flip loans are short-term financing (6-18 months) for property renovations! We can fund up to 90% of purchase price plus 100% of rehab costs. These are interest-only payments during construction, then you refinance or sell. Perfect for experienced flippers who need quick closings and flexible terms.";
    }
    
    // Rates and terms
    if (message.includes('rate') || message.includes('interest')) {
      return "Current rates vary by loan type: DSCR loans start around 7-8%, Bank Statement loans 7.5-9%, LLC mortgages 8-9.5%, and Fix & Flip loans 10-14%. Rates depend on credit score, down payment, property type, and loan-to-value ratio. I can connect you with Kirril for a personalized rate quote!";
    }
    
    // Down payment questions
    if (message.includes('down payment') || message.includes('down')) {
      return "Down payment requirements: DSCR loans typically require 20-25% down for investment properties, Bank Statement loans 10-25% depending on the property type, LLC mortgages usually 25-30%, and Fix & Flip loans 20-30%. Higher down payments often get better rates!";
    }
    
    // Credit score questions
    if (message.includes('credit') || message.includes('score')) {
      return "Minimum credit scores: DSCR loans typically require 620+, Bank Statement loans 580-620+, LLC mortgages 660+, and Fix & Flip loans 650+. Higher scores get better rates and terms. We work with borrowers across the credit spectrum!";
    }
    
    // Contact and next steps
    if (message.includes('contact') || message.includes('apply') || message.includes('next step')) {
      return "Ready to get started? Contact Kirril directly at kirillrealtor@gmail.com or call/text +1 (571) 276-0986. You can also use our DSCR calculator on this page or fill out the pre-qualification form. Kirril serves the Washington DC Metro area and works with investors nationwide!";
    }
    
    // Qualification questions
    if (message.includes('qualify') || message.includes('eligible')) {
      return "Qualification depends on the loan type! For DSCR loans, we focus on the property's income (1.25+ ratio). For Bank Statement loans, we need 12-24 months of statements showing consistent deposits. For LLC loans, the entity needs to be established with good credit. I can help you determine which program fits best - what's your situation?";
    }
    
    // General greeting responses
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help with all your mortgage questions. Kirril Mortgages specializes in DSCR loans, Bank Statement loans, LLC mortgages, and Fix & Flip financing for real estate investors and self-employed professionals. What can I help you with today?";
    }
    
    // Default response
    return "That's a great question! I specialize in DSCR loans, Bank Statement loans, LLC mortgages, and Fix & Flip financing. For detailed information about your specific situation, I'd recommend speaking directly with Kirril at kirillrealtor@gmail.com or +1 (571) 276-0986. You can also try our DSCR calculator or fill out the pre-qualification form on this page. What specific loan type interests you most?";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: getMortgageResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div 
        className="fixed bottom-6 left-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bg-navy text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-charcoal transition-all duration-300 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ 
            boxShadow: [
              "0 0 0 0 rgba(30, 58, 138, 0.7)",
              "0 0 0 10px rgba(30, 58, 138, 0)",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <Bot className="h-6 w-6" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center">
            <span className="text-xs text-navy font-bold">AI</span>
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-navy text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4 text-navy" />
                </div>
                <div>
                  <h3 className="font-semibold">Kirril's AI Assistant</h3>
                  <p className="text-xs opacity-90">Mortgage Expert</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.type === 'user'
                          ? 'bg-navy text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && (
                          <Bot className="h-4 w-4 mt-0.5 text-gold" />
                        )}
                        {message.type === 'user' && (
                          <User className="h-4 w-4 mt-0.5" />
                        )}
                        <p className="text-sm leading-relaxed">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-gold" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about DSCR loans, rates, qualification..."
                  className="flex-1 focus:border-gold"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-navy hover:bg-charcoal text-white"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Powered by Kirril Mortgages AI • For complex questions, contact Kirril directly
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}