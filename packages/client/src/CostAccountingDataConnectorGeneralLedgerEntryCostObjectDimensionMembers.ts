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
import type { CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi } from './CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements
    CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers.
   */
  static override _entityName =
    'CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembers entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'GeneralLedgerEntrySourceIdentifier',
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
   * General Ledger Entry Source Identifier.
   */
  declare generalLedgerEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>;
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
    _entityApi: CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorGeneralLedgerEntryCostObjectDimensionMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  generalLedgerEntrySourceIdentifier: DeserializedType<T, 'Edm.String'>;
  dataConnectorCostObjectDimensionName: DeserializedType<T, 'Edm.String'>;
  costObjectDimensionMemberName: DeserializedType<T, 'Edm.String'>;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
