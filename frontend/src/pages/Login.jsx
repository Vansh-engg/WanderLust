import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plane, Mail, Lock, Check } from 'lucide-react';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Handle fake login for presentation
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    // In a real app, this would redirect to Google OAuth or use a popup
    alert("Navigating to Google OAuth...");
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden bg-gray-50 pt-24">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -m-32 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl w-full flex rounded-[2.5rem] overflow-hidden shadow-2xl bg-white relative z-10 border border-white/20">
        
        {/* Left Form Section */}
        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white/70 backdrop-blur-xl">
          <Link to="/" className="flex items-center space-x-2 text-primary-600 mb-12 transform hover:scale-105 transition-transform w-max">
            <Plane className="h-8 w-8 -rotate-45" />
            <span className="font-outfit font-black text-2xl tracking-tight text-gray-900">
              Wander<span className="text-gradient">lust</span>
            </span>
          </Link>

          <div className="mb-10 animate-fade-in-up">
            <h2 className="text-4xl font-outfit font-black text-gray-900 mb-3 tracking-tight">
              {isSignUp ? "Create Account" : "Welcome Back"}
            </h2>
            <p className="text-gray-500 text-lg font-medium">
              {isSignUp 
                ? "Sign up to start planning your next extraordinary adventure." 
                : "Enter your details to access your personalized dashboard."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Google Authentication Button */}
            <button 
              type="button"
              onClick={handleGoogleLogin} 
              className="w-full flex items-center justify-center space-x-3 bg-white border border-gray-200 text-gray-700 py-3.5 px-4 rounded-2xl hover:bg-gray-50 transition-all font-bold text-base shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span>{isSignUp ? "Sign up with Google" : "Log in with Google"}</span>
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-bold uppercase tracking-wider">Or continue with email</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {isSignUp && (
              <div className="relative group">
                <input 
                  type="text" 
                  required 
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium text-lg placeholder-gray-400"
                  placeholder="Full Name" 
                />
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors w-5 h-5" />
              </div>
            )}

            <div className="relative group">
              <input 
                type="email" 
                required 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium text-lg placeholder-gray-400"
                placeholder="Email Address" 
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors w-5 h-5" />
            </div>

            <div className="relative group">
              <input 
                type="password" 
                required 
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium text-lg placeholder-gray-400"
                placeholder="Password" 
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary-500 transition-colors w-5 h-5" />
            </div>

            {!isSignUp && (
              <div className="text-right">
                <a href="#" className="text-sm font-bold text-primary-600 hover:text-primary-700 transition-colors">Forgot Password?</a>
              </div>
            )}

            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-700 text-white rounded-2xl py-4 font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-primary-500/30">
              {isSignUp ? 'Create Account' : 'Log In'}
            </button>
            
          </form>

          <p className="mt-8 text-center text-gray-600 font-medium">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{' '}
            <button 
              onClick={() => setIsSignUp(!isSignUp)} 
              className="text-primary-600 font-bold hover:text-primary-700 transition-colors focus:outline-none"
            >
              {isSignUp ? 'Log In' : 'Sign Up'}
            </button>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1542314831-c6a4d14d88fc?auto=format&fit=crop&q=80&w=2000" 
            alt="Travel Window" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 p-12 text-white">
            <div className="bg-white/20 backdrop-blur-md rounded-full p-3 w-16 h-16 flex items-center justify-center mb-6 border border-white/30 shadow-2xl animate-float">
              <Check className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-4xl font-outfit font-black tracking-tight mb-4 drop-shadow-lg leading-tight">
              Unlock secret deals <br />and customized trips.
            </h3>
            <p className="text-xl text-gray-200 font-medium opacity-90">Join over 10,000 travelers exploring the world with Wanderlust.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper Icon for User
const UserIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Login;
