import { useState } from "react";
import "./app.css";
import {
    Card,
    CustomRadar,
    Horizontal,
    Spedometr,
    Vertical,
} from "./components";

const App = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="app">
            <div className="content">
                <Card title={"Finranks SCORE"}>
                    <Horizontal />
                </Card>
                <Card title={"Octagon view"}>
                    <CustomRadar />
                </Card>
                <Card title={"Analyst rating"}>
                    <Vertical />
                </Card>
                <Card title={"fair value"}>
                    <Spedometr />
                </Card>
            </div>
        </div>
    );
};

export default App;
