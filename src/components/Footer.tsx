import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="pt-3 pb-3 footer py-3 mt-3 bg-dark text-white">
      <div className="container">
        <div className="row mb-2">
          <div className="col-lg-6 col-xs-12">
            <h5 className="mb-2">Heading</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac
              ante mollis quam tristique convallis
            </p>
          </div>
          <div className="col-lg-3 col-xs-12">
            <h5 className="mt-lg-0 mt-sm-2">Links</h5>
            <ul className="m-2 p-2">
              <li>
                <a href="#">Lorem ipsum</a>
              </li>
              <li>
                <a href="#">Nam mauris velit</a>
              </li>
              <li>
                <a href="#">Etiam vitae mauris</a>
              </li>
              <li>
                <a href="#">Fusce scelerisque</a>
              </li>
              <li>
                <a href="#">Sed faucibus</a>
              </li>
              <li>
                <a href="#">Mauris efficitur nulla</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-xs-12">
            <h5 className="mt-lg-0 mt-sm-2 mb-2">Contact</h5>
            <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
            <p className="mb-0">(541) 754-3010</p>
            <p>info@hsdf.com</p>
          </div>
        </div>
        <hr />
        {/* The following MUST be on every page: license information and link to the repository on gitlab.igem.org */}
        <div className="row mt-2">
          <div className="col">
            <p className="mb-0">
              <small>
                © 2025 - Content on this site is licensed under a{" "}
                <a
                  className="subfoot"
                  href="https://creativecommons.org/licenses/by/4.0/"
                  rel="license"
                >
                  Creative Commons Attribution 4.0 International license
                </a>
                .
              </small>
            </p>
            <p>
              <small>
                The repository used to create this website is available at{" "}
                <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </small>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
