import { skills } from '@/shared/data';
// Components & Styles
import { FadeInContainer } from '@/shared/components';
import { HeaderCategory, ResumeBlock, SkillsList } from '../../../_components';

function SkillsPage() {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <HeaderCategory textLanguageKey='skills_text' titleLanguageKey='skills_title' />
        <SkillsList data={skills} />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default SkillsPage;
