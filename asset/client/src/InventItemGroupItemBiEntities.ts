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
import type { InventItemGroupItemBiEntitiesApi } from './InventItemGroupItemBiEntitiesApi';

/**
 * This class represents the entity "InventItemGroupItemBiEntities" of service "d365_metadata".
 */
export class InventItemGroupItemBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventItemGroupItemBiEntitiesType<T>
{
  /**
   * Technical entity name for InventItemGroupItemBiEntities.
   */
  static override _entityName = 'InventItemGroupItemBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventItemGroupItemBiEntities entity.
   */
  static _keys = ['ItemId', 'ItemDataAreaId'];
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Data Area Id.
   */
  declare itemDataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Item Group Id.
   * @nullable
   */
  declare itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Group Data Area Id.
   * @nullable
   */
  declare itemGroupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: InventItemGroupItemBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventItemGroupItemBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  itemId: DeserializedType<T, 'Edm.String'>;
  itemDataAreaId: DeserializedType<T, 'Edm.String'>;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  itemGroupId?: DeserializedType<T, 'Edm.String'> | null;
  itemGroupDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
}
