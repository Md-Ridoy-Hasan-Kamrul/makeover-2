import React from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="pt-24 pb-20 px-4 md:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">info@bellabeauty.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">123 Beauty Street, NY</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <p className="font-semibold">Working Hours</p>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}