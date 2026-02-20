import { BookOpen, Beaker, Calculator, TrendingUp, CheckCircle, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-center mb-4">Our Courses</h1>
          <p className="text-xl text-center opacity-95">
            Comprehensive programs designed for academic excellence in Bhayandar East
          </p>
        </div>
      </section>

      {/* Foundation Program: 8th-10th */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-5 rounded-full mr-4">
                <BookOpen className="text-primary" size={48} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">8th–10th Foundation</h2>
                <p className="text-xl text-muted-foreground mt-2">Building Strong Academic Foundations</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Our school section focuses on strengthening fundamental concepts across all subjects, preparing students 
              for board examinations and building a solid foundation for higher studies.
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Subjects Covered:</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Mathematics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Science (Physics, Chemistry, Biology)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">English</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Social Studies</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={24} />
                    Concept Clarity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Clear understanding of fundamental principles in all subjects with practical examples</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={24} />
                    Subject Confidence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Developing strong problem-solving skills and subject mastery through regular practice</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={24} />
                    Board Exam Preparation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Comprehensive exam-focused preparation strategies aligned with board patterns</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="text-primary" size={24} />
                    Regular Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Continuous testing and personalized doubt-clearing sessions for better understanding</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/10 rounded-2xl p-8 border-2 border-secondary/30">
              <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-3">
                <Award className="text-secondary" size={32} />
                Special Focus: 10th Board Preparation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Structured revision strategy with comprehensive coverage of the entire syllabus, mock tests following 
                actual board exam patterns, time management techniques, and intensive practice sessions to ensure 
                excellent results in board examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Science Program: 11th-12th */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-5 rounded-full mr-4">
                <Beaker className="text-primary" size={48} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">11th & 12th Science</h2>
                <p className="text-xl text-muted-foreground mt-2">Engineering & Medical Stream Preparation</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Specialized science coaching in Bhayandar East with expert faculty for Physics, Chemistry, Biology, and Mathematics. 
              Focused preparation for board exams and competitive entrance tests like JEE, NEET, and MHT-CET.
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Subjects Covered:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Physics - Mechanics, Thermodynamics, Electromagnetism</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Chemistry - Organic, Inorganic, Physical</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Mathematics - Calculus, Algebra, Trigonometry</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Biology - Botany, Zoology, Human Physiology</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Board Exam Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Complete syllabus coverage with board exam pattern practice and previous year question analysis</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Competitive Test Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Focused preparation for JEE, NEET, and MHT-CET with problem-solving techniques</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Hands-on experiments and real-world applications of scientific concepts</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce Program: 11th-12th */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-secondary/20 p-5 rounded-full mr-4">
                <Calculator className="text-secondary" size={48} />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">11th & 12th Commerce</h2>
                <p className="text-xl text-muted-foreground mt-2">Business & Accounting Excellence</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto leading-relaxed">
              Expert commerce coaching in Bhayandar East for students aspiring to excel in business, accounting, and economics. 
              Comprehensive preparation for board exams and competitive tests like CA Foundation, CS, and other commerce entrance exams.
            </p>

            <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border mb-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Subjects Covered:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Accountancy - Financial & Cost Accounting</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Economics - Micro & Macro Economics</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Business Studies - Management & Entrepreneurship</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-secondary flex-shrink-0" size={24} />
                  <span className="text-lg font-semibold">Mathematics / Statistics (Optional)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-secondary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Practical Approach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Real-world business scenarios and practical accounting problem-solving techniques</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Conceptual Mastery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Deep understanding of commerce principles with step-by-step explanations</p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-all">
                <CardHeader>
                  <CardTitle className="text-lg">Career Guidance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Preparation for CA, CS, and other professional commerce courses</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Enroll in the Best Coaching Classes in Bhayandar East</h2>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
            Choose the right program for your academic goals
          </p>
          <p className="text-lg mb-10 opacity-90">
            🎉 Early Bird Discount: 50% OFF for Academic Year 2026-27
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl font-bold border-2">
              <Link to="/why-choose-us">Why Choose Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
