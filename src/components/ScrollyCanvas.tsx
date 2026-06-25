'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';

interface ScrollyCanvasProps {
  targetRef: React.RefObject<HTMLElement | null>;
  frameCount?: number;
}

export default function ScrollyCanvas({
  targetRef,
  frameCount = 120
}: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  
  // Track scroll only within the 500vh container
  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  const currentFrameRef = useRef(0);

  useEffect(() => {
    // Preload all frames
    let loaded = 0;
    const preloadImages = () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, '0');
        img.src = `/frame_${paddedIndex}_delay-0.066s.webp`;
        
        img.onload = () => {
          loaded++;
          setLoadedCount(loaded);
          // If this image is the one we're currently trying to show, force a redraw
          if (i === currentFrameRef.current) {
            drawFrame(i);
          }
        };

        imagesRef.current[i] = img;
      }
    };
    preloadImages();

    // Resize handler
    const handleResize = () => {
      drawFrame(currentFrameRef.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [frameCount]);

  // Update current frame reference when scroll changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(latest * (frameCount - 1)))
    );
    
    if (currentFrameRef.current !== frameIndex) {
      currentFrameRef.current = frameIndex;
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  const drawFrame = (frameIndex: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete) return;

    const cw = window.innerWidth;
    const ch = window.innerHeight;

    // Ensure canvas internal pixel resolution matches window size
    if (ctx.canvas.width !== cw || ctx.canvas.height !== ch) {
      ctx.canvas.width = cw;
      ctx.canvas.height = ch;
    }

    drawScaledImage(ctx, img, cw, ch);
  };

  const drawScaledImage = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) => {
    // Prevent divide by zero if image hasn't fully loaded its metadata
    if (!img.width || !img.height) return;

    const imgRatio = img.width / img.height;
    const canvasRatio = cw / ch;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgRatio > canvasRatio) {
      drawHeight = ch;
      drawWidth = img.width * (ch / img.height);
      offsetX = (cw - drawWidth) / 2;
      offsetY = 0;
    } else {
      drawWidth = cw;
      drawHeight = img.height * (cw / img.width);
      offsetX = 0;
      offsetY = (ch - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  return (
    <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden z-0 bg-black">
      <canvas 
        ref={canvasRef} 
        className={`block w-full h-full object-cover transition-opacity duration-1000 ${loadedCount > 0 ? 'opacity-100' : 'opacity-0'}`} 
      />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" /> {/* Subtle darkening overlay to make text readable */}
    </div>
  );
}
