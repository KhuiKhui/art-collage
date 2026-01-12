import cn from '@/utils/cn';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  text: string;
}

function Button({ text, className, ...base }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-tert-accent border-sec-accent rounded-md border-4 p-4 text-black transition-all',
        'hover:bg-sec active:border-sec-accent hover:border-transparent active:scale-110',
        className,
      )}
      {...base}
    >
      {text}
    </button>
  );
}

export default Button;
