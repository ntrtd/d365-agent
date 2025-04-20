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
import type { Kitting_DynamicKitPartGroupsApi } from './Kitting_DynamicKitPartGroupsApi';

/**
 * This class represents the entity "Kitting_DynamicKitPartGroups" of service "d365_metadata".
 */
export class Kitting_DynamicKitPartGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Kitting_DynamicKitPartGroupsType<T>
{
  /**
   * Technical entity name for Kitting_DynamicKitPartGroups.
   */
  static override _entityName = 'Kitting_DynamicKitPartGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_DynamicKitPartGroups entity.
   */
  static _keys = ['dataAreaId', 'DynamicKitId', 'DynamicPartGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Kit Id.
   */
  declare dynamicKitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Part Group.
   */
  declare dynamicPartGroup: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Kitting_DynamicKitPartGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_DynamicKitPartGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dynamicKitId: DeserializedType<T, 'Edm.String'>;
  dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
}
