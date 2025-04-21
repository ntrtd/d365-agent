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
import type { Kitting_PartGroupsApi } from './Kitting_PartGroupsApi';
import {
  KittingDynPartGroupItems,
  KittingDynPartGroupItemsType
} from './KittingDynPartGroupItems';

/**
 * This class represents the entity "Kitting_PartGroups" of service "d365_metadata".
 */
export class Kitting_PartGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Kitting_PartGroupsType<T>
{
  /**
   * Technical entity name for Kitting_PartGroups.
   */
  static override _entityName = 'Kitting_PartGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Kitting_PartGroups entity.
   */
  static _keys = ['dataAreaId', 'DynamicPartGroup'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Dynamic Part Group.
   */
  declare dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link KittingDynPartGroupItems} entity.
   */
  declare kittingDynPartGroupItem: KittingDynPartGroupItems<T>[];

  constructor(_entityApi: Kitting_PartGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface Kitting_PartGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  dynamicPartGroup: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  kittingDynPartGroupItem: KittingDynPartGroupItemsType<T>[];
}
