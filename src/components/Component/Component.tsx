import React from 'react';
import { createCn } from 'bem-react-classname';

interface IComponentProps {
    className?: string;
}

const Component: React.FC<IComponentProps> = ({ className }: IComponentProps) => {
    const cn = createCn('component', className);

    return (
        <div className={cn()}>
            <p className={cn('text')}>Component text</p>
        </div>
    );
};

export default Component;
