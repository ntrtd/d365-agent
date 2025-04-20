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
import type { EngineeringChangeOrderProductBillOfMaterialsLinesApi } from './EngineeringChangeOrderProductBillOfMaterialsLinesApi';
import { BomFormula } from './BomFormula';
import { NoYes } from './NoYes';
import { BomType } from './BomType';
import { BomRoundUp } from './BomRoundUp';
import { BomConsumpType } from './BomConsumpType';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import {
  EngineeringChangeOrderProductBillOfMaterialsHeaders,
  EngineeringChangeOrderProductBillOfMaterialsHeadersType
} from './EngineeringChangeOrderProductBillOfMaterialsHeaders';

/**
 * This class represents the entity "EngineeringChangeOrderProductBillOfMaterialsLines" of service "d365_metadata".
 */
export class EngineeringChangeOrderProductBillOfMaterialsLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EngineeringChangeOrderProductBillOfMaterialsLinesType<T>
{
  /**
   * Technical entity name for EngineeringChangeOrderProductBillOfMaterialsLines.
   */
  static override _entityName =
    'EngineeringChangeOrderProductBillOfMaterialsLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EngineeringChangeOrderProductBillOfMaterialsLines entity.
   */
  static _keys = [
    'dataAreaId',
    'EngineeringChangeOrderNumber',
    'EngineeringChangeOrderProductLineNumber',
    'ItemNumber',
    'ProductionSiteId',
    'ConsumptionSiteId',
    'ConsumptionWarehouseId',
    'ProductStyleId',
    'ProductSizeId',
    'ProductColorId',
    'ProductConfigurationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Number.
   */
  declare engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Engineering Change Order Product Line Number.
   */
  declare engineeringChangeOrderProductLineNumber: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Site Id.
   */
  declare consumptionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Consumption Warehouse Id.
   */
  declare consumptionWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   */
  declare productStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Size Id.
   */
  declare productSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Color Id.
   */
  declare productColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
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
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Valid From Date.
   */
  declare validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Line Bom Id.
   * @nullable
   */
  declare lineBomId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Width.
   */
  declare physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Configuration Group Id.
   * @nullable
   */
  declare configurationGroupId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Will Set Subproduction To Consumed.
   * @nullable
   */
  declare willSetSubproductionToConsumed?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link EngineeringChangeOrderProductBillOfMaterialsHeaders} entity.
   */
  declare engineeringChangeOrderProductBillOfMaterialsHeader?: EngineeringChangeOrderProductBillOfMaterialsHeaders<T> | null;

  constructor(
    _entityApi: EngineeringChangeOrderProductBillOfMaterialsLinesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface EngineeringChangeOrderProductBillOfMaterialsLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderNumber: DeserializedType<T, 'Edm.String'>;
  engineeringChangeOrderProductLineNumber: DeserializedType<T, 'Edm.Decimal'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  consumptionSiteId: DeserializedType<T, 'Edm.String'>;
  consumptionWarehouseId: DeserializedType<T, 'Edm.String'>;
  productStyleId: DeserializedType<T, 'Edm.String'>;
  productSizeId: DeserializedType<T, 'Edm.String'>;
  productColorId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationMethod?: BomFormula | null;
  isConsumedAtOperationComplete?: NoYes | null;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  validFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  willCostCalculationIncludeLine?: NoYes | null;
  subBomId?: DeserializedType<T, 'Edm.String'> | null;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  willManufacturedItemInheritBatchAttributes?: NoYes | null;
  productUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  lineBomId?: DeserializedType<T, 'Edm.String'> | null;
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
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  configurationGroupId?: DeserializedType<T, 'Edm.String'> | null;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  constantScrapQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subRouteId?: DeserializedType<T, 'Edm.String'> | null;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  willSetSubproductionToConsumed?: NoYes | null;
  engineeringChangeOrderProductBillOfMaterialsHeader?: EngineeringChangeOrderProductBillOfMaterialsHeadersType<T> | null;
}
