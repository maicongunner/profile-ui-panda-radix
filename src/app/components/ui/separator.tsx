import React from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';
import { PandaCSS } from '@/app/pandaCSS';

const Separator = () => (
    <RadixSeparator.Root className={PandaCSS.Separator.cssSeparatorRoot} />
);

export { Separator };