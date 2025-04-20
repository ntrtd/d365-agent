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
import type { ProductMasterConfigurationsApi } from './ProductMasterConfigurationsApi';
import { AllProducts, AllProductsType } from './AllProducts';
import { ProductMasters, ProductMastersType } from './ProductMasters';
import {
  ProductMasterConfigurationTranslations,
  ProductMasterConfigurationTranslationsType
} from './ProductMasterConfigurationTranslations';

/**
 * This class represents the entity "ProductMasterConfigurations" of service "d365_metadata".
 */
export class ProductMasterConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterConfigurationsType<T>
{
  /**
   * Technical entity name for ProductMasterConfigurations.
   */
  static override _entityName = 'ProductMasterConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterConfigurations entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductConfigurationId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Container Unit Symbol.
   * @nullable
   */
  declare containerUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-many navigation property to the {@link ProductMasterConfigurationTranslations} entity.
   */
  declare productMasterConfigurationTranslations: ProductMasterConfigurationTranslations<T>[];

  constructor(_entityApi: ProductMasterConfigurationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  containerUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  displaySequenceNumber: DeserializedType<T, 'Edm.Decimal'>;
  replenishmentWeight: DeserializedType<T, 'Edm.Int32'>;
  everyProduct?: AllProductsType<T> | null;
  productMaster?: ProductMastersType<T> | null;
  productMasterConfigurationTranslations: ProductMasterConfigurationTranslationsType<T>[];
}
