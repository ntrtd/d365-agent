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
import type { KittingDynPartGroupItemsApi } from './KittingDynPartGroupItemsApi';
import {
  Kitting_PartGroups,
  Kitting_PartGroupsType
} from './Kitting_PartGroups';

/**
 * This class represents the entity "KittingDynPartGroupItems" of service "d365_metadata".
 */
export class KittingDynPartGroupItems<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KittingDynPartGroupItemsType<T>
{
  /**
   * Technical entity name for KittingDynPartGroupItems.
   */
  static override _entityName = 'KittingDynPartGroupItems';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KittingDynPartGroupItems entity.
   */
  static _keys = ['dataAreaId', 'DynamicPartGroup', 'ItemNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Part Group.
   */
  declare dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-one navigation property to the {@link Kitting_PartGroups} entity.
   */
  declare groupItems?: Kitting_PartGroups<T> | null;

  constructor(_entityApi: KittingDynPartGroupItemsApi<T>) {
    super(_entityApi);
  }
}

export interface KittingDynPartGroupItemsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  groupItems?: Kitting_PartGroupsType<T> | null;
}
