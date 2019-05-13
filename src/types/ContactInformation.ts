interface IContactInformation {
  name?: string | null;
  companyName?: string | null;
  message?: string | null;
  email?: string | null;
}


export default class ContactInformation {
  public name: string | null;
  public companyName: string | null;
  public message: string | null;
  public email: string | null;

  constructor({
                name = null,
                companyName = null,
                message = null,
                email = null
              }: IContactInformation = {}) {
    this.name = name;
    this.companyName = companyName;
    this.message = message;
    this.email = email;
  }

}