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
import type { BatchOrderByProductsApi } from './BatchOrderByProductsApi';
import { NoYes } from './NoYes';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
import { ProdBackStatus } from './ProdBackStatus';
import { PmfBurdenType } from './PmfBurdenType';
import { BatchOrderHeaders, BatchOrderHeadersType } from './BatchOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BatchOrderByProducts" of service "d365_metadata".
 */
export class BatchOrderByProducts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BatchOrderByProductsType<T>
{
  /**
   * Technical entity name for BatchOrderByProducts.
   */
  static override _entityName = 'BatchOrderByProducts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchOrderByProducts entity.
   */
  static _keys = [
    'dataAreaId',
    'DemandProductionOrderNumber',
    'DemandProductionOrderLineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Demand Production Order Number.
   */
  declare demandProductionOrderNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Demand Production Order Line Number.
   */
  declare demandProductionOrderLineNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Batch Order Number.
   * @nullable
   */
  declare batchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
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
   * Ended Date.
   */
  declare endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Rounding Up Multiples By Product Quantity.
   */
  declare roundingUpMultiplesByProductQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Reported As Finished Date.
   */
  declare reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Remaining By Product Quantity.
   */
  declare remainingByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * By Product Quantity Denominator.
   */
  declare byProductQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * By Product Quantity.
   */
  declare byProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Sales Order Number.
   * @nullable
   */
  declare demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
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
  declare roundingUpMethod?: PmfCoByRoundUp | null;
  /**
   * Started Date.
   */
  declare startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Demand Production Order Header Inventory Lot Id.
   * @nullable
   */
  declare demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Demand Inventory Journal Line Inventory Lot Id.
   * @nullable
   */
  declare demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Started By Product Quantity.
   */
  declare startedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Date.
   */
  declare estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
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
   * Batch Order Remainder Status.
   * @nullable
   */
  declare batchOrderRemainderStatus?: ProdBackStatus | null;
  /**
   * Burden Allocation Amount.
   */
  declare burdenAllocationAmount: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Catch Weight Quantity.
   */
  declare remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Burden Allocation Method.
   * @nullable
   */
  declare burdenAllocationMethod?: PmfBurdenType | null;
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
   * Estimated By Product Quantity.
   */
  declare estimatedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
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

  constructor(_entityApi: BatchOrderByProductsApi<T>) {
    super(_entityApi);
  }
}

export interface BatchOrderByProductsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  demandProductionOrderNumber: DeserializedType<T, 'Edm.String'>;
  demandProductionOrderLineNumber: DeserializedType<T, 'Edm.String'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  isFullyConsumed?: NoYes | null;
  endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  roundingUpMultiplesByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  remainingByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  byProductQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  byProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  demandTransferOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  demandSalesOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  roundingUpMethod?: PmfCoByRoundUp | null;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  demandProductionOrderHeaderInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  demandInventoryJournalLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  startedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderRemainderStatus?: ProdBackStatus | null;
  burdenAllocationAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandTransferOrderLineReceivingInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  demandSalesOrderLineInventoryLotId?: DeserializedType<T, 'Edm.String'> | null;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  burdenAllocationMethod?: PmfBurdenType | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  demandInventoryJournalNumber?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderHeader?: BatchOrderHeadersType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
