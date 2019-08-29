import styled from 'styled-components';

export const AddRemoveAnimation = styled.div<{hide: boolean, defaultWidth?: any}>`
position: relative;
visibility: ${props => props.hide ? 'hidden' : 'visible'};
width: ${props => props.hide ? 0 : props.defaultWidth ? props.defaultWidth : 'auto'};
transition: visibility 0.32s, width 0.2s linear;
`;