import { Router, Route } from "../../";

export default {
    title: 'Router',
    component: Router,
}

export function Basic() {
    return (
        <Router>
            <div>
                <Route name="a" path="/a">
                    a
                </Route>
                <Route name="b" path="/b">
                    b
                </Route>
            </div>
        </Router>
    )
}