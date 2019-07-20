import {IFormCell} from '../components/common/FormCell/FormCell';
import {ValidationType} from '../utils/validation/validator/validator';

export default interface IFormConfig {
  formCell: IFormCell,
  value: string,
  validationType: ValidationType
}