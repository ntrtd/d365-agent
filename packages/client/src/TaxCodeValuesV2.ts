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
import type { TaxCodeValuesV2Api } from './TaxCodeValuesV2Api';
import { TaxCodes, TaxCodesType } from './TaxCodes';

/**
 * This class represents the entity "TaxCodeValuesV2" of service "d365_metadata".
 */
export class TaxCodeValuesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxCodeValuesV2Type<T>
{
  /**
   * Technical entity name for TaxCodeValuesV2.
   */
  static override _entityName = 'TaxCodeValuesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCodeValuesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'TaxCodeId',
    'FromDate',
    'ToDate',
    'MinimumLimit',
    'MaximumLimit'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Code Id.
   */
  declare taxCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Minimum Limit.
   */
  declare minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Limit.
   */
  declare maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Substitution Markup Percentage.
   */
  declare substitutionMarkupPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Duty.
   */
  declare duty: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Non Deductible Percentage.
   */
  declare nonDeductiblePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reduction Percentage.
   */
  declare reductionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode?: TaxCodes<T> | null;

  constructor(_entityApi: TaxCodeValuesV2Api<T>) {
    super(_entityApi);
  }
}

export interface TaxCodeValuesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  substitutionMarkupPercentage: DeserializedType<T, 'Edm.Decimal'>;
  duty: DeserializedType<T, 'Edm.Decimal'>;
  nonDeductiblePercentage: DeserializedType<T, 'Edm.Decimal'>;
  reductionPercentage: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: TaxCodesType<T> | null;
}
