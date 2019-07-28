import IFormConfig from '../../types/IFormConfig';

export default interface IContactMe {
  name: IFormConfig,
  companyName: IFormConfig,
  phone: IFormConfig,
  email: IFormConfig,
  message: IFormConfig,
  contactByPhone: IFormConfig
}