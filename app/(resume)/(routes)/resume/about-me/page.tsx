// Components & Styles
import { Hobbies, PersonalInfo, ResumeBlock } from '@/app/(resume)/_components';
import { CustomText, FadeInContainer, Title } from '@/shared/components';

function AboutMePage() {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <Title text='About me' size='medium' />
        <CustomText
          text='This is my info if you want to contact me'
          textStyles={{ fontSize: '1.2rem' }}
        />
        <PersonalInfo />
        <Title text='My Hobbies' size='medium' />
        <Hobbies />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default AboutMePage;
