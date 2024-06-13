import { certificatesOrderByDate } from '@/shared/data';
// Components & Styles
import { CustomText, FadeInContainer, Title } from '@/shared/components';
import { CertificatesList, ResumeBlock } from '../../_components';

function ResumePage(): JSX.Element {
  return (
    <FadeInContainer>
      <ResumeBlock>
        <Title text='My Education' size='medium' />
        <CustomText
          text='This is my former studies of Web Developer, I started 2020 study by myself and then take
        online courses to reforced that I have learned.'
          textStyles={{ fontSize: '1.2rem' }}
        />
        <CertificatesList data={certificatesOrderByDate} />
      </ResumeBlock>
    </FadeInContainer>
  );
}
export default ResumePage;
