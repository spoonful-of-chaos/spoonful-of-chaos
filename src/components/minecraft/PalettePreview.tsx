import { ImageWrapper } from '../general/ImageWrapper';

export const PreviewTexture = ({ t, clearPreview }: any) => {
  return (
    <button className='flex-col justify-center' type="button" onClick={() => clearPreview(t.texture_path)} >
      <ImageWrapper
        src={`/minecraft_textures/${t.texture_path}`}
        alt={t.name}
        width="200"
        height="200"
        className='pixelated'
        unoptimized
      />
    </button>
  )
}

export const PreviewTitle = ({ t }: any) => {
  return (
    <div className='flex items-center space-x-1'>
      <ImageWrapper
        src={`/minecraft_textures/${t.texture_path}`}
        alt={t.name}
        width="20"
        height="20"
        className='pixelated rounded-sm'
      />
      <p className='m-0 text-gray-600 font-sans'>{t.name}</p>
    </div>
  )
}


export const PalettePreview = ({ preview, clearPreview }: { preview: Record<any, any>[], clearPreview: any }) => {
  return (
    <div className='w-full space-y-4 pb-4 border-b-raisin border-1 border'>
      {preview.length == 0 && <p>Select from the textures below to build your palette.</p>}
      <div className='flex'>
        <div className='max-w-sm'>
          <div className='grid grid-cols-3 gap-0'>
            {preview.map((t: any) => <PreviewTexture t={t} key={t.texture_path} clearPreview={clearPreview} />)}
          </div>
        </div>
      </div>
      <div className='flex-col space-y-2'>
        {preview.map((t: any) => <PreviewTitle key={t.texture_path} t={t} />)}
      </div>
    </div>
  )
}