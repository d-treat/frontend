import { features } from "@/data"
import Image from "next/image"
import Button from "../common/button"
import Link from "next/link"

export const Features = () => {
  return (
    <div className='flex items-center gap-6 primary-padding py-12'>

      <div className='relative w-[45vw]'>
        <div className='space-y-3  pt-8'>
          <p className='text-secondary-100 text-2xl font-medium md:max-w-sm xl:max-w-md'>What makes us the best choice to digital healthcare</p>
          <p className='text-secondary-100/80 md:max-w-sm xl:max-w-md'>Medical services made easy and accessible
            anywhere! Learn more about the best solution
            for modern and digital healthcare.</p>
        </div>
        <Image src={'/images/features-bg.svg'} alt="" className="absolute -top-12 right-2" width={350} height={500} />
      </div>
      <div className="space-y-6 w-[55vw]">
        <div className="grid grid-cols-2 gap-6">
          {
            features.map(feature => (
              <div key={feature.title} style={{
                background: feature.bg
              }}
                className="w-full flex  justify-center flex-col rounded-xl px-6 py-12 ">
                <h2 className={`text-lg `}
                  style={{
                    color: feature.textColor
                  }}
                >{feature.title}</h2>
                <p className="text-secondary-100/80 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            ))
          }
        </div>
        <Link href={'/request-partnership'} className="mt-6">
          <Button dark className="w-max px-6">
            Request Partnership
          </Button>
        </Link>
      </div>
    </div >
  )
}
