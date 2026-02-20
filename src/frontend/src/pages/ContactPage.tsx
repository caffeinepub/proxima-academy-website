import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/InquiryForm';
import { getWhatsAppLink } from '@/utils/whatsapp';

export default function ContactPage() {
  const handleWhatsAppClick = () => {
    const message = 'Hello! I would like to inquire about admissions at Proxima Academy.';
    window.open(getWhatsAppLink('9137201158', message), '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center opacity-95">
            Get in touch with the best coaching institute in Bhayandar East
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Have questions about our courses or admissions? We're here to help! Reach out to us through any of the 
                following channels, and our team will get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      Bhayandar East, Mumbai<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <a href="tel:9137201158" className="text-primary hover:underline text-lg font-semibold">
                      +91 9137201158
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border-2 border-border hover:border-primary transition-all">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg" 
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-6"
                >
                  💬 Chat with us on WhatsApp
                </Button>
              </div>
            </div>

            {/* Inquiry Form */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-primary">Send Us a Message</h2>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-8 text-primary">Find Us on Map</h2>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60373.89!2d72.85!3d19.30!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647d3ff%3A0x784e8e41a4906d8!2sBhayandar%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Proxima Academy Location - Bhayandar East, Mumbai"
              />
            </div>
            <p className="text-center text-muted-foreground mt-6 text-lg">
              📍 <strong>Proxima Academy</strong> - Best Coaching Classes in Bhayandar East, Mumbai
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Book your free counseling session today and take the first step towards academic excellence
          </p>
          <p className="text-lg mb-6 opacity-90">
            🎉 Early Bird Discount: 50% OFF for Academic Year 2026-27
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            size="lg" 
            className="text-lg px-8 py-6 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-2xl font-bold"
          >
            📞 Book Free Counseling Session
          </Button>
        </div>
      </section>
    </div>
  );
}
