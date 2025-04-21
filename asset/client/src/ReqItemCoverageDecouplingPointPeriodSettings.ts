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
import type { ReqItemCoverageDecouplingPointPeriodSettingsApi } from './ReqItemCoverageDecouplingPointPeriodSettingsApi';

/**
 * This class represents the entity "ReqItemCoverageDecouplingPointPeriodSettings" of service "d365_metadata".
 */
export class ReqItemCoverageDecouplingPointPeriodSettings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReqItemCoverageDecouplingPointPeriodSettingsType<T>
{
  /**
   * Technical entity name for ReqItemCoverageDecouplingPointPeriodSettings.
   */
  static override _entityName = 'ReqItemCoverageDecouplingPointPeriodSettings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReqItemCoverageDecouplingPointPeriodSettings entity.
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
    'CoverageProductConfigurationId',
    'FromDate'
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
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Lead Time Factor.
   */
  declare leadTimeFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Maximum Invent Onhand Quantity.
   */
  declare maximumInventOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Yellow Quantity.
   */
  declare yellowQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reorder Point Quantity.
   */
  declare reorderPointQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Decoupled Lead Time.
   */
  declare decoupledLeadTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Calculated Maximum Onhand Quantity.
   */
  declare calculatedMaximumOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Minimum Invent Onhand Quantity.
   */
  declare minimumInventOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Calculated Reorder Point Quantity.
   */
  declare calculatedReorderPointQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Calculated Minimum Onhand Quantity.
   */
  declare calculatedMinimumOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Red Base Quantity.
   */
  declare redBaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Variability Factor.
   */
  declare variabilityFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Green Quantity.
   */
  declare greenQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Red Safety Quantity.
   */
  declare redSafetyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Average Daily Usage.
   */
  declare averageDailyUsage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Demand Adjustment Factor.
   */
  declare demandAdjustmentFactor: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: ReqItemCoverageDecouplingPointPeriodSettingsApi<T>) {
    super(_entityApi);
  }
}

export interface ReqItemCoverageDecouplingPointPeriodSettingsType<
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
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  leadTimeFactor: DeserializedType<T, 'Edm.Decimal'>;
  maximumInventOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  yellowQuantity: DeserializedType<T, 'Edm.Decimal'>;
  reorderPointQuantity: DeserializedType<T, 'Edm.Decimal'>;
  decoupledLeadTime: DeserializedType<T, 'Edm.Int32'>;
  calculatedMaximumOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  minimumInventOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  calculatedReorderPointQuantity: DeserializedType<T, 'Edm.Decimal'>;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  calculatedMinimumOnhandQuantity: DeserializedType<T, 'Edm.Decimal'>;
  redBaseQuantity: DeserializedType<T, 'Edm.Decimal'>;
  variabilityFactor: DeserializedType<T, 'Edm.Decimal'>;
  greenQuantity: DeserializedType<T, 'Edm.Decimal'>;
  redSafetyQuantity: DeserializedType<T, 'Edm.Decimal'>;
  averageDailyUsage: DeserializedType<T, 'Edm.Decimal'>;
  demandAdjustmentFactor: DeserializedType<T, 'Edm.Decimal'>;
}
