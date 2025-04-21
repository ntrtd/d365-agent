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
import type { InventoryLevelProfilesApi } from './InventoryLevelProfilesApi';

/**
 * This class represents the entity "InventoryLevelProfiles" of service "d365_metadata".
 */
export class InventoryLevelProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventoryLevelProfilesType<T>
{
  /**
   * Technical entity name for InventoryLevelProfiles.
   */
  static override _entityName = 'InventoryLevelProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventoryLevelProfiles entity.
   */
  static _keys = ['dataAreaId', 'ProfileId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventoryLevelProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface InventoryLevelProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  profileId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
