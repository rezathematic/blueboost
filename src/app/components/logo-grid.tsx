import Image from 'next/image'

type LogoGridProps = {
  logos: Logo[]
}

type Logo = {
  src: string
  alt: string
}

const LogoGrid = ({ logos }: LogoGridProps) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          {logos.map((logo, i) => (
            <div className="bg-gray-400/5 p-8 sm:p-10" key={i}>
              <Image
                className="max-h-12 w-full object-contain"
                src={logo.src}
                alt={logo.alt}
                width={158}
                height={48}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LogoGrid
