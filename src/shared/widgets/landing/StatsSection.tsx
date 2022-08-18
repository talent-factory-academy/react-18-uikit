export interface Stat {
  value: string;
  label: String;
}

interface StatsProps {
  title: string;
  items: Stat[]
}

export const StatsSection = (props: StatsProps) => {
  return (
    <div className="bg-gradient-to-r from-sky-800 to-sky-500 p-5 my-5 rounded-xl text-white">
      <div className="text-5xl text-center mb-5">{props.title}</div>
      <div className="flex justify-around text-center">
        {
          props.items.map((item, i) => <SingleStats key={i} {...item} />)
        }
      </div>
    </div>
  )
};

const SingleStats = (props: Stat) => {
  return (
    <div>

      <div className="text-4xl">{props.value}</div>
      <div>{props.label}</div>
    </div>
  )
}
