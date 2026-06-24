interface HeaderProps {
  title: string;
}

export const Header = (props: HeaderProps) => {
  const { title } = props;
  return (
    <nav className="header navbar navbar-dark bg-dark">
      <div className="container">
        <div className="row m-auto">
          <i className="fa fa-film fa-2x text-white my-auto"></i>
          <div className="h3 ml-3 my-auto text-light">{title}</div>
        </div>
      </div>
    </nav>
  );
};
