import { skills } from '@/shared/data';
// Components & Styles
import { ResumeBlock, SkillsList } from '@/app/(resume)/_components';
import { CustomText, FadeInContainer, Title } from '@/shared/components';

function SkillsPage() {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <Title text='My Skills' size='medium' />
        <CustomText
          text='These my skill that I have learned during my studies.'
          textStyles={{ fontSize: '1.2rem' }}
        />
        <SkillsList data={skills} />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default SkillsPage;
