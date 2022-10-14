import {Meta, StoryObj} from '@storybook/react';
import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput";
import {Envelope} from 'phosphor-react';
export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
        children: (
            <>  
                <TextInput.Icon>
                    <Envelope/>
                </TextInput.Icon>
                <TextInput.Input placeholder='email@email.com'/>
            </>
        )
    },
    argTypes:{}
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {};

