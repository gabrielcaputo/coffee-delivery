import { Minus, Plus } from "@phosphor-icons/react";
import { IncrementalButtonWrapper } from "./styles";

type IncrementalButtonProps = {
  total: number,
  incrementTotal: () => void,
  decrementTotal: () => void,
  min?: number,
  max?: number,
}

export function IncrementalButton({
  total,
  incrementTotal,
  decrementTotal,
  min,
  max
}: IncrementalButtonProps) {
  return (
    <IncrementalButtonWrapper>
      <button onClick={decrementTotal} disabled={min ? total <= min : false}><Minus weight="bold" /></button>
      <div>{total}</div>
      <button onClick={incrementTotal} disabled={max ? total >= max : false}><Plus weight="bold" /></button>
    </IncrementalButtonWrapper>
  )
}