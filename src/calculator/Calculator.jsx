import React from 'react'
import styled from 'styled-components'


export default function Calculator() {
    return (
        <Container>
            <div className="calculator-row">
                <div className="operand">
                    <label htmlFor="operand1">A Number</label>
                    <input name="operand1" type="number" inputMode="decimal" />
                </div>
            </div>
            <div className="calculator-row">
                <span className="operator">+</span>

                <div className="operand">
                    <label htmlFor="operand2">Another Number</label>
                    <input name="operand2" type="number" inputMode="decimal" />
                </div>
            </div>
            <hr />
            <div className="calculator-row">
                <span className="operator">=</span>

                <div className="result">
                    <label htmlFor="result">Result</label>
                    <output name="result" type="number" htmlFor="operand1 operand2">3</output>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    padding: 2rem 1rem;

    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    box-sizing: border-box; 

    max-width: 80%;

    > hr {
        display: block;

        width: 100%;
        height: 1px;

        border: 0;

        margin: 0.1rem 0 1rem;

        background-color: black;
    }

    > .calculator-row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 1rem;

        /* For the operand */
        position: relative;

        > .operator {
            position: absolute;
            left: 0;

            font-size: 1rem;

            /* accounting for font-size */
            top: calc(50% - 1rem);

            color: black;
        }

        > .operand, > .result {
            display: flex;
            flex-basis: 100%;
            flex-wrap: wrap;
            column-gap: 1rem;

            margin-left: 2rem; /* Space for operator */
            margin-bottom: 1rem;

            > label {
                flex: 2;
                color: black;
                align-self: center;
            }

            > input, > output {
                display: flex;
                align-items: center;
                margin: 0;
                padding: 0;
                padding-left: 1rem;

                flex: 1;
                border: 1px solid black;
                height: 2rem;
            }
        }
    }
`