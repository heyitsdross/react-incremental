import { useState } from "react";
import {
    ManaColor
} from "../constant/ManaColor.ts";

export function ManaBase(props: { color: ManaColor }) {

    const [amount, setAmount] = useState(0);
    return (
        <>
            <span>{props.color}: {amount}</span>
            <button onClick={() => setAmount(amount + 1)}>Focus {props.color}</button>
        </>
    );
}
