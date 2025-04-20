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
import type { ProductNumberIdentifiedReleasedProductVariantsApi } from './ProductNumberIdentifiedReleasedProductVariantsApi';
import {
  ProductNumberIdentifiedReleasedProductVariantExternalCodes,
  ProductNumberIdentifiedReleasedProductVariantExternalCodesType
} from './ProductNumberIdentifiedReleasedProductVariantExternalCodes';
import {
  ReleasedProductMastersV2,
  ReleasedProductMastersV2Type
} from './ReleasedProductMastersV2';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductNumberIdentifiedProductVariants,
  ProductNumberIdentifiedProductVariantsType
} from './ProductNumberIdentifiedProductVariants';

/**
 * This class represents the entity "ProductNumberIdentifiedReleasedProductVariants" of service "d365_metadata".
 */
export class ProductNumberIdentifiedReleasedProductVariants<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductNumberIdentifiedReleasedProductVariantsType<T>
{
  /**
   * Technical entity name for ProductNumberIdentifiedReleasedProductVariants.
   */
  static override _entityName =
    'ProductNumberIdentifiedReleasedProductVariants';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductNumberIdentifiedReleasedProductVariants entity.
   */
  static _keys = ['dataAreaId', 'ProductVariantNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
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
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Sales Sales Tax Item Group Code.
   * @nullable
   */
  declare salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Purchase Sales Tax Item Group Code.
   * @nullable
   */
  declare purchaseSalesTaxItemGroupCode?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductNumberIdentifiedReleasedProductVariantExternalCodes} entity.
   */
  declare productNumberIdentifiedReleasedProductVariantExternalCodes: ProductNumberIdentifiedReleasedProductVariantExternalCodes<T>[];
  /**
   * One-to-one navigation property to the {@link ReleasedProductMastersV2} entity.
   */
  declare releasedProductMaster?: ReleasedProductMastersV2<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductNumberIdentifiedProductVariants} entity.
   */
  declare productVariant?: ProductNumberIdentifiedProductVariants<T> | null;

  constructor(
    _entityApi: ProductNumberIdentifiedReleasedProductVariantsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface ProductNumberIdentifiedReleasedProductVariantsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productVariantNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  productMasterNumber?: DeserializedType<T, 'Edm.String'> | null;
  salesSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  purchaseSalesTaxItemGroupCode?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productNumberIdentifiedReleasedProductVariantExternalCodes: ProductNumberIdentifiedReleasedProductVariantExternalCodesType<T>[];
  releasedProductMaster?: ReleasedProductMastersV2Type<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productVariant?: ProductNumberIdentifiedProductVariantsType<T> | null;
}
