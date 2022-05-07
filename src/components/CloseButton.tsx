import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton(){
    return(
        <Popover.Button className="absolute top-5 right-4 hover:text-zinc-300" title="fechar formulário de feedback">
            <X/>
        </Popover.Button>
    );
}