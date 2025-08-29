import Image from 'next/image';
import { useState } from 'react';
import { Filter } from '../general/Filter';
import { Search } from '../general/Search';

const Texture = ({ t, setPreview }: any) => {
  return (
    <div style={{ maxWidth: '100px' }}>
      <button className='flex-col justify-center' type="button" onClick={() => setPreview(t.texture_path)} >
        <Image
          src={`/minecraft_textures/${t.texture_path}`}
          alt={t.name}
          width="100"
          height="100"
          className='pixelated'
          unoptimized
        />
        <p className='text-xs m-0 flex flex-wrap'>{t.name}</p>
      </button>
    </div>
  )
}

export const TextureGrid = ({ textureMap, setPreview }: any) => {
  const [filteredTextures, setTextures] = useState(textureMap.filter((t: any) => t.material !== 'other'))

  const materials = textureMap.reduce((acc: any, curr: any) => {
    return {
      ...acc,
      [curr.material]: false
    }
  }, {})

  const [filter, setFilters] = useState({
    material: {
      label: 'Material',
      options: {
        ...materials
      }
    }
  })

  const handleFilter = (selected: any) => {
    setFilters(selected)

    const selectedMaterials = Object.keys(selected.material.options).filter((f) => selected.material.options[f])

    const selectedTextures = textureMap.filter((t: any) => selectedMaterials.includes(t.material))

    if (selectedTextures.length === 0) {
      setTextures(textureMap.filter((t: any) => t.material !== 'other'))
    } else {
      setTextures(selectedTextures)
    }

  }

  const searchHandler = (val: string) => {
    setTextures(textureMap.filter((item: any) => item.name.toLowerCase().includes(val.toLowerCase())))
  }

  return (
    <div className='w-full'>
      <Search changeHandler={searchHandler} />
      {/* <Filter filters={filter} setFilters={handleFilter} /> */}
      <div className='w-full py-4 overflow-y-scroll max-h-80'>
        <div className='flex flex-wrap gap-1'>
          {filteredTextures.map((t: any) => <Texture t={t} key={t.texture_path} setPreview={setPreview} />)}
        </div>
      </div>

    </div>
  )
}