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
import type { SupplementaryProductProductGroupsApi } from './SupplementaryProductProductGroupsApi';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "SupplementaryProductProductGroups" of service "d365_metadata".
 */
export class SupplementaryProductProductGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplementaryProductProductGroupsType<T>
{
  /**
   * Technical entity name for SupplementaryProductProductGroups.
   */
  static override _entityName = 'SupplementaryProductProductGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplementaryProductProductGroups entity.
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
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductsV2: ReleasedProductsV2<T>[];

  constructor(_entityApi: SupplementaryProductProductGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SupplementaryProductProductGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductsV2: ReleasedProductsV2Type<T>[];
}
