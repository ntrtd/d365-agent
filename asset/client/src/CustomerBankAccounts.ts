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
import type { CustomerBankAccountsApi } from './CustomerBankAccountsApi';
import { Timezone } from './Timezone';
import { BankCodeType } from './BankCodeType';
import { NoYes } from './NoYes';
import { BankAccountType } from './BankAccountType';

/**
 * This class represents the entity "CustomerBankAccounts" of service "d365_metadata".
 */
export class CustomerBankAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerBankAccountsType<T>
{
  /**
   * Technical entity name for CustomerBankAccounts.
   */
  static override _entityName = 'CustomerBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerBankAccounts entity.
   */
  static _keys = ['dataAreaId', 'CustomerAccountNumber', 'BankAccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Customer Account Number.
   */
  declare customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Account Id.
   */
  declare bankAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Text Code.
   * @nullable
   */
  declare paymentTextCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Control Internal Number.
   * @nullable
   */
  declare controlInternalNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Message To Bank.
   * @nullable
   */
  declare messageToBank?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Contract Account.
   * @nullable
   */
  declare bankContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Pager.
   * @nullable
   */
  declare contactPager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Number.
   * @nullable
   */
  declare bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Mobile Phone Number.
   * @nullable
   */
  declare contactMobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Constant Symbol.
   * @nullable
   */
  declare bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name.
   * @nullable
   */
  declare bankName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Swift Code.
   * @nullable
   */
  declare swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Iban.
   * @nullable
   */
  declare iban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Email Address.
   * @nullable
   */
  declare contactEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Telex Number.
   * @nullable
   */
  declare contactTelexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cross Rate.
   */
  declare crossRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Contact Internet Address.
   * @nullable
   */
  declare contactInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number.
   * @nullable
   */
  declare routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Id.
   * @nullable
   */
  declare bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Name.
   * @nullable
   */
  declare contactPersonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number Type.
   * @nullable
   */
  declare routingNumberType?: BankCodeType | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone Number.
   * @nullable
   */
  declare contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Address.
   * @nullable
   */
  declare fullAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Esr.
   * @nullable
   */
  declare esr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Email Address For Sending Sms.
   * @nullable
   */
  declare contactEmailAddressForSendingSms?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Specific Symbol.
   * @nullable
   */
  declare bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rate Of Exchange Reference.
   * @nullable
   */
  declare rateOfExchangeReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone Number Extension.
   * @nullable
   */
  declare contactPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Default Bank Account.
   * @nullable
   */
  declare isDefaultBankAccount?: NoYes | null;
  /**
   * Contact Fax Number.
   * @nullable
   */
  declare contactFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency Code.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Type.
   * @nullable
   */
  declare bankAccountType?: BankAccountType | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Qriban.
   * @nullable
   */
  declare qriban?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomerBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  customerAccountNumber: DeserializedType<T, 'Edm.String'>;
  bankAccountId: DeserializedType<T, 'Edm.String'>;
  paymentTextCode?: DeserializedType<T, 'Edm.String'> | null;
  controlInternalNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  messageToBank?: DeserializedType<T, 'Edm.String'> | null;
  bankContractAccount?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  contactPager?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  contactMobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  contactEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  contactTelexNumber?: DeserializedType<T, 'Edm.String'> | null;
  crossRate: DeserializedType<T, 'Edm.Decimal'>;
  contactInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonName?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  routingNumberType?: BankCodeType | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  fullAddress?: DeserializedType<T, 'Edm.String'> | null;
  esr?: DeserializedType<T, 'Edm.String'> | null;
  contactEmailAddressForSendingSms?: DeserializedType<T, 'Edm.String'> | null;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  rateOfExchangeReference?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultBankAccount?: NoYes | null;
  contactFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountType?: BankAccountType | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  qriban?: DeserializedType<T, 'Edm.String'> | null;
}
