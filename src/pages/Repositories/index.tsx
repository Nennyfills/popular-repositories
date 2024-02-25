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
import { popularRepo, starredRepo } from '@/constants/default';

/**
 * Represents a component that displays repositories.
 */
const Repositories = () => {
  const [currentTab, setCurrentTab] = useState(popularRepo);
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
    if (currentTab === starredRepo && language) {
      const combinedFilteredData = filterData(data, [
        starredCriteria,
        languageCriteria,
      ]);
      return combinedFilteredData || [];
    } else if (language) {
      const filteredData = filterData(data, [languageCriteria]);
      return filteredData || [];
    } else if (currentTab === starredRepo) {
      const allStarredData = filterData(data, [starredCriteria]);
      return allStarredData || [];
    } else {
      return data || [];
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      name: popularRepo,
      onClick: () => setCurrentTab(popularRepo),
    },
    {
      name: starredRepo,
      onClick: () => setCurrentTab(starredRepo),
    },
    {
      name: 'Reset Language',
      onClick: () => seLanguage(null),
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
