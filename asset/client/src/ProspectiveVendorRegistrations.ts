/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProspectiveVendorRegistrationsApi } from './ProspectiveVendorRegistrationsApi';
import { NoYes } from './NoYes';
import { DirPartyBaseType } from './DirPartyBaseType';
import { TaxIdType } from './TaxIdType';
import { Tax1099NameChoice } from './Tax1099NameChoice';

/**
 * This class represents the entity "ProspectiveVendorRegistrations" of service "d365_metadata".
 */
export class ProspectiveVendorRegistrations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProspectiveVendorRegistrationsType<T>
{
  /**
   * Technical entity name for ProspectiveVendorRegistrations.
   */
  static override _entityName = 'ProspectiveVendorRegistrations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProspectiveVendorRegistrations entity.
   */
  static _keys = ['dataAreaId', 'VendorRegistrationId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Registration Id.
   */
  declare vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Are Terms And Conditions Accepted.
   * @nullable
   */
  declare areTermsAndConditionsAccepted?: NoYes | null;
  /**
   * Siret Id.
   * @nullable
   */
  declare siretId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Small Business.
   * @nullable
   */
  declare isSmallBusiness?: NoYes | null;
  /**
   * Contact Person Email Address.
   * @nullable
   */
  declare contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Foreign Ownership Indicator.
   * @nullable
   */
  declare foreignOwnershipIndicator?: NoYes | null;
  /**
   * Tax 1099 G Vendor State Id.
   * @nullable
   */
  declare tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Type.
   * @nullable
   */
  declare organizationType?: DirPartyBaseType | null;
  /**
   * Is Female Owned.
   * @nullable
   */
  declare isFemaleOwned?: NoYes | null;
  /**
   * Federal 1099 Number.
   * @nullable
   */
  declare federal1099Number?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Naf Code.
   */
  declare nafCode: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Contact Person Phone Number.
   * @nullable
   */
  declare contactPersonPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Email Address.
   * @nullable
   */
  declare companyEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Number Of Employees.
   */
  declare numberOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax 1099 Fields.
   */
  declare tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Group Id.
   * @nullable
   */
  declare vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Tax Exempt Number.
   * @nullable
   */
  declare companyTaxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * National Registry Number.
   * @nullable
   */
  declare nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business.
   * @nullable
   */
  declare lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Locally Owned.
   * @nullable
   */
  declare isLocallyOwned?: NoYes | null;
  /**
   * Payment Terms Name.
   * @nullable
   */
  declare paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Website Url.
   * @nullable
   */
  declare companyWebsiteUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax State Identifier Type.
   * @nullable
   */
  declare taxStateIdentifierType?: TaxIdType | null;
  /**
   * Tax 1099 Name Choice.
   * @nullable
   */
  declare tax1099NameChoice?: Tax1099NameChoice | null;
  /**
   * Fiscal Code.
   * @nullable
   */
  declare fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Phone Number.
   * @nullable
   */
  declare companyPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Registration Request Submitted.
   * @nullable
   */
  declare isRegistrationRequestSubmitted?: NoYes | null;
  /**
   * Doing Business As.
   * @nullable
   */
  declare doingBusinessAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax 1099 G Vendor State Tax Id.
   * @nullable
   */
  declare tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Fax Number.
   * @nullable
   */
  declare companyFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Minority Owned.
   * @nullable
   */
  declare isMinorityOwned?: NoYes | null;
  /**
   * Federal 1099 Number Type.
   * @nullable
   */
  declare federal1099NumberType?: TaxIdType | null;

  constructor(_entityApi: ProspectiveVendorRegistrationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProspectiveVendorRegistrationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>;
  areTermsAndConditionsAccepted?: NoYes | null;
  siretId?: DeserializedType<T, 'Edm.String'> | null;
  isSmallBusiness?: NoYes | null;
  contactPersonEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  foreignOwnershipIndicator?: NoYes | null;
  tax1099GVendorStateId?: DeserializedType<T, 'Edm.String'> | null;
  organizationType?: DirPartyBaseType | null;
  isFemaleOwned?: NoYes | null;
  federal1099Number?: DeserializedType<T, 'Edm.String'> | null;
  nafCode: DeserializedType<T, 'Edm.Int64'>;
  contactPersonPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  companyEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  numberOfEmployees: DeserializedType<T, 'Edm.Int32'>;
  tax1099Fields: DeserializedType<T, 'Edm.Int64'>;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorGroupId?: DeserializedType<T, 'Edm.String'> | null;
  companyTaxExemptNumber?: DeserializedType<T, 'Edm.String'> | null;
  nationalRegistryNumber?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  isLocallyOwned?: NoYes | null;
  paymentTermsName?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  companyWebsiteUrl?: DeserializedType<T, 'Edm.String'> | null;
  taxStateIdentifierType?: TaxIdType | null;
  tax1099NameChoice?: Tax1099NameChoice | null;
  fiscalCode?: DeserializedType<T, 'Edm.String'> | null;
  companyPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  isRegistrationRequestSubmitted?: NoYes | null;
  doingBusinessAs?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  tax1099GVendorStateTaxId?: DeserializedType<T, 'Edm.String'> | null;
  companyFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  isMinorityOwned?: NoYes | null;
  federal1099NumberType?: TaxIdType | null;
}
