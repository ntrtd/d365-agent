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
import type { ProductMasterSizeTranslationsApi } from './ProductMasterSizeTranslationsApi';
import {
  ProductMasterSizes,
  ProductMasterSizesType
} from './ProductMasterSizes';

/**
 * This class represents the entity "ProductMasterSizeTranslations" of service "d365_metadata".
 */
export class ProductMasterSizeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterSizeTranslationsType<T>
{
  /**
   * Technical entity name for ProductMasterSizeTranslations.
   */
  static override _entityName = 'ProductMasterSizeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterSizeTranslations entity.
   */
  static _keys = ['ProductMasterNumber', 'ProductMasterSizeId', 'LanguageId'];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Size Id.
   */
  declare productMasterSizeId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link ProductMasterSizes} entity.
   */
  declare productMasterSize?: ProductMasterSizes<T> | null;

  constructor(_entityApi: ProductMasterSizeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterSizeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productMasterSizeId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedSizeDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedSizeName?: DeserializedType<T, 'Edm.String'> | null;
  productMasterSize?: ProductMasterSizesType<T> | null;
}
