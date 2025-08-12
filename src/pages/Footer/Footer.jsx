import React from 'react';

const Footer = () => {
    return (
 <footer className="footer border-t border-gray-900 sm:footer-horizontal footer-center text-gray-400 p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by <span className='text-[#f82b81]'>Abdul Halim</span></p>
  </aside>
</footer>
    );
};

export default Footer;