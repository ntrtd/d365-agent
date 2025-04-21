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
import type { CostAccountingDataConnectorStatisticalMeasureConfigurationsApi } from './CostAccountingDataConnectorStatisticalMeasureConfigurationsApi';

/**
 * This class represents the entity "CostAccountingDataConnectorStatisticalMeasureConfigurations" of service "d365_metadata".
 */
export class CostAccountingDataConnectorStatisticalMeasureConfigurations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorStatisticalMeasureConfigurationsType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorStatisticalMeasureConfigurations.
   */
  static override _entityName =
    'CostAccountingDataConnectorStatisticalMeasureConfigurations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorStatisticalMeasureConfigurations entity.
   */
  static _keys = ['DataConnectorSystemInstanceSurrogateKey', 'Name'];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Surrogate Key.
   * @nullable
   */
  declare surrogateKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: CostAccountingDataConnectorStatisticalMeasureConfigurationsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorStatisticalMeasureConfigurationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  surrogateKey?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
