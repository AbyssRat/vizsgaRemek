import React, { useState } from 'react';
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
  const [replyText, setReplyText] = useState('');

  const selectedConversation = supportMessages.find((msg) => msg.id === selectedMessage);

  const handleSendReply = () => {
    if (replyText.trim() && selectedMessage) {
      replyToMessage(selectedMessage, replyText);
      setReplyText('');
      toast.success('Reply sent successfully');
    }
  };

  return (
    <div className="p-4 sm:p-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl mb-2 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
          Support Messages
        </h1>
        <p className="text-muted-foreground">Respond to customer inquiries</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Messages List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Conversations ({supportMessages.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[600px]">
              {supportMessages.length === 0 ? (
                <div className="p-6 text-center text-muted-foreground">
                  <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm">No support messages yet</p>
                </div>
              ) : (
                <div className="space-y-1 p-2">
                  {supportMessages.map((msg) => (
                    <button
                      key={msg.id}
                      onClick={() => setSelectedMessage(msg.id)}
                      className={`w-full text-left p-4 rounded-lg transition-colors ${
                        selectedMessage === msg.id
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-secondary'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <p className="font-medium truncate">{msg.userName}</p>
                        <Badge
                          variant={msg.status === 'open' ? 'default' : 'secondary'}
                          className="ml-2"
                        >
                          {msg.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground truncate">{msg.userEmail}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {msg.messages.length} message{msg.messages.length !== 1 ? 's' : ''}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Conversation View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>
              {selectedConversation ? (
                <div>
                  <p>{selectedConversation.userName}</p>
                  <p className="text-sm font-normal text-muted-foreground">
                    {selectedConversation.userEmail}
                  </p>
                </div>
              ) : (
                'Select a conversation'
              )}
            </CardTitle>
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
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {selectedConversation.messages.map((msg, index) => (
                      <div
                        key={index}
                        className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-3 ${
                            msg.sender === 'admin'
                              ? 'bg-accent text-accent-foreground'
                              : 'bg-secondary text-secondary-foreground'
                          }`}
                        >
                          <p className="text-sm mb-1">{msg.text}</p>
                          <p className="text-xs opacity-70">
                            {msg.timestamp.toLocaleString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="border-t border-border pt-4 mt-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendReply()}
                    />
                    <Button onClick={handleSendReply} disabled={!replyText.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};