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
import type { ReleasedProductVariantExternalCodesApi } from './ReleasedProductVariantExternalCodesApi';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';

/**
 * This class represents the entity "ReleasedProductVariantExternalCodes" of service "d365_metadata".
 */
export class ReleasedProductVariantExternalCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductVariantExternalCodesType<T>
{
  /**
   * Technical entity name for ReleasedProductVariantExternalCodes.
   */
  static override _entityName = 'ReleasedProductVariantExternalCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductVariantExternalCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'ReleasedProductVariantExternalCodeClassId',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductColorId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Released Product Variant External Code Class Id.
   */
  declare releasedProductVariantExternalCodeClassId: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
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
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * External Code.
   * @nullable
   */
  declare externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariant?: ReleasedProductVariants<T> | null;

  constructor(_entityApi: ReleasedProductVariantExternalCodesApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductVariantExternalCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  releasedProductVariantExternalCodeClassId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  releasedProductVariant?: ReleasedProductVariantsType<T> | null;
}
