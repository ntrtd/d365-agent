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
import type { OutboundShipmentOrderRequestStatusApi } from './OutboundShipmentOrderRequestStatusApi';
import { WhsewShipmentOrderRequestStatus } from './WhsewShipmentOrderRequestStatus';

/**
 * This class represents the entity "OutboundShipmentOrderRequestStatus" of service "d365_metadata".
 */
export class OutboundShipmentOrderRequestStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements OutboundShipmentOrderRequestStatusType<T>
{
  /**
   * Technical entity name for OutboundShipmentOrderRequestStatus.
   */
  static override _entityName = 'OutboundShipmentOrderRequestStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the OutboundShipmentOrderRequestStatus entity.
   */
  static _keys = ['dataAreaId', 'OutboundShipmentOrderRequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Outbound Shipment Order Request Id.
   */
  declare outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  /**
   * Request Status.
   * @nullable
   */
  declare requestStatus?: WhsewShipmentOrderRequestStatus | null;
  /**
   * Response Message.
   * @nullable
   */
  declare responseMessage?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: OutboundShipmentOrderRequestStatusApi<T>) {
    super(_entityApi);
  }
}

export interface OutboundShipmentOrderRequestStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  outboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  requestStatus?: WhsewShipmentOrderRequestStatus | null;
  responseMessage?: DeserializedType<T, 'Edm.String'> | null;
}
