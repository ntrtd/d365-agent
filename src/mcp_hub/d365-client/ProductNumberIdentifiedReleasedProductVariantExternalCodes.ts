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
import type { ProductNumberIdentifiedReleasedProductVariantExternalCodesApi } from './ProductNumberIdentifiedReleasedProductVariantExternalCodesApi';
import {
  ProductNumberIdentifiedReleasedProductVariants,
  ProductNumberIdentifiedReleasedProductVariantsType
} from './ProductNumberIdentifiedReleasedProductVariants';

/**
 * This class represents the entity "ProductNumberIdentifiedReleasedProductVariantExternalCodes" of service "d365_metadata".
 */
export class ProductNumberIdentifiedReleasedProductVariantExternalCodes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductNumberIdentifiedReleasedProductVariantExternalCodesType<T>
{
  /**
   * Technical entity name for ProductNumberIdentifiedReleasedProductVariantExternalCodes.
   */
  static override _entityName =
    'ProductNumberIdentifiedReleasedProductVariantExternalCodes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductNumberIdentifiedReleasedProductVariantExternalCodes entity.
   */
  static _keys = [
    'dataAreaId',
    'ReleasedProductVariantExternalCodeClassId',
    'ProductVariantNumber'
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
   * Product Variant Number.
   */
  declare productVariantNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Code.
   * @nullable
   */
  declare externalCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductNumberIdentifiedReleasedProductVariants} entity.
   */
  declare productNumberIdentifiedReleasedProductVariant?: ProductNumberIdentifiedReleasedProductVariants<T> | null;

  constructor(
    _entityApi: ProductNumberIdentifiedReleasedProductVariantExternalCodesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ProductNumberIdentifiedReleasedProductVariantExternalCodesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  releasedProductVariantExternalCodeClassId: DeserializedType<T, 'Edm.String'>;
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  externalCode?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productNumberIdentifiedReleasedProductVariant?: ProductNumberIdentifiedReleasedProductVariantsType<T> | null;
}
