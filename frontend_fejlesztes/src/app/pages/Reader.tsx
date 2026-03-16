import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import { Button } from '../components/ui/button';
import { Slider } from '../components/ui/slider';
import { ChevronLeft, ChevronRight, X, Settings, Menu } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';

export const Reader: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rentedBooks } = useApp();
  const [currentPage, setCurrentPage] = useState(1);
  const [fontSize, setFontSize] = useState('medium');
  const [showSettings, setShowSettings] = useState(false);

  const book = rentedBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Book not found in your library</h2>
          <Button onClick={() => navigate('/dashboard')}>Return to Dashboard</Button>
        </div>
      </div>
    );
  }

  const totalPages = book.pages;
  const progress = Math.round((currentPage / totalPages) * 100);

  const fontSizeClasses = {
    small: 'text-base md:text-lg',
    medium: 'text-lg md:text-xl',
    large: 'text-xl md:text-2xl',
  };

  // Mock book content - in a real app, this would load actual content
  const getPageContent = () => {
    return `This is page ${currentPage} of ${totalPages}. In this elegant reading interface, you can immerse yourself in the timeless prose of great literature. The gentle typography and generous spacing create an atmosphere conducive to deep reading and contemplation.\n\nEach page turns with grace, allowing you to progress through the narrative at your own measured pace. The distraction-free design ensures that nothing comes between you and the words on the page.\n\nAs you continue through this volume, you'll find yourself transported to another world, another time, guided only by the author's carefully chosen words and your own imagination.`;
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top Bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate('/dashboard')}
                className="flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </Button>
              <div className="hidden sm:block min-w-0">
                <h2 className="font-medium truncate" style={{ fontFamily: 'var(--font-serif)' }}>
                  {book.title}
                </h2>
                <p className="text-sm text-muted-foreground truncate">{book.author}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Page {currentPage} of {totalPages}
              </span>
              
              {/* Settings Menu - Desktop */}
              <div className="hidden md:block">
                <Sheet open={showSettings} onOpenChange={setShowSettings}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Settings className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Reading Settings</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-6 mt-6">
                      <div>
                        <Label className="text-sm mb-2 block">Font Size</Label>
                        <Select value={fontSize} onValueChange={setFontSize}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Settings Menu - Mobile */}
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="bottom" className="h-[300px]">
                    <SheetHeader>
                      <SheetTitle>Settings</SheetTitle>
                    </SheetHeader>
                    <div className="space-y-4 mt-6">
                      <div>
                        <Label className="text-sm mb-2 block">Font Size</Label>
                        <Select value={fontSize} onValueChange={setFontSize}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reading Area */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 md:py-20">
          <div
            className={`${fontSizeClasses[fontSize as keyof typeof fontSizeClasses]} leading-relaxed text-foreground whitespace-pre-wrap`}
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {getPageContent()}
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
          {/* Progress Bar */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <Slider
              value={[currentPage]}
              min={1}
              max={totalPages}
              step={1}
              onValueChange={([value]) => setCurrentPage(value)}
              className="cursor-pointer"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            <Button
              variant="outline"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex-1 sm:flex-initial text-sm sm:text-base"
              size="sm"
            >
              <ChevronLeft className="w-4 h-4 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Previous</span>
              <span className="xs:hidden">Prev</span>
            </Button>

            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {currentPage} / {totalPages}
            </span>

            <Button
              variant="default"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="flex-1 sm:flex-initial text-sm sm:text-base"
              size="sm"
            >
              <span className="hidden xs:inline">Next</span>
              <span className="xs:hidden">Next</span>
              <ChevronRight className="w-4 h-4 ml-1 sm:ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Label({ children, className }: { children: React.ReactNode; className?: string }) {
  return <label className={className}>{children}</label>;
}