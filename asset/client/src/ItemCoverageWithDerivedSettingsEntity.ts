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
import type { ItemCoverageWithDerivedSettingsEntityApi } from './ItemCoverageWithDerivedSettingsEntityApi';
import { NoYes } from './NoYes';
import { ReqMinSatisfy } from './ReqMinSatisfy';
import { ReqCovType } from './ReqCovType';
import { ReqOnHandConsumptionStrategy } from './ReqOnHandConsumptionStrategy';
import { ReqPoType } from './ReqPoType';

/**
 * This class represents the entity "ItemCoverageWithDerivedSettingsEntity" of service "d365_metadata".
 */
export class ItemCoverageWithDerivedSettingsEntity<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ItemCoverageWithDerivedSettingsEntityType<T>
{
  /**
   * Technical entity name for ItemCoverageWithDerivedSettingsEntity.
   */
  static override _entityName = 'ItemCoverageWithDerivedSettingsEntity';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ItemCoverageWithDerivedSettingsEntity entity.
   */
  static _keys = [
    'dataAreaId',
    'ItemNumber',
    'CoverageWarehouseLocationId',
    'CoverageItemBatchNumber',
    'CoverageProductColorId',
    'CoverageProductSizeId',
    'CoverageProductStyleId',
    'CoverageProductVersionId',
    'CoverageWarehouseId',
    'CoverageItemSerialNumber',
    'CoverageSiteId',
    'CoverageInventoryStatusId',
    'CoverageProductConfigurationId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Warehouse Location Id.
   */
  declare coverageWarehouseLocationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Item Batch Number.
   */
  declare coverageItemBatchNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Product Color Id.
   */
  declare coverageProductColorId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Product Size Id.
   */
  declare coverageProductSizeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Product Style Id.
   */
  declare coverageProductStyleId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Product Version Id.
   */
  declare coverageProductVersionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Warehouse Id.
   */
  declare coverageWarehouseId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Item Serial Number.
   */
  declare coverageItemSerialNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Site Id.
   */
  declare coverageSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Inventory Status Id.
   */
  declare coverageInventoryStatusId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Product Configuration Id.
   */
  declare coverageProductConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Coverage Period Days.
   */
  declare coveragePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Approved Requisition Time Fence Days.
   */
  declare approvedRequisitionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Last Planning Formula Priority Changed Date.
   */
  declare lastPlanningFormulaPriorityChangedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Procurement Lead Time Days.
   */
  declare procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Planning Formula Priority.
   */
  declare defaultPlanningFormulaPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Procurement Lead Time Overridden.
   * @nullable
   */
  declare isProcurementLeadTimeOverridden?: NoYes | null;
  /**
   * Automatic Firming Time Fence Days.
   */
  declare automaticFirmingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Consume On Hand Overridden.
   * @nullable
   */
  declare isConsumeOnHandOverridden?: NoYes | null;
  /**
   * Production Lead Time Days.
   */
  declare productionLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Minimum On Hand Fulfillment Method.
   * @nullable
   */
  declare minimumOnHandFulfillmentMethod?: ReqMinSatisfy | null;
  /**
   * Planning Formula Item Number.
   * @nullable
   */
  declare planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Maximum On Hand Inventory Quantity.
   */
  declare maximumOnHandInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Are Time Fences Overridden.
   * @nullable
   */
  declare areTimeFencesOverridden?: NoYes | null;
  /**
   * Freeze Time Fence Days.
   */
  declare freezeTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Transfer Lead Time Overridden.
   * @nullable
   */
  declare isTransferLeadTimeOverridden?: NoYes | null;
  /**
   * Capacity Scheduling Time Fence Days.
   */
  declare capacitySchedulingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Negative Days.
   */
  declare negativeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Minimum On Hand Inventory Quantity.
   */
  declare minimumOnHandInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Coverage Inventory Dimension Id.
   * @nullable
   */
  declare coverageInventoryDimensionId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Maximum On Hand Inventory Safety Key Id.
   * @nullable
   */
  declare maximumOnHandInventorySafetyKeyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Positive Days.
   */
  declare positiveDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Coverage Time Fence Days.
   */
  declare coverageTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Current Planning Formula Priority.
   */
  declare currentPlanningFormulaPriority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Product Coverage Group Id.
   * @nullable
   */
  declare productCoverageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minimum On Hand Inventory Safety Key Id.
   * @nullable
   */
  declare minimumOnHandInventorySafetyKeyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Are Coverage Group Settings Overridden.
   * @nullable
   */
  declare areCoverageGroupSettingsOverridden?: NoYes | null;
  /**
   * Is Transfer Lead Time Using Working Days.
   * @nullable
   */
  declare isTransferLeadTimeUsingWorkingDays?: NoYes | null;
  /**
   * Is Procument Lead Time Using Working Days.
   * @nullable
   */
  declare isProcumentLeadTimeUsingWorkingDays?: NoYes | null;
  /**
   * Must Use Latest Possible Supply First.
   * @nullable
   */
  declare mustUseLatestPossibleSupplyFirst?: NoYes | null;
  /**
   * Bom Or Formula Explosion Time Fence Days.
   */
  declare bomOrFormulaExplosionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Are General Settings Overridden.
   * @nullable
   */
  declare areGeneralSettingsOverridden?: NoYes | null;
  /**
   * Default Planned Transfer Order From Warehouse Id.
   * @nullable
   */
  declare defaultPlannedTransferOrderFromWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Coverage Method.
   * @nullable
   */
  declare coverageMethod?: ReqCovType | null;
  /**
   * Consume On Hand Inventory Method.
   * @nullable
   */
  declare consumeOnHandInventoryMethod?: ReqOnHandConsumptionStrategy | null;
  /**
   * Transfer Lead Time Days.
   */
  declare transferLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Planned Order Type.
   * @nullable
   */
  declare plannedOrderType?: ReqPoType | null;
  /**
   * Is Planned Order Type Overridden.
   * @nullable
   */
  declare isPlannedOrderTypeOverridden?: NoYes | null;
  /**
   * Is Production Lead Time Using Working Days.
   * @nullable
   */
  declare isProductionLeadTimeUsingWorkingDays?: NoYes | null;
  /**
   * Is Production Lead Time Overridden.
   * @nullable
   */
  declare isProductionLeadTimeOverridden?: NoYes | null;
  /**
   * Is Minimum On Hand Safety Period Used.
   * @nullable
   */
  declare isMinimumOnHandSafetyPeriodUsed?: NoYes | null;
  /**
   * Order Spike Threshold.
   */
  declare orderSpikeThreshold: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Average Daily Usage.
   */
  declare averageDailyUsage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Distribution Based Adu Enabled.
   * @nullable
   */
  declare distributionBasedAduEnabled?: NoYes | null;
  /**
   * Use Decoupling Point Period Settings.
   * @nullable
   */
  declare useDecouplingPointPeriodSettings?: NoYes | null;
  /**
   * Reorder Point.
   */
  declare reorderPoint: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Order Cycle.
   */
  declare orderCycle: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ItemCoverageWithDerivedSettingsEntityApi<T>) {
    super(_entityApi);
  }
}

export interface ItemCoverageWithDerivedSettingsEntityType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  coverageWarehouseLocationId: DeserializedType<T, 'Edm.String'>;
  coverageItemBatchNumber: DeserializedType<T, 'Edm.String'>;
  coverageProductColorId: DeserializedType<T, 'Edm.String'>;
  coverageProductSizeId: DeserializedType<T, 'Edm.String'>;
  coverageProductStyleId: DeserializedType<T, 'Edm.String'>;
  coverageProductVersionId: DeserializedType<T, 'Edm.String'>;
  coverageWarehouseId: DeserializedType<T, 'Edm.String'>;
  coverageItemSerialNumber: DeserializedType<T, 'Edm.String'>;
  coverageSiteId: DeserializedType<T, 'Edm.String'>;
  coverageInventoryStatusId: DeserializedType<T, 'Edm.String'>;
  coverageProductConfigurationId: DeserializedType<T, 'Edm.String'>;
  coveragePeriodDays: DeserializedType<T, 'Edm.Int32'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  approvedRequisitionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  lastPlanningFormulaPriorityChangedDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  procurementLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  defaultPlanningFormulaPriority: DeserializedType<T, 'Edm.Int32'>;
  isProcurementLeadTimeOverridden?: NoYes | null;
  automaticFirmingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isConsumeOnHandOverridden?: NoYes | null;
  productionLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  minimumOnHandFulfillmentMethod?: ReqMinSatisfy | null;
  planningFormulaItemNumber?: DeserializedType<T, 'Edm.String'> | null;
  maximumOnHandInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  areTimeFencesOverridden?: NoYes | null;
  freezeTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  isTransferLeadTimeOverridden?: NoYes | null;
  capacitySchedulingTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  negativeDays: DeserializedType<T, 'Edm.Int32'>;
  minimumOnHandInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  coverageInventoryDimensionId?: DeserializedType<T, 'Edm.String'> | null;
  maximumOnHandInventorySafetyKeyId?: DeserializedType<T, 'Edm.String'> | null;
  positiveDays: DeserializedType<T, 'Edm.Int32'>;
  coverageTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  currentPlanningFormulaPriority: DeserializedType<T, 'Edm.Int32'>;
  productCoverageGroupId?: DeserializedType<T, 'Edm.String'> | null;
  minimumOnHandInventorySafetyKeyId?: DeserializedType<T, 'Edm.String'> | null;
  areCoverageGroupSettingsOverridden?: NoYes | null;
  isTransferLeadTimeUsingWorkingDays?: NoYes | null;
  isProcumentLeadTimeUsingWorkingDays?: NoYes | null;
  mustUseLatestPossibleSupplyFirst?: NoYes | null;
  bomOrFormulaExplosionTimeFenceDays: DeserializedType<T, 'Edm.Int32'>;
  areGeneralSettingsOverridden?: NoYes | null;
  defaultPlannedTransferOrderFromWarehouseId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  coverageMethod?: ReqCovType | null;
  consumeOnHandInventoryMethod?: ReqOnHandConsumptionStrategy | null;
  transferLeadTimeDays: DeserializedType<T, 'Edm.Int32'>;
  plannedOrderType?: ReqPoType | null;
  isPlannedOrderTypeOverridden?: NoYes | null;
  isProductionLeadTimeUsingWorkingDays?: NoYes | null;
  isProductionLeadTimeOverridden?: NoYes | null;
  isMinimumOnHandSafetyPeriodUsed?: NoYes | null;
  orderSpikeThreshold: DeserializedType<T, 'Edm.Decimal'>;
  averageDailyUsage: DeserializedType<T, 'Edm.Decimal'>;
  distributionBasedAduEnabled?: NoYes | null;
  useDecouplingPointPeriodSettings?: NoYes | null;
  reorderPoint: DeserializedType<T, 'Edm.Decimal'>;
  orderCycle: DeserializedType<T, 'Edm.Int32'>;
}
