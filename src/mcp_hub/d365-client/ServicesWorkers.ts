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
import type { ServicesWorkersApi } from './ServicesWorkersApi';

/**
 * This class represents the entity "ServicesWorkers" of service "d365_metadata".
 */
export class ServicesWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ServicesWorkersType<T>
{
  /**
   * Technical entity name for ServicesWorkers.
   */
  static override _entityName = 'ServicesWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ServicesWorkers entity.
   */
  static _keys = ['Email'];
  /**
   * Email.
   */
  declare email: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ServicesWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface ServicesWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  email: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
}
