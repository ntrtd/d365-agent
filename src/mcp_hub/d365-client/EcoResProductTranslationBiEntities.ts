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
import type { EcoResProductTranslationBiEntitiesApi } from './EcoResProductTranslationBiEntitiesApi';

/**
 * This class represents the entity "EcoResProductTranslationBiEntities" of service "d365_metadata".
 */
export class EcoResProductTranslationBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EcoResProductTranslationBiEntitiesType<T>
{
  /**
   * Technical entity name for EcoResProductTranslationBiEntities.
   */
  static override _entityName = 'EcoResProductTranslationBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EcoResProductTranslationBiEntities entity.
   */
  static _keys = ['Product', 'LanguageId'];
  /**
   * Product.
   */
  declare product: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sys Rec Version.
   */
  declare sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Sys Modified By.
   * @nullable
   */
  declare sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EcoResProductTranslationBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface EcoResProductTranslationBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  product: DeserializedType<T, 'Edm.Int64'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  sysRecVersion: DeserializedType<T, 'Edm.Int32'>;
  sysModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
