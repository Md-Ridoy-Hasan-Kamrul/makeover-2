import { Link } from 'react-router-dom';
import {
  Sparkles,
  Star,
  Calendar,
  Heart,
  Clock,
  MapPin,
  Quote,
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const heroImages = ['/src/images/2.jpg'];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bride',
    comment:
      'The bridal makeup was absolutely perfect! I felt like a princess on my special day.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    name: 'Emily Davis',
    role: 'Client',
    comment:
      'Amazing party makeup! Got so many compliments. Will definitely come back!',
    image: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg',
  },
  {
    name: 'Jessica Williams',
    role: 'Model',
    comment: 'Professional service and stunning results. Highly recommended!',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section with Slider */}
      <header className='relative h-screen'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className='h-full'
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-full'>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className='w-full h-full object-cover'
                />
                <div className='absolute inset-0 bg-black bg-opacity-40'></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-5xl md:text-7xl font-bold mb-6'>
              Mysha's Makeover
            </h1>
            <p className='text-xl md:text-2xl mb-8'>
              Transform Your Look, Enhance Your Beauty
            </p>
            <Link
              to='/contact'
              className='inline-block bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full text-lg transition duration-300 transform hover:scale-105'
            >
              Book Now
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className='py-20 px-4 md:px-8'>
        <h2 className='text-4xl font-bold text-center mb-16'>Our Services</h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition duration-300'>
            <Sparkles className='w-12 h-12 mx-auto mb-4 text-pink-500' />
            <h3 className='text-xl font-semibold mb-4'>Bridal Makeup</h3>
            <p className='text-gray-600'>Perfect makeup for your special day</p>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition duration-300'>
            <Star className='w-12 h-12 mx-auto mb-4 text-pink-500' />
            <h3 className='text-xl font-semibold mb-4'>Special Events</h3>
            <p className='text-gray-600'>Glamorous looks for any occasion</p>
          </div>
          <div className='bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition duration-300'>
            <Calendar className='w-12 h-12 mx-auto mb-4 text-pink-500' />
            <h3 className='text-xl font-semibold mb-4'>Makeup Classes</h3>
            <p className='text-gray-600'>Learn professional techniques</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-20 px-4 md:px-8 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16'>
            What Our Clients Say
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            className='pb-12'
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className='bg-white rounded-xl shadow-lg p-8 mx-4'>
                  <div className='flex flex-col md:flex-row items-center gap-8'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-24 h-24 rounded-full object-cover'
                    />
                    <div className='flex-1'>
                      <Quote className='w-10 h-10 text-pink-500 mb-4' />
                      <p className='text-gray-600 text-lg mb-4'>
                        {testimonial.comment}
                      </p>
                      <h3 className='font-semibold text-xl'>
                        {testimonial.name}
                      </h3>
                      <p className='text-pink-500'>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Pricing Section */}
      <section className='py-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-4xl font-bold text-center mb-16'>Our Packages</h2>

          {/* Bridal Package */}
          <div className='bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:scale-105 transition duration-300'>
            <div className='flex items-center justify-between flex-wrap gap-4'>
              <h3 className='text-2xl font-bold text-pink-500'>
                Bridal Makeover
              </h3>
              <span className='text-2xl font-semibold'>5,000 BDT</span>
            </div>
            <div className='mt-4 p-4 bg-pink-50 rounded-lg'>
              <p className='text-pink-600 font-semibold'>Special Offer:</p>
              <p>
                Book both Haldi (pre-wedding event) and Wedding makeovers
                together for 10,000 BDT!
              </p>
            </div>
          </div>

          {/* Party Packages */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-12'>
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Gorgeous Party Package
              </h3>
              <p className='text-gray-600 mb-4'>
                Makeup + Hairstyling + Saree Draping
              </p>
              <p className='text-2xl font-bold text-pink-500'>2,000 BDT</p>
            </div>
            <div className='bg-white rounded-xl shadow-lg p-6'>
              <h3 className='text-xl font-semibold mb-2'>
                Simple Party Package
              </h3>
              <p className='text-gray-600 mb-4'>Makeup + Hairstyling</p>
              <p className='text-2xl font-bold text-pink-500'>1,500 BDT</p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-lg p-6 mb-12'>
            <h3 className='text-xl font-semibold mb-2'>Basic Party Makeup</h3>
            <p className='text-gray-600 mb-4'>Only Makeup</p>
            <p className='text-2xl font-bold text-pink-500'>1,000 BDT</p>
          </div>

          {/* Important Notes */}
          <div className='bg-gray-50 rounded-xl p-8'>
            <h3 className='text-xl font-semibold mb-6 text-center'>
              Important Information
            </h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-6 h-6 text-pink-500 flex-shrink-0 mt-1' />
                <p className='text-gray-700'>
                  Home service available at additional cost
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Clock className='w-6 h-6 text-pink-500 flex-shrink-0 mt-1' />
                <p className='text-gray-700'>
                  Bridal bookings require advance payment 5-6 days before the
                  event
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <Calendar className='w-6 h-6 text-pink-500 flex-shrink-0 mt-1' />
                <p className='text-gray-700'>
                  Party makeover bookings need confirmation 2-3 days prior
                </p>
              </div>
            </div>
          </div>

          <div className='text-center mt-8'>
            <div className='flex items-center justify-center text-pink-500 space-x-2'>
              <Heart className='w-6 h-6' />
              <p className='text-lg font-semibold'>
                Thank you for choosing us!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
