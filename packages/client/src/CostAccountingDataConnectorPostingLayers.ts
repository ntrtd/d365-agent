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
import type { CostAccountingDataConnectorPostingLayersApi } from './CostAccountingDataConnectorPostingLayersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorPostingLayers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorPostingLayers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorPostingLayersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorPostingLayers.
   */
  static override _entityName = 'CostAccountingDataConnectorPostingLayers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorPostingLayers entity.
   */
  static _keys = ['DataConnectorSystemInstanceAX', 'SurrogateKey'];
  /**
   * Data Connector System Instance Ax.
   */
  declare dataConnectorSystemInstanceAx: DeserializedType<T, 'Edm.Int64'>;
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
  /**
   * Data Connector System Instance Surrogate Key.
   * @nullable
   */
  declare dataConnectorSystemInstanceSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: CostAccountingDataConnectorPostingLayersApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorPostingLayersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceAx: DeserializedType<T, 'Edm.Int64'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dataConnectorDataTransferSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dataConnectorSystemInstanceSurrogateKey?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}
