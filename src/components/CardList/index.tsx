import {
  CardDescription,
  CardHeader,
  CardContainer,
  CardTitle,
  StarWrapper,
  StyledStar,
  StarCount,
  Link,
  Button,
} from './cardList';

/**
 * Props for the Card component.
 */
type CardProps = {
  onStar: (value: string) => void;
  data: {
    id: string;
    userHasStarred?: boolean;
    description: string;
    name: string;
    stargazers_count: number;
    html_url: string;
  }[];
};

/**
 * Renders a card component.
 *
 * @param {Object[]} data - An array of data objects.
 * @param {Function} onStar - Callback function for star button click.
 * @returns {JSX.Element[]} An array of card components.
 */
const Card = ({ data, onStar }: CardProps) => {
  return data?.map(
    ({ id, userHasStarred, description, name, stargazers_count, html_url }) => (
      <CardContainer key={id}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardDescription>{description}</CardDescription>
        <StarWrapper>
          <Button onClick={() => onStar(id)}>
            <StyledStar starCount={userHasStarred}>{'\u2605'}</StyledStar>
            {userHasStarred ? 'Starred' : 'Star'}
          </Button>
          <StarCount>{stargazers_count?.toLocaleString()}</StarCount>
          <Link href={html_url} target='_blank' rel='noopener noreferrer'>
            &#x1F517;
          </Link>
        </StarWrapper>
      </CardContainer>
    )
  );
};

export default Card;
