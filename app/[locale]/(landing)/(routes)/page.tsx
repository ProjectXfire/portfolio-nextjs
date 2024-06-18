// Components
import { Hero } from '../_components';
import { FadeInContainer } from '@/shared/components';

export default function Home(): JSX.Element {
  return (
    <FadeInContainer>
      <Hero />
    </FadeInContainer>
  );
}
