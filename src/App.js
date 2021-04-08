import {useState} from "react";
import Header from './components/ui/Header';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/ui/Footer';
import Home from './components/ui/Home';





function App() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={() => <div>Photos</div>} />
            <Route exact path="/location" component={() => <div>Location</div>} />
            <Route exact path="/riders" component={() => <div>Riders</div>} />
            <Route exact path="/slogan" component={() => <div>Slogan contest</div>} />
          </Switch>
          <Footer value={value} setValue={setValue}/>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
