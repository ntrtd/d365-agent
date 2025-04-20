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
import type { InboundShipmentOrderRequestStatusApi } from './InboundShipmentOrderRequestStatusApi';
import { WhsewShipmentOrderRequestStatus } from './WhsewShipmentOrderRequestStatus';

/**
 * This class represents the entity "InboundShipmentOrderRequestStatus" of service "d365_metadata".
 */
export class InboundShipmentOrderRequestStatus<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements InboundShipmentOrderRequestStatusType<T>
{
  /**
   * Technical entity name for InboundShipmentOrderRequestStatus.
   */
  static override _entityName = 'InboundShipmentOrderRequestStatus';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the InboundShipmentOrderRequestStatus entity.
   */
  static _keys = ['dataAreaId', 'InboundShipmentOrderRequestId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Inbound Shipment Order Request Id.
   */
  declare inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: InboundShipmentOrderRequestStatusApi<T>) {
    super(_entityApi);
  }
}

export interface InboundShipmentOrderRequestStatusType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  inboundShipmentOrderRequestId: DeserializedType<T, 'Edm.String'>;
  requestStatus?: WhsewShipmentOrderRequestStatus | null;
  responseMessage?: DeserializedType<T, 'Edm.String'> | null;
}
