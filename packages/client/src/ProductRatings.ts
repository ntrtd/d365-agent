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
import type { ProductRatingsApi } from './ProductRatingsApi';

/**
 * This class represents the entity "ProductRatings" of service "d365_metadata".
 */
export class ProductRatings<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductRatingsType<T>
{
  /**
   * Technical entity name for ProductRatings.
   */
  static override _entityName = 'ProductRatings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductRatings entity.
   */
  static _keys = ['ChannelId', 'ProductId', 'MasterProductId', 'Rating'];
  /**
   * Channel Id.
   */
  declare channelId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Product Id.
   */
  declare productId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Master Product Id.
   */
  declare masterProductId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Rating.
   */
  declare rating: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Total Ratings.
   */
  declare totalRatings: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ProductRatingsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductRatingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  channelId: DeserializedType<T, 'Edm.Int64'>;
  productId: DeserializedType<T, 'Edm.Int64'>;
  masterProductId: DeserializedType<T, 'Edm.Int64'>;
  rating: DeserializedType<T, 'Edm.Decimal'>;
  totalRatings: DeserializedType<T, 'Edm.Int32'>;
}
