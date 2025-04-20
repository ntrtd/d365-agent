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
import type { DiscountVendorClaimGroupsApi } from './DiscountVendorClaimGroupsApi';

/**
 * This class represents the entity "DiscountVendorClaimGroups" of service "d365_metadata".
 */
export class DiscountVendorClaimGroups<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DiscountVendorClaimGroupsType<T>
{
  /**
   * Technical entity name for DiscountVendorClaimGroups.
   */
  static override _entityName = 'DiscountVendorClaimGroups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DiscountVendorClaimGroups entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: DiscountVendorClaimGroupsApi<T>) {
    super(_entityApi);
  }
}

export interface DiscountVendorClaimGroupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
