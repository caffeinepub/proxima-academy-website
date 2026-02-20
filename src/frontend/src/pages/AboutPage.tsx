import { Target, Lightbulb, Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-center mb-4">About Proxima Academy</h1>
          <p className="text-xl text-center opacity-95">Learn. Lead. Rise.</p>
        </div>
      </section>

      {/* Academy Journey */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-primary">Our Journey</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Proxima Academy was established with a clear vision: to provide exceptional academic coaching that transforms 
                students into confident, knowledgeable, and successful individuals. Located in the heart of <strong>Bhayandar East, Mumbai</strong>, 
                we have become a trusted name for quality education in the region.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our journey began with a commitment to address the gap between traditional teaching methods and the evolving 
                needs of modern students. We recognized that students needed more than just textbook knowledge—they needed 
                concept clarity, personalized attention, and result-oriented preparation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Proxima Academy stands as a beacon of academic excellence, helping students from classes 8th to 12th 
                achieve their goals through innovative teaching methodologies, experienced faculty, and state-of-the-art facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-primary/20 hover:border-primary transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-primary/10 p-5 rounded-full mr-4">
                  <Target className="text-primary" size={36} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To become the most trusted and result-oriented academic coaching institute in Bhayandar East and beyond, 
                nurturing confident, disciplined, and academically strong students who excel in board examinations and 
                competitive tests while developing critical thinking and problem-solving skills.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-secondary/20 hover:border-secondary transition-all">
              <div className="flex items-center mb-6">
                <div className="bg-secondary/20 p-5 rounded-full mr-4">
                  <Lightbulb className="text-secondary" size={36} />
                </div>
                <h2 className="text-3xl font-heading font-bold text-primary">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={22} />
                  <span className="text-lg text-muted-foreground">Build strong academic foundations through concept-based teaching</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={22} />
                  <span className="text-lg text-muted-foreground">Encourage analytical thinking and problem-solving abilities</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={22} />
                  <span className="text-lg text-muted-foreground">Provide personalized mentoring and individual attention</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={22} />
                  <span className="text-lg text-muted-foreground">Prepare students for board exams and competitive success</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-primary mr-3 mt-1 flex-shrink-0" size={22} />
                  <span className="text-lg text-muted-foreground">Foster a supportive learning environment with modern facilities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-center text-primary">Our Teaching Philosophy</h2>
            <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Proxima Academy, we believe that true learning goes beyond memorization. Our teaching philosophy is rooted 
                in <strong>concept-based education</strong>, where we focus on helping students understand the "why" behind every 
                concept, not just the "what."
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <BookOpen className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Conceptual Clarity</h3>
                  <p className="text-muted-foreground text-sm">Deep understanding of fundamentals</p>
                </div>
                <div className="text-center p-6 bg-secondary/10 rounded-xl">
                  <Users className="h-12 w-12 text-secondary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Interactive Learning</h3>
                  <p className="text-muted-foreground text-sm">Engaging discussions and doubt sessions</p>
                </div>
                <div className="text-center p-6 bg-primary/5 rounded-xl">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-bold text-lg mb-2">Continuous Assessment</h3>
                  <p className="text-muted-foreground text-sm">Regular tests and performance tracking</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We combine traditional teaching values with modern educational technology. Our <strong>experienced faculty</strong> members 
                are not just subject experts but mentors who guide students through their academic journey with patience and dedication.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                With small batch sizes, dedicated IT lab facilities, and access to video and audio lectures, we ensure that every 
                student receives the personal attention they deserve. Our exam-oriented preparation strategies are designed to 
                build confidence and deliver measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
            Experience the difference of personalized, concept-based learning at Proxima Academy
          </p>
          <p className="text-lg mb-10 opacity-90">
            📍 Bhayandar East, Mumbai | 🎓 Admissions Open 2026-27 | 🎉 50% Early Bird Discount
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold">
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl font-bold border-2">
              <Link to="/courses">Explore Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
