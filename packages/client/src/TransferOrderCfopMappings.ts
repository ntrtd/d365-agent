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
import type { TransferOrderCfopMappingsApi } from './TransferOrderCfopMappingsApi';

/**
 * This class represents the entity "TransferOrderCFOPMappings" of service "d365_metadata".
 */
export class TransferOrderCfopMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransferOrderCfopMappingsType<T>
{
  /**
   * Technical entity name for TransferOrderCfopMappings.
   */
  static override _entityName = 'TransferOrderCFOPMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransferOrderCfopMappings entity.
   */
  static _keys = ['dataAreaId', 'ShipmentCFOP'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Shipment Cfop.
   */
  declare shipmentCfop: DeserializedType<T, 'Edm.String'>;
  /**
   * Receive Cfop.
   * @nullable
   */
  declare receiveCfop?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransferOrderCfopMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface TransferOrderCfopMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  shipmentCfop: DeserializedType<T, 'Edm.String'>;
  receiveCfop?: DeserializedType<T, 'Edm.String'> | null;
}
