import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem commodi. Vel minima modi sint et recusandae voluptatem commodi, ipsam perferendis, fugiat, reiciendis saepe. Dolorem dolor a dolore architecto ipsa.',
};

export const Dark = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, dolorem commodi. Vel minima modi sint et recusandae voluptatem commodi, ipsam perferendis, fugiat, reiciendis saepe. Dolorem dolor a dolore architecto ipsa.',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]