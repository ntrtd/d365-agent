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
import type { CashStateTransApi } from './CashStateTransApi';
import { NoYes } from './NoYes';
import { LvInOutPaym } from './LvInOutPaym';

/**
 * This class represents the entity "CashStateTrans" of service "d365_metadata".
 */
export class CashStateTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CashStateTransType<T>
{
  /**
   * Technical entity name for CashStateTrans.
   */
  static override _entityName = 'CashStateTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CashStateTrans entity.
   */
  static _keys = ['dataAreaId', 'Voucher'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voucher.
   */
  declare voucher: DeserializedType<T, 'Edm.String'>;
  /**
   * Include.
   * @nullable
   */
  declare include?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Direction.
   * @nullable
   */
  declare paymentDirection?: LvInOutPaym | null;
  /**
   * Currency.
   * @nullable
   */
  declare currency?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Transaction Code.
   * @nullable
   */
  declare paymentTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   */
  declare date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Amount.
   */
  declare amount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Company Registration Number.
   * @nullable
   */
  declare companyRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Code.
   * @nullable
   */
  declare countryCode?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CashStateTransApi<T>) {
    super(_entityApi);
  }
}

export interface CashStateTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voucher: DeserializedType<T, 'Edm.String'>;
  include?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  paymentDirection?: LvInOutPaym | null;
  currency?: DeserializedType<T, 'Edm.String'> | null;
  paymentTransactionCode?: DeserializedType<T, 'Edm.String'> | null;
  date: DeserializedType<T, 'Edm.DateTimeOffset'>;
  amount: DeserializedType<T, 'Edm.Decimal'>;
  companyRegistrationNumber?: DeserializedType<T, 'Edm.String'> | null;
  countryCode?: DeserializedType<T, 'Edm.String'> | null;
}
