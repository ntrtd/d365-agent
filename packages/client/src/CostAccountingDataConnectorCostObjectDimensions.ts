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
import type { CostAccountingDataConnectorCostObjectDimensionsApi } from './CostAccountingDataConnectorCostObjectDimensionsApi';
import { NoYes } from './NoYes';
import {
  CostAccountingDataConnectorSystemInstances,
  CostAccountingDataConnectorSystemInstancesType
} from './CostAccountingDataConnectorSystemInstances';

/**
 * This class represents the entity "CostAccountingDataConnectorCostObjectDimensions" of service "d365_metadata".
 */
export class CostAccountingDataConnectorCostObjectDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorCostObjectDimensionsType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorCostObjectDimensions.
   */
  static override _entityName =
    'CostAccountingDataConnectorCostObjectDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorCostObjectDimensions entity.
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
   * Must Transfer Dimension.
   * @nullable
   */
  declare mustTransferDimension?: NoYes | null;
  /**
   * Data Connector Data Transfer Surrogate Key.
   * @nullable
   */
  declare dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Must Transfer Dimension Members.
   * @nullable
   */
  declare mustTransferDimensionMembers?: NoYes | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link CostAccountingDataConnectorSystemInstances} entity.
   */
  declare dataConnectorSystemInstanceEntity?: CostAccountingDataConnectorSystemInstances<T> | null;

  constructor(
    _entityApi: CostAccountingDataConnectorCostObjectDimensionsApi<T>
  ) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorCostObjectDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  mustTransferDimension?: NoYes | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  mustTransferDimensionMembers?: NoYes | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorSystemInstanceEntity?: CostAccountingDataConnectorSystemInstancesType<T> | null;
}
