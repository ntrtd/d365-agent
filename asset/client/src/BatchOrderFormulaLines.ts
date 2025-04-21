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
import type { BatchOrderFormulaLinesApi } from './BatchOrderFormulaLinesApi';
import { NoYes } from './NoYes';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { ProdReservation } from './ProdReservation';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import { BomRoundUp } from './BomRoundUp';
import { PdsIngredientTypeEnum } from './PdsIngredientTypeEnum';
import { BomType } from './BomType';
import { ProdBackStatus } from './ProdBackStatus';
import { BomConsumpType } from './BomConsumpType';
import { BomFormula } from './BomFormula';
import { BatchOrderHeaders, BatchOrderHeadersType } from './BatchOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BatchOrderFormulaLines" of service "d365_metadata".
 */
export class BatchOrderFormulaLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BatchOrderFormulaLinesType<T>
{
  /**
   * Technical entity name for BatchOrderFormulaLines.
   */
  static override _entityName = 'BatchOrderFormulaLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchOrderFormulaLines entity.
   */
  static _keys = ['dataAreaId', 'LineNumber', 'BatchOrderNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Order Number.
   */
  declare batchOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Quantity Without Yield.
   */
  declare quantityWithoutYield: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Formula Line Quantity Denominator.
   */
  declare formulaLineQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Subcontracting Purchase Order Number.
   * @nullable
   */
  declare subcontractingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Estimated Formula Line Quantity.
   */
  declare estimatedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Manufactured Item Inherit Shelf Life Dates.
   * @nullable
   */
  declare willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  /**
   * Is Fully Consumed.
   * @nullable
   */
  declare isFullyConsumed?: NoYes | null;
  /**
   * Warehouse Bom Release Reservation Requirement Rule.
   * @nullable
   */
  declare warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  /**
   * Auto Reservation Mode.
   * @nullable
   */
  declare autoReservationMode?: ProdReservation | null;
  /**
   * Demand Production Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Formula Line Quantity.
   */
  declare formulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Production Order Number.
   * @nullable
   */
  declare demandProductionOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Number.
   * @nullable
   */
  declare itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Product Density.
   */
  declare physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Flushing Principle.
   * @nullable
   */
  declare flushingPrinciple?: ProdFlushingPrincipBom | null;
  /**
   * Variable Scrap Percentage.
   */
  declare variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Sub Route Operation Id.
   * @nullable
   */
  declare subRouteOperationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Released Catch Weight Quantity.
   */
  declare releasedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Consumed At Operation Complete.
   * @nullable
   */
  declare isConsumedAtOperationComplete?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Is Constant Consumption Released.
   * @nullable
   */
  declare isConstantConsumptionReleased?: NoYes | null;
  /**
   * Demand Transfer Order Number.
   * @nullable
   */
  declare demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Manufactured Item Inherit Batch Attributes.
   * @nullable
   */
  declare willManufacturedItemInheritBatchAttributes?: NoYes | null;
  /**
   * Remaining Inventory Quantity.
   */
  declare remainingInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Sales Order Number.
   * @nullable
   */
  declare demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Inventory Quantity.
   */
  declare startedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Production Order Line Number.
   * @nullable
   */
  declare demandProductionOrderLineNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Physical Product Depth.
   */
  declare physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Subcontracting Purchase Order Line Inventory Lot Id.
   * @nullable
   */
  declare subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: BomRoundUp | null;
  /**
   * Will Co Product Inherit Shelf Life Dates.
   * @nullable
   */
  declare willCoProductInheritShelfLifeDates?: NoYes | null;
  /**
   * Demand Production Order Header Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Ingredient Type.
   * @nullable
   */
  declare ingredientType?: PdsIngredientTypeEnum | null;
  /**
   * Formula Quantity Percentage.
   */
  declare formulaQuantityPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Formula Id.
   * @nullable
   */
  declare subFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Position Number.
   * @nullable
   */
  declare positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Inventory Journal Line Inventory Lot Id.
   * @nullable
   */
  declare demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Remaining Formula Line Quantity.
   */
  declare remainingFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Catch Weight Quantity.
   */
  declare estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Inventory Lot Id.
   * @nullable
   */
  declare inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Will Cost Calculation Include Line.
   * @nullable
   */
  declare willCostCalculationIncludeLine?: NoYes | null;
  /**
   * Raw Material Scheduled Consumption Time.
   */
  declare rawMaterialScheduledConsumptionTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: BomType | null;
  /**
   * Is Formula Line Quantity Percentage Controlled.
   * @nullable
   */
  declare isFormulaLineQuantityPercentageControlled?: NoYes | null;
  /**
   * Source Planned Order Number.
   * @nullable
   */
  declare sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Transfer Order Line Receiving Inventory Lot Id.
   * @nullable
   */
  declare demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Constant Scrap Formula Line Quantity.
   */
  declare constantScrapFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Up Multiples Formula Line Quantity.
   */
  declare roundingUpMultiplesFormulaLineQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Is Resource Consumption Used.
   */
  declare isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  /**
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Raw Material Scheduled Consumption Date.
   */
  declare rawMaterialScheduledConsumptionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Remaining Catch Weight Quantity.
   */
  declare remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Line Remainder Status.
   * @nullable
   */
  declare lineRemainderStatus?: ProdBackStatus | null;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Sales Order Line Inventory Lot Id.
   * @nullable
   */
  declare demandSalesOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Source Formula Id.
   * @nullable
   */
  declare sourceFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Inventory Quantity.
   */
  declare estimatedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Formula Line Quantity Scalable.
   * @nullable
   */
  declare isFormulaLineQuantityScalable?: NoYes | null;
  /**
   * Released Formula Line Quantity.
   */
  declare releasedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Will Co Product Inherit Batch Attributes.
   * @nullable
   */
  declare willCoProductInheritBatchAttributes?: NoYes | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Physical Product Width.
   */
  declare physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Type.
   * @nullable
   */
  declare consumptionType?: BomConsumpType | null;
  /**
   * Formula Line Unit Symbol.
   * @nullable
   */
  declare formulaLineUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Formula Line Quantity.
   */
  declare startedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Method.
   * @nullable
   */
  declare consumptionCalculationMethod?: BomFormula | null;
  /**
   * Subcontracting Vendor Account Number.
   * @nullable
   */
  declare subcontractingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Started Catch Weight Quantity.
   */
  declare startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Inventory Journal Number.
   * @nullable
   */
  declare demandInventoryJournalNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link BatchOrderHeaders} entity.
   */
  declare batchOrderHeader?: BatchOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BatchOrderFormulaLinesApi<T>) {
    super(_entityApi);
  }
}

export interface BatchOrderFormulaLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  batchOrderNumber: DeserializedType<T, 'Edm.String'>;
  quantityWithoutYield: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  formulaLineQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  estimatedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  willManufacturedItemInheritShelfLifeDates?: NoYes | null;
  isFullyConsumed?: NoYes | null;
  warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  autoReservationMode?: ProdReservation | null;
  demandProductionOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  formulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandProductionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  flushingPrinciple?: ProdFlushingPrincipBom | null;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subRouteOperationId?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  releasedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isConsumedAtOperationComplete?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  isConstantConsumptionReleased?: NoYes | null;
  demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  willManufacturedItemInheritBatchAttributes?: NoYes | null;
  remainingInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  startedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandProductionOrderLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  roundingUpMethod?: BomRoundUp | null;
  willCoProductInheritShelfLifeDates?: NoYes | null;
  demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  ingredientType?: PdsIngredientTypeEnum | null;
  formulaQuantityPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  subFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  remainingFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeLine?: NoYes | null;
  rawMaterialScheduledConsumptionTime: DeserializedType<T, 'Edm.Int32'>;
  lineType?: BomType | null;
  isFormulaLineQuantityPercentageControlled?: NoYes | null;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  constantScrapFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMultiplesFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  rawMaterialScheduledConsumptionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  lineRemainderStatus?: ProdBackStatus | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  demandSalesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  sourceFormulaId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  isFormulaLineQuantityScalable?: NoYes | null;
  releasedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  willCoProductInheritBatchAttributes?: NoYes | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  consumptionType?: BomConsumpType | null;
  formulaLineUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  startedFormulaLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationMethod?: BomFormula | null;
  subcontractingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandInventoryJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderHeader?: BatchOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
