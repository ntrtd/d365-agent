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
import type { MediaResourceTranslationsApi } from './MediaResourceTranslationsApi';

/**
 * This class represents the entity "MediaResourceTranslations" of service "d365_metadata".
 */
export class MediaResourceTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements MediaResourceTranslationsType<T>
{
  /**
   * Technical entity name for MediaResourceTranslations.
   */
  static override _entityName = 'MediaResourceTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MediaResourceTranslations entity.
   */
  static _keys = ['MediaResource', 'LanguageId'];
  /**
   * Media Resource.
   */
  declare mediaResource: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Alt Text.
   * @nullable
   */
  declare altText?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MediaResourceTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface MediaResourceTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  mediaResource: DeserializedType<T, 'Edm.Int64'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  altText?: DeserializedType<T, 'Edm.String'> | null;
}
