interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Company',
  applicationName: 'todo',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read user information', 'Read company information'],
  ownerAbilities: ['Manage user information', 'Manage company information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/63467718-f44b-4c5b-9d28-6a17a958100b',
};
