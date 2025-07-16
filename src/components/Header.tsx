interface HeaderProps {
  title: string;
  lead: string;
}

export function Header({ title, lead }: HeaderProps) {
  return (
    <header className="bg-hero">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-lg-12 text-center">
            <h1 className="display-4 text-white mb-4">{title}</h1>
            <p className="lead text-white-50">{lead}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
