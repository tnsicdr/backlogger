import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface IAppBarProps {
  title: string;
}

export const AppBar = (props: IAppBarProps) => {
  const { title } = props;
  return (
    <nav className="flex w-full flex-row border-b border-gray-600 bg-white p-4 shadow-md">
      <div className="flex w-full flex-row justify-between">
        <Link href="/" aria-label="Homepage">
          {title}
        </Link>
        <Link href="/user" passHref aria-label="User page">
          <FontAwesomeIcon icon={faCircleUser} />
        </Link>
      </div>
    </nav>
  );
};
