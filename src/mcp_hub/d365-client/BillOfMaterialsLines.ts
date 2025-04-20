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
import type { BillOfMaterialsLinesApi } from './BillOfMaterialsLinesApi';
import { BomFormula } from './BomFormula';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import {
  BillOfMaterialsHeaders,
  BillOfMaterialsHeadersType
} from './BillOfMaterialsHeaders';

/**
 * This class represents the entity "BillOfMaterialsLines" of service "d365_metadata".
 */
export class BillOfMaterialsLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BillOfMaterialsLinesType<T>
{
  /**
   * Technical entity name for BillOfMaterialsLines.
   */
  static override _entityName = 'BillOfMaterialsLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BillOfMaterialsLines entity.
   */
  static _keys = ['dataAreaId', 'BOMId', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Bom Id.
   */
  declare bomId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Number.
   * @nullable
   */
  declare positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Calculation Method.
   * @nullable
   */
  declare consumptionCalculationMethod?: BomFormula | null;
  /**
   * Is Consumed At Operation Complete.
   * @nullable
   */
  declare isConsumedAtOperationComplete?: NoYes | null;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Cost Calculation Include Line.
   * @nullable
   */
  declare willCostCalculationIncludeLine?: NoYes | null;
  /**
   * Sub Bom Id.
   * @nullable
   */
  declare subBomId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Resource Consumption Used.
   */
  declare isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Will Manufactured Item Inherit Batch Attributes.
   * @nullable
   */
  declare willManufacturedItemInheritBatchAttributes?: NoYes | null;
  /**
   * Product Unit Symbol.
   * @nullable
   */
  declare productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: BomType | null;
  /**
   * Quantity Rounding Up Multiples.
   */
  declare quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Depth.
   */
  declare physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: BomRoundUp | null;
  /**
   * Valid To Date.
   */
  declare validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Physical Product Density.
   */
  declare physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variable Scrap Percentage.
   */
  declare variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Type.
   * @nullable
   */
  declare consumptionType?: BomConsumpType | null;
  /**
   * Will Manufactured Item Inherit Shelf Life Dates.
   * @nullable
   */
  declare willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Denominator.
   */
  declare quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Flushing Principle.
   * @nullable
   */
  declare flushingPrinciple?: ProdFlushingPrincipBom | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Config Group Id.
   * @nullable
   */
  declare configGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Width.
   */
  declare physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Constant Scrap Quantity.
   */
  declare constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Route Id.
   * @nullable
   */
  declare subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BillOfMaterialsHeaders} entity.
   */
  declare billOfMaterialsHeader?: BillOfMaterialsHeaders<T> | null;

  constructor(_entityApi: BillOfMaterialsLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BillOfMaterialsLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  bomId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationMethod?: BomFormula | null;
  isConsumedAtOperationComplete?: NoYes | null;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeLine?: NoYes | null;
  subBomId?: DeserializedType<T, 'Edm.String'> | null;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  willManufacturedItemInheritBatchAttributes?: NoYes | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: BomType | null;
  quantityRoundingUpMultiples: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMethod?: BomRoundUp | null;
  validToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consumptionType?: BomConsumpType | null;
  willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  quantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  flushingPrinciple?: ProdFlushingPrincipBom | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  configGroupId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  billOfMaterialsHeader?: BillOfMaterialsHeadersType<T> | null;
}
