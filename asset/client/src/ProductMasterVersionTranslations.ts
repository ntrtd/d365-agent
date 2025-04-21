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
import type { ProductMasterVersionTranslationsApi } from './ProductMasterVersionTranslationsApi';
import {
  ProductMasterVersions,
  ProductMasterVersionsType
} from './ProductMasterVersions';

/**
 * This class represents the entity "ProductMasterVersionTranslations" of service "d365_metadata".
 */
export class ProductMasterVersionTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductMasterVersionTranslationsType<T>
{
  /**
   * Technical entity name for ProductMasterVersionTranslations.
   */
  static override _entityName = 'ProductMasterVersionTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductMasterVersionTranslations entity.
   */
  static _keys = [
    'ProductMasterNumber',
    'ProductMasterVersionId',
    'LanguageId'
  ];
  /**
   * Product Master Number.
   */
  declare productMasterNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Master Version Id.
   */
  declare productMasterVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Version Name.
   * @nullable
   */
  declare translatedVersionName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Translated Version Description.
   * @nullable
   */
  declare translatedVersionDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link ProductMasterVersions} entity.
   */
  declare productMasterVersion?: ProductMasterVersions<T> | null;

  constructor(_entityApi: ProductMasterVersionTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductMasterVersionTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productMasterNumber: DeserializedType<T, 'Edm.String'>;
  productMasterVersionId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedVersionName?: DeserializedType<T, 'Edm.String'> | null;
  translatedVersionDescription?: DeserializedType<T, 'Edm.String'> | null;
  productMasterVersion?: ProductMasterVersionsType<T> | null;
}
