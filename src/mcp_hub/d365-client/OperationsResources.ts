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
import type { OperationsResourcesApi } from './OperationsResourcesApi';
import { CapacityUnit } from './CapacityUnit';
import { NoYes } from './NoYes';
import { WrkCtrType } from './WrkCtrType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  SensorOperationsResourceMappings,
  SensorOperationsResourceMappingsType
} from './SensorOperationsResourceMappings';

/**
 * This class represents the entity "OperationsResources" of service "d365_metadata".
 */
export class OperationsResources<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements OperationsResourcesType<T>
{
  /**
   * Technical entity name for OperationsResources.
   */
  static override _entityName = 'OperationsResources';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OperationsResources entity.
   */
  static _keys = ['dataAreaId', 'ResourceId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Resource Id.
   */
  declare resourceId: DeserializedType<T, 'Edm.String'>;
  /**
   * Capacity.
   */
  declare capacity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Wip Issue Ledger Dimension Display Value.
   * @nullable
   */
  declare wipIssueLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Wip Valuation Ledger Dimension Display Value.
   * @nullable
   */
  declare wipValuationLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Resource Name.
   * @nullable
   */
  declare resourceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Quantity Cost Category Id.
   * @nullable
   */
  declare quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Capacity Unit.
   * @nullable
   */
  declare capacityUnit?: CapacityUnit | null;
  /**
   * Resource Issue Ledger Dimension Display Value.
   * @nullable
   */
  declare resourceIssueLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Route Group Id.
   * @nullable
   */
  declare routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Bottleneck Resource.
   * @nullable
   */
  declare isBottleneckResource?: NoYes | null;
  /**
   * Default Operation Transit Time.
   */
  declare defaultOperationTransitTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Efficiency Percentage.
   */
  declare efficiencyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Operation Queue Time Before.
   */
  declare defaultOperationQueueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Resource Issue Offset Ledger Dimension Display Value.
   * @nullable
   */
  declare resourceIssueOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Operation Setup Time.
   */
  declare defaultOperationSetupTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Process Quantity.
   */
  declare defaultProcessQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operations Resource Type.
   * @nullable
   */
  declare operationsResourceType?: WrkCtrType | null;
  /**
   * Batch Transfer Quantity.
   */
  declare batchTransferQuantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Default Operation Time To Hours Conversion Factor.
   */
  declare defaultOperationTimeToHoursConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  /**
   * Default Operation Queue Time After.
   */
  declare defaultOperationQueueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Scrap Percentage.
   */
  declare scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Is Scheduled Using Finite Property.
   * @nullable
   */
  declare isScheduledUsingFiniteProperty?: NoYes | null;
  /**
   * Batch Capacity.
   */
  declare batchCapacity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Runtime Cost Category Id.
   * @nullable
   */
  declare runtimeCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Operation Scheduling Percentage.
   */
  declare operationSchedulingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Vendor Account Number.
   * @nullable
   */
  declare vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Setup Cost Category Id.
   * @nullable
   */
  declare setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Exclusive Resource.
   * @nullable
   */
  declare isExclusiveResource?: NoYes | null;
  /**
   * Resource Worker Personnel Number.
   * @nullable
   */
  declare resourceWorkerPersonnelNumber?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Has Finite Scheduling Capacity.
   * @nullable
   */
  declare hasFiniteSchedulingCapacity?: NoYes | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Operation Run Time.
   */
  declare defaultOperationRunTime: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Machine Not Responding Threshold Mins.
   */
  declare machineNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare wipValuationLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare wipIssueLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare resourceIssueOffsetLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare defaultDimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare resourceIssueLedgerDimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-many navigation property to the {@link SensorOperationsResourceMappings} entity.
   */
  declare sensorOperationsResourceMappings: SensorOperationsResourceMappings<T>[];

  constructor(_entityApi: OperationsResourcesApi<T>) {
    super(_entityApi);
  }
}

export interface OperationsResourcesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  resourceId: DeserializedType<T, 'Edm.String'>;
  capacity: DeserializedType<T, 'Edm.Decimal'>;
  wipIssueLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  wipValuationLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  resourceName?: DeserializedType<T, 'Edm.String'> | null;
  quantityCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  capacityUnit?: CapacityUnit | null;
  resourceIssueLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  routeGroupId?: DeserializedType<T, 'Edm.String'> | null;
  isBottleneckResource?: NoYes | null;
  defaultOperationTransitTime: DeserializedType<T, 'Edm.Decimal'>;
  efficiencyPercentage: DeserializedType<T, 'Edm.Decimal'>;
  defaultOperationQueueTimeBefore: DeserializedType<T, 'Edm.Decimal'>;
  resourceIssueOffsetLedgerDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultOperationSetupTime: DeserializedType<T, 'Edm.Decimal'>;
  defaultProcessQuantity: DeserializedType<T, 'Edm.Decimal'>;
  operationsResourceType?: WrkCtrType | null;
  batchTransferQuantity: DeserializedType<T, 'Edm.Decimal'>;
  defaultOperationTimeToHoursConversionFactor: DeserializedType<
    T,
    'Edm.Decimal'
  >;
  defaultOperationQueueTimeAfter: DeserializedType<T, 'Edm.Decimal'>;
  scrapPercentage: DeserializedType<T, 'Edm.Decimal'>;
  isScheduledUsingFiniteProperty?: NoYes | null;
  batchCapacity: DeserializedType<T, 'Edm.Decimal'>;
  runtimeCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  operationSchedulingPercentage: DeserializedType<T, 'Edm.Decimal'>;
  vendorAccountNumber?: DeserializedType<T, 'Edm.String'> | null;
  setupCostCategoryId?: DeserializedType<T, 'Edm.String'> | null;
  isExclusiveResource?: NoYes | null;
  resourceWorkerPersonnelNumber?: DeserializedType<T, 'Edm.String'> | null;
  hasFiniteSchedulingCapacity?: NoYes | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  defaultOperationRunTime: DeserializedType<T, 'Edm.Decimal'>;
  machineNotRespondingThresholdMins: DeserializedType<T, 'Edm.Int32'>;
  wipValuationLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  wipIssueLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  resourceIssueOffsetLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  defaultDimensionSet?: DimensionSetsType<T> | null;
  resourceIssueLedgerDimensionCombination?: DimensionCombinationsType<T> | null;
  sensorOperationsResourceMappings: SensorOperationsResourceMappingsType<T>[];
}
