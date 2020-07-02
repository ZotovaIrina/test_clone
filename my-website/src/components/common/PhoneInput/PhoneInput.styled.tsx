import styled from 'styled-components';
import {TextInputStyled} from '../TextInput/TextInput.styled';
import NumberFormat from 'react-number-format';

export const PhoneInputStyled = styled(TextInputStyled.withComponent(NumberFormat))``;