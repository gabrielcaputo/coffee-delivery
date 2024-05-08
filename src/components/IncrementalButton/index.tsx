import { Minus, Plus } from "@phosphor-icons/react";
import { IncrementalButtonWrapper } from "./styles";

export function IncrementalButton() {
  return (
    <IncrementalButtonWrapper>
      <button><Minus weight="bold" /></button>
      <div>0</div>
      <button><Plus weight="bold" /></button>
    </IncrementalButtonWrapper>
  )
}