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
import type { ProductSpecificUnitOfMeasureConversionsApi } from './ProductSpecificUnitOfMeasureConversionsApi';
import { UnitOfMeasureConversionRounding } from './UnitOfMeasureConversionRounding';
import { AllProducts, AllProductsType } from './AllProducts';

/**
 * This class represents the entity "ProductSpecificUnitOfMeasureConversions" of service "d365_metadata".
 */
export class ProductSpecificUnitOfMeasureConversions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductSpecificUnitOfMeasureConversionsType<T>
{
  /**
   * Technical entity name for ProductSpecificUnitOfMeasureConversions.
   */
  static override _entityName = 'ProductSpecificUnitOfMeasureConversions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductSpecificUnitOfMeasureConversions entity.
   */
  static _keys = ['ProductNumber', 'FromUnitSymbol', 'ToUnitSymbol'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * From Unit Symbol.
   */
  declare fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * To Unit Symbol.
   */
  declare toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Factor.
   */
  declare factor: DeserializedType<T, 'Edm.Decimal'>;
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
   * Denominator.
   */
  declare denominator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Numerator.
   */
  declare numerator: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link AllProducts} entity.
   */
  declare everyProduct?: AllProducts<T> | null;

  constructor(_entityApi: ProductSpecificUnitOfMeasureConversionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSpecificUnitOfMeasureConversionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  fromUnitSymbol: DeserializedType<T, 'Edm.String'>;
  toUnitSymbol: DeserializedType<T, 'Edm.String'>;
  factor: DeserializedType<T, 'Edm.Decimal'>;
  innerOffset: DeserializedType<T, 'Edm.Decimal'>;
  outerOffset: DeserializedType<T, 'Edm.Decimal'>;
  rounding?: UnitOfMeasureConversionRounding | null;
  denominator: DeserializedType<T, 'Edm.Int32'>;
  numerator: DeserializedType<T, 'Edm.Int32'>;
  everyProduct?: AllProductsType<T> | null;
}
