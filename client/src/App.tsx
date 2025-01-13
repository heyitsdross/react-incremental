import "./App.css";
import { ManaBase } from "./component/mana-base/ManaBase.tsx";
import { ManaColor } from "./constant/ManaColor.ts";

function App() {
    return (
        <>
            <h1>Spell Slinger React</h1>
            <div>
                <div>
                    <label>Mana</label>
                </div>
                <ManaBase
                    color={ManaColor.ESSENCE}
                />
            </div>
        </>
    );
}

export default App;
