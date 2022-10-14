import { Slot } from '@radix-ui/react-slot';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps{
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps){
    return(
        <div
            className='flex items-center gap-3 py-4 px-3 bg-gray-800 rounded text-gray-100 text-xs placeholder: text-gray-400 focus-within:ring-2 ring-cyan-300'
        >
            {props.children}
        </div>
    )
}

export interface TextInputIconProps{
    children: ReactNode
}

function TextInputIcon(props: TextInputIconProps){
    return(
    <Slot className='w-6 h-6 text-gray-400'>
        {props.children}
    </Slot>
    )
}

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement>{}

function TextInputInput(props: TextInputInputProps){
    return(
        <input 
            className='bg-transparent flex-1 outline-none'
            {...props}
        />
    )
}

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}