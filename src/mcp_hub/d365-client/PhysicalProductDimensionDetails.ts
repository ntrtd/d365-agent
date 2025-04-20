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
import type { PhysicalProductDimensionDetailsApi } from './PhysicalProductDimensionDetailsApi';
import { EcoResPhysicalDimensionType } from './EcoResPhysicalDimensionType';
import { ProductsV2, ProductsV2Type } from './ProductsV2';
import { UnitsOfMeasure, UnitsOfMeasureType } from './UnitsOfMeasure';

/**
 * This class represents the entity "PhysicalProductDimensionDetails" of service "d365_metadata".
 */
export class PhysicalProductDimensionDetails<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PhysicalProductDimensionDetailsType<T>
{
  /**
   * Technical entity name for PhysicalProductDimensionDetails.
   */
  static override _entityName = 'PhysicalProductDimensionDetails';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PhysicalProductDimensionDetails entity.
   */
  static _keys = ['ProductNumber', 'DimensionType', 'PhysicalUnitSymbol'];
  /**
   * Product Number.
   */
  declare productNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Type.
   * @nullable
   */
  declare dimensionType?: EcoResPhysicalDimensionType | null;
  /**
   * Physical Unit Symbol.
   */
  declare physicalUnitSymbol: DeserializedType<T, 'Edm.String'>;
  /**
   * Physical Depth.
   */
  declare physicalDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Mass Unit Symbol.
   * @nullable
   */
  declare massUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Length Unit Symbol.
   * @nullable
   */
  declare lengthUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Width.
   */
  declare physicalWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Weight.
   */
  declare physicalWeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Height.
   */
  declare physicalHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Volume Unit Symbol.
   * @nullable
   */
  declare volumeUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductsV2} entity.
   */
  declare productV2?: ProductsV2<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare physicalUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare volumeUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare massDefinedUnitOfMeasure?: UnitsOfMeasure<T> | null;
  /**
   * One-to-one navigation property to the {@link UnitsOfMeasure} entity.
   */
  declare lengthUnitOfMeasure?: UnitsOfMeasure<T> | null;

  constructor(_entityApi: PhysicalProductDimensionDetailsApi<T>) {
    super(_entityApi);
  }
}

export interface PhysicalProductDimensionDetailsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productNumber: DeserializedType<T, 'Edm.String'>;
  dimensionType?: EcoResPhysicalDimensionType | null;
  physicalUnitSymbol: DeserializedType<T, 'Edm.String'>;
  physicalDepth: DeserializedType<T, 'Edm.Decimal'>;
  massUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lengthUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  physicalWidth: DeserializedType<T, 'Edm.Decimal'>;
  physicalWeight: DeserializedType<T, 'Edm.Decimal'>;
  physicalHeight: DeserializedType<T, 'Edm.Decimal'>;
  volumeUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productV2?: ProductsV2Type<T> | null;
  physicalUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  volumeUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  massDefinedUnitOfMeasure?: UnitsOfMeasureType<T> | null;
  lengthUnitOfMeasure?: UnitsOfMeasureType<T> | null;
}
