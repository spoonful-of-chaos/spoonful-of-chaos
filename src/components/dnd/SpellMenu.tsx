import { useEffect, useState } from "react";
import { Card } from "../general/Card";
import { SpellContent } from "./SpellContent";

export const SpellMenu = ({ tabs, list, listHandler }: { tabs: Record<string, Record<string, any>>, list: Record<string, any>, listHandler: any }) => {
  const [tab, setTab] = useState(Object.keys(tabs)[0]);
  const [visible, setVisible] = useState(tabs[tab].data);
  const [selected, setSelected] = useState<Record<string, any>>(tabs[tab].data[Object.keys(tabs[tab].data)[0]]);

  const handleTabClick = (t: string) => {
    setTab(t);
    setVisible(tabs[t]?.data);
  }

  const handleMenuClick = (n: string) => {
    setSelected(visible[n])
  }

  const handleListClick = () => {
    listHandler({
      ...list,
      [tab]: {
        ...list[tab],
        [selected.name]: {
          type: {
            label: tabs[tab]?.label,
            color: tabs[tab]?.color
          },
          ...selected
        }
      },
    })
  }

  const closeHandler = (section: string, name: string) => {
    const curr = list;
    if (curr !== undefined) {
      delete curr[section][name];
    }

    listHandler({...curr});
  }

  useEffect(() => {
    setVisible(tabs[tab].data);
    setSelected(tabs[tab].data[Object.keys(tabs[tab].data)[0]]);
  }, [tab])

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-6 mb-8">
        {list && Object.keys(list).map((l: string) => (
          <>
            {Object.keys(list[l]).map((m: string, i: number) => (
              <Card key={`spell-${l}-${m}-${i}`} close={() => closeHandler(l, m)}>
                <SpellContent spell={list[l][m]} textColor="ghost"/>
              </Card>
            ))}
          </>
        ))}
      </div>
      <div className={`border-b-4 border-${tabs[tab].color} flex gap-1`}>
        {Object.keys(tabs).map((t: string, i: number) => (
          <button type="button" key={`category-${t}-${i}`} onClick={() => handleTabClick(t)} className={`bg-${t === tab ? tabs[t].color : 'ghost'} text-black rounded-t font-display py-1 px-2`}>{tabs[t].label}</button>
        ))}
      </div>
      <div className="bg-ghost text-black py-4 md:grid md:grid-cols-4 md:grid-flow-col">
        <div className="md:col-span-3 md:order-last pb-2 px-4">
          {selected && <SpellContent spell={selected} textColor="black" />}
          {selected && <button onClick={handleListClick} className="rounded bg-moonstone hover:bg-crayola-light text-sm font-display px-4 py-2">Add to My List</button>}
        </div>
        <div className="relative">
          <div className={`flex flex-col items-start border-t-2 md:border-r-2 md:border-t-0 border-raisin max-h-30 overflow-auto`}>
            {Object.keys(visible)?.map((c: any, i: number) => (
              <button key={`option-${c}-${i}`} type="button" className={`w-full text-left py-2 px-4 hover:bg-crayola-light font-display bg-${visible[c].name === selected?.name ? tabs[tab].color : 'transparent'}`} onClick={() => handleMenuClick(visible[c].name)}>{visible[c].name}</button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}