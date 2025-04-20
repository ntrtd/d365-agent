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
import type { PayIntV1WorkerBankAccountsApi } from './PayIntV1WorkerBankAccountsApi';
import { BankCodeType } from './BankCodeType';
import { BankAccountType } from './BankAccountType';

/**
 * This class represents the entity "PayIntV1WorkerBankAccounts" of service "d365_metadata".
 */
export class PayIntV1WorkerBankAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1WorkerBankAccountsType<T>
{
  /**
   * Technical entity name for PayIntV1WorkerBankAccounts.
   */
  static override _entityName = 'PayIntV1WorkerBankAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1WorkerBankAccounts entity.
   */
  static _keys = ['PersonnelNumber', 'AccountIdentification'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Account Identification.
   */
  declare accountIdentification: DeserializedType<T, 'Edm.String'>;
  /**
   * Address Building Compliment.
   * @nullable
   */
  declare addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Extension.
   * @nullable
   */
  declare extension?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address District Name.
   * @nullable
   */
  declare addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Iso Code.
   * @nullable
   */
  declare addressCountryRegionIsoCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Address Description.
   * @nullable
   */
  declare addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Iban.
   * @nullable
   */
  declare bankIban?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telex Number.
   * @nullable
   */
  declare telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street Number.
   * @nullable
   */
  declare addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Name.
   * @nullable
   */
  declare branchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Swift No.
   * @nullable
   */
  declare swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Of Person.
   * @nullable
   */
  declare nameOfPerson?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number Type.
   * @nullable
   */
  declare routingNumberType?: BankCodeType | null;
  /**
   * Address City.
   * @nullable
   */
  declare addressCity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Routing Number.
   * @nullable
   */
  declare routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid To.
   */
  declare addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Address Post Box.
   * @nullable
   */
  declare addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Location Id.
   * @nullable
   */
  declare addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address County.
   * @nullable
   */
  declare addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Account Holder.
   * @nullable
   */
  declare accountHolder?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax.
   * @nullable
   */
  declare fax?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Zip Code.
   * @nullable
   */
  declare addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Street.
   * @nullable
   */
  declare addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Branch Number.
   * @nullable
   */
  declare branchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Country Region Id.
   * @nullable
   */
  declare addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Address.
   * @nullable
   */
  declare internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Location Code.
   * @nullable
   */
  declare bankLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address State.
   * @nullable
   */
  declare addressState?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bank Account Type.
   * @nullable
   */
  declare bankAccountType?: BankAccountType | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Address Valid From.
   */
  declare addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Bank Account Number.
   * @nullable
   */
  declare bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1WorkerBankAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1WorkerBankAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  accountIdentification: DeserializedType<T, 'Edm.String'>;
  addressBuildingCompliment?: DeserializedType<T, 'Edm.String'> | null;
  extension?: DeserializedType<T, 'Edm.String'> | null;
  addressDistrictName?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionIsoCode?: DeserializedType<T, 'Edm.String'> | null;
  addressDescription?: DeserializedType<T, 'Edm.String'> | null;
  bankIban?: DeserializedType<T, 'Edm.String'> | null;
  telexNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressStreetNumber?: DeserializedType<T, 'Edm.String'> | null;
  branchName?: DeserializedType<T, 'Edm.String'> | null;
  swiftNo?: DeserializedType<T, 'Edm.String'> | null;
  nameOfPerson?: DeserializedType<T, 'Edm.String'> | null;
  routingNumberType?: BankCodeType | null;
  addressCity?: DeserializedType<T, 'Edm.String'> | null;
  routingNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  addressPostBox?: DeserializedType<T, 'Edm.String'> | null;
  addressLocationId?: DeserializedType<T, 'Edm.String'> | null;
  addressCounty?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  accountHolder?: DeserializedType<T, 'Edm.String'> | null;
  fax?: DeserializedType<T, 'Edm.String'> | null;
  addressZipCode?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  addressStreet?: DeserializedType<T, 'Edm.String'> | null;
  branchNumber?: DeserializedType<T, 'Edm.String'> | null;
  addressCountryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  internetAddress?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  bankLocationCode?: DeserializedType<T, 'Edm.String'> | null;
  addressState?: DeserializedType<T, 'Edm.String'> | null;
  bankAccountType?: BankAccountType | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  bankAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
