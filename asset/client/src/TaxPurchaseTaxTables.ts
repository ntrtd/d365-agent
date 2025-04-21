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
import type { TaxPurchaseTaxTablesApi } from './TaxPurchaseTaxTablesApi';
import { TaxCalcMode } from './TaxCalcMode';

/**
 * This class represents the entity "TaxPurchaseTaxTables" of service "d365_metadata".
 */
export class TaxPurchaseTaxTables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxPurchaseTaxTablesType<T>
{
  /**
   * Technical entity name for TaxPurchaseTaxTables.
   */
  static override _entityName = 'TaxPurchaseTaxTables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPurchaseTaxTables entity.
   */
  static _keys = [
    'dataAreaId',
    'PurchaseDuty',
    'FromDate',
    'ToDate',
    'TaxLimitMin'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Duty.
   */
  declare purchaseDuty: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Limit Min.
   */
  declare taxLimitMin: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Authority.
   * @nullable
   */
  declare taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Percent.
   */
  declare percent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Tax Limit Max.
   */
  declare taxLimitMax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Duty Account Display Value.
   * @nullable
   */
  declare dutyAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Tax Calc Mode.
   * @nullable
   */
  declare taxCalcMode?: TaxCalcMode | null;
  /**
   * Cost Account Display Value.
   * @nullable
   */
  declare costAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settle Account Display Value.
   * @nullable
   */
  declare settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TaxPurchaseTaxTablesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxPurchaseTaxTablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseDuty: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxLimitMin: DeserializedType<T, 'Edm.Decimal'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  percent: DeserializedType<T, 'Edm.Decimal'>;
  taxLimitMax: DeserializedType<T, 'Edm.Decimal'>;
  dutyAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  taxCalcMode?: TaxCalcMode | null;
  costAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  settleAccountDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}
