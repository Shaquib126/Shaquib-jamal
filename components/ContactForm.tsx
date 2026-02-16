
import React, { useState, useEffect } from 'react';

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [values, setValues] = useState<FormState>({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (fieldValues: FormState = values) => {
    const temp: FormErrors = {};
    if ('name' in fieldValues) {
      if (!fieldValues.name) temp.name = "Full name is required";
      else if (fieldValues.name.length < 2) temp.name = "Name is too short";
    }
    if ('email' in fieldValues) {
      if (!fieldValues.email) temp.email = "Email is required";
      else if (!/$^|.+@.+\..+/.test(fieldValues.email)) temp.email = "Email is not valid";
    }
    if ('projectType' in fieldValues) {
      if (!fieldValues.projectType) temp.projectType = "Please select a system";
    }
    if ('message' in fieldValues) {
      if (!fieldValues.message) temp.message = "Message is required";
      else if (fieldValues.message.length < 10) temp.message = "Please provide more details (min 10 chars)";
    }
    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  useEffect(() => {
    validate();
  }, [values]);

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setValues({ name: '', email: '', projectType: '', message: '' });
        setTouched({});
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
    }
  };

  const getInputClass = (field: keyof FormErrors) => {
    const base = "w-full bg-zinc-900 border py-3 px-4 text-sm text-white transition-all outline-none focus:ring-1 ";
    if (touched[field] && errors[field]) return base + "border-red-500/50 focus:border-red-500 ring-red-500/20";
    if (touched[field] && !errors[field] && values[field as keyof FormState]) return base + "border-green-500/50 focus:border-green-500 ring-green-500/20";
    return base + "border-zinc-800 focus:border-blue-500 ring-blue-500/20";
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-syncopate text-3xl md:text-5xl font-bold mb-4 uppercase">CONSULTATION</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-[10px]">Technical design & engineering support</p>
        </div>

        <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
          {isSuccess && (
            <div className="absolute inset-0 bg-green-500/90 z-20 flex flex-col items-center justify-center text-black text-center p-6 animate-in fade-in duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="font-syncopate text-xl font-bold mb-2">REQUEST RECEIVED</h3>
              <p className="font-medium">Our engineering team will contact you shortly.</p>
              <button onClick={() => setIsSuccess(false)} className="mt-6 border-b border-black text-xs font-bold uppercase tracking-widest">Send another message</button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur('name')}
                  className={getInputClass('name')}
                  placeholder="John Doe"
                />
                {touched.name && errors.name && <p className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter">{errors.name}</p>}
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur('email')}
                  className={getInputClass('email')}
                  placeholder="john@architecture.com"
                />
                {touched.email && errors.email && <p className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">System Category</label>
              <select 
                name="projectType"
                value={values.projectType}
                onChange={handleChange}
                onBlur={() => handleBlur('projectType')}
                className={getInputClass('projectType')}
              >
                <option value="" disabled>Select a system type...</option>
                <option value="unitized">Unitized Curtain Wall</option>
                <option value="structural">Structural Glazing</option>
                <option value="spider">Spider Fitting</option>
                <option value="skylight">Skylight / Atrium</option>
              </select>
              {touched.projectType && errors.projectType && <p className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter">{errors.projectType}</p>}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Project Details</label>
              <textarea 
                name="message"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={() => handleBlur('message')}
                className={getInputClass('message')}
                placeholder="Briefly describe your requirements..."
              ></textarea>
              {touched.message && errors.message && <p className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter">{errors.message}</p>}
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full py-5 font-bold uppercase tracking-[0.3em] transition-all relative overflow-hidden ${
                isSubmitting ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-white text-black hover:bg-blue-600 hover:text-white'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="w-3 h-3 border-2 border-zinc-500 border-t-white rounded-full animate-spin"></div>
                  Validating...
                </span>
              ) : "Initialize Consultation"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
