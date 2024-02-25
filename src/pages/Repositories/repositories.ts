import styled from 'styled-components';

export const Container = styled.main`
  margin: 0 auto;
  width: 80%;
  padding: 2em 0;
   @media (max-width: 768px) {
    padding 1em 0;
  }
`;
export const TabsDropdownWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1rem;
  padding: 1rem;
  margin-bottom: 1em;

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const CardWrapper = styled.div`
  max-height: 83vh;
  overflow-y: auto;
  background-color: #e0e0e0;
  border-radius: 20px;
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 6px;
  padding: 6px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const EmptyState = styled.p`
 text-align: center;
`;