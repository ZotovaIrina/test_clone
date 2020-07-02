import styled from 'styled-components';

export const Card = styled.div`
box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
border-radius: ${props => `${props.theme.spacing.gapValue / 4}${props.theme.spacing.gapUnit}`};
`;