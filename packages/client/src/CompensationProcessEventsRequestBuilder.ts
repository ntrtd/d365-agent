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
import { CompensationProcessEvents } from './CompensationProcessEvents';

/**
 * Request builder class for operations supported on the {@link CompensationProcessEvents} entity.
 */
export class CompensationProcessEventsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationProcessEvents<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationProcessEvents` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationProcessEvents` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationProcessEvents<T>, T> {
    return new GetAllRequestBuilder<CompensationProcessEvents<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationProcessEvents` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationProcessEvents`.
   */
  create(
    entity: CompensationProcessEvents<T>
  ): CreateRequestBuilder<CompensationProcessEvents<T>, T> {
    return new CreateRequestBuilder<CompensationProcessEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationProcessEvents` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationProcessEvents.dataAreaId}.
   * @param process Key property. See {@link CompensationProcessEvents.process}.
   * @returns A request builder for creating requests to retrieve one `CompensationProcessEvents` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    process: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationProcessEvents<T>, T> {
    return new GetByKeyRequestBuilder<CompensationProcessEvents<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Process: process
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationProcessEvents`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationProcessEvents`.
   */
  update(
    entity: CompensationProcessEvents<T>
  ): UpdateRequestBuilder<CompensationProcessEvents<T>, T> {
    return new UpdateRequestBuilder<CompensationProcessEvents<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationProcessEvents`.
   * @param dataAreaId Key property. See {@link CompensationProcessEvents.dataAreaId}.
   * @param process Key property. See {@link CompensationProcessEvents.process}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationProcessEvents`.
   */
  delete(
    dataAreaId: string,
    process: string
  ): DeleteRequestBuilder<CompensationProcessEvents<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationProcessEvents`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationProcessEvents` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationProcessEvents<T>
  ): DeleteRequestBuilder<CompensationProcessEvents<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    process?: string
  ): DeleteRequestBuilder<CompensationProcessEvents<T>, T> {
    return new DeleteRequestBuilder<CompensationProcessEvents<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationProcessEvents
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Process: process!
          }
    );
  }
}
