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
import type { CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi } from './CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers.
   */
  static override _entityName =
    'CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembers entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'BudgetEntrySourceIdentifier',
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
   * Budget Entry Source Identifier.
   */
  declare budgetEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>;
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
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(
    _entityApi: CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorBudgetEntryCostObjectDimensionMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  budgetEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>;
  dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>;
  costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
