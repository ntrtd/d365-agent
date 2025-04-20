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
import type { CostAccountingDataConnectorCostObjectDimensionMembersApi } from './CostAccountingDataConnectorCostObjectDimensionMembersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorCostObjectDimensionMembers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorCostObjectDimensionMembers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorCostObjectDimensionMembersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorCostObjectDimensionMembers.
   */
  static override _entityName =
    'CostAccountingDataConnectorCostObjectDimensionMembers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorCostObjectDimensionMembers entity.
   */
  static _keys = [
    'DataConnectorSystemInstanceSurrogateKey',
    'DataConnectorDimensionName',
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
   * Data Connector Dimension Name.
   */
  declare dataConnectorDimensionName: DeserializedType<T, 'Edm.String'>;
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

  constructor(
    _entityApi: CostAccountingDataConnectorCostObjectDimensionMembersApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorCostObjectDimensionMembersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  dataConnectorDimensionName: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
}
