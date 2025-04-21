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
import type { FolioAutoCostHeadersApi } from './FolioAutoCostHeadersApi';

/**
 * This class represents the entity "FolioAutoCostHeaders" of service "d365_metadata".
 */
export class FolioAutoCostHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FolioAutoCostHeadersType<T>
{
  /**
   * Technical entity name for FolioAutoCostHeaders.
   */
  static override _entityName = 'FolioAutoCostHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FolioAutoCostHeaders entity.
   */
  static _keys = ['dataAreaId', 'FolioCostAutoNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Folio Cost Auto Number.
   */
  declare folioCostAutoNumber: DeserializedType<T, 'Edm.String'>;
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
   * Customs Broker Vendor Account Number.
   * @nullable
   */
  declare customsBrokerVendorAccountNumber?: DeserializedType<
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

  constructor(_entityApi: FolioAutoCostHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface FolioAutoCostHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  folioCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  vendorLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  fromShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
  customsBrokerVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  deliveryModeCode?: DeserializedType<T, 'Edm.String'> | null;
  toShippingPortId?: DeserializedType<T, 'Edm.String'> | null;
}
