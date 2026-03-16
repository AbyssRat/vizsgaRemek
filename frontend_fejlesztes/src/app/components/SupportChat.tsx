import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';

export const SupportChat: React.FC = () => {
  const { user, supportMessages, sendMessage } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  if (!user) return null;

  const userMessages = supportMessages.find((msg) => msg.userId === user.id);

  const handleSend = () => {
    if (message.trim()) {
      sendMessage(message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <Button
          size="icon"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 z-50"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-96 h-[500px] sm:h-[500px] shadow-2xl z-50 flex flex-col border-border sm:rounded-lg rounded-none">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border p-4">
            <CardTitle className="text-lg">Customer Support</CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            <ScrollArea className="flex-1 p-4">
              {!userMessages || userMessages.messages.length === 0 ? (
                <div className="text-center text-muted-foreground text-sm py-8">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>Send us a message and we'll get back to you shortly.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {userMessages.messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          msg.sender === 'user'
                            ? 'bg-accent text-accent-foreground'
                            : 'bg-secondary text-secondary-foreground'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {msg.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend} disabled={!message.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};