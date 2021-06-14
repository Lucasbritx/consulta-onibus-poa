import React, { FC } from 'react';
import { Tab as OriginalTab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type TabProps = {
    Tab1: any,
    Tab2: any,
    TitleTab1: string;
    TitleTab2: string;
}

const Tab: FC<TabProps> = ({ Tab1, Tab2, TitleTab1, TitleTab2 }) => (
    <Tabs>
        <TabList>
            <OriginalTab>{TitleTab1}</OriginalTab>
            <OriginalTab>{TitleTab2 }</OriginalTab>
        </TabList>
        <TabPanel>
            {Tab1}
        </TabPanel>
        <TabPanel>
            {Tab2}
        </TabPanel>
    </Tabs>
);

export default Tab;