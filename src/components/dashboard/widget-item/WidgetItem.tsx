type Props = {
  title: string;
  children: React.ReactNode;
};

export const WidgetItem = ({ children, title }: Props) => {
  return (
    <div className="w-full p-4 bg-blueDark">
      <h3 className="text-xl font-semibold">{title}</h3>
      {children}
    </div>
  );
};
