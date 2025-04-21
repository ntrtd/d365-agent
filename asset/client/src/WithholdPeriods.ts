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
import type { WithholdPeriodsApi } from './WithholdPeriodsApi';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { PeriodUnit } from './PeriodUnit';

/**
 * This class represents the entity "WithholdPeriods" of service "d365_metadata".
 */
export class WithholdPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdPeriodsType<T>
{
  /**
   * Technical entity name for WithholdPeriods.
   */
  static override _entityName = 'WithholdPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdPeriods entity.
   */
  static _keys = [
    'dataAreaId',
    'SettlementPeriod',
    'TaxType',
    'WithholdingTaxuthority',
    'FromDate',
    'ToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Settlement Period.
   */
  declare settlementPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Type.
   * @nullable
   */
  declare taxType?: TaxWithholdTypeIn | null;
  /**
   * Withholding Taxuthority.
   */
  declare withholdingTaxuthority: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Interval.
   * @nullable
   */
  declare periodInterval?: PeriodUnit | null;
  /**
   * Number Of Units.
   */
  declare numberOfUnits: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: WithholdPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  settlementPeriod: DeserializedType<T, 'Edm.String'>;
  taxType?: TaxWithholdTypeIn | null;
  withholdingTaxuthority: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  periodInterval?: PeriodUnit | null;
  numberOfUnits: DeserializedType<T, 'Edm.Int32'>;
}
