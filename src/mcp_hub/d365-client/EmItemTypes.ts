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
import type { EmItemTypesApi } from './EmItemTypesApi';

/**
 * This class represents the entity "EMItemTypes" of service "d365_metadata".
 */
export class EmItemTypes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EmItemTypesType<T>
{
  /**
   * Technical entity name for EmItemTypes.
   */
  static override _entityName = 'EMItemTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EmItemTypes entity.
   */
  static _keys = ['dataAreaId', 'MessageItemType'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Message Item Type.
   */
  declare messageItemType: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EmItemTypesApi<T>) {
    super(_entityApi);
  }
}

export interface EmItemTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  messageItemType: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
