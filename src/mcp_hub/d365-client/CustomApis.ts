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
import type { CustomApisApi } from './CustomApisApi';

/**
 * This class represents the entity "CustomApis" of service "d365_metadata".
 */
export class CustomApis<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CustomApisType<T>
{
  /**
   * Technical entity name for CustomApis.
   */
  static override _entityName = 'CustomApis';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomApis entity.
   */
  static _keys = ['EntityName'];
  /**
   * Entity Name.
   */
  declare entityName: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity Table.
   * @nullable
   */
  declare entityTable?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomApisApi<T>) {
    super(_entityApi);
  }
}

export interface CustomApisType<
  T extends DeSerializers = DefaultDeSerializers
> {
  entityName: DeserializedType<T, 'Edm.String'>;
  entityTable?: DeserializedType<T, 'Edm.String'> | null;
}
