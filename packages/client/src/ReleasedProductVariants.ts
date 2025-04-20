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
import type { ReleasedProductVariantsApi } from './ReleasedProductVariantsApi';
import {
  ReleasedProductVariantExternalCodes,
  ReleasedProductVariantExternalCodesType
} from './ReleasedProductVariantExternalCodes';
import {
  ReleasedProductMasters,
  ReleasedProductMastersType
} from './ReleasedProductMasters';
import {
  ReleasedProductMastersV2,
  ReleasedProductMastersV2Type
} from './ReleasedProductMastersV2';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductLifecycleStates,
  ProductLifecycleStatesType
} from './ProductLifecycleStates';
import { ProductVariants, ProductVariantsType } from './ProductVariants';
import {
  ProductTranslations,
  ProductTranslationsType
} from './ProductTranslations';

/**
 * This class represents the entity "ReleasedProductVariants" of service "d365_metadata".
 */
export class ReleasedProductVariants<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReleasedProductVariantsType<T>
{
  /**
   * Technical entity name for ReleasedProductVariants.
   */
  static override _entityName = 'ReleasedProductVariants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReleasedProductVariants entity.
   */
  static _keys = [
    'dataAreaId',
    'ProductMasterNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductColorId',
    'ProductStyleId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Lifecycle State Id.
   * @nullable
   */
  declare productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Description.
   * @nullable
   */
  declare productDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Name.
   * @nullable
   */
  declare productName?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ReleasedProductVariantExternalCodes} entity.
   */
  declare releasedProductVariantExternalCodes: ReleasedProductVariantExternalCodes<T>[];
  /**
   * One-to-one navigation property to the {@link ReleasedProductMasters} entity.
   */
  declare releasedProductMaster?: ReleasedProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ReleasedProductMastersV2} entity.
   */
  declare releasedProductMasterV2?: ReleasedProductMastersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductLifecycleStates} entity.
   */
  declare productLifecycleState?: ProductLifecycleStates<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductVariants} entity.
   */
  declare productVariant?: ProductVariants<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductTranslations} entity.
   */
  declare productTranslation: ProductTranslations<T>[];

  constructor(_entityApi: ReleasedProductVariantsApi<T>) {
    super(_entityApi);
  }
}

export interface ReleasedProductVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productLifecycleStateId?: DeserializedType<T, 'Edm.String'> | null;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  releasedProductVariantExternalCodes: ReleasedProductVariantExternalCodesType<T>[];
  releasedProductMaster?: ReleasedProductMastersType<T> | null;
  releasedProductMasterV2?: ReleasedProductMastersV2Type<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productLifecycleState?: ProductLifecycleStatesType<T> | null;
  productVariant?: ProductVariantsType<T> | null;
  productTranslation: ProductTranslationsType<T>[];
}
