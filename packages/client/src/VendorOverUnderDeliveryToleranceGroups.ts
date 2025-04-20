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
import type { VendorOverUnderDeliveryToleranceGroupsApi } from './VendorOverUnderDeliveryToleranceGroupsApi';

/**
 * This class represents the entity "VendorOverUnderDeliveryToleranceGroups" of service "d365_metadata".
 */
export class VendorOverUnderDeliveryToleranceGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorOverUnderDeliveryToleranceGroupsType<T>
{
  /**
   * Technical entity name for VendorOverUnderDeliveryToleranceGroups.
   */
  static override _entityName = 'VendorOverUnderDeliveryToleranceGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorOverUnderDeliveryToleranceGroups entity.
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

  constructor(_entityApi: VendorOverUnderDeliveryToleranceGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorOverUnderDeliveryToleranceGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  groupId: DeserializedType<T, 'Edm.String'>;
  groupDescription?: DeserializedType<T, 'Edm.String'> | null;
}
