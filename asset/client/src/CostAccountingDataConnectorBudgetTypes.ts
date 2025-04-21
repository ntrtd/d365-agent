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
import type { CostAccountingDataConnectorBudgetTypesApi } from './CostAccountingDataConnectorBudgetTypesApi';

/**
 * This class represents the entity "CostAccountingDataConnectorBudgetTypes" of service "d365_metadata".
 */
export class CostAccountingDataConnectorBudgetTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorBudgetTypesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorBudgetTypes.
   */
  static override _entityName = 'CostAccountingDataConnectorBudgetTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorBudgetTypes entity.
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

  constructor(_entityApi: CostAccountingDataConnectorBudgetTypesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorBudgetTypesType<
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
