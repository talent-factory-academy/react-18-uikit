interface HeroProps {
  title: string;
  description: string;
  image: string;
}

export const HeroSection = (props: HeroProps) => {
  return <div>
    <div
      className="bg-cover bg-center h-48 relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl"
      style={{ backgroundImage: `url('${props.image}')`}}
    >
      <div className="absolute top-4 left-0 p-4">
        <div className="text-4xl">{props.title}</div>
        <div className="text-xl">{props.description}</div>
      </div>
    </div>
  </div>
};
