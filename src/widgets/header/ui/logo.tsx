import Image from 'next/image';

export const Logo = () => {
  return (
    <div className="flex items-center gap-1.5">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={90}
        height={90}
        loading="eager"
      />
      <h1>Page&Co.</h1>
    </div>
  );
};
