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
import type { KittingKitLinesApi } from './KittingKitLinesApi';
import { BomRoundUp } from './BomRoundUp';
import { BomFormula } from './BomFormula';
import { BomConsumpType } from './BomConsumpType';
import {
  Kitting_KitHeaders,
  Kitting_KitHeadersType
} from './Kitting_KitHeaders';

/**
 * This class represents the entity "KittingKitLines" of service "d365_metadata".
 */
export class KittingKitLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements KittingKitLinesType<T>
{
  /**
   * Technical entity name for KittingKitLines.
   */
  static override _entityName = 'KittingKitLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KittingKitLines entity.
   */
  static _keys = ['dataAreaId', 'KitId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Kit Id.
   */
  declare kitId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Width.
   */
  declare physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: BomRoundUp | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Depth.
   */
  declare physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Rounding Up Multiples.
   */
  declare quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Product Density.
   */
  declare physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Method.
   * @nullable
   */
  declare consumptionCalculationMethod?: BomFormula | null;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Type.
   * @nullable
   */
  declare consumptionType?: BomConsumpType | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * One-to-one navigation property to the {@link Kitting_KitHeaders} entity.
   */
  declare kittingKitHeader?: Kitting_KitHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link Kitting_KitHeaders} entity.
   */
  declare kitHeader?: Kitting_KitHeaders<T> | null;

  constructor(_entityApi: KittingKitLinesApi<T>) {
    super(_entityApi);
  }
}

export interface KittingKitLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  kitId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  roundingUpMethod?: BomRoundUp | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationMethod?: BomFormula | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionType?: BomConsumpType | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  kittingKitHeader?: Kitting_KitHeadersType<T> | null;
  kitHeader?: Kitting_KitHeadersType<T> | null;
}
