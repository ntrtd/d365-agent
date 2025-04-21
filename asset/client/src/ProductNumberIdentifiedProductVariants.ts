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
import type { ProductNumberIdentifiedProductVariantsApi } from './ProductNumberIdentifiedProductVariantsApi';
import {
  ProductNumberIdentifiedReleasedProductVariants,
  ProductNumberIdentifiedReleasedProductVariantsType
} from './ProductNumberIdentifiedReleasedProductVariants';
import { ProductMasters, ProductMastersType } from './ProductMasters';

/**
 * This class represents the entity "ProductNumberIdentifiedProductVariants" of service "d365_metadata".
 */
export class ProductNumberIdentifiedProductVariants<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductNumberIdentifiedProductVariantsType<T>
{
  /**
   * Technical entity name for ProductNumberIdentifiedProductVariants.
   */
  static override _entityName = 'ProductNumberIdentifiedProductVariants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductNumberIdentifiedProductVariants entity.
   */
  static _keys = ['ProductVariantNumber'];
  /**
   * Product Variant Number.
   */
  declare productVariantNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Master Number.
   * @nullable
   */
  declare productMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedReleasedProductVariants} entity.
   */
  declare releasedProductVariants: ProductNumberIdentifiedReleasedProductVariants<T>[];
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;

  constructor(_entityApi: ProductNumberIdentifiedProductVariantsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductNumberIdentifiedProductVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductVariants: ProductNumberIdentifiedReleasedProductVariantsType<T>[];
  productMaster?: ProductMastersType<T> | null;
}
