import { SpellMenu } from "@/components/general/SpellMenu";
import { tabs } from "@/utils/craftingconfig";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation"
import { useState, useEffect } from "react";

const Crafting = () => {
  const [ list, setList ] = useState({});

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleList = (item: any) => {
    const params = new URLSearchParams();

    Object.keys(item).map((l: string) => {
      let name = l;
      let value = '';

      Object.keys(item[l as keyof typeof item]).map(m => {
        value = value + m + '|'
      })

      params.set(name, value);
    })

    router.push(pathname + '?' + params)

    setList(item)
  }

  useEffect(() => {
    let all = {}
    for (const [key, value] of searchParams.entries()) {
      const valArr = value.split('|').filter(n => n);

      const set = {
        [key]: valArr.reduce((a, v) => (
          { 
            ...a, 
            [v]: {
              ...tabs[key].data[v],
              type: {
                label: tabs[key]?.label,
                color: tabs[key]?.color
              },
            }
          }
        ), {})
      }

      all = {
        ...all,
        ...set
      }
    }

    setList(all);
  }, [searchParams])

  return (
    <> 
      <h1 className="mb-2 reverse-moon">Cantrips & Crafting</h1>
      <div className="md:grid md:grid-cols-2 md:gap-8">
        <p>
          To fit into the world of The Last of Us, typical 5e adventure spells & cantrips have been replaced by crafting recipes. It&apos;s not plausible that every character would know much about how to create the variety of things used in the game, so only certain classes have access to these “recipes”. However, any of those classes can use any of the available crafting recipes.
        </p>
        <p>Below is a tabbed menu of the available recipes. You can page through and view each one, or select them to add the cards to your own list. Bookmark the page once you have everything you want selected, and this page will load with your preselected list!</p>
      </div>
      <div className="mt-8">
        <SpellMenu tabs={tabs} list={list} listHandler={handleList} />
      </div>
    </>
  )
};

export default Crafting;