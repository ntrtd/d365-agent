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
import type { SupplementaryProductCustomerGroupsApi } from './SupplementaryProductCustomerGroupsApi';

/**
 * This class represents the entity "SupplementaryProductCustomerGroups" of service "d365_metadata".
 */
export class SupplementaryProductCustomerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SupplementaryProductCustomerGroupsType<T>
{
  /**
   * Technical entity name for SupplementaryProductCustomerGroups.
   */
  static override _entityName = 'SupplementaryProductCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SupplementaryProductCustomerGroups entity.
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

  constructor(_entityApi: SupplementaryProductCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface SupplementaryProductCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
}
