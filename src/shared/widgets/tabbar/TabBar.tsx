import css from './TabBar.module.css';

interface TabBarProps<T> {
  items: T[];
  selectedItem: T;
  onTabClick: (item: T, selectedIndex: number) => void
}

export function TabBar<T extends { id: number, name: string}>(props: TabBarProps<T>) {
  const { items, selectedItem, onTabClick} = props;
  return (
    <>
      <ul data-testid="list"  className="flex gap-x-3">
        {
          items.map((item, index) => {
            return <div
                key={item.id}
                className={css.item}
                data-active={item.id === selectedItem.id}
                onClick={() => onTabClick(item, index)}
              >
                {item.name}
              </div>
            }
          )
        }
      </ul>
    </>
  )
}
