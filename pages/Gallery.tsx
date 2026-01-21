
import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Phone } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    { url: "https://drive.google.com/thumbnail?id=1xUcUGIPuymGEevGEebzFHaDZ7NjZQjkX&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1wXlOxX7vJZx7IwdBT8Z_U4LxpG-upo_n&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1rltGFDy4F64egHSebcq2a4OvIldDQm-f&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1rUgSaDrf-7kmYTTsaEg4vR-fOCuAuifV&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1ntDTr1lyN38c9naNaczSMtbH2lBPsFbJ&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1nkNeGl5_-F1TFcw2nanBAGMYKvAHoRYY&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1mTNexUCei1MB2uV6wirJimZdSpkngGv3&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1lJPSS0IclOedERKq3NTuJDJj_hg_Fwbk&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1jL0PNgfWCIdrVRFNlSLj4TO-UqhLJWoC&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1eFR7mRIUqn7cFcJSkp_zFo0TQlj5Nev7&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1e9Cr8f2m-7QUAqAi6Ao1pf6uI0KkbL4N&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1cPTOTdXsBWJDZOd6JTvjbsIGhFESEKtW&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1ashGCFV-_Dmc93HXf8liNyilsNcOHewh&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1akdHCemzEc1xY9GFSLctqBbFNB_6kj18&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1aLS_tOeyJZ2xR6lu1rvPwSPrFX4OaQwd&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1_LDC8mVmNvTJau805DADcgmJqy49h611&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1ZryMAxJ8_tU0FZWtaHKp3jIagujy5Vf_&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1Yz0U5benouTYgzLi67e3RsU9kStMw60c&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1YpP8wuaGTYQXtNePmMvEp__2ut4fsWl8&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1YJjdrTxjNS_1O7BL8pKxXgBaegYx4bpj&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1Y474LOJtPMS7m4G6kHLrdkjMcq_kAm79&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1TXss3rPFl0RVwMRC7vNh74ZXVkZNz0ED&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1QDhGd9OPyO-lGZikIhPI1f3KkjXwTrZc&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1ONBcdDP8fshBGJLvYFnhpPSfG7eGH7z1&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1O5ZWW0g0DuyFTWLJ3HbdXGTeHShwdsvw&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1NRpwt2FKWIZIiSOulfcuzjixKPEGn2P8&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1JH_S-z3X9BKwqGhsKTSM23u7xwW12s1B&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1HslVMhNCtT59kmQVIi53O8fgak6C5LsF&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1BdhMbitRa20aYekFo284OZ2jo_Et1b8j&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1ABwVi7HDKmdNGx3WfPHNKrGmdPsWZnx4&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=1A3uf1G5Zp-5COfPGuB6nqkrbkjqLOZGF&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=15elo2-9ELr3WCDTZtg79CJkA42DlKNnD&sz=w1200", title: "Project Portfolio Image" },
    { url: "https://drive.google.com/thumbnail?id=14gaOhNdQu1-e0Bl04olF12Ky2mlQvDi4&sz=w1200", title: "Project Portfolio Image" },
  ];

  const handleNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % images.length));
    }
  }, [selectedIndex, images.length]);

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
    }
  }, [selectedIndex, images.length]);

  const handleClose = () => setSelectedIndex(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedIndex]);

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-navy py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brandOrange/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 font-heading tracking-tight">
            Our <span className="text-brandOrange">Work</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Visual proof of the Snider TLC difference. We take pride in every property we touch.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <div 
                key={i} 
                className="break-inside-avoid relative group rounded-[2rem] overflow-hidden shadow-lg cursor-pointer bg-white"
                onClick={() => setSelectedIndex(i)}
              >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <div className="bg-brandOrange p-4 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                    <Eye size={32} strokeWidth={2.5} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-navy/98 backdrop-blur-md flex items-center justify-center select-none"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white hover:text-brandOrange transition-colors z-[110] bg-white/10 p-2 rounded-full hover:bg-white/20"
            onClick={handleClose}
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>

          {/* Navigation - Prev */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-brandOrange transition-all z-[110] bg-white/10 p-4 rounded-full hover:bg-white/20 active:scale-90"
            onClick={handlePrev}
            aria-label="Previous image"
          >
            <ChevronLeft size={48} />
          </button>

          {/* Navigation - Next */}
          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-brandOrange transition-all z-[110] bg-white/10 p-4 rounded-full hover:bg-white/20 active:scale-90"
            onClick={handleNext}
            aria-label="Next image"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedIndex].url} 
              alt="" 
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in fade-in zoom-in duration-300"
            />
          </div>
        </div>
      )}

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-navy font-heading mb-6">See something you like?</h2>
          <p className="text-gray-600 text-lg mb-10">
            Let's bring this level of award-winning care to your property.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:steve@snidertlc.com" 
              className="bg-brandOrange hover:bg-brandOrange-hover text-white px-10 py-5 rounded-full text-xl font-bold transition-all shadow-xl inline-block uppercase"
            >
              GET A QUOTE
            </a>
            <a href="tel:5198841581" className="flex items-center text-2xl font-black text-navy hover:text-brandOrange transition-colors">
              <Phone className="mr-3 text-brandOrange" size={28} />
              (519) 884-1581
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
