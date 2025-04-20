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
import type { ProductMasterSizesApi } from './ProductMasterSizesApi';
import { AllProducts, AllProductsType } from './AllProducts';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import { ProductSizes, ProductSizesType } from './ProductSizes';
import {
  ProductMasterSizeTranslations,
  ProductMasterSizeTranslationsType
} from './ProductMasterSizeTranslations';

/**
 * This class represents the entity "ProductMasterSizes" of service "d365_metadata".
 */
export class ProductMasterSizes<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMasterSizesType<T>
{
  /**
   * Technical entity name for ProductMasterSizes.
   */
  static override _entityName = 'ProductMasterSizes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterSizes entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductSizeId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Sequence Number.
   */
  declare displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizes} entity.
   */
  declare productSize?: ProductSizes<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductMasterSizeTranslations} entity.
   */
  declare productMasterSizeTranslations: ProductMasterSizeTranslations<T>[];

  constructor(_entityApi: ProductMasterSizesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterSizesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  everyProduct?: AllProductsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productSize?: ProductSizesType<T> | null;
  productMasterSizeTranslations: ProductMasterSizeTranslationsType<T>[];
}
