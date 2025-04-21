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
import type { ProductMasterVersionsApi } from './ProductMasterVersionsApi';
import { ProductVersions, ProductVersionsType } from './ProductVersions';
import { AllProducts, AllProductsType } from './AllProducts';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductMasterVersionTranslations,
  ProductMasterVersionTranslationsType
} from './ProductMasterVersionTranslations';

/**
 * This class represents the entity "ProductMasterVersions" of service "d365_metadata".
 */
export class ProductMasterVersions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterVersionsType<T>
{
  /**
   * Technical entity name for ProductMasterVersions.
   */
  static override _entityName = 'ProductMasterVersions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterVersions entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductVersionId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Version Id.
   */
  declare productVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Display Sequence Number.
   */
  declare displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Replenishment Weight.
   */
  declare replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link ProductVersions} entity.
   */
  declare productVersion?: ProductVersions<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasters} entity.
   */
  declare productMaster?: ProductMasters<T> | null;
  /**
   * One-to-many navigation property to the {@link ProductMasterVersionTranslations} entity.
   */
  declare productMasterVersionTranslations: ProductMasterVersionTranslations<T>[];

  constructor(_entityApi: ProductMasterVersionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterVersionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productVersionId: DeserializedType<T, 'Edm.String'>;
  displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  productVersion?: ProductVersionsType<T> | null;
  everyProduct?: AllProductsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productMasterVersionTranslations: ProductMasterVersionTranslationsType<T>[];
}
