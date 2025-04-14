// Components
import { Hero } from "../_components";
import { FadeInContainer } from "@/shared/components";

export default function Home(): React.ReactElement {
  return (
    <FadeInContainer>
      <Hero />
    </FadeInContainer>
  );
}
