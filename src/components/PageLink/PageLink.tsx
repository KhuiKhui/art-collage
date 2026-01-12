import cn from '@/utils/cn';
import Link from 'next/link';

interface PageLinkProps extends React.ComponentPropsWithRef<'a'> {
  href: string;
  text: string;
}

function PageLink({ text, href, className, ...base }: PageLinkProps) {
  return (
    <Link
      className={cn(
        'text-sec hover:text-tert-accent transition-all hover:underline',
        className,
      )}
      href={href}
      {...base}
    >
      {text}
    </Link>
  );
}

export default PageLink;
