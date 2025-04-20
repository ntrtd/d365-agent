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
import type { ProductAllocationLinesV2Api } from './ProductAllocationLinesV2Api';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductColors, ProductColorsType } from './ProductColors';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import { ProductVersions, ProductVersionsType } from './ProductVersions';

/**
 * This class represents the entity "ProductAllocationLinesV2" of service "d365_metadata".
 */
export class ProductAllocationLinesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAllocationLinesV2Type<T>
{
  /**
   * Technical entity name for ProductAllocationLinesV2.
   */
  static override _entityName = 'ProductAllocationLinesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAllocationLinesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductAllocationKeyId',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductColorId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Allocation Key Id.
   */
  declare productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Allocation Percentage.
   */
  declare productAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;

  constructor(_entityApi: ProductAllocationLinesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductAllocationLinesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productAllocationKeyId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  productStyle?: ProductStylesType<T> | null;
  productColor?: ProductColorsType<T> | null;
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  productSize?: ProductSizesType<T> | null;
  productVersion?: ProductVersionsType<T> | null;
}
