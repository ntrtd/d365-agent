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
import type { EngineeringProductAttributeTranslationsApi } from './EngineeringProductAttributeTranslationsApi';
import {
  EngineeringProductAttributes,
  EngineeringProductAttributesType
} from './EngineeringProductAttributes';

/**
 * This class represents the entity "EngineeringProductAttributeTranslations" of service "d365_metadata".
 */
export class EngineeringProductAttributeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringProductAttributeTranslationsType<T>
{
  /**
   * Technical entity name for EngineeringProductAttributeTranslations.
   */
  static override _entityName = 'EngineeringProductAttributeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringProductAttributeTranslations entity.
   */
  static _keys = ['EngineeringProductAttributeName', 'LanguageId'];
  /**
   * Engineering Product Attribute Name.
   */
  declare engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Attribute Help Text.
   * @nullable
   */
  declare translatedAttributeHelpText?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translated Attribute Description.
   * @nullable
   */
  declare translatedAttributeDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Translated Friendly Attribute Name.
   * @nullable
   */
  declare translatedFriendlyAttributeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link EngineeringProductAttributes} entity.
   */
  declare engineeringProductAttribute?: EngineeringProductAttributes<T> | null;

  constructor(_entityApi: EngineeringProductAttributeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface EngineeringProductAttributeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  engineeringProductAttributeName: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedAttributeHelpText?: DeserializedType<T, 'Edm.String'> | null;
  translatedAttributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  translatedFriendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  engineeringProductAttribute?: EngineeringProductAttributesType<T> | null;
}
