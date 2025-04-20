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
import { CompensationEvents } from './CompensationEvents';

/**
 * Request builder class for operations supported on the {@link CompensationEvents} entity.
 */
export class CompensationEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationEvents<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationEvents` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationEvents` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationEvents<T>, T> {
    return new GetAllRequestBuilder<CompensationEvents<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationEvents`.
   */
  create(
    entity: CompensationEvents<T>
  ): CreateRequestBuilder<CompensationEvents<T>, T> {
    return new CreateRequestBuilder<CompensationEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationEvents` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationEvents.dataAreaId}.
   * @param eventId Key property. See {@link CompensationEvents.eventId}.
   * @returns A request builder for creating requests to retrieve one `CompensationEvents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    eventId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationEvents<T>, T> {
    return new GetByKeyRequestBuilder<CompensationEvents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EventId: eventId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationEvents`.
   */
  update(
    entity: CompensationEvents<T>
  ): UpdateRequestBuilder<CompensationEvents<T>, T> {
    return new UpdateRequestBuilder<CompensationEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationEvents`.
   * @param dataAreaId Key property. See {@link CompensationEvents.dataAreaId}.
   * @param eventId Key property. See {@link CompensationEvents.eventId}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEvents`.
   */
  delete(
    dataAreaId: string,
    eventId: string
  ): DeleteRequestBuilder<CompensationEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationEvents` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationEvents<T>
  ): DeleteRequestBuilder<CompensationEvents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    eventId?: string
  ): DeleteRequestBuilder<CompensationEvents<T>, T> {
    return new DeleteRequestBuilder<CompensationEvents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationEvents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EventId: eventId!
          }
    );
  }
}
