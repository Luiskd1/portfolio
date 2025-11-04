'use client'
import { useState, ChangeEvent, FormEvent } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import toast, { Toaster } from 'react-hot-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, User, MessageSquare, Send } from 'lucide-react';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactMe() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = language === 'en' ? 'Name is required' : 'El nombre es requerido';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = language === 'en' ? 'Name must be at least 2 characters' : 'El nombre debe tener al menos 2 caracteres';
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = language === 'en' ? 'Email is required' : 'El correo es requerido';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = language === 'en' ? 'Invalid email format' : 'Formato de correo inválido';
    }

    // Validar asunto
    if (!formData.subject.trim()) {
      newErrors.subject = language === 'en' ? 'Subject is required' : 'El asunto es requerido';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = language === 'en' ? 'Subject must be at least 3 characters' : 'El asunto debe tener al menos 3 caracteres';
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = language === 'en' ? 'Message is required' : 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = language === 'en' ? 'Message must be at least 10 characters' : 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(
        language === 'en' 
          ? 'Please fix the errors in the form' 
          : 'Por favor corrige los errores en el formulario',
        {
          style: {
            borderRadius: '10px',
            background: '#ef4444',
            color: '#fff',
          },
        }
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t.contact.successMessage, {
          style: {
            borderRadius: '10px',
            background: '#10b981',
            color: '#fff',
          },
          duration: 4000,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast.error(
        language === 'en' 
          ? 'Failed to send message. Please try again.' 
          : 'Error al enviar mensaje. Intenta de nuevo.',
        {
          style: {
            borderRadius: '10px',
            background: '#ef4444',
            color: '#fff',
          },
          duration: 4000,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center py-10 px-4">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className="w-full lg:w-2/3 xl:w-1/2">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-2">{t.contact.title}</h2>
          <p className="text-[#8095AB]">
            {language === 'en' 
              ? "Let's connect! Fill out the form below and I'll get back to you soon." 
              : '¡Conectemos! Completa el formulario y te responderé pronto.'}
          </p>
        </div>

        <div className="px-6 md:px-8 lg:px-10 py-8 rounded-lg border border-[#1E2D3D] bg-[#12171F]">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-[#8095AB]">
                  <User size={16} />
                  {t.contact.name}
                </Label>
                <Input 
                  className={`text-white bg-transparent border-[#1E2D3D] focus:border-[#8095AB] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all ${
                    errors.name ? 'border-red-500' : ''
                  }`}
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  placeholder={t.contact.namePlaceholder}
                  disabled={isSubmitting}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-[#8095AB]">
                  <Mail size={16} />
                  {t.contact.email}
                </Label>
                <Input 
                  className={`text-white bg-transparent border-[#1E2D3D] focus:border-[#8095AB] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  id="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  placeholder={t.contact.emailPlaceholder}
                  disabled={isSubmitting}
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject" className="flex items-center gap-2 text-[#8095AB]">
                <MessageSquare size={16} />
                {t.contact.subject}
              </Label>
              <Input 
                className={`text-white bg-transparent border-[#1E2D3D] focus:border-[#8095AB] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all ${
                  errors.subject ? 'border-red-500' : ''
                }`}
                id="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                placeholder={t.contact.subjectPlaceholder}
                disabled={isSubmitting}
              />
              {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="flex items-center gap-2 text-[#8095AB]">
                <MessageSquare size={16} />
                {t.contact.message}
              </Label>
              <Textarea 
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder={t.contact.messagePlaceholder} 
                className={`min-h-[150px] text-white bg-transparent border-[#1E2D3D] focus:border-[#8095AB] focus-visible:ring-0 focus-visible:ring-offset-0 transition-all resize-none ${
                  errors.message ? 'border-red-500' : ''
                }`}
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>
            <div className="flex w-full justify-center pt-4">
              <Button 
                type="submit" 
                className="w-full sm:w-auto px-8 py-3 font-medium bg-[#8095AB] text-white hover:bg-[#FEA55F] border-none transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    {language === 'en' ? 'Sending...' : 'Enviando...'}
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    {t.contact.submit}
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
