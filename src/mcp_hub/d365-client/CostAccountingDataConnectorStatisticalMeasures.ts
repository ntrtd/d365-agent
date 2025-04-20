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
import type { CostAccountingDataConnectorStatisticalMeasuresApi } from './CostAccountingDataConnectorStatisticalMeasuresApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostAccountingDataConnectorStatisticalMeasures" of service "d365_metadata".
 */
export class CostAccountingDataConnectorStatisticalMeasures<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorStatisticalMeasuresType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorStatisticalMeasures.
   */
  static override _entityName =
    'CostAccountingDataConnectorStatisticalMeasures';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorStatisticalMeasures entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'DataConnectorStatisticalMeasureConfigurationName',
    'PeriodStartDate',
    'PeriodEndDate',
    'SourceIdentifier'
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
   * Source Identifier.
   */
  declare sourceIdentifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Is Expired.
   * @nullable
   */
  declare isExpired?: NoYes | null;
  /**
   * Magnitude.
   */
  declare magnitude: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Start Date.
   */
  declare startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * End Date.
   */
  declare endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;

  constructor(
    _entityApi: CostAccountingDataConnectorStatisticalMeasuresApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorStatisticalMeasuresType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorStatisticalMeasureConfigurationName: DeserializedType<
    T,
    'Edm.String'
  >;
  periodStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  periodEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sourceIdentifier: DeserializedType<T, 'Edm.String'>;
  isExpired?: NoYes | null;
  magnitude: DeserializedType<T, 'Edm.Decimal'>;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  startDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  endDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
