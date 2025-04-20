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
import type { RetailSharedTwitterParametersApi } from './RetailSharedTwitterParametersApi';

/**
 * This class represents the entity "RetailSharedTwitterParameters" of service "d365_metadata".
 */
export class RetailSharedTwitterParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSharedTwitterParametersType<T>
{
  /**
   * Technical entity name for RetailSharedTwitterParameters.
   */
  static override _entityName = 'RetailSharedTwitterParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSharedTwitterParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consumer Key.
   * @nullable
   */
  declare consumerKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumer Secret.
   * @nullable
   */
  declare consumerSecret?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailSharedTwitterParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSharedTwitterParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  consumerKey?: DeserializedType<T, 'Edm.String'> | null;
  consumerSecret?: DeserializedType<T, 'Edm.String'> | null;
}
