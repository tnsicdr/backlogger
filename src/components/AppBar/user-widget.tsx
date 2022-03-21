import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface IUserWidgetProps {
  username: string;
}

export const UserWidget = (props: IUserWidgetProps) => {
  const { username } = props;
  return (
    <Link href="/user" passHref aria-label="User page">
      <a className="flex flex-row items-center">
        <FontAwesomeIcon icon={faCircleUser} />
        <span className="ml-2">{username}</span>
      </a>
    </Link>
  );
};
