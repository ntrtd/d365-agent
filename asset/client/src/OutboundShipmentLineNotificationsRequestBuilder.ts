/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { OutboundShipmentLineNotifications } from './OutboundShipmentLineNotifications';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentLineNotifications} entity.
 */
export class OutboundShipmentLineNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentLineNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentLineNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentLineNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentLineNotifications<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentLineNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentLineNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentLineNotifications`.
   */
  create(
    entity: OutboundShipmentLineNotifications<T>
  ): CreateRequestBuilder<OutboundShipmentLineNotifications<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentLineNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentLineNotifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentLineNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundShipmentLineNotifications.outboundNotificationNumber}.
   * @param shipmentNumber Key property. See {@link OutboundShipmentLineNotifications.shipmentNumber}.
   * @param lineNumber Key property. See {@link OutboundShipmentLineNotifications.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentLineNotifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundNotificationNumber: DeserializedType<T, 'Edm.String'>,
    shipmentNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<OutboundShipmentLineNotifications<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentLineNotifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundNotificationNumber: outboundNotificationNumber,
        ShipmentNumber: shipmentNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentLineNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentLineNotifications`.
   */
  update(
    entity: OutboundShipmentLineNotifications<T>
  ): UpdateRequestBuilder<OutboundShipmentLineNotifications<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentLineNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentLineNotifications`.
   * @param dataAreaId Key property. See {@link OutboundShipmentLineNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundShipmentLineNotifications.outboundNotificationNumber}.
   * @param shipmentNumber Key property. See {@link OutboundShipmentLineNotifications.shipmentNumber}.
   * @param lineNumber Key property. See {@link OutboundShipmentLineNotifications.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentLineNotifications`.
   */
  delete(
    dataAreaId: string,
    outboundNotificationNumber: string,
    shipmentNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentLineNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentLineNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentLineNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentLineNotifications<T>
  ): DeleteRequestBuilder<OutboundShipmentLineNotifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundNotificationNumber?: string,
    shipmentNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<OutboundShipmentLineNotifications<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentLineNotifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentLineNotifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundNotificationNumber: outboundNotificationNumber!,
            ShipmentNumber: shipmentNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
