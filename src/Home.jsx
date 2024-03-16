import { useReducer } from "react";
import { MainChat } from "./components/MainChat";
import { Sidebar } from "./components/Sidebar";
import './styles.scss'
import { chatReducer } from "./reducers/chatReducer";

function Home() {

    const [state, dispatch] = useReducer(chatReducer, {})

    return (
        <div className="home">
            <div className="container">
                <Sidebar state={state} dispatch={dispatch} />
                <MainChat state={state} dispatch={dispatch} />
            </div>
        </div>
    );
}

export default Home;
