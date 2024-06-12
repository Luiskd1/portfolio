'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactMe() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });

      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Failed to send message.');
    }

    toast.success('The message was sent.', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    })
    setFormData({ name: '', email: '', subject: '', message: '' });

  };

  return (
    <motion.div className="w-full h-full flex justify-center items-center">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="px-2 md:mx-5 lg:px-10 py-3 w-full lg:w-1/2 first-line:py-5 rounded-md border border-[#1F2836] bg-[#12171F]">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input className='text-white' id="name" value={formData.name} onChange={handleChange} placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input className='text-white' id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input className='text-white' id="subject" value={formData.subject} onChange={handleChange} placeholder="Enter your subject" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" className="min-h-[100px] text-white" />
          </div>
          <div className="flex w-full justify-center">
            <Button type="submit" className="w-2/6 justify-center border-[#1F2836] bg-white text-[#12171F] mt-3 hover:bg-[#7ED321] hover:text-red-500">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
