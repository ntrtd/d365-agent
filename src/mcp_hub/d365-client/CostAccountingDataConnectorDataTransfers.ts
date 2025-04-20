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
import type { CostAccountingDataConnectorDataTransfersApi } from './CostAccountingDataConnectorDataTransfersApi';

/**
 * This class represents the entity "CostAccountingDataConnectorDataTransfers" of service "d365_metadata".
 */
export class CostAccountingDataConnectorDataTransfers<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CostAccountingDataConnectorDataTransfersType<T>
{
  /**
   * Technical entity name for CostAccountingDataConnectorDataTransfers.
   */
  static override _entityName = 'CostAccountingDataConnectorDataTransfers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CostAccountingDataConnectorDataTransfers entity.
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
   * Transferred Entity Name.
   * @nullable
   */
  declare transferredEntityName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Total Number Of Entries.
   */
  declare totalNumberOfEntries: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: CostAccountingDataConnectorDataTransfersApi<T>) {
    super(_entityApi);
  }
}

export interface CostAccountingDataConnectorDataTransfersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataConnectorSystemInstanceSurrogateKey: DeserializedType<T, 'Edm.String'>;
  surrogateKey: DeserializedType<T, 'Edm.String'>;
  transferredEntityName?: DeserializedType<T, 'Edm.String'> | null;
  totalNumberOfEntries: DeserializedType<T, 'Edm.Int32'>;
}
