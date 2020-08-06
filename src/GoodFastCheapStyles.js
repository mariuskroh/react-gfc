import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fd6c6c",
    },
  },
});

const styles = {
  root: {
    background: "linear-gradient(to right, #232526, #414345)",
    fallbacks: [{ background: "#232526" }],
    minHeight: "100vh",
  },
  card: {
    width: "100%",
    background: "#DDDDDD",
    borderRadius: "5px",
    boxShadow: "5px 5px 15px 5px #232526",
  },
  content: {
    paddingTop: "24px",
  },
};

export default styles;
