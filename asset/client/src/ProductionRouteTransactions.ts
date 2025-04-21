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
import type { ProductionRouteTransactionsApi } from './ProductionRouteTransactionsApi';
import { RouteJobType } from './RouteJobType';
import { RouteOprPriority } from './RouteOprPriority';
import { NoYes } from './NoYes';
import { ProdErrorCause } from './ProdErrorCause';

/**
 * This class represents the entity "ProductionRouteTransactions" of service "d365_metadata".
 */
export class ProductionRouteTransactions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProductionRouteTransactionsType<T>
{
  /**
   * Technical entity name for ProductionRouteTransactions.
   */
  static override _entityName = 'ProductionRouteTransactions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProductionRouteTransactions entity.
   */
  static _keys = [
    'dataAreaId',
    'RecordId',
    'OperationNumber',
    'EstimatedAccountingDate'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Record Id.
   */
  declare recordId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Operation Number.
   */
  declare operationNumber: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Estimated Accounting Date.
   */
  declare estimatedAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Scheduled From Time.
   */
  declare scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Job Processing Percentage.
   */
  declare jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Estimated Accounting Voucher Number.
   * @nullable
   */
  declare estimatedAccountingVoucherNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Job Id.
   * @nullable
   */
  declare jobId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scheduled End Time.
   */
  declare scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Quantity Cost Category Unit Cost.
   */
  declare quantityCostCategoryUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Hourly Cost Category Rate.
   */
  declare hourlyCostCategoryRate: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Reported Good Catch Weight Quantity.
   */
  declare reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Realized Accounting Voucher Number.
   * @nullable
   */
  declare realizedAccountingVoucherNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Reported Good Inventory Quantity.
   */
  declare reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Route Cost Category Id.
   * @nullable
   */
  declare routeCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Route Job Type.
   * @nullable
   */
  declare routeJobType?: RouteJobType | null;
  /**
   * Operation Priority.
   * @nullable
   */
  declare operationPriority?: RouteOprPriority | null;
  /**
   * Cost Amount.
   */
  declare costAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operations Resource Group Id.
   */
  declare operationsResourceGroupId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Reported Error Catch Weight Quantity.
   */
  declare reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operation Resource Id.
   * @nullable
   */
  declare operationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Production Unit Id.
   * @nullable
   */
  declare productionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Id.
   * @nullable
   */
  declare operationId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Realized Accounting Date.
   */
  declare realizedAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Is Operation Completed.
   * @nullable
   */
  declare isOperationCompleted?: NoYes | null;
  /**
   * Registered Hours.
   */
  declare registeredHours: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Error Cause.
   * @nullable
   */
  declare errorCause?: ProdErrorCause | null;
  /**
   * Is Cost Accounted.
   * @nullable
   */
  declare isCostAccounted?: NoYes | null;
  /**
   * Reported Error Inventory Quantity.
   */
  declare reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Job Ended.
   * @nullable
   */
  declare isJobEnded?: NoYes | null;

  constructor(_entityApi: ProductionRouteTransactionsApi<T>) {
    super(_entityApi);
  }
}

export interface ProductionRouteTransactionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  recordId: DeserializedType<T, 'Edm.Int64'>;
  operationNumber: DeserializedType<T, 'Edm.Int32'>;
  estimatedAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  scheduledFromTime: DeserializedType<T, 'Edm.Int32'>;
  jobProcessingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  estimatedAccountingVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  jobId?: DeserializedType<T, 'Edm.String'> | null;
  scheduledEndTime: DeserializedType<T, 'Edm.Int32'>;
  quantityCostCategoryUnitCost: DeserializedType<T, 'Edm.Decimal'>;
  hourlyCostCategoryRate: DeserializedType<T, 'Edm.Decimal'>;
  reportedGoodCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  realizedAccountingVoucherNumber?: DeserializedType<T, 'Edm.String'> | null;
  reportedGoodInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  routeCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  routeJobType?: RouteJobType | null;
  operationPriority?: RouteOprPriority | null;
  costAmount: DeserializedType<T, 'Edm.Decimal'>;
  operationsResourceGroupId: DeserializedType<T, 'Edm.Int64'>;
  reportedErrorCatchWeightQuantity: DeserializedType<T, 'Edm.Decimal'>;
  operationResourceId?: DeserializedType<T, 'Edm.String'> | null;
  productionUnitId?: DeserializedType<T, 'Edm.String'> | null;
  operationId?: DeserializedType<T, 'Edm.String'> | null;
  realizedAccountingDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  isOperationCompleted?: NoYes | null;
  registeredHours: DeserializedType<T, 'Edm.Decimal'>;
  errorCause?: ProdErrorCause | null;
  isCostAccounted?: NoYes | null;
  reportedErrorInventoryQuantity: DeserializedType<T, 'Edm.Decimal'>;
  isJobEnded?: NoYes | null;
}
