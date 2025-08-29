import { PalettePreview } from "@/components/minecraft/PalettePreview";
import { TextureGrid } from "@/components/minecraft/TextureGrid";
import { getBlocks } from "@/lib/blocks"
import { useState } from "react";

const Palette = ({ allBlocks }: { allBlocks: any[] }) => {
  const [previewList, setPreviewList] = useState<string[]>([])
  const [preview, setPreview] = useState<Record<any, any>[]>([])

  const handlePreview = (nameList: string[]) => {
    const previewTextures = allBlocks.filter((t: any) => nameList.includes(t.texture_path))
    setPreview(previewTextures)
  }

  const handleSetPreview = (incoming: string) => {
    const newList = previewList.concat([incoming])
    const dedupe = [...new Set(newList)]
    console.log('handleSetPreview: ', dedupe)
    setPreviewList(dedupe)

    handlePreview(dedupe)
  }

  const handlePreviewClear = (incoming: string) => {
    const newList = previewList.filter((p: string) => p !== incoming)
    setPreviewList(newList)

    handlePreview(newList)
  }

  return (
    <>
      <h1 className="reverse-ghost">Minecraft Palette Builder</h1>
      <div className="bg-ghost mt-4 text-black p-4 gap-4 flex flex-wrap justify-between">
        <PalettePreview preview={preview} clearPreview={handlePreviewClear} />
        <TextureGrid textureMap={allBlocks} setPreview={handleSetPreview} />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const allBlocks = await getBlocks();
  return {
    props: {
      allBlocks,
    },
  };
}

export default Palette;