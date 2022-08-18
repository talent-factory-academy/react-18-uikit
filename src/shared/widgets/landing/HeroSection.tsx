interface HeroProps {
  title: string;
  description: string;
  image: string;
  color?: string;
}

const HeroSection = (props: HeroProps) => {
  const { title, description, image, color = 'black'} = props;
  return <div>
    <div
      className="bg-cover bg-center h-48 relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
      style={{ backgroundImage: `url('${image}')`}}
    >
      <div className="absolute top-4 left-0 p-4" style={{ color}}>
        <div className="text-4xl">{title}</div>
        <div className="text-xl">{description}</div>
      </div>
    </div>
  </div>
};

export default HeroSection;
