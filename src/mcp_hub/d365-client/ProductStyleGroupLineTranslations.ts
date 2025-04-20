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
import type { ProductStyleGroupLineTranslationsApi } from './ProductStyleGroupLineTranslationsApi';
import {
  ProductStyleGroupLines,
  ProductStyleGroupLinesType
} from './ProductStyleGroupLines';

/**
 * This class represents the entity "ProductStyleGroupLineTranslations" of service "d365_metadata".
 */
export class ProductStyleGroupLineTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductStyleGroupLineTranslationsType<T>
{
  /**
   * Technical entity name for ProductStyleGroupLineTranslations.
   */
  static override _entityName = 'ProductStyleGroupLineTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductStyleGroupLineTranslations entity.
   */
  static _keys = ['ProductStyleGroupId', 'ProductStyleId', 'LanguageId'];
  /**
   * Product Style Group Id.
   */
  declare productStyleGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Style Description.
   * @nullable
   */
  declare translatedStyleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translated Style Name.
   * @nullable
   */
  declare translatedStyleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductStyleGroupLines} entity.
   */
  declare productStyleGroupLine?: ProductStyleGroupLines<T> | null;

  constructor(_entityApi: ProductStyleGroupLineTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductStyleGroupLineTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productStyleGroupId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedStyleDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedStyleName?: DeserializedType<T, 'Edm.String'> | null;
  productStyleGroupLine?: ProductStyleGroupLinesType<T> | null;
}
