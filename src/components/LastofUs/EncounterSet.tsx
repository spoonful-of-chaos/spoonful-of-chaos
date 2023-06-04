import { useSettings } from "@/context/settings.context";
import { EncounterCard } from "./EncounterCard";
import { Card } from "../general/Card";

export const EncounterSet = (props: any) => {
  const { state } = useSettings();
  return (
    <div {...props}>
      {state?.daySets && state.daySets.map((d: string[], i: number) => (
        <Card key={`adventureSet${i}`} className="max-w-sm mx-4" variant="black">
          <h6>Adventure Day Option {i + 1}</h6>
          {d.map((e: string) => (
            <EncounterCard key={`adventure${i}`} encounter={e} index={i} />
          ))}
        </Card>
      ))}
    </div>
  );
};