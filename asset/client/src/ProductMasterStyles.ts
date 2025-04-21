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
import type { ProductMasterStylesApi } from './ProductMasterStylesApi';
import {
  ProductMasterStyleTranslations,
  ProductMasterStyleTranslationsType
} from './ProductMasterStyleTranslations';
import { ProductStyles, ProductStylesType } from './ProductStyles';
import { AllProducts, AllProductsType } from './AllProducts';
import { ProductMasters, ProductMastersType } from './ProductMasters';

/**
 * This class represents the entity "ProductMasterStyles" of service "d365_metadata".
 */
export class ProductMasterStyles<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMasterStylesType<T>
{
  /**
   * Technical entity name for ProductMasterStyles.
   */
  static override _entityName = 'ProductMasterStyles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterStyles entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductStyleId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Sequence Number.
   */
  declare displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link ProductMasterStyleTranslations} entity.
   */
  declare productMasterStyleTranslations: ProductMasterStyleTranslations<T>[];
  /**
   * One-to-one navigation property to the {@link ProductStyles} entity.
   */
  declare productStyle?: ProductStyles<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;

  constructor(_entityApi: ProductMasterStylesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterStylesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  productMasterStyleTranslations: ProductMasterStyleTranslationsType<T>[];
  productStyle?: ProductStylesType<T> | null;
  everyProduct?: AllProductsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
}
