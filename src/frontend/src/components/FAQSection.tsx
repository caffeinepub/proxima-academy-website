import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQSection() {
  const faqs = [
    {
      question: 'What is the admission process at Proxima Academy?',
      answer: 'The admission process is simple: Contact us via phone or WhatsApp, schedule a free counseling session, visit our center for a demo class, and complete the enrollment formalities. We provide guidance throughout the process to help you choose the right course.',
    },
    {
      question: 'What is the batch size at Proxima Academy?',
      answer: 'We maintain small batch sizes of 15-20 students maximum to ensure personalized attention and better learning outcomes. This allows our teachers to focus on each student\'s individual needs and provide one-on-one mentorship when required.',
    },
    {
      question: 'How do you prepare students for board exams?',
      answer: 'Our teaching methodology is fully aligned with board exam requirements. We provide comprehensive syllabus coverage, regular mock tests following board patterns, previous year question paper analysis, time management techniques, and intensive revision sessions before exams.',
    },
    {
      question: 'What is the Early Bird Discount and how can I avail it?',
      answer: 'We are currently offering a 50% Early Bird Discount for admissions to Academic Year 2026-27. This is a limited-time offer for students who enroll early. Contact us immediately to avail this special discount and secure your seat.',
    },
    {
      question: 'Do you provide study materials and video lectures?',
      answer: 'Yes, we provide comprehensive study materials including notes, practice papers, and reference materials for all subjects. Students also get access to recorded video and audio lectures for revision and flexible learning at their own pace.',
    },
    {
      question: 'What makes Proxima Academy different from other coaching institutes?',
      answer: 'Our key differentiators include concept-based teaching (not rote learning), small batch sizes for personal attention, experienced faculty with proven track records, dedicated IT lab facilities, result-oriented preparation, and continuous mentorship throughout the academic year.',
    },
    {
      question: 'Are there separate batches for Science and Commerce students?',
      answer: 'Yes, we have separate specialized batches for 11th-12th Science and Commerce streams. Each batch is taught by subject experts who focus on stream-specific requirements and competitive exam preparation.',
    },
    {
      question: 'Can parents track their child\'s progress?',
      answer: 'Absolutely! We maintain regular communication with parents through progress reports, parent-teacher meetings, and performance updates after each test. Parents can also contact us anytime to discuss their child\'s academic progress.',
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-primary">Frequently Asked Questions</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Find answers to common questions about Proxima Academy</p>
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-lg border-2 border-border hover:border-primary transition-all px-6 shadow-md"
              >
                <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
