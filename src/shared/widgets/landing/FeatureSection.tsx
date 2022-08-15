interface FeatureProps {
  title: string;
  image: string;
  description: string;
}

export const FeatureSection = (props: FeatureProps) => {
  return <div>
    <div className="flex justify-between gap-4 items-center">
      <div className="w-3/5">
        <img
          className="rounded-xl"
          src={props.image} alt={props.title} />
      </div>
      <div className="w-2/5">
        <div className="text-3xl">{props.title}</div>
        <div>
          {props.description}
        </div>
      </div>
    </div>
  </div>
};
