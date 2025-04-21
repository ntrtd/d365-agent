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
import type { ProductMasterStyleTranslationsApi } from './ProductMasterStyleTranslationsApi';
import {
  ProductMasterStyles,
  ProductMasterStylesType
} from './ProductMasterStyles';

/**
 * This class represents the entity "ProductMasterStyleTranslations" of service "d365_metadata".
 */
export class ProductMasterStyleTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterStyleTranslationsType<T>
{
  /**
   * Technical entity name for ProductMasterStyleTranslations.
   */
  static override _entityName = 'ProductMasterStyleTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterStyleTranslations entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductMasterStyleId', 'LanguageId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Style Id.
   */
  declare productMasterStyleId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductMasterStyles} entity.
   */
  declare productMasterStyle?: ProductMasterStyles<T> | null;

  constructor(_entityApi: ProductMasterStyleTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterStyleTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productMasterStyleId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedStyleDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedStyleName?: DeserializedType<T, 'Edm.String'> | null;
  productMasterStyle?: ProductMasterStylesType<T> | null;
}
