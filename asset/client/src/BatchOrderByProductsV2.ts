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
import type { BatchOrderByProductsV2Api } from './BatchOrderByProductsV2Api';
import { NoYes } from './NoYes';
import { PmfCoByRoundUp } from './PmfCoByRoundUp';
import { ProdBackStatus } from './ProdBackStatus';
import { PmfBurdenType } from './PmfBurdenType';
import { BatchOrderHeaders, BatchOrderHeadersType } from './BatchOrderHeaders';
import { DimensionSets, DimensionSetsType } from './DimensionSets';

/**
 * This class represents the entity "BatchOrderByProductsV2" of service "d365_metadata".
 */
export class BatchOrderByProductsV2<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements BatchOrderByProductsV2Type<T>
{
  /**
   * Technical entity name for BatchOrderByProductsV2.
   */
  static override _entityName = 'BatchOrderByProductsV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BatchOrderByProductsV2 entity.
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
   * Product Size Id.
   * @nullable
   */
  declare productSizeId?: DeserializedType<T, 'Edm.String'> | null;
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
   * Consumption Warehouse Id.
   * @nullable
   */
  declare consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
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
  declare defaultDimensionSet?: DimensionSets<T> | null;

  constructor(_entityApi: BatchOrderByProductsV2Api<T>) {
    super(_entityApi);
  }
}

export interface BatchOrderByProductsV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inventoryLotId: DeserializedType<T, 'Edm.String'>;
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
  productSizeId?: DeserializedType<T, 'Edm.String'> | null;
  subcontractingPurchaseOrderLineInventoryLotId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  roundingUpMethod?: PmfCoByRoundUp | null;
  startedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  consumptionWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  startedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  estimatedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  estimatedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  batchOrderRemainderStatus?: ProdBackStatus | null;
  burdenAllocationAmount: DeserializedType<T, 'Edm.Decimal'>;
  sourcePlannedOrderNumber?: DeserializedType<T, 'Edm.String'> | null;
  productConfigurationId?: DeserializedType<T, 'Edm.String'> | null;
  catchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  productVersionId?: DeserializedType<T, 'Edm.String'> | null;
  remainingCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  consumptionSiteId?: DeserializedType<T, 'Edm.String'> | null;
  sourceMasterPlanId?: DeserializedType<T, 'Edm.String'> | null;
  burdenAllocationMethod?: PmfBurdenType | null;
  itemBatchNumber?: DeserializedType<T, 'Edm.String'> | null;
  productColorId?: DeserializedType<T, 'Edm.String'> | null;
  estimatedByProductQuantity: DeserializedType<T, 'Edm.Decimal'>;
  startedCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  inventoryOwnerId?: DeserializedType<T, 'Edm.String'> | null;
  batchOrderHeader?: BatchOrderHeadersType<T> | null;
  defaultDimensionSet?: DimensionSetsType<T> | null;
}
