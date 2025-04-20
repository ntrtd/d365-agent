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
import type { RetailCatalogTranslationsApi } from './RetailCatalogTranslationsApi';
import { RetailCatalogs, RetailCatalogsType } from './RetailCatalogs';

/**
 * This class represents the entity "RetailCatalogTranslations" of service "d365_metadata".
 */
export class RetailCatalogTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailCatalogTranslationsType<T>
{
  /**
   * Technical entity name for RetailCatalogTranslations.
   */
  static override _entityName = 'RetailCatalogTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailCatalogTranslations entity.
   */
  static _keys = ['CatalogNumber', 'LanguageId'];
  /**
   * Catalog Number.
   */
  declare catalogNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image.
   * @nullable
   */
  declare image?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailCatalogs} entity.
   */
  declare retailCatalog?: RetailCatalogs<T> | null;

  constructor(_entityApi: RetailCatalogTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailCatalogTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  catalogNumber: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  image?: DeserializedType<T, 'Edm.String'> | null;
  retailCatalog?: RetailCatalogsType<T> | null;
}
