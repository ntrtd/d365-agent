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
import type { InboundShipmentOrderExternalOriginsApi } from './InboundShipmentOrderExternalOriginsApi';

/**
 * This class represents the entity "InboundShipmentOrderExternalOrigins" of service "d365_metadata".
 */
export class InboundShipmentOrderExternalOrigins<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderExternalOriginsType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderExternalOrigins.
   */
  static override _entityName = 'InboundShipmentOrderExternalOrigins';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderExternalOrigins entity.
   */
  static _keys = [];
  /**
   * Inbound Shipment Order External Origin Id.
   * @nullable
   */
  declare inboundShipmentOrderExternalOriginId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Consigner Reference.
   * @nullable
   */
  declare consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Data Area Id.
   * @nullable
   */
  declare dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * External Warehouse Management System Id.
   * @nullable
   */
  declare externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * External Warehouse Id.
   * @nullable
   */
  declare externalWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Source System Order Type.
   * @nullable
   */
  declare sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: InboundShipmentOrderExternalOriginsApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderExternalOriginsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  inboundShipmentOrderExternalOriginId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  consignerReference?: DeserializedType<T, 'Edm.String'> | null;
  dataAreaId?: DeserializedType<T, 'Edm.String'> | null;
  externalWarehouseManagementSystemId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  externalWarehouseId?: DeserializedType<T, 'Edm.String'> | null;
  sourceSystemOrderType?: DeserializedType<T, 'Edm.String'> | null;
}
