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
import type { RetailLanguageTextsApi } from './RetailLanguageTextsApi';

/**
 * This class represents the entity "RetailLanguageTexts" of service "d365_metadata".
 */
export class RetailLanguageTexts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailLanguageTextsType<T>
{
  /**
   * Technical entity name for RetailLanguageTexts.
   */
  static override _entityName = 'RetailLanguageTexts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLanguageTexts entity.
   */
  static _keys = ['dataAreaId', 'LanguageId', 'TextId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Text Id.
   */
  declare textId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Error Text.
   */
  declare errorText: DeserializedType<T, 'Edm.Int32'>;
  /**
   * First In Version.
   * @nullable
   */
  declare firstInVersion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Updated.
   */
  declare dateUpdated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Date Created.
   */
  declare dateCreated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Module Id.
   */
  declare moduleId: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Text.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLanguageTextsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLanguageTextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  textId: DeserializedType<T, 'Edm.Int32'>;
  errorText: DeserializedType<T, 'Edm.Int32'>;
  firstInVersion?: DeserializedType<T, 'Edm.String'> | null;
  dateUpdated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dateCreated: DeserializedType<T, 'Edm.DateTimeOffset'>;
  moduleId: DeserializedType<T, 'Edm.Int32'>;
  text?: DeserializedType<T, 'Edm.String'> | null;
}
