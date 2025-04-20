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
import type { UnitOfMeasureConversionsApi } from './UnitOfMeasureConversionsApi';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';

/**
 * This class represents the entity "UnitOfMeasureConversions" of service "d365_metadata".
 */
export class UnitOfMeasureConversions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UnitOfMeasureConversionsType<T>
{
  /**
   * Technical entity name for UnitOfMeasureConversions.
   */
  static override _entityName = 'UnitOfMeasureConversions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UnitOfMeasureConversions entity.
   */
  static _keys = ['FromUnitSymbol', 'ToUnitSymbol'];
  /**
   * From Unit Symbol.
   */
  declare fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * To Unit Symbol.
   */
  declare toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Inner Offset.
   */
  declare innerOffset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Outer Offset.
   */
  declare outerOffset: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding.
   * @nullable
   */
  declare rounding?: UnitOfMeasureConversionRounding | null;
  /**
   * Numerator.
   */
  declare numerator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Denominator.
   */
  declare denominator: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: UnitOfMeasureConversionsApi<T>) {
    super(_entityApi);
  }
}

export interface UnitOfMeasureConversionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  innerOffset: DeserializedType<T, 'Edm.Decimal'>;
  outerOffset: DeserializedType<T, 'Edm.Decimal'>;
  rounding?: UnitOfMeasureConversionRounding | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  denominator: DeserializedType<T, 'Edm.Int32'>;
}
