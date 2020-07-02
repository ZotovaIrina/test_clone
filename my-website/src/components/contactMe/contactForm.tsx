import React from 'react';
import TextInput from '../common/TextInput/TextInput';
import AreaInput from '../common/AreaInput/AreaInput';
import ContactInformation from '../../types/ContactInformation';
import PhoneInput from '../common/PhoneInput/PhoneInput';
import {ValidationType} from '../../utils/validation/validator/validator';
import {Button} from '../common/Button/Button.styles';
import IContactMe from '../../configs/formConfigs/contactMe';
import Checkbox from '../common/Checkbox/Checkbox';
import getBooleanByConfig from '../../utils/getBooleanByConfig';
import {ResumeContainerStyled} from '../../containers/ResumePage/ResumePage.styled';
import GridRow from '../common/GridRow/GridRow';
import {IFetch} from '../../types/Fetch';
import {ErrorText} from '../common/Text/Text.styled';
import Icon from '../common/Icon/Icon';
import {IconType} from '../common/Icon/IconType';
import {Size} from '../../style/Theme';

export interface IContactFormProps {
  formData: ContactInformation;
  formError: object;
  config: IContactMe,
  onChange: (property: string, newValue: any, propertyType?: ValidationType) => void;
  onSubmit: () => void;
  focusedField?: string | null;
  submitProcess: IFetch;
}

const ContactForm: React.FunctionComponent<IContactFormProps> = props => {

  const onFormChange = (property: string, value: any | null, propertyType?: ValidationType) => {
    props.onChange(property, value, propertyType);
  };
  return (
    <ResumeContainerStyled data-id="ResumeContainerStyled">
      <GridRow>
        <TextInput
          formCell={{
            ...props.config.name.formCell,
            errorText: props.formError[props.config.name.value]
          }}
          autoFocus={props.focusedField === props.config.name.value}
          inputValue={props.formData[props.config.name.value]}
          onChange={value => onFormChange(props.config.name.value, value)}/>
        <TextInput
          formCell={{
            ...props.config.companyName.formCell,
            errorText: props.formError[props.config.companyName.value]
          }}
          autoFocus={props.focusedField === props.config.companyName.value}
          inputValue={props.formData[props.config.companyName.value]}
          onChange={value => onFormChange(props.config.companyName.value, value)}/>
        <PhoneInput
          formCell={
            {
              ...props.config.phone.formCell,
              isRequired: getBooleanByConfig(props.config.phone.formCell.isRequired, props),
              errorText: props.formError[props.config.phone.value]
            }
          }
          autoFocus={props.focusedField === props.config.phone.value}
          onChange={value => onFormChange(props.config.phone.value, value)}
          inputValue={props.formData[props.config.phone.value]}/>
        <TextInput
          formCell={{
            ...props.config.email.formCell,
            errorText: props.formError[props.config.email.value]
          }}
          autoFocus={props.focusedField === props.config.email.value}
          inputValue={props.formData[props.config.email.value]}
          onChange={value => onFormChange(props.config.email.value, value)}/>
        <AreaInput
          formCell={{
            ...props.config.message.formCell,
            errorText: props.formError[props.config.message.value]
          }}
          autoFocus={props.focusedField === props.config.message.value}
          inputValue={props.formData[props.config.message.value]}
          onChange={value => onFormChange(props.config.message.value, value)}/>
        <Checkbox inputValue={props.formData[props.config.contactByPhone.value]}
                  formCell={{
                  ...props.config.contactByPhone.formCell,
                  errorText: props.formError[props.config.contactByPhone.value]
                }}
                  onChange={value => onFormChange('contactByPhone', value)}/>

        <GridRow data-id="GridRow" gridTemplate={'1fr 20%'} justifyContent={'end'} justifyItems={'end'} verticalAlign={'center'}>
          {props.submitProcess.errorMessage ? <ErrorText textId={props.submitProcess.errorMessage}/> :
            props.submitProcess.fetching ? <Icon type={IconType.loading} size={Size.small} /> :
            props.submitProcess.fetched ? <Icon type={IconType.check} size={Size.small} /> :
              <div />
          }
          <Button onClick={props.onSubmit} disabled={true} textId="submit"/>
        </GridRow>
      </GridRow>
    </ResumeContainerStyled>
  )
};

export default ContactForm;