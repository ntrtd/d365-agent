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
import type { InventorySitesForAiApi } from './InventorySitesForAiApi';
import {
  InventoryOnHandForAi,
  InventoryOnHandForAiType
} from './InventoryOnHandForAi';

/**
 * This class represents the entity "InventorySitesForAI" of service "d365_metadata".
 */
export class InventorySitesForAi<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements InventorySitesForAiType<T>
{
  /**
   * Technical entity name for InventorySitesForAi.
   */
  static override _entityName = 'InventorySitesForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InventorySitesForAi entity.
   */
  static _keys = ['dataAreaId', 'SiteId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Site Id.
   */
  declare siteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link InventoryOnHandForAi} entity.
   */
  declare inventoryOnHandAiEntity: InventoryOnHandForAi<T>[];

  constructor(_entityApi: InventorySitesForAiApi<T>) {
    super(_entityApi);
  }
}

export interface InventorySitesForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  siteId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOnHandAiEntity: InventoryOnHandForAiType<T>[];
}
