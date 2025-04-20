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
import type { ItemOverUnderDeliveryToleranceGroupsApi } from './ItemOverUnderDeliveryToleranceGroupsApi';

/**
 * This class represents the entity "ItemOverUnderDeliveryToleranceGroups" of service "d365_metadata".
 */
export class ItemOverUnderDeliveryToleranceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemOverUnderDeliveryToleranceGroupsType<T>
{
  /**
   * Technical entity name for ItemOverUnderDeliveryToleranceGroups.
   */
  static override _entityName = 'ItemOverUnderDeliveryToleranceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemOverUnderDeliveryToleranceGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Id.
   */
  declare groupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Description.
   * @nullable
   */
  declare groupDescription?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ItemOverUnderDeliveryToleranceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface ItemOverUnderDeliveryToleranceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
}
