import { FaArrowRight } from "react-icons/fa6";
import assets from "../assets/assets"
import Title from "./Title"
import Button from './ui/WebsiteButton';
import { useState, useEffect, useRef } from 'react';

const Toast = ({ message, type, trigger, onDismiss }) => {
  const [phase, setPhase] = useState('hidden'); // hidden | visible | exiting
  const enterTimerRef = useRef(null);
  const autoDismissTimerRef = useRef(null);
  const exitTimerRef = useRef(null);

  // Re-runs on every `trigger` change — even if message/type text is identical
  useEffect(() => {
    if (!message) return;

    clearTimeout(enterTimerRef.current);
    clearTimeout(autoDismissTimerRef.current);
    clearTimeout(exitTimerRef.current);

    // Start off-screen (right), then flip to visible next tick so the
    // transition actually animates instead of snapping into place
    setPhase('hidden');
    enterTimerRef.current = setTimeout(() => setPhase('visible'), 20);

    const duration = type === 'success' ? 7000 : 5000;
    autoDismissTimerRef.current = setTimeout(() => {
      setPhase('exiting');
    }, duration + 20);

    return () => {
      clearTimeout(enterTimerRef.current);
      clearTimeout(autoDismissTimerRef.current);
      clearTimeout(exitTimerRef.current);
    };
  }, [trigger]);

  // Once exit animation finishes, actually clear the message via onDismiss
  useEffect(() => {
    if (phase === 'exiting') {
      exitTimerRef.current = setTimeout(() => {
        setPhase('hidden');
        onDismiss();
      }, 300); // must match the CSS transition duration below
      return () => clearTimeout(exitTimerRef.current);
    }
  }, [phase, onDismiss]);

  if (!message) return null;

  const bgColor = type === 'success' ? '#4CAF50' : '#f44336';
  const isVisible = phase === 'visible';

  let translateX;
  if (isVisible) {
    translateX = 'translateX(0)';
  } else if (phase === 'exiting') {
    translateX = 'translateX(100%)'; 
  } else {
    translateX = 'translateX(100%)'; 
  }

  return (
    <div
      onClick={() => setPhase('exiting')}
      className="toast"
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        backgroundColor: bgColor,
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1000,
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: translateX,
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}
    >
      {message}
    </div>
  );
};

const ContactUs = () => {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState(''); // 'success' or 'error'
  const [toastTrigger, setToastTrigger] = useState(0);

  // Central helper — always bumps toastTrigger so the toast
  // re-animates even if the message text is unchanged from last time
  const showToast = (msg, msgType) => {
    setMessage(msg);
    setType(msgType);
    setToastTrigger(prev => prev + 1);
  };

  // Validation functions
  const validateName = (name) => {
    if (!name || name.trim() === '') {
      return 'Please enter your name';
    }
    if (name.trim().length < 3) {
      return 'Name must be at least 3 characters long';
    }
    if (!/^[a-zA-Z\s\-']+$/.test(name.trim())) {
      return 'Name can only contain letters, spaces, hyphens, and apostrophes';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (!email || email.trim() === '') {
      return 'Please enter your email';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');

    const nameError = validateName(name);
    if (nameError) {
      showToast(nameError, 'error');
      return;
    }

    const emailError = validateEmail(email);
    if (emailError) {
      showToast(emailError, 'error');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const data = await response.json();

      if (data.success) {
        showToast('Message sent successfully!', 'success');
        e.target.reset();
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      showToast(error.message || 'Failed to send message', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const clearMessage = () => {
    setMessage('');
    setType('');
  };

  return (
    <div id='contact-us' className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-10 md:py-15 lg:py-28 lg:pb-20 text-gray-700 dark:text-white">
      <Title title="Reach Out To Us" description="From Strategy to Execution, we're crafted to deliver exceptional results and provide top-notch services to help your business thrive in the digital world." />

      <form onSubmit={handleSubmit} noValidate className="contact-form grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full px-3">
        <div>
          <p className="text-sm mb-2 font-medium">Your Name</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.person_icon} alt="Avatar" />
            <input type="text" name="name" placeholder="Enter your name" className="w-full p-3 text-sm outline-none" />
          </div>
        </div>
        <div>
          <p className="text-sm mb-2 font-medium">Email Id</p>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
            <img src={assets.email_icon} alt="Email" />
            <input type="email" name="email" placeholder="Enter your email" className="w-full p-3 text-sm outline-none" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <p className="text-sm mb-2 font-medium">Message</p>
          <textarea rows={5} name="message" placeholder="Enter Your Message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600 resize-none" />
        </div>

        {/* Hidden input for Web3Forms access key */}
        <input type="hidden" name="access_key" value="796af59b-7a8e-4722-8b6c-97fdbb9ffc07" />

        <Button icon={<FaArrowRight size={15} />} type="submit" disabled={submitting}>
          {submitting ? 'Sending...' : 'Submit'}
        </Button>
      </form>

      <Toast message={message} type={type} trigger={toastTrigger} onDismiss={clearMessage} />
    </div>
  );
}

export default ContactUs