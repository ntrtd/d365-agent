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
import type { ProductionOrderBillOfMaterialLinesApi } from './ProductionOrderBillOfMaterialLinesApi';
import { NoYes } from './NoYes';
import { BomWhsReleasePolicy } from './BomWhsReleasePolicy';
import { ProdReservation } from './ProdReservation';
import { ProdFlushingPrincipBom } from './ProdFlushingPrincipBom';
import { BomRoundUp } from './BomRoundUp';
import { BomType } from './BomType';
import { ProdBackStatus } from './ProdBackStatus';
import { BomConsumpType } from './BomConsumpType';
import { BomFormula } from './BomFormula';
import {
  ProductionOrderHeaders,
  ProductionOrderHeadersType
} from './ProductionOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "ProductionOrderBillOfMaterialLines" of service "d365_metadata".
 */
export class ProductionOrderBillOfMaterialLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionOrderBillOfMaterialLinesType<T>
{
  /**
   * Technical entity name for ProductionOrderBillOfMaterialLines.
   */
  static override _entityName = 'ProductionOrderBillOfMaterialLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionOrderBillOfMaterialLines entity.
   */
  static _keys = ['dataAreaId', 'ProductionOrderNumber', 'LineNumber'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Order Number.
   */
  declare productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bom Line Quantity.
   */
  declare bomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontracting Purchase Order Number.
   * @nullable
   */
  declare subcontractingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Released Bom Line Quantity.
   */
  declare releasedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Physical Product Height.
   */
  declare physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Bom Line Quantity Denominator.
   */
  declare bomLineQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Remaining Bom Line Quantity.
   */
  declare remainingBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Demand Transfer Order Number.
   * @nullable
   */
  declare demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Constant Consumption Released.
   * @nullable
   */
  declare isConstantConsumptionReleased?: NoYes | null;
  /**
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: BomRoundUp | null;
  /**
   * Subcontracting Purchase Order Line Inventory Lot Id.
   * @nullable
   */
  declare subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Demand Production Order Header Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Calculation Constant.
   */
  declare consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Operation Number.
   */
  declare routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Material Overpick Percentage.
   */
  declare materialOverpickPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Rounding Up Multiples Bom Line Quantity.
   */
  declare roundingUpMultiplesBomLineQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
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
   * Estimated Bom Line Quantity.
   */
  declare estimatedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Started Bom Line Quantity.
   */
  declare startedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Demand Transfer Order Line Receiving Inventory Lot Id.
   * @nullable
   */
  declare demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Line Remainder Status.
   * @nullable
   */
  declare lineRemainderStatus?: ProdBackStatus | null;
  /**
   * Source Bom Id.
   * @nullable
   */
  declare sourceBomId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Estimated Inventory Quantity.
   */
  declare estimatedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sub Bom Id.
   * @nullable
   */
  declare subBomId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Consumption Warehouse Location Id.
   * @nullable
   */
  declare consumptionWarehouseLocationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Calculation Method.
   * @nullable
   */
  declare consumptionCalculationMethod?: BomFormula | null;
  /**
   * Constant Scrap Bom Line Quantity.
   */
  declare constantScrapBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Subcontracting Vendor Account Number.
   * @nullable
   */
  declare subcontractingVendorAccountNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
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
   * Bom Line Unit Symbol.
   * @nullable
   */
  declare bomLineUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link ProductionOrderHeaders} entity.
   */
  declare productionOrderHeader?: ProductionOrderHeaders<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: ProductionOrderBillOfMaterialLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionOrderBillOfMaterialLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  productionOrderNumber: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  bomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  isFullyConsumed?: NoYes | null;
  warehouseBomReleaseReservationRequirementRule?: BomWhsReleasePolicy | null;
  autoReservationMode?: ProdReservation | null;
  demandProductionOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  demandProductionOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductDensity: DeserializedType<T, 'Edm.Decimal'>;
  flushingPrinciple?: ProdFlushingPrincipBom | null;
  variableScrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  subRouteOperationId?: DeserializedType<T, 'Edm.String'> | null;
  releasedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  physicalProductHeight: DeserializedType<T, 'Edm.Decimal'>;
  bomLineQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  remainingBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isConsumedAtOperationComplete?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  isConstantConsumptionReleased?: NoYes | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  remainingInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  startedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandProductionOrderLineNumber?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductDepth: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMethod?: BomRoundUp | null;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  consumptionCalculationConstant: DeserializedType<T, 'Edm.Decimal'>;
  routeOperationNumber: DeserializedType<T, 'Edm.Int32'>;
  materialOverpickPercentage: DeserializedType<T, 'Edm.Decimal'>;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  positionNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  roundingUpMultiplesBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  willCostCalculationIncludeLine?: NoYes | null;
  rawMaterialScheduledConsumptionTime: DeserializedType<T, 'Edm.Int32'>;
  lineType?: BomType | null;
  estimatedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  startedBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  isResourceConsumptionUsed: DeserializedType<T, 'Edm.Boolean'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  rawMaterialScheduledConsumptionDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  lineRemainderStatus?: ProdBackStatus | null;
  sourceBomId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  demandSalesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  subBomId?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  physicalProductWidth: DeserializedType<T, 'Edm.Decimal'>;
  consumptionType?: BomConsumpType | null;
  consumptionWarehouseLocationId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationMethod?: BomFormula | null;
  constantScrapBomLineQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subcontractingVendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  bomLineUnitSymbol?: DeserializedType<T, 'Edm.String'> | null;
  productionOrderHeader?: ProductionOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
