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
import type { ProductMasterColorTranslationsApi } from './ProductMasterColorTranslationsApi';
import {
  ProductMasterColors,
  ProductMasterColorsType
} from './ProductMasterColors';

/**
 * This class represents the entity "ProductMasterColorTranslations" of service "d365_metadata".
 */
export class ProductMasterColorTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterColorTranslationsType<T>
{
  /**
   * Technical entity name for ProductMasterColorTranslations.
   */
  static override _entityName = 'ProductMasterColorTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterColorTranslations entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductMasterColorId', 'LanguageId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Color Id.
   */
  declare productMasterColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Color Description.
   * @nullable
   */
  declare translatedColorDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translated Color Name.
   * @nullable
   */
  declare translatedColorName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductMasterColors} entity.
   */
  declare productMasterColor?: ProductMasterColors<T> | null;

  constructor(_entityApi: ProductMasterColorTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterColorTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productMasterColorId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedColorDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedColorName?: DeserializedType<T, 'Edm.String'> | null;
  productMasterColor?: ProductMasterColorsType<T> | null;
}
