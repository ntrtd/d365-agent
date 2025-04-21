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
import type { InventTransOriginBiEntitiesApi } from './InventTransOriginBiEntitiesApi';
import { InventTransType } from './InventTransType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "InventTransOriginBiEntities" of service "d365_metadata".
 */
export class InventTransOriginBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InventTransOriginBiEntitiesType<T>
{
  /**
   * Technical entity name for InventTransOriginBiEntities.
   */
  static override _entityName = 'InventTransOriginBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventTransOriginBiEntities entity.
   */
  static _keys = ['dataAreaId', 'InventTransId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Invent Trans Id.
   */
  declare inventTransId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   * @nullable
   */
  declare itemId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Data Area Id.
   * @nullable
   */
  declare sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Reference Category.
   * @nullable
   */
  declare referenceCategory?: InventTransType | null;
  /**
   * Reference Id.
   * @nullable
   */
  declare referenceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party.
   */
  declare party: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Is Excluded From Inventory Value.
   * @nullable
   */
  declare isExcludedFromInventoryValue?: NoYes | null;
  /**
   * Item Invent Dim Id.
   * @nullable
   */
  declare itemInventDimId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InventTransOriginBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface InventTransOriginBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventTransId: DeserializedType<T, 'Edm.String'>;
  itemId?: DeserializedType<T, 'Edm.String'> | null;
  sysDataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  referenceCategory?: InventTransType | null;
  referenceId?: DeserializedType<T, 'Edm.String'> | null;
  party: DeserializedType<T, 'Edm.Int64'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  isExcludedFromInventoryValue?: NoYes | null;
  itemInventDimId?: DeserializedType<T, 'Edm.String'> | null;
}
