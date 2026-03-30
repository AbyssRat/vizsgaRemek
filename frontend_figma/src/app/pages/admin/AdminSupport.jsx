import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { ScrollArea } from '../../components/ui/scroll-area';
import { MessageCircle, Send } from 'lucide-react';
import { toast } from 'sonner';

export const AdminSupport = () => {
  const { supportMessages, replyToMessage } = useApp();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState('');

  const handleSendReply = () => {
    if (reply.trim() && selectedMessage) {
      replyToMessage(selectedMessage, reply);
      setReply('');
      toast.success('Reply sent successfully');
    }
  };

  const selectedConversation = supportMessages.find((msg) => msg.id === selectedMessage);

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Support Messages
        </h1>
        <p className="text-muted-foreground">Respond to customer inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>
              Conversations ({supportMessages.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[600px]">
              {supportMessages.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p>No support messages</p>
                </div>
              ) : (
                <div className="space-y-2 p-4">
                  {supportMessages.map((msg) => (
                    <div
                      key={msg.id}
                      onClick={() => setSelectedMessage(msg.id)}
                      className={`p-3 rounded-lg cursor-pointer transition-colors ${
                        selectedMessage === msg.id
                          ? 'bg-accent/10 border border-accent'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-medium text-sm">{msg.userName}</span>
                        <Badge variant={msg.status === 'open' ? 'default' : 'secondary'}>
                          {msg.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">{msg.userEmail}</p>
                      <p className="text-sm text-muted-foreground truncate mt-1">
                        {msg.messages[msg.messages.length - 1].text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Conversation View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle style={{ fontFamily: 'var(--font-serif)' }}>
              {selectedConversation ? selectedConversation.userName : 'Select a conversation'}
            </CardTitle>
            {selectedConversation && (
              <p className="text-sm text-muted-foreground">{selectedConversation.userEmail}</p>
            )}
          </CardHeader>
          <CardContent className="flex flex-col h-[600px]">
            {!selectedConversation ? (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Select a conversation to view messages</p>
                </div>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 mb-4">
                  <div className="space-y-4 p-4">
                    {selectedConversation.messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.sender === 'user' ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.sender === 'user'
                              ? 'bg-secondary text-secondary-foreground'
                              : 'bg-accent text-accent-foreground'
                          }`}
                        >
                          <p className="text-sm mb-1">{message.text}</p>
                          <p className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], {
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2">
                  <Input
                    placeholder="Type your reply..."
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
                  />
                  <Button onClick={handleSendReply} disabled={!reply.trim()}>
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
