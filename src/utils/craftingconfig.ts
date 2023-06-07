import { crafts } from '@/data'

export const tabs: Record<string, Record<string, any | void>> = {
  cantrips: {
    label: "Cantrips",
    color: "moonstone",
    data: crafts.cantrips
  },
  one: {
    label: "Crafting Level 1",
    color: "spoon",
    data: crafts.one
  },
  two: {
    label: "Crafting Level 2",
    color: "crayola",
    data: crafts.two
  },
  three: {
    label: "Crafting Level 3",
    color: "goldenrod",
    data: crafts.three
  }
}