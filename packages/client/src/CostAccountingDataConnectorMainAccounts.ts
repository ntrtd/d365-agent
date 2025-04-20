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
import type { CostAccountingDataConnectorMainAccountsApi } from './CostAccountingDataConnectorMainAccountsApi';

/**
 * This class represents the entity "CostAccountingDataConnectorMainAccounts" of service "d365_metadata".
 */
export class CostAccountingDataConnectorMainAccounts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorMainAccountsType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorMainAccounts.
   */
  static override _entityName = 'CostAccountingDataConnectorMainAccounts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorMainAccounts entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'DataConnectorChartOfAccountsName',
    'SurrogateKey'
  ];
  /**
   * Data Connector System Instance Surrogate Key.
   */
  declare dataConnectorSystemInstanceSurrogateKey: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Data Connector Chart Of Accounts Name.
   */
  declare dataConnectorChartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  /**
   * Surrogate Key.
   */
  declare surrogateKey: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Connector Main Account Type Name.
   * @nullable
   */
  declare dataConnectorMainAccountTypeName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: CostAccountingDataConnectorMainAccountsApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorMainAccountsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorChartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorMainAccountTypeName?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
