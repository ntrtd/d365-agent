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
import type { BankGroupsApi } from './BankGroupsApi';
import { BankTypeRu } from './BankTypeRu';
import { Timezone } from './Timezone';
import { BankCodeType } from './BankCodeType';
import { NoYes } from './NoYes';
import {
  VendorBankAccounts,
  VendorBankAccountsType
} from './VendorBankAccounts';
import { BankAccounts, BankAccountsType } from './BankAccounts';

/**
 * This class represents the entity "BankGroups" of service "d365_metadata".
 */
export class BankGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BankGroupsType<T>
{
  /**
   * Technical entity name for BankGroups.
   */
  static override _entityName = 'BankGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BankGroups entity.
   */
  static _keys = ['dataAreaId', 'BankGroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bank Group Id.
   */
  declare bankGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Country Iso Code.
   * @nullable
   */
  declare addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Code.
   * @nullable
   */
  declare branchCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Type Ru.
   * @nullable
   */
  declare bankTypeRu?: BankTypeRu | null;
  /**
   * Address Country.
   * @nullable
   */
  declare addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Time Zone.
   * @nullable
   */
  declare addressTimeZone?: Timezone | null;
  /**
   * Contact Fax.
   * @nullable
   */
  declare contactFax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contract Post Account.
   * @nullable
   */
  declare contractPostAccount?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Code.
   * @nullable
   */
  declare bankCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone Extension.
   * @nullable
   */
  declare contactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Base Bank Id Ru.
   * @nullable
   */
  declare baseBankIdRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Pager.
   * @nullable
   */
  declare contactPager?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Longitude.
   */
  declare addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Short Addressing Ru.
   * @nullable
   */
  declare bankShortAddressingRu?: DeserializedType<T, 'Edm.String'> | null;
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
   * Contact Email.
   * @nullable
   */
  declare contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Url.
   * @nullable
   */
  declare contactUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Telex.
   * @nullable
   */
  declare contactTelex?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Banks Identification Of Company.
   * @nullable
   */
  declare banksIdentificationOfCompany?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Sms.
   * @nullable
   */
  declare contactSms?: DeserializedType<T, 'Edm.String'> | null;
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
   * Bank Account Opened In Ru.
   * @nullable
   */
  declare bankAccountOpenedInRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Suffix.
   * @nullable
   */
  declare suffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Statement Name.
   * @nullable
   */
  declare bankStatementName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Kana Name.
   * @nullable
   */
  declare kanaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cellular Phone.
   * @nullable
   */
  declare cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Latitude.
   */
  declare addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bank Description Ru.
   * @nullable
   */
  declare bankDescriptionRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Kana Name.
   * @nullable
   */
  declare branchKanaName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Full Primary Address.
   * @nullable
   */
  declare fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Name.
   * @nullable
   */
  declare branchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Format Id.
   * @nullable
   */
  declare statementFormatId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Name.
   * @nullable
   */
  declare contactName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Archive Ru.
   * @nullable
   */
  declare bankArchiveRu?: NoYes | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Phone.
   * @nullable
   */
  declare contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vend Account Num Ru.
   * @nullable
   */
  declare vendAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Bic Ru.
   * @nullable
   */
  declare bankBicRu?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer.
   * @nullable
   */
  declare drawer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Swift No Ee.
   * @nullable
   */
  declare swiftNoEe?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-many navigation property to the {@link VendorBankAccounts} entity.
   */
  declare vendorBankAccounts: VendorBankAccounts<T>[];
  /**
   * One-to-many navigation property to the {@link BankAccounts} entity.
   */
  declare bankAccount: BankAccounts<T>[];

  constructor(_entityApi: BankGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface BankGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bankGroupId: DeserializedType<T, 'Edm.String'>;
  addressCountryIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  branchCode?: DeserializedType<T, 'Edm.String'> | null;
  bankTypeRu?: BankTypeRu | null;
  addressCountry?: DeserializedType<T, 'Edm.String'> | null;
  addressTimeZone?: Timezone | null;
  contactFax?: DeserializedType<T, 'Edm.String'> | null;
  contractPostAccount?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  bankCode?: DeserializedType<T, 'Edm.String'> | null;
  contactPhoneExtension?: DeserializedType<T, 'Edm.String'> | null;
  baseBankIdRu?: DeserializedType<T, 'Edm.String'> | null;
  contactPager?: DeserializedType<T, 'Edm.String'> | null;
  addressLongitude: DeserializedType<T, 'Edm.Decimal'>;
  bankShortAddressingRu?: DeserializedType<T, 'Edm.String'> | null;
  bankName?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  contactEmail?: DeserializedType<T, 'Edm.String'> | null;
  contactUrl?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  contactTelex?: DeserializedType<T, 'Edm.String'> | null;
  banksIdentificationOfCompany?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  contactSms?: DeserializedType<T, 'Edm.String'> | null;
  routingNumberType?: BankCodeType | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountOpenedInRu?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  suffix?: DeserializedType<T, 'Edm.String'> | null;
  bankStatementName?: DeserializedType<T, 'Edm.String'> | null;
  kanaName?: DeserializedType<T, 'Edm.String'> | null;
  cellularPhone?: DeserializedType<T, 'Edm.String'> | null;
  addressLatitude: DeserializedType<T, 'Edm.Decimal'>;
  bankDescriptionRu?: DeserializedType<T, 'Edm.String'> | null;
  branchKanaName?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  fullPrimaryAddress?: DeserializedType<T, 'Edm.String'> | null;
  branchName?: DeserializedType<T, 'Edm.String'> | null;
  statementFormatId?: DeserializedType<T, 'Edm.String'> | null;
  contactName?: DeserializedType<T, 'Edm.String'> | null;
  bankArchiveRu?: NoYes | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  contactPhone?: DeserializedType<T, 'Edm.String'> | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  vendAccountNumRu?: DeserializedType<T, 'Edm.String'> | null;
  bankBicRu?: DeserializedType<T, 'Edm.String'> | null;
  drawer?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  swiftNoEe?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  vendorBankAccounts: VendorBankAccountsType<T>[];
  bankAccount: BankAccountsType<T>[];
}
