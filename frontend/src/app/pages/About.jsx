import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { BookOpen, Heart, Users, Award } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Our Story
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Founded on the belief that great literature should be accessible to all, Our E-books brings
            together timeless classics and contemporary masterpieces in one curated digital library.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-8 text-center text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            In an age of endless distractions, we create a sanctuary for readers. Our platform is designed
            to foster deep reading, contemplation, and the joy of discovering well-crafted prose.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every book in our collection is carefully selected for its literary merit, cultural significance,
            or enduring appeal. We believe in quality over quantity, offering you a refined selection that
            honors the written word.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Curation
              </h3>
              <p className="text-muted-foreground text-sm">
                Every title thoughtfully selected for excellence and significance
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Craftsmanship
              </h3>
              <p className="text-muted-foreground text-sm">
                A reading experience designed with care and attention to detail
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Community
              </h3>
              <p className="text-muted-foreground text-sm">
                Building a home for thoughtful readers and literary conversation
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'var(--font-serif)' }}>
                Excellence
              </h3>
              <p className="text-muted-foreground text-sm">
                Committed to the highest standards in both content and service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 text-primary" style={{ fontFamily: 'var(--font-serif)' }}>
            Join Our Community
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Begin your journey with us and discover the pleasure of mindful reading.
          </p>
          <Link to="/browse">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Our Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
