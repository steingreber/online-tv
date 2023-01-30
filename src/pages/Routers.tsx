import {
    BrowserRouter as Router,
    Routes,
    Route    
} from "react-router-dom";
import App from "../App";
import { ComoAssistir } from "./ComoAssistir";
import { HomePage } from "./HomePage";
import { VerCanal } from "./VerCanal";
import { Sobre } from "./Sobre";

export function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage /> } />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/comoassistir" element={<ComoAssistir />} />
                <Route path="/assistir/:id?/:name?" element={<VerCanal /> } />
            </Routes>
        </Router>
    )
}
