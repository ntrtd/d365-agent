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
import type { ProductVariantsV2Api } from './ProductVariantsV2Api';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ReleasedProductVariantsV2,
  ReleasedProductVariantsV2Type
} from './ReleasedProductVariantsV2';

/**
 * This class represents the entity "ProductVariantsV2" of service "d365_metadata".
 */
export class ProductVariantsV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductVariantsV2Type<T>
{
  /**
   * Technical entity name for ProductVariantsV2.
   */
  static override _entityName = 'ProductVariantsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductVariantsV2 entity.
   */
  static _keys = [
    'ProductMasterNumber',
    'ProductConfigurationId',
    'ProductSizeId',
    'ProductColorId',
    'ProductStyleId',
    'ProductVersionId'
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
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-many navigation property to the {@link ReleasedProductVariantsV2} entity.
   */
  declare releasedProductVariantV2: ReleasedProductVariantsV2<T>[];

  constructor(_entityApi: ProductVariantsV2Api<T>) {
    super(_entityApi);
  }
}

export interface ProductVariantsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productVariantNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productMaster?: ProductMastersType<T> | null;
  releasedProductVariantV2: ReleasedProductVariantsV2Type<T>[];
}
