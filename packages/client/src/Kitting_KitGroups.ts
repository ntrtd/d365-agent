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
import type { Kitting_KitGroupsApi } from './Kitting_KitGroupsApi';

/**
 * This class represents the entity "Kitting_KitGroups" of service "d365_metadata".
 */
export class Kitting_KitGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Kitting_KitGroupsType<T>
{
  /**
   * Technical entity name for Kitting_KitGroups.
   */
  static override _entityName = 'Kitting_KitGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_KitGroups entity.
   */
  static _keys = ['dataAreaId', 'KitGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Group.
   */
  declare kitGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Kitting_KitGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_KitGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitGroup: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
