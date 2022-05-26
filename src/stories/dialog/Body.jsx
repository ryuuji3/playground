import React from 'react'
import styled from 'styled-components'


function Body() {
    return (
        <Container>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod. Imperdiet proin fermentum leo vel orci. Amet tellus cras adipiscing enim eu turpis egestas. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Integer feugiat scelerisque varius morbi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Turpis egestas sed tempus urna et pharetra pharetra massa. Auctor elit sed vulputate mi sit amet. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Augue lacus viverra vitae congue eu consequat ac felis. Integer enim neque volutpat ac tincidunt. Quis auctor elit sed vulputate mi sit amet mauris commodo. Diam ut venenatis tellus in metus vulputate eu. Eros in cursus turpis massa tincidunt.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod. Imperdiet proin fermentum leo vel orci. Amet tellus cras adipiscing enim eu turpis egestas. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Integer feugiat scelerisque varius morbi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Turpis egestas sed tempus urna et pharetra pharetra massa. Auctor elit sed vulputate mi sit amet. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Augue lacus viverra vitae congue eu consequat ac felis. Integer enim neque volutpat ac tincidunt. Quis auctor elit sed vulputate mi sit amet mauris commodo. Diam ut venenatis tellus in metus vulputate eu. Eros in cursus turpis massa tincidunt.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod. Imperdiet proin fermentum leo vel orci. Amet tellus cras adipiscing enim eu turpis egestas. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Integer feugiat scelerisque varius morbi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Turpis egestas sed tempus urna et pharetra pharetra massa. Auctor elit sed vulputate mi sit amet. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Augue lacus viverra vitae congue eu consequat ac felis. Integer enim neque volutpat ac tincidunt. Quis auctor elit sed vulputate mi sit amet mauris commodo. Diam ut venenatis tellus in metus vulputate eu. Eros in cursus turpis massa tincidunt.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod. Imperdiet proin fermentum leo vel orci. Amet tellus cras adipiscing enim eu turpis egestas. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Integer feugiat scelerisque varius morbi. Adipiscing diam donec adipiscing tristique risus nec feugiat. Turpis egestas sed tempus urna et pharetra pharetra massa. Auctor elit sed vulputate mi sit amet. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Augue lacus viverra vitae congue eu consequat ac felis. Integer enim neque volutpat ac tincidunt. Quis auctor elit sed vulputate mi sit amet mauris commodo. Diam ut venenatis tellus in metus vulputate eu. Eros in cursus turpis massa tincidunt.
            </p>
        </Container>
    )
}

const Container = styled.div`
    /* Themeing */
    --_text-light: hsl(270 10% 30%);
    --_text-dark: hsl(270 5% 95%);
    --_text: var(--_text-light);

    --_background-light: hsl(270 0% 95%);
    --_background-dark: hsl(270 10% 30%);
    --_background: var(--_background-light);

    --_border-light: hsl(270 15% 50%);
    --_border-dark: var(--_background-light);

    background-color: var(--_background);
    color: var(--_text);

    @media (prefers-color-scheme: dark) {
        --_text: var(--_text-dark);
        --_background: var(--_background-dark);
        --_border: var(--_border-dark);
    }
`

export default Body