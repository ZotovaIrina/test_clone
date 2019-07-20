interface IContactInformation {
  name?: string | null;
  phone?: number | null;
  companyName?: string | null;
  message?: string | null;
  email?: string | null;
}


export default class ContactInformation {
  public name: string | null;
  public phone: number | null;
  public companyName: string | null;
  public message: string | null;
  public email: string | null;

  constructor({
                name = null,
                phone = null,
                companyName = null,
                message = null,
                email = null
              }: IContactInformation = {}) {
    this.name = name;
    this.phone = phone;
    this.companyName = companyName;
    this.message = message;
    this.email = email;
  }

}