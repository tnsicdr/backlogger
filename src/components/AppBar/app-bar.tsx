import UserWidget from '../UserWidget/user-widget';

interface IAppBarProps {
  title: string;
}

export const AppBar = (props: IAppBarProps) => {
  const { title } = props;
  return (
    <div className="flex flex-row w-full border-b p-4 border-gray-600">
      <div>
        {title}
      </div>
      <div>
        <UserWidget />
      </div>
    </div>
  )
}