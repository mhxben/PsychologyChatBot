import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, MessageSquare, ShieldCheck, UserCheck } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-purple-50">
      <Header />
      
      {/* Hero Section */}
      <section className="flex-1 flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
            TalkSpace AI – <span className="text-indigo-600">Your Mental Wellness Partner</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
            Experience supportive conversations with our AI companion designed to help you process thoughts, manage stress, and improve mental wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Start Your Journey
            </Link>
            <Link
              to="/login"
              className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-lg border border-indigo-200 transition-all duration-300 text-center shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://images.pexels.com/photos/3807738/pexels-photo-3807738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Mental wellness illustration"
            className="rounded-xl shadow-2xl max-w-full h-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">How TalkSpace AI Helps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-blue-100 p-3 rounded-full w-fit mb-4">
                <Brain className="text-blue-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Cognitive Support</h3>
              <p className="text-gray-600">
                Our AI uses evidence-based techniques to help you reframe negative thoughts.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-purple-100 p-3 rounded-full w-fit mb-4">
                <MessageSquare className="text-purple-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">24/7 Conversations</h3>
              <p className="text-gray-600">
                Get support whenever you need it, day or night, with unlimited conversations.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                <ShieldCheck className="text-green-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Privacy-First</h3>
              <p className="text-gray-600">
                Your conversations are private and secure, with industry-leading encryption.
              </p>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="bg-amber-100 p-3 rounded-full w-fit mb-4">
                <UserCheck className="text-amber-600 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Personalized</h3>
              <p className="text-gray-600">
                The more you chat, the better TalkSpace AI understands your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-indigo-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Our Users' Experiences
          </h2>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
            <p className="text-gray-600 text-lg italic mb-6">
              "TalkSpace AI has been a game-changer for my daily mental wellness routine. It's like having a supportive friend available whenever anxiety strikes, day or night."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-semibold">JM</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Jamie M.</p>
                <p className="text-gray-500 text-sm">User for 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Wellness Journey Today
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of users who have found comfort, clarity, and improved mental wellness with TalkSpace AI.
          </p>
          <Link
            to="/signup"
            className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Create Your Free Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;