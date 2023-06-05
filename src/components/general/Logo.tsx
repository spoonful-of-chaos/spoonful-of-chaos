import Image from 'next/image';

export const Logo = ({ width = 80, height = 30 }: {width: any; height: any}) => (
  <Image
    src="/_next/static/media/new_logo.1aa05d07.png"
    alt="the spoon itself"
    width={width}
    height={height}
  />
);