import clsx from 'clsx';

export interface News {
  title: string;
  description: string;
  link: string;
}

interface NewsProps {
  title: string;
  items: News[]
}

export const NewsSection = (props: NewsProps) => {
  return (
      <div className="my-5">
        <div className="text-5xl mb-5">{props.title}</div>
        <div className="flex gap-3 justify-between">
        {
          props.items.map((item, i) => {
            return <div
            key={i}
              className={clsx(
                { 'w-full': props.items.length === 1 },
                { 'w-1/2': props.items.length === 2 },
                { 'w-1/3': props.items.length === 3 },
              )}
            >
              <div className="text-xl">{item.title}</div>
              <div>{item.description}</div>
            </div>
          })
        }
        </div>
      </div>
    )
};
