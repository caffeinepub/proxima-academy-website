import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student, 10th Standard",
      text: "The teachers at Proxima Academy explain concepts very clearly and give personal attention to every student. My confidence has improved significantly!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Parent",
      text: "Best coaching classes in Bhayandar East for Commerce students. My daughter's grades improved from 65% to 88% in just one year. Highly recommended!",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Student, 12th Science",
      text: "The small batch size and personal mentorship really helped me understand difficult Physics and Chemistry concepts. Excellent preparation for board exams.",
      rating: 5,
    },
    {
      name: "Sneha Desai",
      role: "Parent",
      text: "Very professional and result-oriented teaching. The faculty is experienced and genuinely cares about student success. Worth every penny!",
      rating: 5,
    },
    {
      name: "Rohan Mehta",
      role: "Student, 11th Commerce",
      text: "The concept-based teaching approach helped me understand Accountancy much better. Regular tests and doubt sessions are very helpful.",
      rating: 5,
    },
    {
      name: "Kavita Singh",
      role: "Parent",
      text: "My son was struggling with Mathematics, but after joining Proxima Academy, his marks improved dramatically. The teachers are patient and supportive.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary">What Our Students & Parents Say</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Real feedback from our satisfied students and parents</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all shadow-lg relative">
              <CardContent className="pt-6">
                <Quote className="text-primary/20 absolute top-4 right-4" size={40} />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
