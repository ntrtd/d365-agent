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
import type { PurchaseOrderAutoCostHeadersApi } from './PurchaseOrderAutoCostHeadersApi';

/**
 * This class represents the entity "PurchaseOrderAutoCostHeaders" of service "d365_metadata".
 */
export class PurchaseOrderAutoCostHeaders<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PurchaseOrderAutoCostHeadersType<T>
{
  /**
   * Technical entity name for PurchaseOrderAutoCostHeaders.
   */
  static override _entityName = 'PurchaseOrderAutoCostHeaders';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PurchaseOrderAutoCostHeaders entity.
   */
  static _keys = ['dataAreaId', 'PurchaseOrderCostAutoNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Purchase Order Cost Auto Number.
   */
  declare purchaseOrderCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Landed Cost Type Group Id.
   * @nullable
   */
  declare vendorLandedCostTypeGroupId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PurchaseOrderAutoCostHeadersApi<T>) {
    super(_entityApi);
  }
}

export interface PurchaseOrderAutoCostHeadersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  purchaseOrderCostAutoNumber: DeserializedType<T, 'Edm.String'>;
  vendorLandedCostTypeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
}
