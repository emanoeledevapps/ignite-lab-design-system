import {clsx} from 'clsx';
import {Slot} from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface HeadingProps{
    size?: 'sm' | 'md' | 'lg';
    childreen: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'md', childreen, asChild}: HeadingProps){
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp className={clsx(
            'text-gray-200 font-bold',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg'
            }
        )}>
            {childreen}
        </Comp>
    )
}