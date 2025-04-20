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
import { OutboundNotifications } from './OutboundNotifications';

/**
 * Request builder class for operations supported on the {@link OutboundNotifications} entity.
 */
export class OutboundNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OutboundNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `OutboundNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `OutboundNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<OutboundNotifications<T>, T> {
    return new GetAllRequestBuilder<OutboundNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OutboundNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OutboundNotifications`.
   */
  create(
    entity: OutboundNotifications<T>
  ): CreateRequestBuilder<OutboundNotifications<T>, T> {
    return new CreateRequestBuilder<OutboundNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OutboundNotifications` entity based on its keys.
   * @param dataAreaId Key property. See {@link OutboundNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundNotifications.outboundNotificationNumber}.
   * @returns A request builder for creating requests to retrieve one `OutboundNotifications` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    outboundNotificationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<OutboundNotifications<T>, T> {
    return new GetByKeyRequestBuilder<OutboundNotifications<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OutboundNotificationNumber: outboundNotificationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OutboundNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OutboundNotifications`.
   */
  update(
    entity: OutboundNotifications<T>
  ): UpdateRequestBuilder<OutboundNotifications<T>, T> {
    return new UpdateRequestBuilder<OutboundNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OutboundNotifications`.
   * @param dataAreaId Key property. See {@link OutboundNotifications.dataAreaId}.
   * @param outboundNotificationNumber Key property. See {@link OutboundNotifications.outboundNotificationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `OutboundNotifications`.
   */
  delete(
    dataAreaId: string,
    outboundNotificationNumber: string
  ): DeleteRequestBuilder<OutboundNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OutboundNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OutboundNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: OutboundNotifications<T>
  ): DeleteRequestBuilder<OutboundNotifications<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    outboundNotificationNumber?: string
  ): DeleteRequestBuilder<OutboundNotifications<T>, T> {
    return new DeleteRequestBuilder<OutboundNotifications<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof OutboundNotifications
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OutboundNotificationNumber: outboundNotificationNumber!
          }
    );
  }
}
