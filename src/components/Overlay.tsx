'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

interface OverlayProps {
  targetRef: React.RefObject<HTMLElement | null>;
}

export default function Overlay({ targetRef }: OverlayProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef as React.RefObject<HTMLElement>,
    offset: ["start start", "end end"]
  });

  // Section 1: "Arif Iqbal. Performance Marketer." (0% to 30% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.25, 0.3, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  // Section 2: "I run your ads harder than you do and increase your revenue." (30% to 60% scroll)
  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.3, 0.55, 0.6, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.6], [50, -50]);

  // Section 3: "Performance Marketing to SEO." (60% to 80% scroll)
  const opacity3 = useTransform(scrollYProgress, [0, 0.55, 0.6, 0.75, 0.8, 1], [0, 0, 1, 1, 0, 0]);
  const y3 = useTransform(scrollYProgress, [0.55, 0.8], [50, -50]);

  // Section 4: "Website Design." (80% to 100% scroll)
  const opacity4 = useTransform(scrollYProgress, [0, 0.75, 0.8, 1], [0, 0, 1, 1]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.8, 1], [50, 0, 0]);

  return (
    <div className="absolute top-0 left-0 w-full h-[500vh] pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 xl:px-32">
        
        {/* Section 1 */}
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute left-0 right-0 flex justify-center">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-4 drop-shadow-2xl">
              Arif Iqbal
            </h1>
            <p className="text-2xl md:text-4xl text-gray-300 font-medium tracking-wide drop-shadow-md">
              Performance Marketer.
            </p>
          </div>
        </motion.div>

        {/* Section 2 */}
        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute left-8 xl:left-32 max-w-4xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-xl">
            I run your ads harder than you do<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">and increase your revenue.</span>
          </h2>
        </motion.div>

        {/* Section 3 */}
        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute right-8 xl:right-32 max-w-4xl text-right">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-xl">
            Performance Marketing <br/>to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">SEO.</span>
          </h2>
        </motion.div>

        {/* Section 4 */}
        <motion.div style={{ opacity: opacity4, y: y4 }} className="absolute left-8 xl:left-32 max-w-4xl">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-xl">
            Website<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Design.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
