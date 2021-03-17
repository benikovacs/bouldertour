import Header from './components/ui/Header';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={() => <div>Home</div>} />
            <Route exact path="/photos" component={() => <div>Photos</div>} />
            <Route exact path="/location" component={() => <div>Location</div>} />
            <Route exact path="/riders" component={() => <div>Riders</div>} />
            <Route exact path="/slogan" component={() => <div>Slogan contest</div>} />
          </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
