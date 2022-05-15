import { Router, Route } from "../../";

import Browser from "./browser";

export default {
    title: 'Router',
    component: Router,
    args: {
        path: '/',
    }
}

export function Basic(args) {
    return (
        <Browser {...args}>
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
        </Browser>
    )
}