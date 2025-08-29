import Image, { ImageProps } from 'next/image';

const BASE_PATH = process.env.NODE_ENV === "production" ? "/spoonful-of-chaos" : "";

export const ImageWrapper = (props: ImageProps) => {
  const src = 
    typeof props.src === "string" && props.src.startsWith("/")
      ? `${BASE_PATH}${props.src}`
      : props.src;

  return (
      <Image {...props} src={src} />
  )
}