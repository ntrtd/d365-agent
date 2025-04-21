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
import type { ProductUnitOfMeasureConversionsApi } from './ProductUnitOfMeasureConversionsApi';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';
import { AllProducts, AllProductsType } from './AllProducts';

/**
 * This class represents the entity "ProductUnitOfMeasureConversions" of service "d365_metadata".
 */
export class ProductUnitOfMeasureConversions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductUnitOfMeasureConversionsType<T>
{
  /**
   * Technical entity name for ProductUnitOfMeasureConversions.
   */
  static override _entityName = 'ProductUnitOfMeasureConversions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductUnitOfMeasureConversions entity.
   */
  static _keys = ['FromUnitSymbol', 'ToUnitSymbol', 'ProductNumber'];
  /**
   * From Unit Symbol.
   */
  declare fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * To Unit Symbol.
   */
  declare toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
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
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare fromUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare toUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;

  constructor(_entityApi: ProductUnitOfMeasureConversionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductUnitOfMeasureConversionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  productNumber: DeserializedType<T, 'Edm.String'>;
  innerOffset: DeserializedType<T, 'Edm.Decimal'>;
  outerOffset: DeserializedType<T, 'Edm.Decimal'>;
  rounding?: UnitOfMeasureConversionRounding | null;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  denominator: DeserializedType<T, 'Edm.Int32'>;
  fromUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  toUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  everyProduct?: AllProductsType<T> | null;
}
