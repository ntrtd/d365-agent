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
import type { DimensionAttributeTranslationsApi } from './DimensionAttributeTranslationsApi';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';

/**
 * This class represents the entity "DimensionAttributeTranslations" of service "d365_metadata".
 */
export class DimensionAttributeTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements DimensionAttributeTranslationsType<T>
{
  /**
   * Technical entity name for DimensionAttributeTranslations.
   */
  static override _entityName = 'DimensionAttributeTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DimensionAttributeTranslations entity.
   */
  static _keys = ['FinancialDimension', 'LanguageCode'];
  /**
   * Financial Dimension.
   */
  declare financialDimension: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Code.
   */
  declare languageCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Financial Dimension.
   * @nullable
   */
  declare translatedFinancialDimension?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare dimensionAttributeTranslationEntityDimensionAttributeEntityRelatedRole?: DimensionAttributes<T> | null;

  constructor(_entityApi: DimensionAttributeTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface DimensionAttributeTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  financialDimension: DeserializedType<T, 'Edm.String'>;
  languageCode: DeserializedType<T, 'Edm.String'>;
  translatedFinancialDimension?: DeserializedType<T, 'Edm.String'> | null;
  dimensionAttributeTranslationEntityDimensionAttributeEntityRelatedRole?: DimensionAttributesType<T> | null;
}
