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
import type { UnitOfMeasureTranslationsApi } from './UnitOfMeasureTranslationsApi';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';

/**
 * This class represents the entity "UnitOfMeasureTranslations" of service "d365_metadata".
 */
export class UnitOfMeasureTranslations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UnitOfMeasureTranslationsType<T>
{
  /**
   * Technical entity name for UnitOfMeasureTranslations.
   */
  static override _entityName = 'UnitOfMeasureTranslations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UnitOfMeasureTranslations entity.
   */
  static _keys = ['UnitSymbol', 'LanguageId'];
  /**
   * Unit Symbol.
   */
  declare unitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Language Id.
   */
  declare languageId: DeserializedType<T, 'Edm.String'>;
  /**
   * Translated Description.
   * @nullable
   */
  declare translatedDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare unitOfMeasure?: UnitsOfMeasure<T> | null;

  constructor(_entityApi: UnitOfMeasureTranslationsApi<T>) {
    super(_entityApi);
  }
}

export interface UnitOfMeasureTranslationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  unitSymbol: DeserializedType<T, 'Edm.String'>;
  languageId: DeserializedType<T, 'Edm.String'>;
  translatedDescription?: DeserializedType<T, 'Edm.String'> | null;
  unitOfMeasure?: UnitsOfMeasureType<T> | null;
}
