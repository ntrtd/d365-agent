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
import type { VoyageAutoCostHeadersApi } from './VoyageAutoCostHeadersApi';

/**
 * This class represents the entity "VoyageAutoCostHeaders" of service "d365_metadata".
 */
export class VoyageAutoCostHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VoyageAutoCostHeadersType<T>
{
  /**
   * Technical entity name for VoyageAutoCostHeaders.
   */
  static override _entityName = 'VoyageAutoCostHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VoyageAutoCostHeaders entity.
   */
  static _keys = ['dataAreaId', 'VoyageCostAutoNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Voyage Cost Auto Number.
   */
  declare voyageCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Landed Cost Type Group Id.
   * @nullable
   */
  declare vendorLandedCostTypeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * From Shipping Port Id.
   * @nullable
   */
  declare fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Shipping Vendor Account Number.
   * @nullable
   */
  declare shippingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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

  constructor(_entityApi: VoyageAutoCostHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface VoyageAutoCostHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  voyageCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  vendorLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  shippingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
}
