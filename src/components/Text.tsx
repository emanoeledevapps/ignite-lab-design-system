import {clsx} from 'clsx';
import {Slot} from '@radix-ui/react-slot';
import { ReactNode } from 'react';

export interface TextProps{
    size?: 'sm' | 'md' | 'lg';
    childreen: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'md', childreen, asChild}: TextProps){
    const Comp = asChild ? Slot : 'span';
    return(
        <Comp className={clsx(
            'text-gray-200',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }
        )}>
            {childreen}
        </Comp>
    )
}