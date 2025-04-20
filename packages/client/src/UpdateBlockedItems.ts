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
import type { UpdateBlockedItemsApi } from './UpdateBlockedItemsApi';

/**
 * This class represents the entity "UpdateBlockedItems" of service "d365_metadata".
 */
export class UpdateBlockedItems<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UpdateBlockedItemsType<T>
{
  /**
   * Technical entity name for UpdateBlockedItems.
   */
  static override _entityName = 'UpdateBlockedItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UpdateBlockedItems entity.
   */
  static _keys = ['dataAreaId', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: UpdateBlockedItemsApi<T>) {
    super(_entityApi);
  }
}

export interface UpdateBlockedItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
}
