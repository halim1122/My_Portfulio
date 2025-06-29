import React, { useRef } from 'react';
import { BsSend } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { IoShareSocialOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


const Contact = () => {
      const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7rduyo1', 'template_ow3425f', form.current, {
        publicKey: 'gIl9elp9Kbmc9LJHt',
      })
      .then(
        () => {
         Swal.fire({
  position: "center",
  icon: "success",
  title: "Message Send Successfully",
  showConfirmButton: false,
  timer: 1500
});
        },
        (error) => {
           console.log("FAILED...", error.text);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Failed to send message",
      text: "Please try again later.",
      confirmButtonColor: "#8b5cf6", // Tailwind purple-500
    });
        },
      );
  };

    return (
        <div id='contact' className='py-10 my-5'>
            <div className='text-center space-y-2 mb-5'>
                            <h1 data-aos="flip-up" className='text-5xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Contact Me</h1>
            <p className='text-gray-300'>Got a question? Send me a message, and I'll get back to you soon.</p>
            </div>

            <div className='p-5 cutomglass max-w-2xl mx-auto'>

                <div data-aos="fade-right" className='customglass2 p-8'>
                    <div className='flex justify-between mb-5'>
                        <div className='space-y-2'>
                            <h1 className='text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent'>Get in Touch</h1>
                            <p className='text-gray-300 '>Have something to discuss? Send me a message and let's talk.</p>
                        </div>
                        <IoShareSocialOutline className='text-indigo-400' size={40}/>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className='space-y-4'>
                        <label className="input validator h-14 inputglass w-full">
  <svg className="h-[1.6em] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </g>
  </svg>
  <input
    type="text"
    required
    placeholder="Username"
    pattern="[A-Za-z][A-Za-z0-9\-]*"
    minlength="3"
    maxlength="30"
    title="Only letters, numbers or dash"
    name="from_name"
  />
</label>
<p className="validator-hint hidden">
  Must be 3 to 30 characters,containing only letters, numbers or dash
</p>

{/* mail */}
<label className="input validator h-14 inputglass w-full">
  <svg className="h-[1.6em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </g>
  </svg>
  <input type="email" placeholder="mail@site.com" name='from_email' required />
</label>
<div className="validator-hint hidden">Enter valid email address</div>

{/*message*/}
<div className="relative w-full">
  {/* Icon */}
  <FiMessageCircle className="absolute left-3 top-3 text-gray-400 pointer-events-none" size={22} />

  {/* Textarea */}
  <textarea
  name='message'
    className="textarea inputglass w-full pl-10 pr-4 py-3 rounded resize-none h-28 placeholder-gray-400"
    placeholder="Write your message..."
  ></textarea>
</div>

          <button className="btn w-full border-0 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white">
            <BsSend />Send Message
          </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;