import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2 } from 'lucide-react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.course) {
      alert('Please fill in all required fields (Name, Phone, Course)');
      return;
    }

    // Phone validation (basic)
    if (formData.phone.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (since no backend persistence is required)
    setTimeout(() => {
      console.log('Inquiry Form Submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-xl border-2 border-border">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-base font-semibold">
            Student Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter student's full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-base font-semibold">
            Phone Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter 10-digit mobile number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-2"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-base font-semibold">
            Email Address (Optional)
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="course" className="text-base font-semibold">
            Course Interest <span className="text-destructive">*</span>
          </Label>
          <Select value={formData.course} onValueChange={(value) => setFormData({ ...formData, course: value })}>
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="foundation">8th-10th Foundation</SelectItem>
              <SelectItem value="science">11th-12th Science</SelectItem>
              <SelectItem value="commerce">11th-12th Commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-base font-semibold">
            Message (Optional)
          </Label>
          <Textarea
            id="message"
            placeholder="Any specific questions or requirements..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-2"
            rows={4}
          />
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border-2 border-green-500 text-green-700 px-4 py-3 rounded-lg">
            <p className="font-semibold">✓ Thank you for your inquiry!</p>
            <p className="text-sm">We will contact you shortly at the provided phone number.</p>
          </div>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full font-bold text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Inquiry'
          )}
        </Button>

        <p className="text-sm text-muted-foreground text-center">
          By submitting this form, you agree to be contacted by Proxima Academy regarding your inquiry.
        </p>
      </form>
    </div>
  );
}
