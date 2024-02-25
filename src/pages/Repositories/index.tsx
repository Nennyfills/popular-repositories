import { useEffect, useMemo, useState } from 'react';

import { CardList, Dropdown, Tabs } from '@/components';
import { RepoType } from '@/types/repo';
import { filterData, getUniqueLanguages, starARepo } from '@/helpers';

import {
  CardGrid,
  CardWrapper,
  Container,
  EmptyState,
  TabsDropdownWrapper,
} from './repositories';

/**
 * Represents a component that displays repositories.
 */
const Repositories = () => {
  const [currentTab, setCurrentTab] = useState('Popular Repositories');
  const [language, seLanguage] = useState<string | null>(null);
  const [data, setData] = useState<RepoType[]>([]);

  const starredCriteria = { property: 'userHasStarred', value: 'true' };
  const languageCriteria = {
    property: 'language',
    value: language || 'c++',
  };

  useEffect(() => {
    const reposString = localStorage.getItem('repos');
    const repos = reposString ? JSON.parse(reposString) : [];
    setData(repos);
  }, []);

  const currentTabData: RepoType[] = useMemo(() => {
    if (currentTab === 'Starred Repositories' && language) {
      const combinedFilteredData = filterData(data, [
        starredCriteria,
        languageCriteria,
      ]);
      return combinedFilteredData || [];
    } else if (language) {
      const filteredData = filterData(data, [languageCriteria]);
      return filteredData || [];
    } else if (currentTab === 'Starred Repositories') {
      const allStarredData = filterData(data, [starredCriteria]);
      return allStarredData || [];
    } else {
      return data || [];
    }
  }, [currentTab, data, language]);

  const uniqueLanguages: string[] = useMemo(
    () => getUniqueLanguages(data),
    [data]
  );

  const handleStarARepo = (id: string) => {
    const updatedData = starARepo(id, data);
    setData(updatedData);
  };

  const handleLanguage = (value: string | null) => seLanguage(value);

  const tabs = [
    {
      name: 'Popular Repositories',
      onClick: () => setCurrentTab('Popular Repositories'),
    },
    {
      name: 'Starred Repositories',
      onClick: () => setCurrentTab('Starred Repositories'),
    },
  ];
  return (
    <Container>
      <TabsDropdownWrapper>
        <Tabs currentTab={currentTab} tabs={tabs} />

        <Dropdown
          handleChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            handleLanguage(event.target.value)
          }
          options={uniqueLanguages}
        />
      </TabsDropdownWrapper>
      <CardWrapper>
        {currentTabData?.length ? (
          <CardGrid>
            <CardList onStar={handleStarARepo} data={currentTabData} />
          </CardGrid>
        ) : (
          <EmptyState>No data</EmptyState>
        )}
      </CardWrapper>
    </Container>
  );
};

export default Repositories;
