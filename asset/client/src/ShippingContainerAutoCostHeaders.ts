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
import type { ShippingContainerAutoCostHeadersApi } from './ShippingContainerAutoCostHeadersApi';

/**
 * This class represents the entity "ShippingContainerAutoCostHeaders" of service "d365_metadata".
 */
export class ShippingContainerAutoCostHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ShippingContainerAutoCostHeadersType<T>
{
  /**
   * Technical entity name for ShippingContainerAutoCostHeaders.
   */
  static override _entityName = 'ShippingContainerAutoCostHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ShippingContainerAutoCostHeaders entity.
   */
  static _keys = ['dataAreaId', 'ShippingContainerCostAutoNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Container Cost Auto Number.
   */
  declare shippingContainerCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipping Vendor Account Number.
   * @nullable
   */
  declare shippingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * From Shipping Port Id.
   * @nullable
   */
  declare fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Container Type Id.
   * @nullable
   */
  declare shippingContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Mode Code.
   * @nullable
   */
  declare deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * To Shipping Port Id.
   * @nullable
   */
  declare toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Landed Cost Type Group Id.
   * @nullable
   */
  declare vendorLandedCostTypeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ShippingContainerAutoCostHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface ShippingContainerAutoCostHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shippingContainerCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  shippingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  shippingContainerTypeId?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  vendorLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
}
