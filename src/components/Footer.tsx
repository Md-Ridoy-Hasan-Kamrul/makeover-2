import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterImage = () => (
  <div className='flex flex-col items-center'>
    <Link to='/'>
      <img
        src='../images/FOOTER.png'
        alt='Footer Logo'
        className='h-48 mb-4 hover:opacity-80 transition duration-300'
      />
    </Link>
  </div>
);

const ContactInfo = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Contact Us</h3>
    <p className='text-sm sm:text-base mb-2 break-all'>
      Email: myshamuna94@gmail.com
    </p>
    <p className='text-sm sm:text-base mb-2'>Phone: +880 1533-484921</p>
    <p className='text-sm sm:text-base'>
      Address: Bashundhara, Opposite of Jamuna Future Park, Joar Shahara,
      Dhaka-1229.
    </p>
  </div>
);

const SocialLinks = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Follow Us</h3>
    <div className='flex items-center space-x-6 '>
      <a
        href='https://www.instagram.com/myshas_makeover'
        className='hover:text-[#e34281] transition-colors'
        target='_blank'
        aria-label='Instagram'
      >
        <FaInstagram size={22} />
      </a>
      <a
        href='https://www.facebook.com/myshasmakeover'
        className='hover:text-[#e34281] transition-colors'
        target='_blank'
        aria-label='Facebook'
      >
        <FaFacebookF size={22} />
      </a>
      <a
        href='https://www.tiktok.com/@myshasmakeover'
        className='hover:text-[#e34281] transition-colors'
        target='_blank'
        aria-label='Twitter'
      >
        <FaTiktok size={22} />
      </a>
    </div>
  </div>
);

const BusinessHours = () => (
  <div>
    <h3 className='text-lg sm:text-xl font-semibold mb-4'>Business Hours</h3>
    <p className='text-sm sm:text-base mb-2'>
      Saturday - Friday: 6:00 AM - 6:00 PM
    </p>
  </div>
);

const Footer = () => (
  <footer className='bg-gray-900 text-white'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10'>
        <FooterImage />
        <ContactInfo />
        <SocialLinks />
        <BusinessHours />
      </div>
      <div className='mt-10 pt-6 border-t border-gray-800 text-center text-sm sm:text-base'>
        <p>
          &copy; {new Date().getFullYear()} Mysha Makeover. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
