import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "shared/ui/Button/Button"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter: FC = () => {

    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const inc = () => {
        dispatch(counterActions.increment())
    }

    const dec = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1 data-testid="value-title">value = {counterValue}</h1>
            <Button data-testid="inc-btn" onClick={inc}>inc</Button>
            <Button data-testid="dec-btn" onClick={dec}>dec</Button>
        </div>
    )
}