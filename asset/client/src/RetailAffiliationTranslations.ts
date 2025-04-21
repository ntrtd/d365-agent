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
import type { RetailAffiliationTranslationsApi } from './RetailAffiliationTranslationsApi';

/**
 * This class represents the entity "RetailAffiliationTranslations" of service "d365_metadata".
 */
export class RetailAffiliationTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailAffiliationTranslationsType<T>
{
  /**
   * Technical entity name for RetailAffiliationTranslations.
   */
  static override _entityName = 'RetailAffiliationTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailAffiliationTranslations entity.
   */
  static _keys = ['LanguageId', 'AffiliationName'];
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Affiliation Name.
   */
  declare affiliationName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailAffiliationTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailAffiliationTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  languageId: DeserializedType<T, 'Edm.String'>;
  affiliationName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
