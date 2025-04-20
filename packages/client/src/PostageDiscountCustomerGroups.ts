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
import type { PostageDiscountCustomerGroupsApi } from './PostageDiscountCustomerGroupsApi';

/**
 * This class represents the entity "PostageDiscountCustomerGroups" of service "d365_metadata".
 */
export class PostageDiscountCustomerGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PostageDiscountCustomerGroupsType<T>
{
  /**
   * Technical entity name for PostageDiscountCustomerGroups.
   */
  static override _entityName = 'PostageDiscountCustomerGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PostageDiscountCustomerGroups entity.
   */
  static _keys = ['dataAreaId', 'GroupCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Code.
   */
  declare groupCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Group Name.
   * @nullable
   */
  declare groupName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PostageDiscountCustomerGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface PostageDiscountCustomerGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupCode: DeserializedType<T, 'Edm.String'>;
  groupName?: DeserializedType<T, 'Edm.String'> | null;
}
