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
import type { CustomerSearchFieldTranslationsApi } from './CustomerSearchFieldTranslationsApi';

/**
 * This class represents the entity "CustomerSearchFieldTranslations" of service "d365_metadata".
 */
export class CustomerSearchFieldTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerSearchFieldTranslationsType<T>
{
  /**
   * Technical entity name for CustomerSearchFieldTranslations.
   */
  static override _entityName = 'CustomerSearchFieldTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerSearchFieldTranslations entity.
   */
  static _keys = ['RetailCustomerSearchFieldEnumLabel', 'LanguageId'];
  /**
   * Retail Customer Search Field Enum Label.
   */
  declare retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CustomerSearchFieldTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerSearchFieldTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
