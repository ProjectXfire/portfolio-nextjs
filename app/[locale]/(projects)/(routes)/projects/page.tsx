import { projects } from "@/shared/data";
// Components & Styles
import { Projects } from "../../_components";
import { FadeInContainer } from "@/shared/components";

function ProjectsPage(): React.ReactElement {
  return (
    <FadeInContainer>
      <Projects projects={projects} />
    </FadeInContainer>
  );
}
export default ProjectsPage;
