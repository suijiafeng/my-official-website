import PlaceholderImage from './PlaceholderImage'

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative h-96 mb-8">
      <PlaceholderImage width={1920} height={1080} text={title} />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl">{subtitle}</p>
      </div>
    </div>
  )
}

export default PageHeader