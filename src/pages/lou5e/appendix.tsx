import { StatBlock } from "@/components/dnd/StatBlock";
import { Filter, FilterConfig } from "@/components/general/Filter";
import { getSortedCreatureData } from "@/lib/creatures";
import { Creature, CreatureTypes } from "@/lib/types";
import { useState } from "react";

const Appendix = ({ allCreatureData }: { allCreatureData: Creature[] }) => {
  const [ creatures, setCreatures ] = useState<Creature[]>(allCreatureData);

  const challengeRatings = allCreatureData.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.challenge]: false
    }
  }, {})

  const creatureTypes = allCreatureData.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.type]: false
    }
  }, {})

  const creatureNames = allCreatureData.reduce((acc, curr) => {
    return {
      ...acc,
      [curr.title]: false
    }
  }, {})

  const [ filters, setFilters ] = useState<FilterConfig>({
      challenge: {
        label: 'Challenge Rating',
        options: {
          ...challengeRatings
        }
      },
      type: {
        label: 'Creature Type',
        options: {
          ...creatureTypes
        }
      },
      name: {
        label: 'Creature Names',
        options: {
          ...creatureNames
        }
      }
    });
  
  const handleFilter = (selected: FilterConfig) => {
    setFilters(selected)
    const selectedChallengeFilters = Object.keys(selected.challenge.options).filter((f) => selected.challenge.options[f])
    const selectedTypeFilters = Object.keys(selected.type.options).filter((f) => selected.type.options[f])
    const selectedNameFilters = Object.keys(selected.name.options).filter((f) => selected.name.options[f])

    setCreatures(allCreatureData.filter((c: Creature) => {
      let challengeMatch = true;
      let typeMatch = true;
      let nameMatch = true;

      if (selectedChallengeFilters.length > 0) {
        challengeMatch = selectedChallengeFilters.some((h: string) => h === c.challenge)
      }
      if (selectedTypeFilters.length > 0) {
        typeMatch = selectedTypeFilters.some((h: string) => h === c.type)
      }
      if (selectedNameFilters.length > 0) {
        nameMatch = selectedNameFilters.some((h: string) => h === c.title)
      }

      return challengeMatch && typeMatch && nameMatch
    }))
  }

  return (
    <>
      <h1 className="reverse-spoon">Appendix A: Creature Stat Blocks</h1>
      <div className="mt-8">
          <Filter filters={filters} setFilters={handleFilter} />
        </div>
      <div className="mt-6 md:columns-3 md:gap-4">
        {creatures.map((c: Creature) => (
          <div className="mb-4 w-full break-inside-avoid-column" key={`creature-appendix-${c.id}`}>
            {c.type === CreatureTypes.infected && (
              <StatBlock creature={c} variant="emerald-light" />
            )}
            {c.type === CreatureTypes.human && (
              <StatBlock creature={c} variant="moonstone-light" />
            )}
            {c.type === CreatureTypes.beast && (
              <StatBlock creature={c} variant="crayola-light" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allCreatureData = await getSortedCreatureData();
  return {
    props: {
      allCreatureData,
    },
  };
}

export default Appendix;