const fs = require('fs');

const path = 'components/home/Testimonials.tsx';
let content = fs.readFileSync(path, 'utf8');

// Replace the entire top section with a clean horizontal layout
const topSectionRegex = /\{\/\* 1\. Viewport-Level Collage Composition \& Carousel \*\/\}[\s\S]*?(?=\{\/\* Shared Pagination Dots \*\/)/;
const replacement = `{/* 1. Clean Horizontal Carousel */}
      <div 
        className="w-full flex justify-center mb-16 md:mb-32 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full max-w-7xl flex flex-col items-center px-4">
          <div className="inline-flex px-5 py-1.5 rounded-full border border-gray-200 text-secondary font-medium text-sm bg-white mb-6 shadow-sm">
            Testimonials
          </div>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.75rem] font-extrabold tracking-tight text-black text-center mb-1">
            Trusted by creatives and leaders
          </h2>
          <h2 className="text-[2rem] leading-[1.1] md:text-[2.75rem] font-extrabold tracking-tight text-secondary text-center mb-10">
            from various industries
          </h2>

          <div className="w-full relative flex items-center justify-center">
            {/* Navigation Arrows */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 md:-left-6 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Desktop 3-Card view */}
            <div className="hidden lg:flex relative w-full h-[400px] gap-6 px-12 overflow-hidden">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.img
                  key={images[currentIndex] + '-d1'}
                  src={images[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-1/3 h-full object-cover rounded-2xl shadow-sm"
                />
                <motion.img
                  key={images[(currentIndex + 1) % images.length] + '-d2'}
                  src={images[(currentIndex + 1) % images.length]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-1/3 h-full object-cover rounded-2xl shadow-sm"
                />
                <motion.img
                  key={images[(currentIndex + 2) % images.length] + '-d3'}
                  src={images[(currentIndex + 2) % images.length]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-1/3 h-full object-cover rounded-2xl shadow-sm"
                />
              </AnimatePresence>
            </div>

            {/* Tablet/Mobile 1-Card view */}
            <div className="lg:hidden relative w-full h-[300px] md:h-[400px] px-12 overflow-hidden flex justify-center">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.img
                  key={images[currentIndex]}
                  src={images[currentIndex]}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full md:w-3/4 h-full object-cover rounded-2xl shadow-sm"
                />
              </AnimatePresence>
            </div>

            <button 
              onClick={handleNext}
              className="absolute right-0 md:-right-6 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
`;

content = content.replace(topSectionRegex, replacement);

// Also replace the images array to remove broken ones and use a clean set of unsplash images
const newImages = `const images = [
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
];`;

content = content.replace(/const images = \[[\s\S]*?\];/, newImages);

fs.writeFileSync(path, content, 'utf8');
console.log('Updated Testimonials.tsx layout.');
