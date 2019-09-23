import styled from 'styled-components';
import GridRow from '../../components/common/GridRow/GridRow';
import {Card} from '../../components/common/Card/Card.styled';

export const ResumePageContainer = styled(GridRow)`
margin: ${props => props.theme.spacing.gap};
`;

export const ResumeContainerStyled = styled(Card)`
width: 100%;
max-width: ${props => props.theme.spacing.maxWidth};
margin: auto;
padding: ${props => props.theme.spacing.gapValue * 2}${props => props.theme.spacing.gapUnit};;
`;

export const ResumeTable = styled.table`
@media print {
margin: 20mm;
}
`;

export const ResumeContainerPrintStyled = styled.div`

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
white-space: nowrap;
grid-template-columns: min-content 1fr;
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