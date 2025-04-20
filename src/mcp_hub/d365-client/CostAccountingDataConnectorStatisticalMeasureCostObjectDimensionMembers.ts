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
import type { CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi } from './CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers.
   */
  static override _entityName =
    'CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembers entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'DataConnectorDataTransferSurrogateKey',
    'DataConnectorStatisticalMeasurePeriodStartDate',
    'DataConnectorStatisticalMeasurePeriodEndDate',
    'DataConnectorStatisticalMeasureName',
    'DataConnectorStatisticalMeasureSourceIdentifier',
    'DataConnectorCostObjectDimensionName',
    'CostObjectDimensionMemberName'
  ];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Data Transfer Surrogate Key.
   */
  declare dataConnectorDataTransferSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Statistical Measure Period Start Date.
   */
  declare dataConnectorStatisticalMeasurePeriodStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Data Connector Statistical Measure Period End Date.
   */
  declare dataConnectorStatisticalMeasurePeriodEndDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Data Connector Statistical Measure Name.
   */
  declare dataConnectorStatisticalMeasureName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Statistical Measure Source Identifier.
   */
  declare dataConnectorStatisticalMeasureSourceIdentifier: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Cost Object Dimension Name.
   */
  declare dataConnectorCostObjectDimensionName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Cost Object Dimension Member Name.
   */
  declare costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;

  constructor(
    _entityApi: CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorStatisticalMeasureCostObjectDimensionMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorDataTransferSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorStatisticalMeasurePeriodStartDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dataConnectorStatisticalMeasurePeriodEndDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  dataConnectorStatisticalMeasureName: DeserializedType<T, 'Edm.String'>;
  dataConnectorStatisticalMeasureSourceIdentifier: DeserializedType<
    T,
    'Edm.String'
  >;
  dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>;
  costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;
}
