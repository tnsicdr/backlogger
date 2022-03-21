import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { UserWidget } from './user-widget';

interface IAppBarProps {
  title: string;
}

export const AppBar = (props: IAppBarProps) => {
  const { title } = props;
  return (
    <nav
      aria-label="menu nav"
      className="flex w-full flex-row bg-white p-4 shadow-md"
    >
      <div className="flex w-full flex-row justify-between items-center">
        <Link href="/" aria-label="Home">
          {title}
        </Link>
        <UserWidget username="Username"/>
      </div>
    </nav>
  );
};
