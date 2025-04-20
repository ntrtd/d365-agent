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
import type { RetailSharedFacebookParametersApi } from './RetailSharedFacebookParametersApi';

/**
 * This class represents the entity "RetailSharedFacebookParameters" of service "d365_metadata".
 */
export class RetailSharedFacebookParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailSharedFacebookParametersType<T>
{
  /**
   * Technical entity name for RetailSharedFacebookParameters.
   */
  static override _entityName = 'RetailSharedFacebookParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailSharedFacebookParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Application Id.
   * @nullable
   */
  declare applicationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Application Secret.
   * @nullable
   */
  declare applicationSecret?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailSharedFacebookParametersApi<T>) {
    super(_entityApi);
  }
}

export interface RetailSharedFacebookParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  applicationId?: DeserializedType<T, 'Edm.String'> | null;
  applicationSecret?: DeserializedType<T, 'Edm.String'> | null;
}
