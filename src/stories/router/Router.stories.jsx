import { Router } from "../../";

import Browser from "./browser";

export default {
    title: 'Router',
    component: Router.MemoryRouter,
    args: {
        basePath: '/',
    }
}

export function Basic(args) {
    return (
        <Browser {...args}>
            <div>
                <Router.Route name="a">
                    Home route
                </Router.Route>
                <Router.Route name="a" path="/a">
                    a
                </Router.Route>
                <Router.Route name="b" path="/b">
                    b
                </Router.Route>
                <Router.Route unmatched>
                    Unmatched
                </Router.Route>
            </div>
        </Browser>
    )
}