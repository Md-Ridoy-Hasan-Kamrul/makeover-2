import { useParams } from 'react-router-dom';

const portfolioData = {
  'all-work': {
    title: 'All Work',
    images: [
      'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
      'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
      'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
    ],
  },
  wedding: {
    title: 'Wedding Makeup',
    images: [
      '/src/images/1.jpg',
      '/src/images/2.jpg',
      '/src/images/3.jpg',
      '/src/images/4.jpg',
      '/src/images/5.jpg',
    ],
  },
  'pre-wedding': {
    title: 'Pre-Wedding Makeup',
    images: [
      'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
      'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
      'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
    ],
  },
  'simple-party': {
    title: 'Simple Party Makeup',
    images: [
      'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
      'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
      'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
    ],
  },
  party: {
    title: 'Party Makeup',
    images: [
      'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
      'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
      'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
    ],
  },
  'gorgeous-party': {
    title: 'Gorgeous Party Makeup',
    images: [
      'https://images.pexels.com/photos/2814808/pexels-photo-2814808.jpeg',
      'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg',
      'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg',
    ],
  },
};

export default function Portfolio() {
  const { category = 'all-work' } = useParams();
  const currentCategory = portfolioData[category as keyof typeof portfolioData];

  return (
    <section className='pt-24 pb-20 px-4 md:px-8 bg-pink-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-16'>
          {currentCategory.title}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {currentCategory.images.map((image, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg'
            >
              <img
                src={image}
                alt={`Portfolio ${index + 1}`}
                className='w-full h-80 object-cover transform group-hover:scale-110 transition duration-500'
              />
              <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-500'></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
