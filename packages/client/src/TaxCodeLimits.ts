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
import type { TaxCodeLimitsApi } from './TaxCodeLimitsApi';
import { TaxCodes, TaxCodesType } from './TaxCodes';

/**
 * This class represents the entity "TaxCodeLimits" of service "d365_metadata".
 */
export class TaxCodeLimits<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements TaxCodeLimitsType<T>
{
  /**
   * Technical entity name for TaxCodeLimits.
   */
  static override _entityName = 'TaxCodeLimits';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxCodeLimits entity.
   */
  static _keys = ['dataAreaId', 'TaxCodeId', 'FromDate', 'ToDate'];
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
   * Maximum Sales Tax.
   */
  declare maximumSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Sales Tax.
   */
  declare minimumSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link TaxCodes} entity.
   */
  declare taxCode?: TaxCodes<T> | null;

  constructor(_entityApi: TaxCodeLimitsApi<T>) {
    super(_entityApi);
  }
}

export interface TaxCodeLimitsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  taxCodeId: DeserializedType<T, 'Edm.String'>;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  maximumSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  minimumSalesTax: DeserializedType<T, 'Edm.Decimal'>;
  taxCode?: TaxCodesType<T> | null;
}
