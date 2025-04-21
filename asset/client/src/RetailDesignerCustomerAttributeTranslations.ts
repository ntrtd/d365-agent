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
import type { RetailDesignerCustomerAttributeTranslationsApi } from './RetailDesignerCustomerAttributeTranslationsApi';

/**
 * This class represents the entity "RetailDesignerCustomerAttributeTranslations" of service "d365_metadata".
 */
export class RetailDesignerCustomerAttributeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailDesignerCustomerAttributeTranslationsType<T>
{
  /**
   * Technical entity name for RetailDesignerCustomerAttributeTranslations.
   */
  static override _entityName = 'RetailDesignerCustomerAttributeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailDesignerCustomerAttributeTranslations entity.
   */
  static _keys = [
    'dataAreaId',
    'AttributeTypeName',
    'AttributeName',
    'LanguageId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Name.
   */
  declare attributeTypeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Name.
   */
  declare attributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Attribute Friendly Name.
   * @nullable
   */
  declare translatedAttributeFriendlyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Attribute Friendly Name.
   * @nullable
   */
  declare defaultAttributeFriendlyName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: RetailDesignerCustomerAttributeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailDesignerCustomerAttributeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeTypeName: DeserializedType<T, 'Edm.String'>;
  attributeName: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedAttributeFriendlyName?: DeserializedType<T, 'Edm.String'> | null;
  defaultAttributeFriendlyName?: DeserializedType<T, 'Edm.String'> | null;
}
