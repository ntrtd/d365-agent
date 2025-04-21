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
import type { TaxPeriodsApi } from './TaxPeriodsApi';
import { PeriodUnit } from './PeriodUnit';
import { TaxAuthorities, TaxAuthoritiesType } from './TaxAuthorities';
import { TaxCodes, TaxCodesType } from './TaxCodes';

/**
 * This class represents the entity "TaxPeriods" of service "d365_metadata".
 */
export class TaxPeriods<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxPeriodsType<T>
{
  /**
   * Technical entity name for TaxPeriods.
   */
  static override _entityName = 'TaxPeriods';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxPeriods entity.
   */
  static _keys = ['dataAreaId', 'TaxPeriodId', 'FromDate', 'ToDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Period Id.
   */
  declare taxPeriodId: DeserializedType<T, 'Edm.String'>;
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
   * Tax Payment Version.
   */
  declare taxPaymentVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Period Interval.
   * @nullable
   */
  declare periodInterval?: PeriodUnit | null;
  /**
   * Number Of Unit.
   */
  declare numberOfUnit: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Tax Authority Id.
   * @nullable
   */
  declare taxAuthorityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Term Id.
   * @nullable
   */
  declare paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link TaxAuthorities} entity.
   */
  declare taxAuthority?: TaxAuthorities<T> | null;
  /**
   * One-to-many navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode: TaxCodes<T>[];

  constructor(_entityApi: TaxPeriodsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxPeriodsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxPeriodId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  taxPaymentVersion: DeserializedType<T, 'Edm.Int32'>;
  periodInterval?: PeriodUnit | null;
  numberOfUnit: DeserializedType<T, 'Edm.Int32'>;
  taxAuthorityId?: DeserializedType<T, 'Edm.String'> | null;
  paymentTermId?: DeserializedType<T, 'Edm.String'> | null;
  taxAuthority?: TaxAuthoritiesType<T> | null;
  taxCode: TaxCodesType<T>[];
}
