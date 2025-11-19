import { motion, useScroll, useTransform  } from 'framer-motion'
import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import { MotionValue } from "framer-motion"
import type { ReactNode } from "react"


import {
  Antenna,
  ChartNoAxesCombined,
  Crosshair,
  SlidersHorizontal,
  Sprout,
  TrendingUp,
  VolumeOff,
} from 'lucide-react'


export interface CardProps {
  i: number
  title: string
  description: string
  icon: ReactNode
  color: string
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}


const CartItems= [
  {
    id: 1,
    title: 'We don’t follow trends',
    description: 'We design what proper trading should feel like',
    icon: <TrendingUp size={38} color="red" />,
    color: '#1f2937',
  },

  {
    id: 2,
    title: 'Trade with clarity',
    description: 'Every rule exists to empower, not restrict',
    icon: <Antenna size={38} color="red" />,
    color: '#334155',
  },

  {
    id: 3,
    title: 'Every parameter matters',
    description: 'Transparent, balanced, and fair from day one',
    icon: <SlidersHorizontal size={38} color="red" />,
    color: '#0f172a',
  },

  {
    id: 4,
    title: 'Grow without limits',
    description: 'The better you perform, the more we scale with you',
    icon: <Sprout size={38} color="red" />,
    color: '#1e293b',
  },

  {
    id: 5,
    title: 'Your focus on the charts',
    description: 'We handle everything else from funding to payouts',
    icon: <ChartNoAxesCombined size={38} color="red" />,
    color: '#172554',
  },

  {
    id: 6,
    title: 'No distractions, No noise',
    description: 'Just pure performance',
    icon: <VolumeOff size={38} color="red" />,
    color: '#1f2937',
  },

  {
    id: 7,
    title: 'Precision. Control. Freedom',
    description: 'Built for traders who demand more',
    icon: <Crosshair size={38} color="red" />,
    color: '#0f172a',
  },
]

export default function Cards() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <ReactLenis root>
      <main ref={container} className=" bg-[#171d32]">

        <section className="text-white ">
          {CartItems.map((item, i) => {
            const targetScale = Math.max(0.6, 1 - (CartItems.length - i) * 0.02)
            return (
              <Card
                key={item.id}
                i={i}
                title={item.title}
                description={item.description}
                icon={item.icon}
                color={item.color}
                progress={scrollYProgress}
                range={[i * 0.1, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </section>
      </main>
    </ReactLenis>
  )
}

function Card({
   i, 
   title,
    description, 
    icon, 
    color, 
    progress, 
    range, 
    targetScale 
  }: CardProps) {
  const ref = useRef(null)
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div ref={ref} className="h-screen flex items-center justify-center sticky top-0 pb-36">
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-12vh + ${i * 18}px)`,
        }}
        className="bg-gradient-to-tr from-black via-gray-900 to-amber-900/40
             flex flex-col justify-end relative -top-[25%]
             h-[350px] w-[60%] p-10 origin-top rounded-3xl
             border border-white/10 shadow-xl"
      >
        
        <div className="absolute top-16 left-20 
                p-3 w-fit rounded-2xl bg-white/10 
                border border-white/20 shadow-md">
            {icon}
         </div>


        <h1 className="text-4xl font-semibold mb-4 ml-8">{title}</h1>

        <p className="text-gray-400 text-xl leading-relaxed ml-8 mb-8">{description}</p>

      </motion.div>
    </div>
  )
}












