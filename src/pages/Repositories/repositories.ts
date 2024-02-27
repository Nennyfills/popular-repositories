import styled from 'styled-components';

export const Container = styled.section`
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

export const CardWrapper = styled.section`
  max-height: 83vh;
  overflow-y: auto;
  background-color: #D9D9D9;
  border-radius: 20px;
`;
export const CardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 6px;
  padding: 6px;
  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const EmptyState = styled.p`
 text-align: center;
`;
