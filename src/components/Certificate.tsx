import React from 'react';
import { Award, Star } from 'lucide-react';

export default function Certificate() {
  const certificates = [
    {
      title: "Master Makeup Artist",
      issuer: "International Beauty Academy",
      year: "2023",
      description: "Advanced certification in professional makeup artistry",
      rating: 5
    },
    {
      title: "Bridal Makeup Specialist",
      issuer: "Wedding Makeup Institute",
      year: "2022",
      description: "Specialized training in bridal and special occasion makeup",
      rating: 5
    },
    {
      title: "Advanced Color Theory",
      issuer: "Professional Makeup Academy",
      year: "2021",
      description: "Expert level certification in color theory and application",
      rating: 5
    }
  ];

  return (
    <section className="pt-24 pb-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Professional Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition duration-300"
            >
              <div className="relative">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-500 rounded-full p-4">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-pink-500 mb-2">{cert.issuer}</p>
                <p className="text-gray-600 mb-4">{cert.year}</p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(cert.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-500">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <p className="text-4xl font-bold text-pink-500 mb-2">500+</p>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-lg">
              <p className="text-4xl font-bold text-pink-500 mb-2">5 Years</p>
              <p className="text-gray-600">Professional Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}