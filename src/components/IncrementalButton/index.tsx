import { Minus, Plus } from "@phosphor-icons/react";
import { IncrementalButtonWrapper } from "./styles";

type IncrementalButtonProps = {
  total: number,
  incrementTotal: () => void,
  decrementTotal: () => void,
  id?: string,
  name: string,
  min?: number,
  max?: number,
}

export function IncrementalButton({
  id,
  total,
  incrementTotal,
  decrementTotal,
  min,
  max
}: IncrementalButtonProps) {
  return (
    <IncrementalButtonWrapper>
      <button type="button" onClick={decrementTotal} disabled={min ? total <= min : false}><Minus weight="bold" /></button>
      <input id={id} type="hidden" readOnly value={total} />
      <div>{total}</div>
      <button type="button" onClick={incrementTotal} disabled={max ? total >= max : false}><Plus weight="bold" /></button>
    </IncrementalButtonWrapper>
  )
}