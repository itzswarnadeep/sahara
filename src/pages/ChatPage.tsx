import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  ArrowLeft, 
  Send, 
  Users, 
  Shield, 
  AlertTriangle,
  MessageCircle,
  Smile,
  Heart
} from 'lucide-react';
import { useStore } from '@/stores/useStore';

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  mood?: 'positive' | 'neutral' | 'concerned';
}

const ChatPage = () => {
  const { t } = useTranslation(['common']);
  const navigate = useNavigate();
  const { student, currentProblemId } = useStore();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [connectedUsers, setConnectedUsers] = useState(3);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock initial messages
  useEffect(() => {
    const mockMessages: Message[] = [
      {
        id: '1',
        sender: 'Kash-Guest-A12B',
        content: 'Hi everyone, I\'ve been feeling really overwhelmed with career anxiety lately. Anyone else dealing with this?',
        timestamp: new Date(Date.now() - 300000),
        mood: 'concerned'
      },
      {
        id: '2', 
        sender: 'Anon-Helper-X9Y2',
        content: 'You\'re not alone! I went through similar feelings during placement season. What helps me is breaking things down into small steps.',
        timestamp: new Date(Date.now() - 240000),
        mood: 'positive'
      },
      {
        id: '3',
        sender: 'Guest-Support-M7N4',
        content: 'That\'s really good advice. I\'ve found that talking to friends and taking breaks helps too. Remember to be kind to yourself.',
        timestamp: new Date(Date.now() - 180000),
        mood: 'positive'
      }
    ];
    setMessages(mockMessages);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Mock typing indicator
  useEffect(() => {
    if (messages.length > 3) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: Date.now().toString(),
            sender: 'Support-Friend-K3L8',
            content: 'I appreciate everyone sharing here. It really helps to know we\'re not going through this alone. 💙',
            timestamp: new Date(),
            mood: 'positive'
          }]);
        }, 2000);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        sender: student?.ephemeralHandle || 'Anonymous-User',
        content: message.trim(),
        timestamp: new Date(),
        mood: 'neutral'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getMoodIcon = (mood?: string) => {
    switch (mood) {
      case 'positive': return <Heart className="w-3 h-3 text-success" />;
      case 'concerned': return <AlertTriangle className="w-3 h-3 text-warning" />;
      default: return <Smile className="w-3 h-3 text-muted-foreground" />;
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gradient-soothing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-ambient opacity-20" />
      
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-border/50 glass-card">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-semibold text-foreground">Anonymous Support Chat</h1>
                <p className="text-sm text-muted-foreground">
                  {currentProblemId ? t(`problems:${currentProblemId}.title`) : 'General Support'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="flex items-center gap-2">
              <Users className="w-3 h-3" />
              {connectedUsers} online
            </Badge>
            
            <Badge variant="outline" className="flex items-center gap-2">
              <Shield className="w-3 h-3" />
              Anonymous
            </Badge>
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <div className="relative z-10 max-w-4xl mx-auto p-6 h-[calc(100vh-140px)] flex flex-col">
        {/* Safety Notice */}
        <Card className="glass-card p-4 mb-6 border-primary/20 bg-primary/5">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-primary" />
            <div>
              <p className="font-medium text-foreground">Safe Space Guidelines</p>
              <p className="text-sm text-muted-foreground">
                This chat is moderated for safety. Be respectful, supportive, and remember all conversations are anonymous.
              </p>
            </div>
          </div>
        </Card>

        {/* Messages Area */}
        <Card className="glass-card flex-1 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border/50">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-sm text-muted-foreground">Connected to anonymous support chat</span>
            </div>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex flex-col gap-1 ${
                      msg.sender === student?.ephemeralHandle 
                        ? 'items-end' 
                        : 'items-start'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {msg.sender}
                      </Badge>
                      {getMoodIcon(msg.mood)}
                      <span className="text-xs text-muted-foreground">
                        {formatTime(msg.timestamp)}
                      </span>
                    </div>
                    
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        msg.sender === student?.ephemeralHandle
                          ? 'bg-primary text-primary-foreground ml-auto'
                          : 'bg-card text-card-foreground'
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2"
                >
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                  <span className="text-sm text-muted-foreground">Someone is typing...</span>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          {/* Message Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-3">
              <Input
                placeholder={t('chat.message_placeholder')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
                maxLength={500}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!message.trim()}
                className="px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-muted-foreground">
                Messages are encrypted and auto-delete after 30 days
              </p>
              <Button variant="ghost" size="sm" className="text-xs text-destructive">
                Report inappropriate content
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChatPage;