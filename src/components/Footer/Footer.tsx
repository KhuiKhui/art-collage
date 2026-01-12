import cn from '@/utils/cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

function Footer(className: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-sec-accent text-sec flex w-full flex-row items-center justify-center gap-6 rounded-t-full border-t-4 border-t-gray-500 p-4',
        className,
      )}
    >
      <Link href="https://github.com/KhuiKhui/art-collage" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          className="hover:text-tert size-6 transition-all hover:scale-110"
        />
      </Link>
      <div className="bg-sec size-1 rounded-full"></div>
      <Link href="https://www.instagram.com/khui_cachua/" target="_blank">
        <FontAwesomeIcon
          icon={faInstagram}
          className="hover:text-tert size-6 transition-all hover:scale-110"
        />
      </Link>
    </div>
  );
}

export default Footer;
