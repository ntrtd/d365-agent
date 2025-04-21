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
import type { ProductApprovedVendorsForAiApi } from './ProductApprovedVendorsForAiApi';
import { VendorsForAi, VendorsForAiType } from './VendorsForAi';
import {
  ReleasedProductsForAi,
  ReleasedProductsForAiType
} from './ReleasedProductsForAi';

/**
 * This class represents the entity "ProductApprovedVendorsForAI" of service "d365_metadata".
 */
export class ProductApprovedVendorsForAi<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductApprovedVendorsForAiType<T>
{
  /**
   * Technical entity name for ProductApprovedVendorsForAi.
   */
  static override _entityName = 'ProductApprovedVendorsForAI';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductApprovedVendorsForAi entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ApprovedVendorAccountNumber',
    'ValidFrom'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Approved Vendor Account Number.
   */
  declare approvedVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Valid From.
   */
  declare validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Valid To.
   */
  declare validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link VendorsForAi} entity.
   */
  declare approvedVendor?: VendorsForAi<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsForAi} entity.
   */
  declare releasedProduct?: ReleasedProductsForAi<T> | null;

  constructor(_entityApi: ProductApprovedVendorsForAiApi<T>) {
    super(_entityApi);
  }
}

export interface ProductApprovedVendorsForAiType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  approvedVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>;
  validTo: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvedVendor?: VendorsForAiType<T> | null;
  releasedProduct?: ReleasedProductsForAiType<T> | null;
}
