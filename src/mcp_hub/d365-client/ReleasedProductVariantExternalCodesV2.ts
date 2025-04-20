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
import type { ReleasedProductVariantExternalCodesV2Api } from './ReleasedProductVariantExternalCodesV2Api';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { ProductColors, ProductColorsType } from './ProductColors';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';

/**
 * This class represents the entity "ReleasedProductVariantExternalCodesV2" of service "d365_metadata".
 */
export class ReleasedProductVariantExternalCodesV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductVariantExternalCodesV2Type<T>
{
  /**
   * Technical entity name for ReleasedProductVariantExternalCodesV2.
   */
  static override _entityName = 'ReleasedProductVariantExternalCodesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductVariantExternalCodesV2 entity.
   */
  static _keys = [
    'dataAreaId',
    'ReleasedProductVariantExternalCodeClassId',
    'ItemNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductStyleId',
    'ProductVersionId',
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
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
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
   * One-to-one navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare releasedProductVariantV2?: ReleasedProductVariantsV2<T> | null;

  constructor(_entityApi: ReleasedProductVariantExternalCodesV2Api<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductVariantExternalCodesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  releasedProductVariantExternalCodeClassId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  productVersion?: ProductVersionsType<T> | null;
  productColor?: ProductColorsType<T> | null;
  productStyle?: ProductStylesType<T> | null;
  productSize?: ProductSizesType<T> | null;
  releasedProductVariantV2?: ReleasedProductVariantsV2Type<T> | null;
}
