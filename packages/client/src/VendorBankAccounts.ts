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
import type { VendorBankAccountsApi } from './VendorBankAccountsApi';
import { BankInformationOrigin } from './BankInformationOrigin';
import { Timezone } from './Timezone';
import { NoYes } from './NoYes';
import { VendBankTransTypeJp } from './VendBankTransTypeJp';
import { BankCodeType } from './BankCodeType';
import { BankAccountType } from './BankAccountType';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import { Currencies, CurrenciesType } from './Currencies';
import { BankGroups, BankGroupsType } from './BankGroups';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "VendorBankAccounts" of service "d365_metadata".
 */
export class VendorBankAccounts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorBankAccountsType<T>
{
  /**
   * Technical entity name for VendorBankAccounts.
   */
  static override _entityName = 'VendorBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorBankAccounts entity.
   */
  static _keys = ['dataAreaId', 'VendorAccountNumber', 'VendorBankAccountId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Bank Account Id.
   */
  declare vendorBankAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Comments.
   * @nullable
   */
  declare comments?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interim Vendor Bank Account Number.
   * @nullable
   */
  declare interimVendorBankAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Iso Code.
   * @nullable
   */
  declare addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Information Origin.
   * @nullable
   */
  declare bankInformationOrigin?: BankInformationOrigin | null;
  /**
   * Address Country.
   * @nullable
   */
  declare addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns Number.
   * @nullable
   */
  declare dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Foreign Bank Group Id.
   * @nullable
   */
  declare foreignBankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reviewed.
   * @nullable
   */
  declare reviewed?: NoYes | null;
  /**
   * Foreign Bank Account Number.
   * @nullable
   */
  declare foreignBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Active Date.
   */
  declare activeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Bank Transaction Type.
   * @nullable
   */
  declare bankTransactionType?: VendBankTransTypeJp | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Correspondence Account Bank Group Id.
   * @nullable
   */
  declare bankCorrespondenceAccountBankGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Bank Message.
   * @nullable
   */
  declare bankMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
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
   * Foreign Bank Swift Code.
   * @nullable
   */
  declare foreignBankSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Name In Kana.
   * @nullable
   */
  declare bankNameInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Bank Correspondence Bank Group Id.
   * @nullable
   */
  declare bankCorrespondenceBankGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Recipient Text Code.
   * @nullable
   */
  declare recipientTextCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address City In Kana.
   * @nullable
   */
  declare addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Group Id.
   * @nullable
   */
  declare bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Contact Phone Number.
   * @nullable
   */
  declare contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Email Address For Sending Sms.
   * @nullable
   */
  declare contactEmailAddressForSendingSms?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Default Bank Account For Current Currency.
   * @nullable
   */
  declare isDefaultBankAccountForCurrentCurrency?: NoYes | null;
  /**
   * Address Street In Kana.
   * @nullable
   */
  declare addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
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
   * Current Currency Code.
   * @nullable
   */
  declare currentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Correspondence Bank Account Number.
   * @nullable
   */
  declare correspondenceBankAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Interim Bank Correspondence Bank Account Number.
   * @nullable
   */
  declare interimBankCorrespondenceBankAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Phone Number Extension.
   * @nullable
   */
  declare contactPhoneNumberExtension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
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
   * Bank Account Type.
   * @nullable
   */
  declare bankAccountType?: BankAccountType | null;
  /**
   * Formatted Address.
   * @nullable
   */
  declare formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Duns 4 Number Suffix.
   * @nullable
   */
  declare duns4NumberSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Payment Specification Parameter.
   * @nullable
   */
  declare paymentSpecificationParameter?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Qriban.
   * @nullable
   */
  declare qriban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendorV2?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-one navigation property to the {@link BankGroups} entity.
   */
  declare bankGroup?: BankGroups<T> | null;
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: VendorBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  vendorBankAccountId: DeserializedType<T, 'Edm.String'>;
  comments?: DeserializedType<T, 'Edm.String'> | null;
  interimVendorBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  bankInformationOrigin?: BankInformationOrigin | null;
  addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  dunsNumber?: DeserializedType<T, 'Edm.String'> | null;
  controlInternalNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  foreignBankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  reviewed?: NoYes | null;
  foreignBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPager?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  activeDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  contactMobilePhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankConstantSymbol?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  bankTransactionType?: VendBankTransTypeJp | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankCorrespondenceAccountBankGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  bankMessage?: DeserializedType<T, 'Edm.String'> | null;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  swiftCode?: DeserializedType<T, 'Edm.String'> | null;
  iban?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  foreignBankSwiftCode?: DeserializedType<T, 'Edm.String'> | null;
  bankNameInKana?: DeserializedType<T, 'Edm.String'> | null;
  contactEmailAddress?: DeserializedType<T, 'Edm.String'> | null;
  contactTelexNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankCorrespondenceBankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  crossRate: DeserializedType<T, 'Edm.Decimal'>;
  contactInternetAddress?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  recipientTextCode?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressCityInKana?: DeserializedType<T, 'Edm.String'> | null;
  bankGroupId?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  routingNumberType?: BankCodeType | null;
  contactPhoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactEmailAddressForSendingSms?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultBankAccountForCurrentCurrency?: NoYes | null;
  addressStreetInKana?: DeserializedType<T, 'Edm.String'> | null;
  bankSpecificSymbol?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  rateOfExchangeReference?: DeserializedType<T, 'Edm.String'> | null;
  currentCurrencyCode?: DeserializedType<T, 'Edm.String'> | null;
  correspondenceBankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  interimBankCorrespondenceBankAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  contactPhoneNumberExtension?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  isDefaultBankAccount?: NoYes | null;
  contactFaxNumber?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountType?: BankAccountType | null;
  formattedAddress?: DeserializedType<T, 'Edm.String'> | null;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  duns4NumberSuffix?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  paymentSpecificationParameter?: DeserializedType<T, 'Edm.String'> | null;
  qriban?: DeserializedType<T, 'Edm.String'> | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  vendorV2?: VendorsV2Type<T> | null;
  currency?: CurrenciesType<T> | null;
  bankGroup?: BankGroupsType<T> | null;
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
