interface IAppBarProps {
  title: string;
}

export const AppBar = (props: IAppBarProps) => {
  const { title } = props;
  return (
    <div className="flex flex-row w-full bg-white border-b border-gray-600 p-4 shadow-md">
      <div>
        {title}
      </div>
      <div>
      </div>
    </div>
  )
}