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
import type { WithholdingTaxCodeValuesApi } from './WithholdingTaxCodeValuesApi';
import {
  WithholdingTaxCodes,
  WithholdingTaxCodesType
} from './WithholdingTaxCodes';

/**
 * This class represents the entity "WithholdingTaxCodeValues" of service "d365_metadata".
 */
export class WithholdingTaxCodeValues<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements WithholdingTaxCodeValuesType<T>
{
  /**
   * Technical entity name for WithholdingTaxCodeValues.
   */
  static override _entityName = 'WithholdingTaxCodeValues';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the WithholdingTaxCodeValues entity.
   */
  static _keys = ['dataAreaId', 'TaxWithholdCodeId', 'FromDate', 'ToDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tax Withhold Code Id.
   */
  declare taxWithholdCodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Value.
   */
  declare value: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Limit.
   */
  declare maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Limit.
   */
  declare minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Exclude Percentage.
   */
  declare excludePercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link WithholdingTaxCodes} entity.
   */
  declare withholdingTaxCode?: WithholdingTaxCodes<T> | null;

  constructor(_entityApi: WithholdingTaxCodeValuesApi<T>) {
    super(_entityApi);
  }
}

export interface WithholdingTaxCodeValuesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxWithholdCodeId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  value: DeserializedType<T, 'Edm.Decimal'>;
  maximumLimit: DeserializedType<T, 'Edm.Decimal'>;
  minimumLimit: DeserializedType<T, 'Edm.Decimal'>;
  excludePercentage: DeserializedType<T, 'Edm.Decimal'>;
  withholdingTaxCode?: WithholdingTaxCodesType<T> | null;
}
