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
import type { ProductColorGroupLineTranslationsApi } from './ProductColorGroupLineTranslationsApi';
import {
  ProductColorGroupLines,
  ProductColorGroupLinesType
} from './ProductColorGroupLines';

/**
 * This class represents the entity "ProductColorGroupLineTranslations" of service "d365_metadata".
 */
export class ProductColorGroupLineTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductColorGroupLineTranslationsType<T>
{
  /**
   * Technical entity name for ProductColorGroupLineTranslations.
   */
  static override _entityName = 'ProductColorGroupLineTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductColorGroupLineTranslations entity.
   */
  static _keys = ['ProductColorGroupId', 'ProductColorId', 'LanguageId'];
  /**
   * Product Color Group Id.
   */
  declare productColorGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductColorGroupLines} entity.
   */
  declare productColorGroupLine?: ProductColorGroupLines<T> | null;

  constructor(_entityApi: ProductColorGroupLineTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductColorGroupLineTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productColorGroupId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedColorDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedColorName?: DeserializedType<T, 'Edm.String'> | null;
  productColorGroupLine?: ProductColorGroupLinesType<T> | null;
}
