import React from "react";
import { Navbar } from "./components/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import { useRoutes } from "hookrouter";
import { NotFound } from "./Pages/NotFound";
import { Sidebar } from "./components/Sidebar";
import { Typography, Container } from "@material-ui/core";
import { routes } from "./routes";

const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingBottom: "320px",
    width: "100%",
  },
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(10),
    paddingTop: theme.spacing(10),
  },
}));

function App() {
  const match = useRoutes(routes);
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      <div className={classes.appMain}>
        <Sidebar />
        <main className={classes.content}>
          <Container maxWidth="md">
            <Typography>{match || <NotFound />}</Typography>
          </Container>
        </main>
      </div>
    </div>
  );
}

export default App;
