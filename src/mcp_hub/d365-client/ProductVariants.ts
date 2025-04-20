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
import type { ProductVariantsApi } from './ProductVariantsApi';
import {
  ReleasedProductVariants,
  ReleasedProductVariantsType
} from './ReleasedProductVariants';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductTranslations,
  ProductTranslationsType
} from './ProductTranslations';
import {
  RetailKitComponents,
  RetailKitComponentsType
} from './RetailKitComponents';
import {
  SpecialCategoryMembers,
  SpecialCategoryMembersType
} from './SpecialCategoryMembers';

/**
 * This class represents the entity "ProductVariants" of service "d365_metadata".
 */
export class ProductVariants<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductVariantsType<T>
{
  /**
   * Technical entity name for ProductVariants.
   */
  static override _entityName = 'ProductVariants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductVariants entity.
   */
  static _keys = [
    'ProductMasterNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductColorId',
    'ProductStyleId'
  ];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Variant Number.
   * @nullable
   */
  declare productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ReleasedProductVariants} entity.
   */
  declare releasedProductVariant: ReleasedProductVariants<T>[];
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductTranslations} entity.
   */
  declare productTranslation: ProductTranslations<T>[];
  /**
   * One-to-many navigation property to the {@link RetailKitComponents} entity.
   */
  declare retailKitComponent: RetailKitComponents<T>[];
  /**
   * One-to-many navigation property to the {@link SpecialCategoryMembers} entity.
   */
  declare specialCategoryMember: SpecialCategoryMembers<T>[];

  constructor(_entityApi: ProductVariantsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductVariant: ReleasedProductVariantsType<T>[];
  productMaster?: ProductMastersType<T> | null;
  productTranslation: ProductTranslationsType<T>[];
  retailKitComponent: RetailKitComponentsType<T>[];
  specialCategoryMember: SpecialCategoryMembersType<T>[];
}
