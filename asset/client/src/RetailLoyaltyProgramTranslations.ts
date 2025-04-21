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
import type { RetailLoyaltyProgramTranslationsApi } from './RetailLoyaltyProgramTranslationsApi';

/**
 * This class represents the entity "RetailLoyaltyProgramTranslations" of service "d365_metadata".
 */
export class RetailLoyaltyProgramTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailLoyaltyProgramTranslationsType<T>
{
  /**
   * Technical entity name for RetailLoyaltyProgramTranslations.
   */
  static override _entityName = 'RetailLoyaltyProgramTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailLoyaltyProgramTranslations entity.
   */
  static _keys = ['LanguageId', 'LoyaltyProgramName'];
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Loyalty Program Name.
   */
  declare loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailLoyaltyProgramTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailLoyaltyProgramTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  languageId: DeserializedType<T, 'Edm.String'>;
  loyaltyProgramName: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
