import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Award, TrendingUp, Video, Laptop, GraduationCap, Target } from 'lucide-react';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import { getWhatsAppLink } from '@/utils/whatsapp';

export default function HomePage() {
  const handleCounselingClick = () => {
    const message = 'Hello! I would like to book a free counseling session at Proxima Academy.';
    window.open(getWhatsAppLink('9137201158', message), '_blank');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section with Early Bird Offer */}
      <section 
        className="relative bg-cover bg-center py-24 md:py-36"
        style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/85" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Early Bird Badge */}
            <Badge className="mb-6 text-lg px-6 py-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl animate-pulse">
              🎉 Early Bird Offer: 50% OFF - Limited Time!
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-6 leading-tight">
              Admissions Open 2026–27
            </h1>
            <p className="text-xl md:text-3xl mb-4 font-semibold">
              Best Coaching Classes in Bhayandar East, Mumbai
            </p>
            <p className="text-lg md:text-xl mb-10 opacity-95">
              Excellence in Education for Classes 8th to 12th (Science & Commerce)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleCounselingClick}
                size="lg" 
                className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold"
              >
                📞 Book Free Counseling Session
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl font-bold border-2">
                <Link to="/courses">View Courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-primary">Welcome to PROXIMA ACADEMY</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Located in <strong>Bhayandar East, Mumbai</strong>, PROXIMA ACADEMY is committed to providing quality education 
              that empowers students to achieve academic excellence and personal growth. Our experienced faculty and modern 
              teaching methods ensure that every student receives the attention and guidance they need to succeed.
            </p>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas - 6 Key Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary">Our Focus Areas</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">What makes us the best coaching institute in Bhayandar East</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Concept-Based Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Deep understanding of fundamentals with clear explanations and practical applications for lasting knowledge.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Exam-Oriented Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focused coaching aligned with board exam patterns and competitive test requirements for maximum results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <img src="/assets/generated/personal-attention-icon.dim_96x96.png" alt="Personal Attention" className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl">Personal Attention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Small batch sizes ensure every student receives individual mentorship and personalized doubt-solving sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <img src="/assets/generated/it-lab-icon.dim_96x96.png" alt="IT Lab" className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl">Dedicated IT Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern computer lab facilities for practical learning and technology-enhanced education experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Video & Audio Lectures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to recorded lectures and audio materials for revision and flexible learning at your own pace.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Experienced Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn from highly qualified teachers with years of expertise in their subjects and proven track records.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary">Our Programs</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Comprehensive coaching for 8th to 12th standard students</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <BookOpen className="h-7 w-7 text-primary" />
                  Foundation Program
                </CardTitle>
                <CardDescription className="text-base">Classes 8th, 9th & 10th</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Build a strong foundation with our comprehensive curriculum designed to prepare 
                  students for board examinations and competitive exams.
                </p>
                <Button asChild variant="link" className="px-0 font-semibold">
                  <Link to="/courses">View Details →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <TrendingUp className="h-7 w-7 text-primary" />
                  11th & 12th Science
                </CardTitle>
                <CardDescription className="text-base">Physics, Chemistry, Biology, Maths</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Specialized science coaching with focus on board exams and entrance test preparation 
                  for engineering and medical streams.
                </p>
                <Button asChild variant="link" className="px-0 font-semibold">
                  <Link to="/courses">View Details →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Award className="h-7 w-7 text-primary" />
                  11th & 12th Commerce
                </CardTitle>
                <CardDescription className="text-base">Accounts, Economics, Business Studies</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert commerce coaching for board exams and competitive tests with practical 
                  approach to accounts and business concepts.
                </p>
                <Button asChild variant="link" className="px-0 font-semibold">
                  <Link to="/courses">View Details →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary">Why Choose PROXIMA ACADEMY?</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Concept Clarity</h3>
              <p className="text-muted-foreground">
                Deep understanding through concept-based teaching methodology.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Small Batch Size</h3>
              <p className="text-muted-foreground">
                Limited students per batch for personalized attention and better results.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-4">
                <Award className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personal Mentorship</h3>
              <p className="text-muted-foreground">
                One-on-one guidance and continuous support throughout your journey.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Result-Oriented</h3>
              <p className="text-muted-foreground">
                Proven teaching methods focused on achieving excellent academic results.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-semibold">
              <Link to="/why-choose-us">Discover More Benefits</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-4 opacity-95">
            Join PROXIMA ACADEMY today and unlock your full potential
          </p>
          <p className="text-lg mb-10 opacity-90">
            📍 Located in Bhayandar East, Mumbai | 📞 Call: 9137201158
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleCounselingClick}
              size="lg" 
              className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold"
            >
              Book Free Counseling Now
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl font-bold border-2">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
