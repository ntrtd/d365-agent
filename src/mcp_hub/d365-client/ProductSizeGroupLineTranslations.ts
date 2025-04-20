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
import type { ProductSizeGroupLineTranslationsApi } from './ProductSizeGroupLineTranslationsApi';
import {
  ProductSizeGroupLines,
  ProductSizeGroupLinesType
} from './ProductSizeGroupLines';

/**
 * This class represents the entity "ProductSizeGroupLineTranslations" of service "d365_metadata".
 */
export class ProductSizeGroupLineTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSizeGroupLineTranslationsType<T>
{
  /**
   * Technical entity name for ProductSizeGroupLineTranslations.
   */
  static override _entityName = 'ProductSizeGroupLineTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSizeGroupLineTranslations entity.
   */
  static _keys = ['ProductSizeGroupId', 'ProductSizeId', 'LanguageId'];
  /**
   * Product Size Group Id.
   */
  declare productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Size Description.
   * @nullable
   */
  declare translatedSizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translated Size Name.
   * @nullable
   */
  declare translatedSizeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductSizeGroupLines} entity.
   */
  declare productSizeGroupLine?: ProductSizeGroupLines<T> | null;

  constructor(_entityApi: ProductSizeGroupLineTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSizeGroupLineTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productSizeGroupId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedSizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedSizeName?: DeserializedType<T, 'Edm.String'> | null;
  productSizeGroupLine?: ProductSizeGroupLinesType<T> | null;
}
