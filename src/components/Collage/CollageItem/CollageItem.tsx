import cn from '@/utils/cn';
import Image from 'next/image';

interface CollageItemProps extends React.ComponentPropsWithRef<'div'> {
  src: string;
}

function CollageItem({ src, className, ...base }: CollageItemProps) {
  return (
    <div
      className={cn(
        'relative flex w-fit flex-col items-center justify-center rounded-md',
        className,
      )}
      {...base}
    >
      <div className="relative flex size-72 grow">
        <Image
          alt="collageitem"
          src={src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-md object-cover"
        />
      </div>
      <div className="bg-sec-accent">THIS IS THE DESC</div>
    </div>
  );
}

export default CollageItem;
