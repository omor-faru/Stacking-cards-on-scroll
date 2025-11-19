


// import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
// import { useRef, ReactNode } from 'react'
// import { ReactLenis } from 'lenis/react'

// import {
//   Antenna,
//   ChartNoAxesCombined,
//   Crosshair,
//   SlidersHorizontal,
//   Sprout,
//   TrendingUp,
//   VolumeOff,
// } from 'lucide-react'

// interface CardProps {
//   i: number;
//   title: string;
//   description: string;
//   icon: ReactNode;
//   progress: MotionValue<number>;
//   range: number[];
//   targetScale: number;
// }

// interface CartItem {
//   id: number;
//   title: string;
//   description: string;
//   icon: ReactNode;
// }


// const CartItems: CartItem[] = [
//   {
//     id: 1,
//     title: 'We don’t follow trends',
//     description: 'We design what proper trading should feel like',
//     icon: <TrendingUp size={36} color="red" />,
//   },
//   {
//     id: 2,
//     title: 'Trade with clarity',
//     description: 'Every rule exists to empower, not restrict',
//     icon: <Antenna size={36} color="red" />,
//   },
//   {
//     id: 3,
//     title: 'Every parameter matters',
//     description: 'Transparent, balanced, and fair from day one',
//     icon: <SlidersHorizontal size={36} color="red" />,
//   },
//   {
//     id: 4,
//     title: 'Grow without limits',
//     description: 'The better you perform, the more we scale with you',
//     icon: <Sprout size={36} color="red" />,
//   },
//   {
//     id: 5,
//     title: 'Your focus on the charts',
//     description: 'We handle everything else from funding to payouts',
//     icon: <ChartNoAxesCombined size={36} color="red" />,
//   },
//   {
//     id: 6,
//     title: 'No distractions, No noise',
//     description: 'Just pure performance',
//     icon: <VolumeOff size={36} color="red" />,
//   },
//   {
//     id: 7,
//     title: 'Precision. Control. Freedom',
//     description: 'Built for traders who demand more',
//     icon: <Crosshair size={36} color="red" />,
//   },
// ]

// export default function Cards() {
//   const container = useRef<null | HTMLDivElement>(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   })

//   return (
//     <ReactLenis root>
//       <main ref={container} className="bg-[#171d32]">
//         <section className="text-white">
//           {CartItems.map((item, i) => {
//             const targetScale = Math.max(0.6, 1 - (CartItems.length - i) * 0.05);
//             return (
//               <Card
//                 key={item.id}
//                 i={i}
//                 title={item.title}
//                 description={item.description}
//                 icon={item.icon}
//                 progress={scrollYProgress}
//                 range={[i * 0.2, 1]}
//                 targetScale={targetScale}
//               />
//             )
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   )
// }

// function Card({
//   i,
//   title,
//   description,
//   icon,
//   progress,
//   range,
//   targetScale,
// }: CardProps) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div ref={ref} className="h-screen flex items-start justify-center sticky top-0 pt-20">
//       <motion.div
//         style={{
//           scale,
//           top: `calc(-5vh + ${i * 25}px)`,
//         }}
//         className="bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
//                    flex flex-col justify-end relative -top-[25%]
//                    h-[330px] w-[70%] rounded-2xl p-10 origin-top
//                    border border-white/10 shadow-xl"
//       >
        
//         <div
//           className="absolute top-12 left-10 
//                      p-3 w-fit rounded-2xl bg-white/10 
//                      border border-white/20 shadow-md"
//         >
//           {icon}
//         </div>

       
//         <div className="absolute bottom-6 left-10 right-10">
//           <h1 className="text-4xl font-semibold mb-2">{title}</h1>
//           <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
