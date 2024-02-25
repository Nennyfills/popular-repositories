import { Tab, TabContainer } from './tabs';

/**
 * Props for the Tab component.
 */
type TabProps = {
  tabs: { name: string; onClick: () => void }[];
  currentTab: string;
};
/**
 * Renders a set of tabs.
 *
 * @component
 * @param {Object[]} tabs - An array of tab objects.
 * @param {string} tabs[].name - The name of the tab.
 * @param {Function} tabs[].onClick - The click event handler for the tab.
 * @param {string} currentTab - The name of the currently active tab.
 * @returns {JSX.Element} The rendered tabs.
 */
const Tabs = ({ tabs, currentTab }: TabProps) => {
  return (
    <TabContainer>
      {tabs.map(({ onClick, name }) => (
        <Tab
          key={name}
          isActive={currentTab === name}
          onClick={onClick}
          data-testid={name}
          role='tab'
        >
          {name}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default Tabs;
