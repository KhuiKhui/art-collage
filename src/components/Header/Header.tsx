import cn from '@/utils/cn';
import PageLink from '../PageLink/PageLink';

function Header(className: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-sec-accent flex w-full flex-row items-center justify-center gap-8 rounded-b-full border-b-4 border-b-gray-500 p-4',
        className,
      )}
    >
      <PageLink href="/" text="Home" />
      <PageLink href="/about" text="About" />
      <PageLink href="/contacts" text="Contacts" />
    </div>
  );
}

export default Header;
