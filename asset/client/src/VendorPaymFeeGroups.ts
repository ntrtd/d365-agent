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
import type { VendorPaymFeeGroupsApi } from './VendorPaymFeeGroupsApi';

/**
 * This class represents the entity "VendorPaymFeeGroups" of service "d365_metadata".
 */
export class VendorPaymFeeGroups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements VendorPaymFeeGroupsType<T>
{
  /**
   * Technical entity name for VendorPaymFeeGroups.
   */
  static override _entityName = 'VendorPaymFeeGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymFeeGroups entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendorPaymFeeGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymFeeGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
