import React from 'react'
import { RecoilRoot } from 'recoil'
import Calendar from './Calendar'
import ThemeProvider from './ThemeProvider'


function AppointmentApp() {
    return (
        <RecoilRoot>
            <ThemeProvider>
                <Calendar />
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default AppointmentApp