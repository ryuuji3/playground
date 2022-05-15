import { MemoryRouter, Route } from "../../";

import Browser from "./browser";

export default {
    title: 'Router',
    component: MemoryRouter,
    args: {
        path: '/',
    }
}

export function Basic(args) {
    return (
        <Browser {...args}>
            <MemoryRouter>
                <div>
                    <Route name="a">
                        Home route
                    </Route>
                    <Route name="a" path="/a">
                        a
                    </Route>
                    <Route name="b" path="/b">
                        b
                    </Route>
                </div>
            </MemoryRouter>
        </Browser>
    )
}