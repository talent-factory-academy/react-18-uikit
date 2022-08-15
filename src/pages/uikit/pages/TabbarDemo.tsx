import { useState } from 'react';
import { TabBar } from '../../../shared/widgets/tabbar/TabBar';

interface MySocial {
  id: number;
  name: string;
  link: string;
}

const socials: MySocial[] = [
  { id: 11, name: 'WebSite', link: 'fabiobiondi.dev'},
  { id: 12, name: 'Youtube', link: 'YT'},
  { id: 13, name: 'Twitch', link: 'twitch'},
]

export const TabbarDemo = () => {
  const [selectedSocial, setSelectedSocial] = useState<MySocial>(socials[0])

  function selectHandler(item: MySocial, selectedIndex: number) {
    setSelectedSocial(item)
  }

  return (
    <div>
      <h1>Tabbar Demo</h1>


      <TabBar<MySocial>
        selectedItem={selectedSocial}
        items={socials}
        onTabClick={selectHandler}
      />




      <div className="border border-slate-200 border-solid rounded my-3 p-5 max-w-sm">
        <a href={selectedSocial.link}>Visit {selectedSocial.name}</a>
      </div>
    </div>
  )
};
