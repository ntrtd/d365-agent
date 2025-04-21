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
import type { EcoResCategoryTranslationBiEntitiesApi } from './EcoResCategoryTranslationBiEntitiesApi';

/**
 * This class represents the entity "EcoResCategoryTranslationBiEntities" of service "d365_metadata".
 */
export class EcoResCategoryTranslationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResCategoryTranslationBiEntitiesType<T>
{
  /**
   * Technical entity name for EcoResCategoryTranslationBiEntities.
   */
  static override _entityName = 'EcoResCategoryTranslationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResCategoryTranslationBiEntities entity.
   */
  static _keys = ['Category', 'LanguageId'];
  /**
   * Category.
   */
  declare category: DeserializedType<T, 'Edm.Int64'>;
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
   * Sys Created By.
   * @nullable
   */
  declare sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Friendly Name.
   * @nullable
   */
  declare friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Search Text.
   * @nullable
   */
  declare searchText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Modified Date Time.
   */
  declare sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Created On.
   */
  declare createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(_entityApi: EcoResCategoryTranslationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResCategoryTranslationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.Int64'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  sysCreatedBy?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  friendlyName?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  searchText?: DeserializedType<T, 'Edm.String'> | null;
  sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  createdOn: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
