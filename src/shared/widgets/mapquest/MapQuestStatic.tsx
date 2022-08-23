
interface MapQuestStaticProps {
  API_KEY: string;
  city: string
}

export const DEFAULT_WIDTH = 200;
export const DEFAULT_HEIGHT = 150;

const MapQuestStatic = (props: MapQuestStaticProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
  const {
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    city,
    API_KEY,
    ...rest
  } = props;

  const url = `${process.env.REACT_APP_MAPQUEST_API}?key=${props.API_KEY}&center=${props.city}&size=600,400`;
  return <div>
    <small>{city}</small>
    <img src={url}   alt={city} width={width} height={height} {...rest}   />
  </div>
};

export default MapQuestStatic;
