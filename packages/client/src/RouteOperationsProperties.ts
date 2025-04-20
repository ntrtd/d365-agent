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
import type { RouteOperationsPropertiesApi } from './RouteOperationsPropertiesApi';
import { RouteFormula } from './RouteFormula';
import { RouteOprType } from './RouteOprType';

/**
 * This class represents the entity "RouteOperationsProperties" of service "d365_metadata".
 */
export class RouteOperationsProperties<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RouteOperationsPropertiesType<T>
{
  /**
   * Technical entity name for RouteOperationsProperties.
   */
  static override _entityName = 'RouteOperationsProperties';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RouteOperationsProperties entity.
   */
  static _keys = [
    'dataAreaId',
    'OperationId',
    'ItemNumber',
    'ProductConfigurationId',
    'RouteId',
    'ProductionSiteId',
    'ProductGroupId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Operation Id.
   */
  declare operationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Item Number.
   */
  declare itemNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Configuration Id.
   */
  declare productConfigurationId: DeserializedType<T, 'Edm.String'>;
  /**
   * Route Id.
   */
  declare routeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Production Site Id.
   */
  declare productionSiteId: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Group Id.
   */
  declare productGroupId: DeserializedType<T, 'Edm.String'>;
  /**
   * Process Quantity.
   */
  declare processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Quantity Cost Category Id.
   * @nullable
   */
  declare quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Group Id.
   * @nullable
   */
  declare routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Load Percentage.
   */
  declare loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Quantity.
   */
  declare resourceQuantity: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Operations Time To Hour Conversion Factor.
   */
  declare operationsTimeToHourConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Setup Time.
   */
  declare setupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Queue Time Before.
   */
  declare queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Costing Operation Resource Id.
   * @nullable
   */
  declare costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Working Time Scheduling Property Id.
   * @nullable
   */
  declare workingTimeSchedulingPropertyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consumption Calculation Factor.
   */
  declare consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Consumption Calculation Formula.
   * @nullable
   */
  declare consumptionCalculationFormula?: RouteFormula | null;
  /**
   * Queue Time After.
   */
  declare queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Time.
   */
  declare processTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Setup Cost Category Id.
   * @nullable
   */
  declare setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Batch Quantity.
   */
  declare transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Type.
   * @nullable
   */
  declare routeType?: RouteOprType | null;
  /**
   * Transit Time.
   */
  declare transitTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Process Cost Category Id.
   * @nullable
   */
  declare processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delay Notification Threshold Percent.
   */
  declare delayNotificationThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;

  constructor(_entityApi: RouteOperationsPropertiesApi<T>) {
    super(_entityApi);
  }
}

export interface RouteOperationsPropertiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  operationId: DeserializedType<T, 'Edm.String'>;
  itemNumber: DeserializedType<T, 'Edm.String'>;
  productConfigurationId: DeserializedType<T, 'Edm.String'>;
  routeId: DeserializedType<T, 'Edm.String'>;
  productionSiteId: DeserializedType<T, 'Edm.String'>;
  productGroupId: DeserializedType<T, 'Edm.String'>;
  processQuantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  loadPercentage: DeserializedType<T, 'Edm.Decimal'>;
  resourceQuantity: DeserializedType<T, 'Edm.Int32'>;
  operationsTimeToHourConversionFactor: DeserializedType<T, 'Edm.Decimal'>;
  setupTime: DeserializedType<T, 'Edm.Decimal'>;
  queueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  costingOperationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  workingTimeSchedulingPropertyId?: DeserializedType<T, 'Edm.String'> | null;
  consumptionCalculationFactor: DeserializedType<T, 'Edm.Decimal'>;
  consumptionCalculationFormula?: RouteFormula | null;
  queueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  processTime: DeserializedType<T, 'Edm.Decimal'>;
  setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  transferBatchQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeType?: RouteOprType | null;
  transitTime: DeserializedType<T, 'Edm.Decimal'>;
  processCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  delayNotificationThresholdPercent: DeserializedType<T, 'Edm.Decimal'>;
}
