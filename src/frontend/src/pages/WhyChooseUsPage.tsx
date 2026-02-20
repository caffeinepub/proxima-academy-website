import { Target, Users, Award, TrendingUp, Video, Laptop, GraduationCap, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-center mb-4">Why Choose Proxima Academy?</h1>
          <p className="text-xl text-center opacity-95">
            The best coaching institute in Bhayandar East for result-oriented education
          </p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary">Our Key Differentiators</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            What makes Proxima Academy the preferred choice for students and parents in Bhayandar East
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Concept Clarity */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all shadow-xl">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-heading">Concept Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We don't believe in rote learning. Our teaching methodology focuses on building deep conceptual understanding 
                  of every topic. Students learn the "why" behind concepts, not just the "what."
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Step-by-step explanation of complex topics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Real-world applications and practical examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Interactive doubt-solving sessions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Small Batch Size */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all shadow-xl">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-heading">Small Batch Size</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  We maintain limited students per batch to ensure every student receives personalized attention. 
                  This allows our teachers to understand each student's learning pace and address individual challenges.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Maximum 15-20 students per batch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Individual attention to every student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Better classroom interaction and engagement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Personal Mentorship */}
            <Card className="border-2 border-secondary/30 hover:border-secondary transition-all shadow-xl">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-4">
                  <img src="/assets/generated/personal-attention-icon.dim_96x96.png" alt="Personal Mentorship" className="w-12 h-12" />
                </div>
                <CardTitle className="text-3xl font-heading">Personal Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Beyond classroom teaching, we provide one-on-one mentorship to guide students through their academic journey. 
                  Our faculty members are committed to each student's success and provide continuous support.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Dedicated mentor for academic guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Regular parent-teacher communication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary font-bold">•</span>
                    <span>Personalized study plans and progress tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Result-Oriented Teaching */}
            <Card className="border-2 border-primary/30 hover:border-primary transition-all shadow-xl">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-3xl font-heading">Result-Oriented Teaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Our teaching methodology is designed to deliver measurable results. We focus on exam-oriented preparation 
                  while ensuring students develop strong fundamentals and problem-solving skills.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Regular mock tests and assessments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Board exam pattern practice and analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Performance tracking and improvement strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12 text-primary">Additional Benefits</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center border-2 hover:border-secondary transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/generated/it-lab-icon.dim_96x96.png" alt="IT Lab" className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl">Dedicated IT Lab</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Modern computer lab with latest technology for practical learning and digital education
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Video & Audio Lectures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to recorded lectures for revision and flexible learning at your own pace
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Experienced Faculty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Highly qualified teachers with years of expertise and proven track records
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/assets/generated/study-material-icon.dim_96x96.png" alt="Study Material" className="w-10 h-10" />
                </div>
                <CardTitle className="text-xl">Quality Study Material</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive notes, practice papers, and reference materials for all subjects
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Commitment to Excellence */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 text-primary">Our Commitment to Excellence</h2>
            <div className="bg-card rounded-2xl p-10 shadow-xl border-2 border-border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Proxima Academy, we are committed to providing an educational experience that goes beyond textbooks. 
                We create an environment where students feel motivated, supported, and empowered to achieve their goals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our success is measured not just by exam scores, but by the confidence, critical thinking abilities, 
                and lifelong learning skills we instill in our students. We prepare them not just for exams, but for life.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Students per Batch</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Concept Clarity Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">50%</div>
                  <div className="text-muted-foreground">Early Bird Discount</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Experience the Proxima Difference</h2>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
            Join the best coaching classes in Bhayandar East and achieve your academic goals
          </p>
          <p className="text-lg mb-10 opacity-90">
            📍 Bhayandar East, Mumbai | 🎓 Admissions Open 2026-27
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold">
              <Link to="/contact">Enroll Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-xl font-bold border-2">
              <Link to="/courses">View Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
