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
import type { AllProductsApi } from './AllProductsApi';
import {
  ProductSpecificUnitOfMeasureConversions,
  ProductSpecificUnitOfMeasureConversionsType
} from './ProductSpecificUnitOfMeasureConversions';
import {
  ProductMasterSizes,
  ProductMasterSizesType
} from './ProductMasterSizes';
import {
  ProductMasterConfigurations,
  ProductMasterConfigurationsType
} from './ProductMasterConfigurations';
import {
  ProductMasterColors,
  ProductMasterColorsType
} from './ProductMasterColors';
import {
  ProductMasterStyles,
  ProductMasterStylesType
} from './ProductMasterStyles';
import {
  ProductUnitOfMeasureConversions,
  ProductUnitOfMeasureConversionsType
} from './ProductUnitOfMeasureConversions';
import {
  ProductMasterVersions,
  ProductMasterVersionsType
} from './ProductMasterVersions';
import {
  ReleasedProductsV2,
  ReleasedProductsV2Type
} from './ReleasedProductsV2';
import {
  DvReleasedProducts,
  DvReleasedProductsType
} from './DvReleasedProducts';
import {
  ProductCategoryAssignments,
  ProductCategoryAssignmentsType
} from './ProductCategoryAssignments';

/**
 * This class represents the entity "AllProducts" of service "d365_metadata".
 */
export class AllProducts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AllProductsType<T>
{
  /**
   * Technical entity name for AllProducts.
   */
  static override _entityName = 'AllProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AllProducts entity.
   */
  static _keys = ['ProductNumber'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
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
   * Product Search Name.
   * @nullable
   */
  declare productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ProductSpecificUnitOfMeasureConversions} entity.
   */
  declare productSpecificUnitOfMeasureConversions: ProductSpecificUnitOfMeasureConversions<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterSizes} entity.
   */
  declare productMasterSizes: ProductMasterSizes<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterConfigurations} entity.
   */
  declare productMasterConfigurations: ProductMasterConfigurations<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterColors} entity.
   */
  declare productMasterColors: ProductMasterColors<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterStyles} entity.
   */
  declare productMasterStyles: ProductMasterStyles<T>[];
  /**
   * One-to-many navigation property to the {@link ProductUnitOfMeasureConversions} entity.
   */
  declare productUnitOfMeasureConversions: ProductUnitOfMeasureConversions<T>[];
  /**
   * One-to-many navigation property to the {@link ProductMasterVersions} entity.
   */
  declare productMasterVersions: ProductMasterVersions<T>[];
  /**
   * One-to-one navigation property to the {@link ReleasedProductsV2} entity.
   */
  declare releasedProductV2?: ReleasedProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link DvReleasedProducts} entity.
   */
  declare dvReleasedProducts?: DvReleasedProducts<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductCategoryAssignments} entity.
   */
  declare productCategoryAssignments: ProductCategoryAssignments<T>[];

  constructor(_entityApi: AllProductsApi<T>) {
    super(_entityApi);
  }
}

export interface AllProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  productDescription?: DeserializedType<T, 'Edm.String'> | null;
  productName?: DeserializedType<T, 'Edm.String'> | null;
  productSearchName?: DeserializedType<T, 'Edm.String'> | null;
  productSpecificUnitOfMeasureConversions: ProductSpecificUnitOfMeasureConversionsType<T>[];
  productMasterSizes: ProductMasterSizesType<T>[];
  productMasterConfigurations: ProductMasterConfigurationsType<T>[];
  productMasterColors: ProductMasterColorsType<T>[];
  productMasterStyles: ProductMasterStylesType<T>[];
  productUnitOfMeasureConversions: ProductUnitOfMeasureConversionsType<T>[];
  productMasterVersions: ProductMasterVersionsType<T>[];
  releasedProductV2?: ReleasedProductsV2Type<T> | null;
  dvReleasedProducts?: DvReleasedProductsType<T> | null;
  productCategoryAssignments: ProductCategoryAssignmentsType<T>[];
}
