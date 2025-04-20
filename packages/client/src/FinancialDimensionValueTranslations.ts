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
import type { FinancialDimensionValueTranslationsApi } from './FinancialDimensionValueTranslationsApi';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "FinancialDimensionValueTranslations" of service "d365_metadata".
 */
export class FinancialDimensionValueTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FinancialDimensionValueTranslationsType<T>
{
  /**
   * Technical entity name for FinancialDimensionValueTranslations.
   */
  static override _entityName = 'FinancialDimensionValueTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FinancialDimensionValueTranslations entity.
   */
  static _keys = [
    'FinancialDimension',
    'LanguageCode',
    'FinancialDimensionValue'
  ];
  /**
   * Financial Dimension.
   */
  declare financialDimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Code.
   */
  declare languageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Financial Dimension Value.
   */
  declare financialDimensionValue: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Description.
   * @nullable
   */
  declare translatedDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare financialDimensionValueTranslationEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributes<T> | null;

  constructor(_entityApi: FinancialDimensionValueTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface FinancialDimensionValueTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  languageCode: DeserializedType<T, 'Edm.String'>;
  financialDimensionValue: DeserializedType<T, 'Edm.String'>;
  translatedDescription?: DeserializedType<T, 'Edm.String'> | null;
  financialDimensionValueTranslationEntityRelatedRoleDimensionAttributeEntity?: DimensionAttributesType<T> | null;
}
