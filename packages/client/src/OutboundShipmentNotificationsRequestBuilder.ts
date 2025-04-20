/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { OutboundShipmentNotifications } from './OutboundShipmentNotifications';

/**
 * Request builder class for operations supported on the {@link OutboundShipmentNotifications} entity.
 */
export class OutboundShipmentNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundShipmentNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundShipmentNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundShipmentNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundShipmentNotifications<T>, T> {
    return new GetAllRequestBuilder<OutboundShipmentNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundShipmentNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundShipmentNotifications`.
   */
  create(
    entity: OutboundShipmentNotifications<T>
  ): CreateRequestBuilder<OutboundShipmentNotifications<T>, T> {
    return new CreateRequestBuilder<OutboundShipmentNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundShipmentNotifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundShipmentNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundShipmentNotifications.outboundNotificationNumber}.
   * @param shipmentNumber Key property. See {@link OutboundShipmentNotifications.shipmentNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundShipmentNotifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundNotificationNumber: DeserializedType<T, 'Edm.String'>,
    shipmentNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundShipmentNotifications<T>, T> {
    return new GetByKeyRequestBuilder<OutboundShipmentNotifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundNotificationNumber: outboundNotificationNumber,
        ShipmentNumber: shipmentNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundShipmentNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundShipmentNotifications`.
   */
  update(
    entity: OutboundShipmentNotifications<T>
  ): UpdateRequestBuilder<OutboundShipmentNotifications<T>, T> {
    return new UpdateRequestBuilder<OutboundShipmentNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentNotifications`.
   * @param dataAreaId Key property. See {@link OutboundShipmentNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundShipmentNotifications.outboundNotificationNumber}.
   * @param shipmentNumber Key property. See {@link OutboundShipmentNotifications.shipmentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentNotifications`.
   */
  delete(
    dataAreaId: string,
    outboundNotificationNumber: string,
    shipmentNumber: string
  ): DeleteRequestBuilder<OutboundShipmentNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundShipmentNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundShipmentNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundShipmentNotifications<T>
  ): DeleteRequestBuilder<OutboundShipmentNotifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundNotificationNumber?: string,
    shipmentNumber?: string
  ): DeleteRequestBuilder<OutboundShipmentNotifications<T>, T> {
    return new DeleteRequestBuilder<OutboundShipmentNotifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundShipmentNotifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundNotificationNumber: outboundNotificationNumber!,
            ShipmentNumber: shipmentNumber!
          }
    );
  }
}
