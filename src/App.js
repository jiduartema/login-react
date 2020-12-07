import logo from "./logo.svg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Divider } from "@material-ui/core";
//import moment from "moment";

//const dateToFormat = moment().format("LTS");

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="containerLogin">
      <form className={classes.root} noValidate autoComplete="off">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="username">
          <TextField
            id="standard-username-input"
            label="Username"
            variant="outlined"
          />
        </div>
        <div className="password">
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
        </div>
        <Divider id="divider" light />
        <Button variant="outlined" color="primary" id="signin">
          Signin
        </Button>
      </form>
    </div>
  );
}

export default App;
