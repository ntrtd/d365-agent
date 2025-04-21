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
import type { ProductAttributeTranslationsApi } from './ProductAttributeTranslationsApi';
import { ProductAttributes, ProductAttributesType } from './ProductAttributes';

/**
 * This class represents the entity "ProductAttributeTranslations" of service "d365_metadata".
 */
export class ProductAttributeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductAttributeTranslationsType<T>
{
  /**
   * Technical entity name for ProductAttributeTranslations.
   */
  static override _entityName = 'ProductAttributeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductAttributeTranslations entity.
   */
  static _keys = [
    'ProductAttributeName',
    'ProductAttributeTypeName',
    'LanguageId'
  ];
  /**
   * Product Attribute Name.
   */
  declare productAttributeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Attribute Type Name.
   */
  declare productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
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
   * Translated Friendly Attribute Name.
   * @nullable
   */
  declare translatedFriendlyAttributeName?: DeserializedType<
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
   * One-to-one navigation property to the {@link ProductAttributes} entity.
   */
  declare productAttribute?: ProductAttributes<T> | null;

  constructor(_entityApi: ProductAttributeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductAttributeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productAttributeName: DeserializedType<T, 'Edm.String'>;
  productAttributeTypeName: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedAttributeHelpText?: DeserializedType<T, 'Edm.String'> | null;
  translatedFriendlyAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  translatedAttributeDescription?: DeserializedType<T, 'Edm.String'> | null;
  productAttribute?: ProductAttributesType<T> | null;
}
