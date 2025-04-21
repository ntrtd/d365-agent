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
import type { ItemSettlementRefsApi } from './ItemSettlementRefsApi';

/**
 * This class represents the entity "ItemSettlementRefs" of service "d365_metadata".
 */
export class ItemSettlementRefs<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ItemSettlementRefsType<T>
{
  /**
   * Technical entity name for ItemSettlementRefs.
   */
  static override _entityName = 'ItemSettlementRefs';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemSettlementRefs entity.
   */
  static _keys = ['dataAreaId', 'ItemId', 'ItemTypeId', 'ProcessingId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Id.
   */
  declare itemId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Type Id.
   */
  declare itemTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Processing Id.
   */
  declare processingId: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Registered.
   */
  declare isRegistered: DeserializedType<T, 'Edm.Boolean'>;

  constructor(_entityApi: ItemSettlementRefsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemSettlementRefsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemId: DeserializedType<T, 'Edm.String'>;
  itemTypeId: DeserializedType<T, 'Edm.String'>;
  processingId: DeserializedType<T, 'Edm.String'>;
  isRegistered: DeserializedType<T, 'Edm.Boolean'>;
}
