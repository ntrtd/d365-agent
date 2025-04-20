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
import type { DiscountRatesApi } from './DiscountRatesApi';

/**
 * This class represents the entity "DiscountRates" of service "d365_metadata".
 */
export class DiscountRates<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DiscountRatesType<T>
{
  /**
   * Technical entity name for DiscountRates.
   */
  static override _entityName = 'DiscountRates';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountRates entity.
   */
  static _keys = ['dataAreaId', 'StartDate'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Market Discount Rate Percentage.
   */
  declare marketDiscountRatePercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: DiscountRatesApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountRatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  marketDiscountRatePercentage: DeserializedType<T, 'Edm.Decimal'>;
}
