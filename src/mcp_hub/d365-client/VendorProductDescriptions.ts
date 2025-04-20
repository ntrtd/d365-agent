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
import type { VendorProductDescriptionsApi } from './VendorProductDescriptionsApi';
import { Abc } from './Abc';
import { VendorsV2, VendorsV2Type } from './VendorsV2';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';

/**
 * This class represents the entity "VendorProductDescriptions" of service "d365_metadata".
 */
export class VendorProductDescriptions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorProductDescriptionsType<T>
{
  /**
   * Technical entity name for VendorProductDescriptions.
   */
  static override _entityName = 'VendorProductDescriptions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorProductDescriptions entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'ProductColorId',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'VendorAccountNumber',
    'ProductDescriptionVendorGroupId'
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
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Account Number.
   */
  declare vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description Vendor Group Id.
   */
  declare productDescriptionVendorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Vendor Abc Code.
   * @nullable
   */
  declare vendorAbcCode?: Abc | null;
  /**
   * Vendor Product Number.
   * @nullable
   */
  declare vendorProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Product Description.
   * @nullable
   */
  declare vendorProductDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor Abc Code Note.
   * @nullable
   */
  declare vendorAbcCodeNote?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link VendorsV2} entity.
   */
  declare vendor?: VendorsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProduct?: ReleasedProductsV2<T> | null;

  constructor(_entityApi: VendorProductDescriptionsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorProductDescriptionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  vendorAccountNumber: DeserializedType<T, 'Edm.String'>;
  productDescriptionVendorGroupId: DeserializedType<T, 'Edm.String'>;
  vendorAbcCode?: Abc | null;
  vendorProductNumber?: DeserializedType<T, 'Edm.String'> | null;
  vendorProductDescription?: DeserializedType<T, 'Edm.String'> | null;
  vendorAbcCodeNote?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: VendorsV2Type<T> | null;
  releasedProduct?: ReleasedProductsV2Type<T> | null;
}
