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
import type { CostAccountingDataConnectorLegalEntitiesApi } from './CostAccountingDataConnectorLegalEntitiesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CostAccountingDataConnectorLegalEntities" of service "d365_metadata".
 */
export class CostAccountingDataConnectorLegalEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorLegalEntitiesType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorLegalEntities.
   */
  static override _entityName = 'CostAccountingDataConnectorLegalEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorLegalEntities entity.
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
   * Transfer Budget Entries From Date.
   */
  declare transferBudgetEntriesFromDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Must Transfer Budget Entries.
   * @nullable
   */
  declare mustTransferBudgetEntries?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Transfer Budget Entries To Date.
   */
  declare transferBudgetEntriesToDate: DeserializedType<
    T,
    'Edm.DateTimeOffset'
  >;

  constructor(_entityApi: CostAccountingDataConnectorLegalEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorLegalEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  transferBudgetEntriesFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mustTransferBudgetEntries?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  transferBudgetEntriesToDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
}
