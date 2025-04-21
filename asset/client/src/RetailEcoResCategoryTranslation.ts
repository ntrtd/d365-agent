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
import type { RetailEcoResCategoryTranslationApi } from './RetailEcoResCategoryTranslationApi';

/**
 * This class represents the entity "RetailEcoResCategoryTranslation" of service "d365_metadata".
 */
export class RetailEcoResCategoryTranslation<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailEcoResCategoryTranslationType<T>
{
  /**
   * Technical entity name for RetailEcoResCategoryTranslation.
   */
  static override _entityName = 'RetailEcoResCategoryTranslation';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailEcoResCategoryTranslation entity.
   */
  static _keys = [
    'EcoResCategory_Name',
    'EcoResCategoryHierarchy_Name',
    'LanguageId'
  ];
  /**
   * Eco Res Category Name.
   */
  declare ecoResCategoryName: DeserializedType<T, 'Edm.String'>;
  /**
   * Eco Res Category Hierarchy Name.
   */
  declare ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Search Text.
   * @nullable
   */
  declare searchText?: DeserializedType<T, 'Edm.String'> | null;
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
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.Int64'>;

  constructor(_entityApi: RetailEcoResCategoryTranslationApi<T>) {
    super(_entityApi);
  }
}

export interface RetailEcoResCategoryTranslationType<
  T extends DeSerializers = DefaultDeSerializers
> {
  ecoResCategoryName: DeserializedType<T, 'Edm.String'>;
  ecoResCategoryHierarchyName: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  searchText?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  category: DeserializedType<T, 'Edm.Int64'>;
}
