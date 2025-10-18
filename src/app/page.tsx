"use client"

import { useEffect } from "react"
import { motion, stagger, useAnimate } from "motion/react"

import Floating, {
  FloatingElement,
} from "@/app/components/ui/parallax-floating"

const exampleImages = [
  {
    url: "https://cdn.discordapp.com/attachments/1118816420600492042/1429022673966465072/Untitled_design_2.png?ex=68f4a093&is=68f34f13&hm=747cc3ba71a9b1b4f05aab9f4656c548ead17f133d1dc68de4a1b596bef5c3e5&",
    author: "Branislav Rodman",
    link: "https://unsplash.com/photos/a-black-and-white-photo-of-a-woman-brushing-her-teeth-r1SjnJL5tf0",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429023962188222595/Untitled_design_3.png?ex=68f4a1c6&is=68f35046&hm=451c68318c72ea08dc7d11ef4d684062be224873720ac37171fd1715986c38ef&=&format=webp&quality=lossless&width=1006&height=1006",
    link: "https://unsplash.com/photos/a-painting-of-a-palm-leaf-on-a-multicolored-background-AaNPwrSNOFE",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "https://cdn.discordapp.com/attachments/1118816420600492042/1429025761490239568/Untitled_design_4.png?ex=68f4a373&is=68f351f3&hm=da3455c843559d1e314fdff911e069ea6d99219bc019885b447afbce2bc3a9c2&",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-crowd-of-people-UgbxzloNGsc",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429028254584410142/Untitled_design_5.png?ex=68f4a5c5&is=68f35445&hm=69817d513648b41710e627eac8e69d0e97642ba465b551fb3a0d147ba0969361&=&format=webp&quality=lossless&width=902&height=902",
    link: "https://unsplash.com/photos/rippling-crystal-blue-water-9-OCsKoyQlk",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429028254030758030/Untitled_design_6.png?ex=68f4a5c5&is=68f35445&hm=039df04c5bf6510681ac7a69a6d4ff1cb74799c0c9f0b51d295e68d2ea046e41&=&format=webp&quality=lossless&width=902&height=902",
    link: "https://unsplash.com/de/fotos/mann-im-schwarzen-hemd-unter-blauem-himmel-m8RDNiuEXro",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429028253330571295/Untitled_design_7.png?ex=68f4a5c5&is=68f35445&hm=a6dbbf98b79cda69916dbbf335c57d1d4f618d55d8d08b11a170e65f6a4a9804&=&format=webp&quality=lossless&width=902&height=902",
    link: "https://unsplash.com/photos/a-woman-with-a-flower-crown-on-her-head-0S3muIttbsY",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429028939342544897/Untitled_design_8.png?ex=68f4a669&is=68f354e9&hm=6a8ebe07f38a60d8e362a98607d465369c71c1a763535eba64b69298957d101e&=&format=webp&quality=lossless&width=902&height=902",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "https://unsplash.com/photos/a-blurry-photo-of-white-flowers-in-a-field-6qbx0lzGPyc",
  },
  {
    url: "https://media.discordapp.net/attachments/1118816420600492042/1429028938780246046/Untitled_design_9.png?ex=68f4a669&is=68f354e9&hm=760e87c82ff099a0b191c0d59ad59fdc32c6fc1a2936fa02b25974ab6ae9702d&=&format=webp&quality=lossless&width=902&height=902",
    author: "Mathilde Langevin",
    link: "https://unsplash.com/photos/a-table-topped-with-two-wine-glasses-and-plates-Ig0gRAHspV0",
    title: "A table topped with two wine glasses and plates",
  },
]

export default function Preview() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [animate])

  return (
    <div
      className="relative flex w-full h-screen justify-center items-center bg-black overflow-hidden"
      ref={scope}
    >
      <motion.div
        className="z-50 text-center space-y-4 items-center flex flex-col"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.88, delay: 1.5 }}
      >
        <p className="text-5xl md:text-7xl z-50 text-white font-calendas italic">
          nirvana.
        </p>
        <p className="text-xs z-50 hover:scale-110 transition-transform bg-white text-black rounded-full py-2 w-25 cursor-pointer">
          Coming soon
        </p>
      </motion.div>

      <Floating sensitivity={-1} className="overflow-hidden">
        <FloatingElement depth={0.5} className="top-[8%] left-[15%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[0].url}
            alt={exampleImages[0].title}
            className="w-16 h-16 md:w-24 md:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[10%] left-[35%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[1].url}
            alt={exampleImages[1].title}
            className="w-20 h-20 md:w-28 md:h-28 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[2%] left-[55%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[2].url}
            alt={exampleImages[2].title}
            className="w-28 h-40 md:w-40 md:h-52 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[0%] left-[78%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[3].url}
            alt={exampleImages[3].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[40%] left-[8%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[4].url}
            alt={exampleImages[4].title}
            className="w-28 h-28 md:w-36 md:h-36 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={2} className="top-[60%] left-[72%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[7].url}
            alt={exampleImages[7].title}
            className="w-28 h-28 md:w-36 md:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[65%] left-[20%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[5].url}
            alt={exampleImages[5].title}
            className="w-40 md:w-52 h-full object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
        <FloatingElement depth={1} className="top-[75%] left-[50%]">
          <motion.img
            initial={{ opacity: 0 }}
            src={exampleImages[6].url}
            alt={exampleImages[6].title}
            className="w-24 h-24 md:w-32 md:h-32 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform"
          />
        </FloatingElement>
      </Floating>
    </div>
  )
}