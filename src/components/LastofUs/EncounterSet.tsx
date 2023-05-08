import { useSettings } from "@/context/settings.context";
import { EncounterCard } from "./EncounterCard";

export const EncounterSet = () => {
  const { state } = useSettings();
  return (
    <>
      {state?.daySets && state.daySets.map((d: string[], i: number) => (
        <div key={`adventureSet${i}`} className="max-w-sm mx-4">
          <h2 className="px-6 text-xl font-bold">Adventure Day Option {i + 1}</h2>
          {d.map((e: string) => (
            <EncounterCard key={`adventure${i}`} encounter={e} index={i} />
          ))}
        </div>
      ))}
    </>
  );
};