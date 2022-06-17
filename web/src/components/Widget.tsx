import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react"
import { WidgetForm } from "./WidgetForm";

//TODO: deixar tudo com mesma altura e largura -> para medium screen and full screen
//TODO: enviar pro servidor
//TODO: mostrar o loading enqanto estiver enviando

export function Widget(){
    
    return(
        <Popover className='absolute bottom-4 gap-4 right-4 flex flex-col items-end md:bottom-8 md:right-8'>
            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>
            <Popover.Button className='bg-green-600 rounded-full px-3 w-12 h-12 text-white flex items-center group hover:w-max'>
                <ChatTeardropDots weight="bold" className='w-6 h-6'/>
                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
       
    );
}