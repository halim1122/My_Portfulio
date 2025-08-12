import React, { useRef } from 'react';
import { BsSend } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { IoLocationOutline, IoShareSocialOutline } from 'react-icons/io5';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { CiPhone } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { Element } from 'react-scroll';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h0tr3wb', 'template_nwwpawk', form.current, {
        publicKey: 'vU7cey4eQ_SZosO9i',
      })
      .then(
        (data) => {
console.log(data)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Message Sent Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          form.current.reset();
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
    <Element name='contact'>
      <div className=' my-10'>

        <div className='text-center space-y-2 mb-5'>
          <h1 data-aos="flip-up" className='text-5xl font-semibold bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent'>Contact Me</h1>
          <p className='text-gray-300'>Got a question? Send me a message, and I'll get back to you soon.</p>
        </div>

        <div className='p-5 cutomglass max-w-2xl mx-auto'>

          <div data-aos="fade-right" className='customglass2 p-5 px-8'>
            <div className='inputglass my-5 p-5 space-y-1'>

              <h2 className='text-3xl font-semibold bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent mb-2'>Contact Info</h2>
              <p className='flex items-center gap-1 text-gray-300'><IoLocationOutline />Khulna,Bangladesh</p>
              <p className='flex items-center gap-1 text-gray-300'><CiPhone />01822933778</p>
              <p className='flex items-center gap-1 text-gray-300'><MdOutlineEmail />abdulahlim1100@gmail.com</p>
            </div>
            <hr className='border-gray-500 mb-3' />
            <div className='flex justify-between mb-5'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-semibold bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] bg-clip-text text-transparent'>Get in Touch</h1>
                <p className='text-gray-300 '>Have something to discuss? Send me a message and let's talk.</p>
              </div>
              <IoShareSocialOutline className='text-[#b76efa]' size={40} />
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
                  minLength="3"
                  maxLength="30"
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

              <button className="btn w-full border-0 bg-gradient-to-r from-[#b76efa] via-[#ab057d] to-[#f82b81] text-white">
                <BsSend />Send Message
              </button>
            </form>


          </div>

        </div>
      </div>
    </Element>
  );
};

export default Contact;