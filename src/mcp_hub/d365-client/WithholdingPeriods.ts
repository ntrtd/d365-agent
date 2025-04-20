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
import type { WithholdingPeriodsApi } from './WithholdingPeriodsApi';
import { PeriodUnit } from './PeriodUnit';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';

/**
 * This class represents the entity "WithholdingPeriods" of service "d365_metadata".
 */
export class WithholdingPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements WithholdingPeriodsType<T>
{
  /**
   * Technical entity name for WithholdingPeriods.
   */
  static override _entityName = 'WithholdingPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingPeriods entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxWithholdPeriod',
    'TaxWithholdFromDate',
    'TaxWithholdToDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Period.
   */
  declare taxWithholdPeriod: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold From Date.
   */
  declare taxWithholdFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Withhold To Date.
   */
  declare taxWithholdToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Tax Authority.
   * @nullable
   */
  declare taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Code.
   * @nullable
   */
  declare paymentCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Period Unit.
   * @nullable
   */
  declare periodUnit?: PeriodUnit | null;
  /**
   * Qty Unit.
   */
  declare qtyUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode: WithholdingTaxCodes<T>[];

  constructor(_entityApi: WithholdingPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdPeriod: DeserializedType<T, 'Edm.String'>;
  taxWithholdFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxWithholdToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  taxAuthority?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  paymentCode?: DeserializedType<T, 'Edm.String'> | null;
  periodUnit?: PeriodUnit | null;
  qtyUnit: DeserializedType<T, 'Edm.Int32'>;
  withholdingTaxCode: WithholdingTaxCodesType<T>[];
}
