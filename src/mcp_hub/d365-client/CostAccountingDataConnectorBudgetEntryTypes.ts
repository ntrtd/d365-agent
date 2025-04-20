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
import type { CostAccountingDataConnectorBudgetEntryTypesApi } from './CostAccountingDataConnectorBudgetEntryTypesApi';

/**
 * This class represents the entity "CostAccountingDataConnectorBudgetEntryTypes" of service "d365_metadata".
 */
export class CostAccountingDataConnectorBudgetEntryTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorBudgetEntryTypesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorBudgetEntryTypes.
   */
  static override _entityName = 'CostAccountingDataConnectorBudgetEntryTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorBudgetEntryTypes entity.
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
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Surrogate Key.
   * @nullable
   */
  declare surrogateKey?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostAccountingDataConnectorBudgetEntryTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorBudgetEntryTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  surrogateKey?: DeserializedType<T, 'Edm.String'> | null;
}
