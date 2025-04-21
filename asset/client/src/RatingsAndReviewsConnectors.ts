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
import type { RatingsAndReviewsConnectorsApi } from './RatingsAndReviewsConnectorsApi';

/**
 * This class represents the entity "RatingsAndReviewsConnectors" of service "d365_metadata".
 */
export class RatingsAndReviewsConnectors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RatingsAndReviewsConnectorsType<T>
{
  /**
   * Technical entity name for RatingsAndReviewsConnectors.
   */
  static override _entityName = 'RatingsAndReviewsConnectors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RatingsAndReviewsConnectors entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Manifest.
   * @nullable
   */
  declare manifest?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Continuation Token.
   * @nullable
   */
  declare continuationToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Url.
   * @nullable
   */
  declare url?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RatingsAndReviewsConnectorsApi<T>) {
    super(_entityApi);
  }
}

export interface RatingsAndReviewsConnectorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  manifest?: DeserializedType<T, 'Edm.String'> | null;
  continuationToken?: DeserializedType<T, 'Edm.String'> | null;
  url?: DeserializedType<T, 'Edm.String'> | null;
}
