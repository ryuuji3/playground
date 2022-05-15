import { Router } from "../../";

export default {
    title: 'Router',
    component: Router,
}

export function Basic() {
    return (
        <Router>
            <div>Hello world</div>
        </Router>
    )
}