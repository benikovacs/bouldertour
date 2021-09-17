import React, {useState} from "react";
import Header from './components/ui/Header';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/ui/Footer';
import Home from './components/ui/Home';
import Photos from './components/ui/Photos';
import Location from './components/ui/Location';




function App() {
  const [value, setValue] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <React.Fragment>
        <Header value={value} setValue={setValue} />
        </React.Fragment>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/photos" component={Photos}   />
            <Route exact path="/location" component={Location} />
            <Route exact path="/riders" component={() => <div>Riders</div>} />
            <Route exact path="/slogan" component={() => <div>Slogan contest</div>} />
          </Switch>
          </React.Fragment>
          <React.Fragment>
          <Footer value={value} setValue={setValue}/>
          </React.Fragment>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
