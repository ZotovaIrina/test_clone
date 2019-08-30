import styled from 'styled-components';

export const ResumeDontPrintBlock = styled.div`
@media print
{    
  display: none !important;
}
`;

export const ResumeContainerStyled = styled.div`
padding: 24px;
`;

export const ResumeH1 = styled.div`
font-size: 24px;
text-align: center;
padding: 8px 0;
`;

export const ResumeH2 = styled.div`
font-size: 20px;
padding: 4px 0;
`;

export const ContactRow = styled.div`
display: grid;
padding: 2px 0;
grid-gap: 8px;
grid-template-columns: 90px 1fr;
`;

export const SummaryRow = styled.div`
display: grid;
grid-gap: 8px;
padding: 2px 0;
grid-template-columns: 120px 1fr;
`;

export const EducationRow = styled.div`
display: grid;
grid-gap: 8px;
padding: 2px 0;
white-space: nowrap;
grid-template-columns: min-content 1fr min-content;
`;

export const ResumeRowStyled = styled.div`
padding: 8px 0;
page-break-inside: avoid;
`;

export const ResumeList = styled.ul`
padding: 4px 0;
margin:0;
`;

export const ResumeListItem = styled.li`
margin-left: 32px;
padding-left: 8px;
`;