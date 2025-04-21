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
import type { CostAccountingTransferStatisticalMeasureBalancesApi } from './CostAccountingTransferStatisticalMeasureBalancesApi';

/**
 * This class represents the entity "CostAccountingTransferStatisticalMeasureBalances" of service "d365_metadata".
 */
export class CostAccountingTransferStatisticalMeasureBalances<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingTransferStatisticalMeasureBalancesType<T>
{
  /**
   * Technical entity name for CostAccountingTransferStatisticalMeasureBalances.
   */
  static override _entityName =
    'CostAccountingTransferStatisticalMeasureBalances';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingTransferStatisticalMeasureBalances entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'DataConnectorStatisticalMeasureConfigurationName',
    'PeriodStartDate',
    'PeriodEndDate',
    'StartDate',
    'EndDate'
  ];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Statistical Measure Configuration Name.
   */
  declare dataConnectorStatisticalMeasureConfigurationName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Period Start Date.
   */
  declare periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Period End Date.
   */
  declare periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Data Connector Statistical Measure Configuration Surrogate Key.
   * @nullable
   */
  declare dataConnectorStatisticalMeasureConfigurationSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: CostAccountingTransferStatisticalMeasureBalancesApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingTransferStatisticalMeasureBalancesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorStatisticalMeasureConfigurationName: DeserializedType<
    T,
    'Edm.String'
  >;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataConnectorStatisticalMeasureConfigurationSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
