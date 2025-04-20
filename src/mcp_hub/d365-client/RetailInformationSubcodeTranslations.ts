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
import type { RetailInformationSubcodeTranslationsApi } from './RetailInformationSubcodeTranslationsApi';
import {
  RetailInformationSubcodes,
  RetailInformationSubcodesType
} from './RetailInformationSubcodes';

/**
 * This class represents the entity "RetailInformationSubcodeTranslations" of service "d365_metadata".
 */
export class RetailInformationSubcodeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInformationSubcodeTranslationsType<T>
{
  /**
   * Technical entity name for RetailInformationSubcodeTranslations.
   */
  static override _entityName = 'RetailInformationSubcodeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInformationSubcodeTranslations entity.
   */
  static _keys = ['dataAreaId', 'InfocodeId', 'SubcodeId', 'LanguageId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Infocode Id.
   */
  declare infocodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Subcode Id.
   */
  declare subcodeId: DeserializedType<T, 'Edm.String'>;
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
   * One-to-one navigation property to the {@link RetailInformationSubcodes} entity.
   */
  declare retailInformationSubcode?: RetailInformationSubcodes<T> | null;

  constructor(_entityApi: RetailInformationSubcodeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInformationSubcodeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  infocodeId: DeserializedType<T, 'Edm.String'>;
  subcodeId: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  retailInformationSubcode?: RetailInformationSubcodesType<T> | null;
}
