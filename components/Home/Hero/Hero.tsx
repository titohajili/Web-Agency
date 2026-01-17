"use client"
import Link from 'next/link';
import React from 'react'
import { useEffect, useRef } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { GiSparkles } from 'react-icons/gi';
import { TypeAnimation } from 'react-type-animation';



const Hero = () => {

      const canvasRef = useRef<HTMLCanvasElement>(null);
    
      useEffect(()=>{
        const canvas = canvasRef.current;
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        if(!ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const particles: Array<{
          x: number;
          y: number;
          size: number;
          speedX: number;
          speedY: number;
          opacity: number;
        }> = [];
    
        for(let i = 0; i < 100; i++){
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5 + 0.2
          })
        }
    
        function animate(){
          if(!canvas || !ctx) return;
    
          ctx.clearRect(0, 0, canvas.width, canvas.height);
    
          particles.forEach((partice)=>{
            ctx.beginPath();
            ctx.arc(partice.x, partice.y, partice.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${partice.opacity})`;
            ctx.fill();
    
            partice.x += partice.speedX;
            partice.y += partice.speedY;
    
            if(partice.x < 0 || partice.x > canvas.width) partice.speedX *= -1;
            if(partice.y < 0 || partice.y > canvas.height) partice.speedY *= -1;
          });
    
          requestAnimationFrame(animate);
        }
    
        animate();
    
        const handleSize = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        }
    
    
        window.addEventListener('resize', handleSize);
    
        return () => {
          window.removeEventListener('resize', handleSize);
        }
    
      },[])
    

  return (
    <div className='relative min-h-screen flex justify-center items-center overflow-hidden'>
      <canvas ref={canvasRef}  className='absolute inset-0 bg-linear-to-br from-blue-900 via-purple-900 to-pink-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900'/>
      <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <div>
          <div className='inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8'>
            <GiSparkles className='h-5 w-5 text-yellow-400'/>
            <span className='text-white font-medium'>Welcome to WebdevWarriors</span>
          </div>
        </div>
        {/* typewriter text */}
        <h1 className='text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6'>
          <TypeAnimation
           sequence={[
            "We Create Magic",
            2000,
            "We Build Dreams",
            2000,
            "We Design Future",
            2000
           ]}
           wrapper='span'
           speed={50}
           repeat={Infinity}
          />
        </h1>
        {/* description */}
        <p className='text-base sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed'>
          When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetroble.
        </p>
        {/* buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link href={"#"} className='group inline-flex items-center justify-center space-x-2 bg-white dark:bg-white text-gray-900 dark:text-gray-900 px-8  py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl'>
              <span>Get Started</span>
              <BsArrowRight className='h-5 w-5 group-hover:translate-x-1 transition-transform'/>
            </Link>

            <Link href={'#'} className='inline-flex items-center justify-center space-x-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105'>
              <span>Contact Us</span>
            </Link>
        </div>
      </div>

          {/* animated mouse */}
          <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce'>
            <div className='w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2'>
              <div className='w-1 h-3 bg-white rounded-full'></div>
            </div>
          </div>
    </div>

  )
}

export default Hero
