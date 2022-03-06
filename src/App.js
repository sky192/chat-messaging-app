import { Switch, Route } from "react-router-dom";

//contexts
import AuthContextProvider from "./contexts/AuthContextProvider";

//components
import Login from "./components/Login";
import Chats from "./components/Chats";

function App() {
    return (
        <div className="">
            <AuthContextProvider>
                <Switch>
                    <Route path="/chats" component={Chats} />
                    <Route path="/" component={Login} />
                </Switch>
            </AuthContextProvider>
        </div>
    );
}

export default App;
