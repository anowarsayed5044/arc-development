import {ThemeProvider} from "@material-ui/styles";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact={true} path={'/'} component={() => <div>Home</div>}/>
                <Route exact={true} path={'/services'} component={() => <div>Services</div>}/>
                <Route exact={true} path={'/revolutions'} component={() => <div>The Revolution</div>}/>
                <Route exact={true} path={'/customSoftware'} component={() => <div>Custom Software</div>}/>
                <Route exact={true} path={'/mobileApp'} component={() => <div>Home</div>}/>
                <Route exact={true} path={'/website'} component={() => <div>Website</div>}/>
                <Route exact={true} path={'/about-us'} component={() => <div>About-US</div>}/>
                <Route exact={true} path={'/contact'} component={() => <div>Contact</div>}/>
                {/*<Route exact={true} path={'/'} component={() => <div>Home</div>}/>*/}
            </Switch>
        </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
