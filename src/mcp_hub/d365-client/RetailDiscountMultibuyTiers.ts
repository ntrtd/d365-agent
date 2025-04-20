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
import type { RetailDiscountMultibuyTiersApi } from './RetailDiscountMultibuyTiersApi';

/**
 * This class represents the entity "RetailDiscountMultibuyTiers" of service "d365_metadata".
 */
export class RetailDiscountMultibuyTiers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDiscountMultibuyTiersType<T>
{
  /**
   * Technical entity name for RetailDiscountMultibuyTiers.
   */
  static override _entityName = 'RetailDiscountMultibuyTiers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDiscountMultibuyTiers entity.
   */
  static _keys = ['dataAreaId', 'OfferId', 'QuantityLowest'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Offer Id.
   */
  declare offerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Lowest.
   */
  declare quantityLowest: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Price Or Discount Percentage.
   */
  declare priceOrDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RetailDiscountMultibuyTiersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDiscountMultibuyTiersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  offerId: DeserializedType<T, 'Edm.String'>;
  quantityLowest: DeserializedType<T, 'Edm.Decimal'>;
  priceOrDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
}
