import { X } from "phosphor-react";

export function CloseButton() {
  return (
    <div className="cursor-pointer top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4" />
    </div>
  )
}