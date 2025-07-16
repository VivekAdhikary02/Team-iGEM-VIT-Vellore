import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { getPathMapping, stringToSlug } from "../../utils";
import { useEffect } from "react";
import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFound } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import { ProgressBar } from "../../components/ProgressBar";
import { SectionNavigator } from "../../components/SectionNavigator";
import { BackToTop } from "../../components/BackToTop";
const App = () => {
  const pathMapping = getPathMapping();
  const currentPath =
    location.pathname
      .split(`${stringToSlug(import.meta.env.VITE_TEAM_NAME)}`)
      .pop() || "/";

  // Set Page Title
  const title =
    currentPath in pathMapping ? pathMapping[currentPath].title : "Not Found";

  useEffect(() => {
    document.title = `${title || ""} | ${import.meta.env.VITE_TEAM_NAME} - iGEM ${import.meta.env.VITE_TEAM_YEAR}`;
  }, [title]);

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Progress Bar */}
      <ProgressBar />

      {/* Header and PageContent */}
      <div className="page-layout">
        <SectionNavigator />
        <Routes>
          {Object.entries(pathMapping).map(
            ([path, { title, lead, component: Component }]) => (
              <Route
                key={path}
                path={path}
                element={
                  <>
                    <Header title={title || ""} lead={lead || ""} />
                    <div className="main-content-wrapper">
                      <div className="container">
                        <Component />
                      </div>
                    </div>
                  </>
                }
              />
            ),
          )}
          <Route
            path="*"
            element={
              <>
                <Header
                  title="Not Found"
                  lead="The requested URL was not found on this server."
                />
                <div className="main-content-wrapper">
                  <div className="container">
                    <NotFound />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </div>

      {/* Footer */}
      {/* MUST mention license AND have a link to team wiki's repository on gitlab.igem.org */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
};

export default App;