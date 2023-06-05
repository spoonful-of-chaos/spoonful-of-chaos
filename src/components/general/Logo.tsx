import Image from 'next/image';
import logopic from '../../images/new_logo.png';

export const Logo = (props: any) => (
  <Image
    src={logopic}
    alt="the spoon itself"
    width="80"
    height="30"
    {...props}
  />
);