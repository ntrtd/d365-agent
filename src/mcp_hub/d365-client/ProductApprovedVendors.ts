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
import type { ProductApprovedVendorsApi } from './ProductApprovedVendorsApi';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "ProductApprovedVendors" of service "d365_metadata".
 */
export class ProductApprovedVendors<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductApprovedVendorsType<T>
{
  /**
   * Technical entity name for ProductApprovedVendors.
   */
  static override _entityName = 'ProductApprovedVendors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductApprovedVendors entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ApprovedVendorAccountNumber',
    'EffectiveDate'
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
   * Effective Date.
   */
  declare effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Expiration Date.
   */
  declare expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare approvedVendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: ProductApprovedVendorsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductApprovedVendorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  approvedVendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  expirationDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  approvedVendor?: VendorsV2Type<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
}
