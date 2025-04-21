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
import type { ProductMasterConfigurationTranslationsApi } from './ProductMasterConfigurationTranslationsApi';
import {
  ProductMasterConfigurations,
  ProductMasterConfigurationsType
} from './ProductMasterConfigurations';

/**
 * This class represents the entity "ProductMasterConfigurationTranslations" of service "d365_metadata".
 */
export class ProductMasterConfigurationTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterConfigurationTranslationsType<T>
{
  /**
   * Technical entity name for ProductMasterConfigurationTranslations.
   */
  static override _entityName = 'ProductMasterConfigurationTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterConfigurationTranslations entity.
   */
  static _keys = [
    'ProductMasterNumber',
    'ProductMasterConfigurationId',
    'LanguageId'
  ];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Configuration Id.
   */
  declare productMasterConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Configuration Name.
   * @nullable
   */
  declare translatedConfigurationName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translated Configuration Description.
   * @nullable
   */
  declare translatedConfigurationDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link ProductMasterConfigurations} entity.
   */
  declare productMasterConfiguration?: ProductMasterConfigurations<T> | null;

  constructor(_entityApi: ProductMasterConfigurationTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterConfigurationTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productMasterConfigurationId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedConfigurationName?: DeserializedType<T, 'Edm.String'> | null;
  translatedConfigurationDescription?: DeserializedType<T, 'Edm.String'> | null;
  productMasterConfiguration?: ProductMasterConfigurationsType<T> | null;
}
