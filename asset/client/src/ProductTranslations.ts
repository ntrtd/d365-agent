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
import type { ProductTranslationsApi } from './ProductTranslationsApi';
import { DistinctProducts, DistinctProductsType } from './DistinctProducts';
import { ProductVariants, ProductVariantsType } from './ProductVariants';
import {
  ReleasedProductMastersV2,
  ReleasedProductMastersV2Type
} from './ReleasedProductMastersV2';
import {
  ReleasedProductMasters,
  ReleasedProductMastersType
} from './ReleasedProductMasters';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ReleasedDistinctProductsV2,
  ReleasedDistinctProductsV2Type
} from './ReleasedDistinctProductsV2';
import {
  ReleasedDistinctProducts,
  ReleasedDistinctProductsType
} from './ReleasedDistinctProducts';

/**
 * This class represents the entity "ProductTranslations" of service "d365_metadata".
 */
export class ProductTranslations<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductTranslationsType<T>
{
  /**
   * Technical entity name for ProductTranslations.
   */
  static override _entityName = 'ProductTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductTranslations entity.
   */
  static _keys = ['ProductNumber', 'LanguageId'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DistinctProducts} entity.
   */
  declare distinctProduct?: DistinctProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVariants} entity.
   */
  declare productVariant?: ProductVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductMastersV2} entity.
   */
  declare releasedProductMasterV2?: ReleasedProductMastersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductMasters} entity.
   */
  declare releasedProductMaster?: ReleasedProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariant?: ReleasedProductVariants<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedDistinctProductsV2} entity.
   */
  declare releasedDistinctProductV2?: ReleasedDistinctProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedDistinctProducts} entity.
   */
  declare releasedDistinctProduct?: ReleasedDistinctProducts<T> | null;

  constructor(_entityApi: ProductTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  distinctProduct?: DistinctProductsType<T> | null;
  productVariant?: ProductVariantsType<T> | null;
  releasedProductMasterV2?: ReleasedProductMastersV2Type<T> | null;
  releasedProductMaster?: ReleasedProductMastersType<T> | null;
  releasedProductVariant?: ReleasedProductVariantsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
  releasedDistinctProductV2?: ReleasedDistinctProductsV2Type<T> | null;
  releasedDistinctProduct?: ReleasedDistinctProductsType<T> | null;
}
