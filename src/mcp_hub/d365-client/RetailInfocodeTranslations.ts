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
import type { RetailInfocodeTranslationsApi } from './RetailInfocodeTranslationsApi';
import { Infocodes, InfocodesType } from './Infocodes';

/**
 * This class represents the entity "RetailInfocodeTranslations" of service "d365_metadata".
 */
export class RetailInfocodeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInfocodeTranslationsType<T>
{
  /**
   * Technical entity name for RetailInfocodeTranslations.
   */
  static override _entityName = 'RetailInfocodeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInfocodeTranslations entity.
   */
  static _keys = ['dataAreaId', 'RetailInfocodeTable_infocodeId', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Infocode Table Infocode Id.
   */
  declare retailInfocodeTableInfocodeId: DeserializedType<T, 'Edm.String'>;
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
   * Prompt.
   * @nullable
   */
  declare prompt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link Infocodes} entity.
   */
  declare infocode?: Infocodes<T> | null;

  constructor(_entityApi: RetailInfocodeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInfocodeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailInfocodeTableInfocodeId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  prompt?: DeserializedType<T, 'Edm.String'> | null;
  infocode?: InfocodesType<T> | null;
}
