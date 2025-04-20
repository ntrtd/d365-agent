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
import type { CostAccountingDataConnectorFiscalPeriodTypesApi } from './CostAccountingDataConnectorFiscalPeriodTypesApi';

/**
 * This class represents the entity "CostAccountingDataConnectorFiscalPeriodTypes" of service "d365_metadata".
 */
export class CostAccountingDataConnectorFiscalPeriodTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorFiscalPeriodTypesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorFiscalPeriodTypes.
   */
  static override _entityName = 'CostAccountingDataConnectorFiscalPeriodTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorFiscalPeriodTypes entity.
   */
  static _keys = ['DataConnectorSystemInstanceSurrogateKey', 'SurrogateKey'];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Surrogate Key.
   */
  declare surrogateKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CostAccountingDataConnectorFiscalPeriodTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorFiscalPeriodTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
