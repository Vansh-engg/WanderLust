import React from 'react';
import { Search, MapPin, Calendar, Users, ArrowRight, Star, Compass, Heart, PlayCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[850px] flex items-center justify-center overflow-hidden w-full m-0 p-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=2500" 
            alt="Travel Hero" 
            className="w-full h-full object-cover transform scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/30 to-gray-50"></div>
        </div>
        
        {/* Floating Abstract Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float-delay"></div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center pb-32">
          
          <div className="text-center space-y-6 animate-fade-in-up mt-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 shadow-xl animate-float">
              <Compass className="w-5 h-5 text-primary-400" />
              <span className="text-white font-semibold uppercase tracking-widest text-sm">Design Your Journey</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.1] drop-shadow-2xl font-outfit">
              Escape into <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-pink-500 mt-2 block">
                The Extraordinary
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 font-medium max-w-2xl mx-auto drop-shadow-lg opacity-90 pb-8">
              Curated experiences and hidden gems around the world. Your next unforgettable story starts right here.
            </p>

            <div className="flex justify-center space-x-4">
              <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_-10px_rgba(124,58,237,0.8)] border border-primary-400/50 flex items-center group">
                Plan a Trip <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/30 flex items-center group">
                <PlayCircle className="mr-2 w-5 h-5 text-primary-400 group-hover:scale-110 transition-transform" /> Watch Reel
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Search Widget (Overlapping Hero) */}
      <section className="relative z-20 w-full px-4 lg:px-8 max-w-6xl mx-auto -mt-24 mb-24">
        <div className="glass-panel rounded-[2rem] p-4 lg:p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] bg-white/80 border border-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            <div className="flex flex-col px-4 py-3 rounded-2xl hover:bg-gray-50/80 transition-colors cursor-text group border border-transparent hover:border-gray-200">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 group-focus-within:text-primary-600 flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-1.5"/> Destination
              </label>
              <input type="text" placeholder="Where next?" className="bg-transparent border-none text-gray-900 placeholder-gray-400 text-lg font-bold focus:ring-0 focus:outline-none w-full" />
            </div>
            
            <div className="flex flex-col px-4 py-3 rounded-2xl hover:bg-gray-50/80 transition-colors cursor-pointer group border border-transparent hover:border-gray-200 border-l border-gray-100">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 group-focus-within:text-primary-600 flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-1.5"/> Dates
              </label>
              <input type="text" placeholder="Add dates" className="bg-transparent border-none text-gray-900 focus:ring-0 text-lg font-bold focus:outline-none w-full cursor-pointer" readOnly />
            </div>
            
            <div className="flex flex-col px-4 py-3 rounded-2xl hover:bg-gray-50/80 transition-colors cursor-pointer group border border-transparent hover:border-gray-200 border-l border-gray-100">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1 group-focus-within:text-primary-600 flex items-center">
                <Users className="w-3.5 h-3.5 mr-1.5"/> Guests
              </label>
              <input type="text" placeholder="2 Adults" className="bg-transparent border-none text-gray-900 focus:ring-0 text-lg font-bold focus:outline-none w-full cursor-pointer" readOnly />
            </div>

            <div className="px-2">
              <button className="w-full bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white rounded-[1.5rem] py-4 font-bold text-lg flex items-center justify-center transition-all transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-primary-500/40 group">
                <Search className="mr-2 w-5 h-5 group-hover:rotate-90 transition-transform duration-300" /> Search
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-gray-900 mb-4 font-outfit tracking-tight">Top Choice <span className="text-gradient">Destinations</span></h2>
            <p className="text-gray-500 text-xl font-medium">Breathtaking locations and highly rated stays curated just for you.</p>
          </div>
          <button className="flex items-center space-x-2 text-primary-600 font-bold text-lg hover:text-primary-700 bg-primary-50 px-6 py-3 rounded-full transition-colors group">
            <span>View All</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { id: 1, name: 'Santorini, Greece', price: '$250', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1000', rating: 4.9, tours: 42 },
            { id: 2, name: 'Kyoto, Japan', price: '$180', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000', rating: 4.8, tours: 38 },
            { id: 3, name: 'Swiss Alps', price: '$320', img: 'https://images.unsplash.com/photo-1549893072-4bc678117f45?auto=format&fit=crop&q=80&w=1000', rating: 5.0, tours: 25 },
          ].map((dest) => (
            <div key={dest.id} className="group cursor-pointer relative rounded-[2.5rem] bg-white p-3 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary-100 transform hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-[2rem] aspect-[4/5] mb-5">
                <img 
                  src={dest.img} 
                  alt={dest.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-black text-gray-900 shadow-lg flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span>{dest.rating}</span>
                </div>
                <button className="absolute top-4 left-4 p-3 bg-white/30 hover:bg-white/80 backdrop-blur-md rounded-full text-white hover:text-pink-500 transition-all opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="px-4 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors font-outfit">{dest.name}</h3>
                    <p className="text-gray-500 mt-1 font-medium text-sm">{dest.tours} Premium Tours</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-black text-primary-600 block">{dest.price}</span>
                    <span className="text-xs text-gray-400 font-bold uppercase">/ night</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Spacer to allow scrolling */}
      <div className="h-20"></div>
    </div>
  );
};

export default Home;
