/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, MessageSquare, MapPin, Calendar, Users, Star, CheckCircle, 
  Wifi, Zap, Coffee, Shield, Clock, Car, ChevronRight, X, Sparkles, 
  Compass, Award, Bed, Tv, AirVent, Bath, Navigation, Menu
} from 'lucide-react';

interface Room {
  id: string;
  name: string;
  tagline: string;
  size: string;
  bed: string;
  price: number;
  originalPrice: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  // Booking Bar State
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [roomType, setRoomType] = useState('Deluxe Room (₹2,199)');
  const [guests, setGuests] = useState('2 Guests');

  // Inquiry Form State
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryDates, setInquiryDates] = useState('');
  const [inquiryMsg, setInquiryMsg] = useState('');

  const WHATSAPP_NUMBER = '919670215052';

  const roomsData: Room[] = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      tagline: 'Cozy, peaceful sanctuary for solo travelers or couples',
      size: '220 sq.ft',
      bed: '1 King Bed / Twin Beds',
      price: 2199,
      originalPrice: 2799,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Designed with warmth and heritage touches, our Deluxe Rooms offer supreme comfort after a soul-stirring day at the ghats. Features plush bedding, air conditioning, high-speed Wi-Fi, and a pristine en-suite bathroom with 24/7 hot water.',
      amenities: ['King / Twin Beds', 'High-Speed Wi-Fi', 'Smart TV with OTT', 'Air Conditioning', '24/7 Hot Water', 'Daily Housekeeping', 'In-Room Tea/Coffee Maker']
    },
    {
      id: 'super-deluxe',
      name: 'Super Deluxe Room',
      tagline: 'Spacious elegance with city view and seating lounge',
      size: '300 sq.ft',
      bed: '1 King Bed + Cozy Sofa',
      price: 2999,
      originalPrice: 3799,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Step into elevated luxury with our Super Deluxe rooms. Boasting extra floor space, a comfortable reading sofa, tasteful Kashi-inspired artwork, and premium bath amenities. Ideal for travelers seeking extra relaxation.',
      amenities: ['City View Window', 'King Bed & Lounge Sofa', 'High-Speed Wi-Fi', 'Smart TV', 'Mini Fridge', 'Work Desk', 'Premium Toiletries', '24/7 Room Service']
    },
    {
      id: 'family-suite',
      name: 'Executive Family Suite',
      tagline: 'Expansive multi-bed suite tailored for families and groups',
      size: '420 sq.ft',
      bed: '2 Queen Beds (Up to 4 Guests)',
      price: 3899,
      originalPrice: 4899,
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Perfect for families or pilgrim groups traveling together. Our Executive Family Suite features two comfortable queen beds, generous wardrobe space, separate seating nook, and top-tier hospitality for a harmonious stay.',
      amenities: ['Two Queen Beds', 'Sleeps up to 4 Guests', 'Spacious Seating Area', 'High-Speed Wi-Fi', '2 Smart TVs', 'Large Wardrobe', 'Luxurious Bath', 'Priority Room Service']
    }
  ];

  const handleWhatsAppBooking = (roomName?: string, price?: number) => {
    let msg = `Namaste! 🙏 I would like to book a stay at Hotel Velora Inn, Varanasi.\n`;
    if (roomName) {
      msg += `• Room: ${roomName} ${price ? `(₹${price}/night)` : ''}\n`;
    } else {
      msg += `• Room Preference: ${roomType}\n`;
    }
    if (checkIn) msg += `• Check-in: ${checkIn}\n`;
    if (checkOut) msg += `• Check-out: ${checkOut}\n`;
    msg += `• Guests: ${guests}\n`;
    msg += `Please confirm availability and best direct booking tariff.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Namaste! New Direct Inquiry from Website:\n• Name: ${inquiryName}\n• Phone: ${inquiryPhone}\n• Dates: ${inquiryDates}\n• Message: ${inquiryMsg}`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#0F172A] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white pb-16 md:pb-0">
      
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-[#0F172A] text-[#FAF8F5] text-xs md:text-sm py-2 px-4 transition-all">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#C5A059] text-white">
              Direct Benefit
            </span>
            <span>Save 20% vs OTA Apps • Best Rate Guaranteed</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp: +91 9670215052
            </a>
            <span className="hidden md:inline text-slate-500">|</span>
            <a href="tel:+919670215052" className="hover:text-[#C5A059] transition flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> 24x7 Front Desk
            </a>
          </div>
        </div>
      </div>

      {/* 2. STICKY LUXURY NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#C5A059]/20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-luxury text-2xl sm:text-3xl font-bold tracking-wider text-[#0F172A]">
              HOTEL VELORA INN
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-[#C5A059] uppercase font-semibold">
              Varanasi Cantt • Boutique Stay
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-[#0F172A]/80">
            <a href="#rooms" className="hover:text-[#C5A059] transition">Rooms & Suites</a>
            <a href="#amenities" className="hover:text-[#C5A059] transition">Amenities</a>
            <a href="#darshan" className="hover:text-[#C5A059] transition">Kashi Darshan</a>
            <a href="#location" className="hover:text-[#C5A059] transition">Location</a>
            <a href="#reviews" className="hover:text-[#C5A059] transition">Reviews</a>
            <a href="#contact" className="hover:text-[#C5A059] transition">Contact</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+919670215052" 
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider border border-[#0F172A]/20 hover:border-[#C5A059] rounded-full transition flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" /> Call Hotel
            </a>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Namaste!%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20Hotel%20Velora%20Inn.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white rounded-full transition shadow-sm flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Book on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0F172A] hover:bg-slate-200/50 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF8F5] border-b border-[#C5A059]/20 px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3 font-medium text-[#0F172A]">
              <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Rooms & Suites</a>
              <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Amenities</a>
              <a href="#darshan" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Kashi Darshan</a>
              <a href="#location" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Location</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Reviews</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#C5A059] py-1">Contact</a>
            </nav>
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Namaste!%20I%20would%20like%20to%20book%20a%20room.`} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 text-white rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Book on WhatsApp
              </a>
              <a 
                href="tel:+919670215052" 
                className="w-full py-2.5 border border-slate-300 text-[#0F172A] rounded-xl text-center font-semibold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C5A059]" /> Call Reception
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION + DIRECT BOOKING BAR */}
      <section className="relative bg-[#0F172A] text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80" 
            alt="Hotel Velora Inn Suite Varanasi" 
            className="w-full h-full object-cover object-center opacity-30 scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-3xl mx-auto lg:mx-0 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Pared Kothi, Cantt • Varanasi
            </div>
            
            <h1 className="font-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]">
              Experience the Sacred Rhythm of Kashi with <span className="text-[#C5A059] italic">Boutique Elegance.</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              Located just 800m from Varanasi Cantt Railway Station. Ideal for pilgrims, families, and leisure travelers seeking refined comfort, immaculate hygiene, and authentic Banarasi hospitality.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                href="#rooms" 
                className="px-7 py-3.5 bg-[#C5A059] hover:bg-[#A9863E] text-white font-medium rounded-full transition shadow-lg text-sm uppercase tracking-wider flex items-center gap-2"
              >
                Explore Rooms <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Namaste!%20Checking%20room%20availability.`} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-full transition shadow-lg text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Quick WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WHATSAPP BOOKING BAR (Floats over hero/content intersection) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-30 -mt-10 sm:-mt-12 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl border border-[#C5A059]/30 p-4 sm:p-6 backdrop-blur-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-[#C5A059] mb-3 flex items-center gap-1.5">
            <Calendar className="w-4 h-4" /> Instant WhatsApp Booking Bar — Direct Rates
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Check-In Date</label>
              <input 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Check-Out Date</label>
              <input 
                type="date" 
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#C5A059]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Room Type</label>
              <select 
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#C5A059]"
              >
                <option>Deluxe Room (₹2,199)</option>
                <option>Super Deluxe Room (₹2,999)</option>
                <option>Executive Family Suite (₹3,899)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Guests</label>
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-[#C5A059]"
              >
                <option>1 Guest (Solo)</option>
                <option>2 Guests (Couple)</option>
                <option>3 Guests</option>
                <option>4+ Guests (Family)</option>
              </select>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="text-xs text-slate-500 italic">
              ✨ No prepayment fees • Instant confirmation via WhatsApp with hotel manager.
            </span>
            <button 
              onClick={() => handleWhatsAppBooking()}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> Check Availability on WhatsApp ➔
            </button>
          </div>
        </div>
      </div>

      {/* 4. PROXIMITY & TRUST STRIP (4 CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition">
              <Navigation className="w-6 h-6" />
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">3 Mins from Station</h3>
            <p className="text-slate-600 text-sm">Only 800m from Varanasi Cantt Railway Station. Hassle-free arrival for train travelers.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">15 Mins to Corridor</h3>
            <p className="text-slate-600 text-sm">Quick connectivity to Kashi Vishwanath Temple, Dashashwamedh Ghat & major temples.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">100% Power Backup</h3>
            <p className="text-slate-600 text-sm">Full generator backup, high-speed optical Wi-Fi, and 24/7 uninterrupted hot water.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition group">
            <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-4 group-hover:bg-[#C5A059] group-hover:text-white transition">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">24/7 Tour & Cab Desk</h3>
            <p className="text-slate-600 text-sm">Dedicated assistance for airport cabs, local sightseeing, boat rides & Ganga Aarti passes.</p>
          </div>
        </div>
      </section>

      {/* 5. ROOMS & SUITES (3 CARDS) */}
      <section id="rooms" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">Boutique Accommodations</span>
          <h2 className="font-luxury text-3xl sm:text-4xl font-bold mt-2">Rooms Crafted for Tranquility</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Every room blends modern luxury with subtle Banarasi aesthetics, premium mattresses, and pristine cleanliness.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition flex flex-col">
              <div className="relative h-60 overflow-hidden group">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#0F172A]/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                  {room.size}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-luxury text-2xl font-bold text-[#0F172A]">{room.name}</h3>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mb-3">{room.tagline}</p>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">{room.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.slice(0, 4).map((am, i) => (
                      <span key={i} className="text-[11px] bg-[#FAF8F5] border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md">
                        {am}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 line-through">₹{room.originalPrice}</span>
                    <div className="text-xl font-bold text-[#0F172A]">
                      ₹{room.price} <span className="text-xs font-normal text-slate-500">/ night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => setSelectedRoom(room)}
                      className="px-3 py-2 text-xs font-semibold border border-slate-300 rounded-xl hover:bg-slate-100 transition"
                    >
                      Details
                    </button>
                    <button 
                      onClick={() => handleWhatsAppBooking(room.name, room.price)}
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl transition flex items-center gap-1 shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROOM DETAILS MODAL */}
      {selectedRoom && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
            <div className="relative h-72">
              <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedRoom(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full transition"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-[#0F172A]/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-semibold">
                {selectedRoom.size} • {selectedRoom.bed}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-luxury text-3xl font-bold text-[#0F172A]">{selectedRoom.name}</h3>
                  <div className="text-right">
                    <span className="text-sm text-slate-400 line-through">₹{selectedRoom.originalPrice}</span>
                    <div className="text-2xl font-bold text-[#0F172A]">₹{selectedRoom.price} <span className="text-xs text-slate-500 font-normal">/ night</span></div>
                  </div>
                </div>
                <p className="text-slate-600 mt-2 leading-relaxed">{selectedRoom.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-[#C5A059] mb-3">Room Amenities & Features</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedRoom.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700 bg-[#FAF8F5] p-2.5 rounded-xl border border-slate-200/60">
                      <CheckCircle className="w-4 h-4 text-[#C5A059] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">Includes all taxes & complimentary Wi-Fi.</span>
                <button 
                  onClick={() => {
                    const room = selectedRoom;
                    setSelectedRoom(null);
                    handleWhatsAppBooking(room.name, room.price);
                  }}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition flex items-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" /> Book {selectedRoom.name} on WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. HOTEL AMENITIES (6 GRID) */}
      <section id="amenities" className="bg-[#F3EEE6]/60 py-20 border-y border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">World-Class Hospitality</span>
            <h2 className="font-luxury text-3xl sm:text-4xl font-bold mt-2">Thoughtful Hotel Amenities</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">Designed for absolute comfort, safety, and serene spiritual exploration.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">In-Room Dining & Satvik Food</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Enjoy delicious multi-cuisine dishes and pure vegetarian Satvik meals delivered directly to your room.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">Kashi Darshan & Boat Booking</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Assistance with VIP temple darsan guides, Ganga Aarti boat rides at Dashashwamedh Ghat, and Sarnath tours.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">24/7 Power Backup & Hot Water</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Uninterrupted high-capacity generator support and continuous hot/cold water supply in all bathrooms.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">High-Speed Optical Wi-Fi</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Stay connected with high-speed optical fiber internet across the entire property, ideal for remote work.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">Early Check-In & Luggage Storage</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Arriving early by train? Secure luggage storage and comfortable lobby seating while your room is prepared.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center mb-5">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="font-luxury text-xl font-bold mb-2">Secure Parking & Driver Accommodation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">On-site secure parking space for personal cars and designated retiring facilities for personal chauffeurs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. NEARBY LANDMARKS (DISTANCE CARDS) */}
      <section id="darshan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">Prime Location</span>
          <h2 className="font-luxury text-3xl sm:text-4xl font-bold mt-2">Explore Sacred Kashi with Ease</h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">Centrally situated near Cantt Railway Station with seamless connectivity to all holy shrines and heritage sites.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#C5A059] transition">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2.5 bg-[#C5A059]/10 text-[#C5A059] rounded-xl">🛕</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#FAF8F5] border border-slate-200 rounded-full text-slate-700">15 Mins</span>
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">Kashi Vishwanath Temple</h3>
            <p className="text-slate-600 text-sm">The glorious Jyotirlinga corridor, easily accessible via auto or cab from Cantt.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#C5A059] transition">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2.5 bg-[#C5A059]/10 text-[#C5A059] rounded-xl">🌅</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#FAF8F5] border border-slate-200 rounded-full text-slate-700">18 Mins</span>
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">Dashashwamedh Ghat</h3>
            <p className="text-slate-600 text-sm">Experience the world-famous divine Ganga Aarti every evening.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#C5A059] transition">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2.5 bg-[#C5A059]/10 text-[#C5A059] rounded-xl">🛶</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#FAF8F5] border border-slate-200 rounded-full text-slate-700">20 Mins</span>
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">Assi Ghat (Subah-e-Banaras)</h3>
            <p className="text-slate-600 text-sm">Witness soul-soothing morning music and yoga sessions by the Ganges.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#C5A059] transition">
            <div className="flex justify-between items-start mb-4">
              <span className="p-2.5 bg-[#C5A059]/10 text-[#C5A059] rounded-xl">🏛️</span>
              <span className="text-xs font-semibold px-2.5 py-1 bg-[#FAF8F5] border border-slate-200 rounded-full text-slate-700">25 Mins</span>
            </div>
            <h3 className="font-luxury text-xl font-bold mb-1">Sarnath Buddhist Stupa</h3>
            <p className="text-slate-600 text-sm">Explore the ancient deer park where Lord Buddha gave his first sermon.</p>
          </div>
        </div>
      </section>

      {/* 8. GUEST REVIEWS */}
      <section id="reviews" className="bg-[#0F172A] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-3">
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" /> 4.6 / 5 Google Review Rating
            </div>
            <h2 className="font-luxury text-3xl sm:text-4xl font-bold">Trusted by Pilgrims & Travelers</h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2">Read real experiences from guests who stayed with us in Varanasi.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "Being so close to Cantt Railway Station made our arrival with elderly parents extremely smooth. The rooms were spotless, beds very comfortable, and the staff helped us arrange a hassle-free boat tour for Ganga Aarti."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">Rajesh Sharma</h4>
                  <span className="text-xs text-slate-400">Delhi • Stayed in Family Suite</span>
                </div>
                <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded">Verified Stay</span>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "Quiet, peaceful, and extremely clean. Despite being near the railway station hub, the rooms are wonderfully soundproof. Prompt room service and delicious satvik food made our stay memorable."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">Dr. Ananya Mukherjee</h4>
                  <span className="text-xs text-slate-400">Kolkata • Stayed in Super Deluxe</span>
                </div>
                <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded">Verified Stay</span>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-md p-8 rounded-2xl border border-slate-700 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-[#C5A059] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A059]" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm italic leading-relaxed">
                  "Outstanding hospitality! The front desk manager went out of his way to arrange an early morning cab for Kashi Vishwanath darshan and gave us genuine local advice. Will definitely stay here again."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-sm">Vikramaditya Rao</h4>
                  <span className="text-xs text-slate-400">Bangalore • Stayed in Deluxe Room</span>
                </div>
                <span className="text-xs bg-emerald-900/50 text-emerald-300 px-2 py-0.5 rounded">Verified Stay</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOCATION & DIRECT INQUIRY FORM */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">Get in Touch</span>
            <h2 className="font-luxury text-3xl sm:text-4xl font-bold">Plan Your Stay in Varanasi</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Have questions about temple darshan, group bookings, or railway station transfers? Send us a message directly or connect via WhatsApp for instant replies.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C5A059]/10 text-[#C5A059] rounded-xl shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#0F172A]">Address</h4>
                  <p className="text-slate-600 text-sm">Pared Kothi, Vijay Nagar Colony, Near Cantt Railway Station, Chetganj, Varanasi, UP - 221002</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#C5A059]/10 text-[#C5A059] rounded-xl shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#0F172A]">Phone & WhatsApp</h4>
                  <p className="text-slate-600 text-sm">+91 9670215052 (Available 24x7)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-3">
              <a 
                href="https://maps.app.goo.gl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#0F172A] text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition flex items-center gap-2"
              >
                <MapPin className="w-4 h-4 text-[#C5A059]" /> Open Google Maps
              </a>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-emerald-700 transition flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-xl">
            <h3 className="font-luxury text-2xl font-bold mb-2">Direct Inquiry Form</h3>
            <p className="text-slate-500 text-xs mb-6">Submitting this opens WhatsApp pre-filled with your details for instant confirmation.</p>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (WhatsApp)</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 98765 43210"
                  value={inquiryPhone}
                  onChange={(e) => setInquiryPhone(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Tentative Dates</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 24 Oct - 26 Oct"
                  value={inquiryDates}
                  onChange={(e) => setInquiryDates(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Special Requirements or Room Type</label>
                <textarea 
                  rows={3}
                  placeholder="e.g. Need Deluxe Room for 2 adults, plus airport pickup assistance."
                  value={inquiryMsg}
                  onChange={(e) => setInquiryMsg(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl text-sm transition shadow-md flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" /> Send Inquiry via WhatsApp ➔
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#0F172A] text-slate-400 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-1">
            <span className="font-luxury text-2xl font-bold text-white tracking-wider">
              HOTEL VELORA INN
            </span>
            <p className="text-xs leading-relaxed text-slate-400">
              Boutique comfort & serenity in the heart of Kashi. Experience unmatched Banarasi warmth just 3 minutes from Varanasi Cantt Station.
            </p>
            <div className="text-xs font-medium text-[#C5A059]">
              ✨ Best Price Direct Booking Guarantee
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#rooms" className="hover:text-[#C5A059] transition">Rooms & Suites</a></li>
              <li><a href="#amenities" className="hover:text-[#C5A059] transition">Hotel Amenities</a></li>
              <li><a href="#darshan" className="hover:text-[#C5A059] transition">Kashi Darshan</a></li>
              <li><a href="#reviews" className="hover:text-[#C5A059] transition">Guest Reviews</a></li>
              <li><a href="#contact" className="hover:text-[#C5A059] transition">Location & Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Nearby Shrines</h4>
            <ul className="space-y-2.5 text-xs">
              <li>Kashi Vishwanath Temple (15 Mins)</li>
              <li>Dashashwamedh Ghat Aarti (18 Mins)</li>
              <li>Assi Ghat Subah-e-Banaras (20 Mins)</li>
              <li>Sarnath Stupa (25 Mins)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Direct Reservation</h4>
            <p className="text-xs text-slate-400 mb-3">Call or WhatsApp our front desk anytime for immediate room allotment.</p>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageSquare className="w-4 h-4" /> +91 9670215052
            </a>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Hotel Velora Inn, Varanasi. All rights reserved.</p>
          <p className="text-slate-400">Pared Kothi, Chetganj, Varanasi, UP - 221002</p>
        </div>
      </footer>

      {/* 11. MOBILE BOTTOM STICKY ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-800 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <a 
          href="tel:+919670215052" 
          className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-700"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" /> Call Reception
        </a>
        <a 
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Namaste!%20I%20would%20like%20to%20book%20a%20room%20at%20Hotel%20Velora%20Inn.`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 shadow-md"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp Booking
        </a>
      </div>

    </div>
  );
}
