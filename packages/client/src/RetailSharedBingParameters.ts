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
import type { RetailSharedBingParametersApi } from './RetailSharedBingParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "RetailSharedBingParameters" of service "d365_metadata".
 */
export class RetailSharedBingParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSharedBingParametersType<T>
{
  /**
   * Technical entity name for RetailSharedBingParameters.
   */
  static override _entityName = 'RetailSharedBingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSharedBingParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Api Key.
   * @nullable
   */
  declare apiKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Enabled.
   * @nullable
   */
  declare enabled?: NoYes | null;

  constructor(_entityApi: RetailSharedBingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSharedBingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  apiKey?: DeserializedType<T, 'Edm.String'> | null;
  enabled?: NoYes | null;
}
