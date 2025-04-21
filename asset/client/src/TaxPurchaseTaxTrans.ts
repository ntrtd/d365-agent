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
import type { TaxPurchaseTaxTransApi } from './TaxPurchaseTaxTransApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "TaxPurchaseTaxTrans" of service "d365_metadata".
 */
export class TaxPurchaseTaxTrans<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxPurchaseTaxTransType<T>
{
  /**
   * Technical entity name for TaxPurchaseTaxTrans.
   */
  static override _entityName = 'TaxPurchaseTaxTrans';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPurchaseTaxTrans entity.
   */
  static _keys = ['dataAreaId', 'TransID'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Trans Id.
   */
  declare transId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Base.
   */
  declare base: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Date.
   */
  declare reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Purchase Duty.
   * @nullable
   */
  declare purchaseDuty?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Voucher.
   * @nullable
   */
  declare voucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement Period.
   * @nullable
   */
  declare settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reporting Voucher.
   * @nullable
   */
  declare reportingVoucher?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Duty.
   */
  declare duty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sales Tax Code.
   * @nullable
   */
  declare salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Trans Date.
   */
  declare transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reversed.
   * @nullable
   */
  declare reversed?: NoYes | null;
  /**
   * Trace Number.
   * @nullable
   */
  declare traceNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxPurchaseTaxTransApi<T>) {
    super(_entityApi);
  }
}

export interface TaxPurchaseTaxTransType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transId: DeserializedType<T, 'Edm.Guid'>;
  base: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  reportingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  purchaseDuty?: DeserializedType<T, 'Edm.String'> | null;
  voucher?: DeserializedType<T, 'Edm.String'> | null;
  settlementPeriod?: DeserializedType<T, 'Edm.String'> | null;
  reportingVoucher?: DeserializedType<T, 'Edm.String'> | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  duty: DeserializedType<T, 'Edm.Decimal'>;
  salesTaxCode?: DeserializedType<T, 'Edm.String'> | null;
  transDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reversed?: NoYes | null;
  traceNumber?: DeserializedType<T, 'Edm.String'> | null;
}
