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
import type { ProductMasterColorsApi } from './ProductMasterColorsApi';
import { ProductColors, ProductColorsType } from './ProductColors';
import { AllProducts, AllProductsType } from './AllProducts';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductMasterColorTranslations,
  ProductMasterColorTranslationsType
} from './ProductMasterColorTranslations';

/**
 * This class represents the entity "ProductMasterColors" of service "d365_metadata".
 */
export class ProductMasterColors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductMasterColorsType<T>
{
  /**
   * Technical entity name for ProductMasterColors.
   */
  static override _entityName = 'ProductMasterColors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterColors entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductColorId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Sequence Number.
   */
  declare displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link ProductColors} entity.
   */
  declare productColor?: ProductColors<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductMasterColorTranslations} entity.
   */
  declare productMasterColorTranslations: ProductMasterColorTranslations<T>[];

  constructor(_entityApi: ProductMasterColorsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterColorsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  productColor?: ProductColorsType<T> | null;
  everyProduct?: AllProductsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productMasterColorTranslations: ProductMasterColorTranslationsType<T>[];
}
