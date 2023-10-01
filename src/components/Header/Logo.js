import Link from 'next/link';
import Image from 'next/image';
import profileImg from '../../../public/profile-img.webp';

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark  '>
      <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
        <Image
          src={profileImg}
          alt='Codebucks'
          className='w-fullh-auto rounded-full'
        />
      </div>
      <span className='font-bold text-xl'>CodeBucks </span>
    </Link>
  );
};

export default Logo;
