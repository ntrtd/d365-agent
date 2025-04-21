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
import type { BatchOrderCoProductsV2Api } from './BatchOrderCoProductsV2Api';
import { ProdBackStatus } from './ProdBackStatus';
import { PmfCostAllocationMethod } from './PmfCostAllocationMethod';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
import { NoYes } from './NoYes';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BatchOrderCoProductsV2" of service "d365_metadata".
 */
export class BatchOrderCoProductsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BatchOrderCoProductsV2Type<T>
{
  /**
   * Technical entity name for BatchOrderCoProductsV2.
   */
  static override _entityName = 'BatchOrderCoProductsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchOrderCoProductsV2 entity.
   */
  static _keys = ['dataAreaId', 'InventoryLotId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inventory Lot Id.
   */
  declare inventoryLotId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   * @nullable
   */
  declare productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Status Id.
   * @nullable
   */
  declare inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Started Co Product Quantity.
   */
  declare startedCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Ended Date.
   */
  declare endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Reported As Finished Date.
   */
  declare reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Batch Order Remainder Status.
   * @nullable
   */
  declare batchOrderRemainderStatus?: ProdBackStatus | null;
  /**
   * Estimated Catch Weight Quantity.
   */
  declare estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
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
   * Product Version Id.
   * @nullable
   */
  declare productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Consumption Site Id.
   * @nullable
   */
  declare consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Inventory Owner Id.
   * @nullable
   */
  declare inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cost Allocation Method.
   * @nullable
   */
  declare costAllocationMethod?: PmfCostAllocationMethod | null;
  /**
   * Remaining Catch Weight Quantity.
   */
  declare remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Source Planned Order Number.
   * @nullable
   */
  declare sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remaining Co Product Quantity.
   */
  declare remainingCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Co Product Quantity.
   */
  declare coProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Date.
   */
  declare estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Started Date.
   */
  declare startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Source Master Plan Id.
   * @nullable
   */
  declare sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Co Product Quantity Denominator.
   */
  declare coProductQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Up Method.
   * @nullable
   */
  declare roundingUpMethod?: PmfCoByRoundUp | null;
  /**
   * Item Batch Number.
   * @nullable
   */
  declare itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subcontracting Purchase Order Number.
   * @nullable
   */
  declare subcontractingPurchaseOrderNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Cost Allocation Percentage.
   */
  declare costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Rounding Up Multiples Co Product Quantity.
   */
  declare roundingUpMultiplesCoProductQuantity: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Subcontracting Purchase Order Line Inventory Lot Id.
   * @nullable
   */
  declare subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Product Color Id.
   * @nullable
   */
  declare productColorId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Catch Weight Quantity.
   */
  declare catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Batch Order Number.
   * @nullable
   */
  declare batchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Estimated Co Product Quantity.
   */
  declare estimatedCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Fully Consumed.
   * @nullable
   */
  declare isFullyConsumed?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Started Catch Weight Quantity.
   */
  declare startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Product Style Id.
   * @nullable
   */
  declare productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BatchOrderCoProductsV2Api<T>) {
    super(_entityApi);
  }
}

export interface BatchOrderCoProductsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryStatusId?: DeserializedType<T, 'Edm.String'> | null;
  startedCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  endedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  reportedAsFinishedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  batchOrderRemainderStatus?: ProdBackStatus | null;
  estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  itemNumber?: DeserializedType<T, 'Edm.String'> | null;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  costAllocationMethod?: PmfCostAllocationMethod | null;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  remainingCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  coProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  coProductQuantityDenominator: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMethod?: PmfCoByRoundUp | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  costAllocationPercentage: DeserializedType<T, 'Edm.Decimal'>;
  roundingUpMultiplesCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  estimatedCoProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isFullyConsumed?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productStyleId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionSet?: DimensionSetsType<T> | null;
}
