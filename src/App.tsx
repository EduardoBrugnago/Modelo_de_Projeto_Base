import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StorageContext } from "./contexts/StorageContext";

import ThemeProvider from "./components/others/ThemeProvider";
import pagesConfig from "./config/pagesConfig";
import pages from "./pages/index";
import {Theme, Spacing} from './config';
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    display: "flex",
    width: "100%",

    flexDirection: "column",

    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflowY: "auto",
    overflowX: "hidden",

    paddingInline: "5vw",
    paddingBlock: Spacing(4.625),
  },
}));
interface IUserProps { Home: () => Element; }

function App() {
  const classes = useStyles();
  const { isLogged } = useContext<any>(StorageContext);
  const [menuHeight, setHeight] = React.useState<any>(null);

  React.useEffect(() => {
    if (!menuHeight) {
      const mh = document.getElementById("demoMenu")?.offsetHeight;

      setHeight(mh) ;
   
    }
  }, [menuHeight]);

  return !isLogged ? (
    <ThemeProvider theme={Theme.Light}>
      <Router>
        <div
          className={classes.pageContainer}
          style={{
            height: menuHeight
              ? `calc(100vh - ${menuHeight}px)`
              : `calc(100vh - ${Spacing(17.25)}px)`,
          }}>
          <Routes>
            {pagesConfig.logged.map((item?: any, index?: any) => {
              const Component = pages[item.name as keyof IUserProps];
              return (
                <Route
                  key={item.path + index}
                  path={item.path}
                  element={<Component />}
                />
              );
            })}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={Theme.Light}>
      <Router>
        <Routes>
          {pagesConfig.notLogged.map((item?: any, index?: any) => {
            const Component = pages[item.name as keyof IUserProps];
            return (
              <Route
                key={item.path + index}
                path={item.path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
