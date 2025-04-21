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
import { OperationsNotifications } from './OperationsNotifications';

/**
 * Request builder class for operations supported on the {@link OperationsNotifications} entity.
 */
export class OperationsNotificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<OperationsNotifications<T>, T> {
  /**
   * Returns a request builder for querying all `OperationsNotifications` entities.
   * @returns A request builder for creating requests to retrieve all `OperationsNotifications` entities.
   */
  getAll(): GetAllRequestBuilder<OperationsNotifications<T>, T> {
    return new GetAllRequestBuilder<OperationsNotifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `OperationsNotifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `OperationsNotifications`.
   */
  create(
    entity: OperationsNotifications<T>
  ): CreateRequestBuilder<OperationsNotifications<T>, T> {
    return new CreateRequestBuilder<OperationsNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `OperationsNotifications` entity based on its keys.
   * @param id Key property. See {@link OperationsNotifications.id}.
   * @returns A request builder for creating requests to retrieve one `OperationsNotifications` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<OperationsNotifications<T>, T> {
    return new GetByKeyRequestBuilder<OperationsNotifications<T>, T>(
      this.entityApi,
      { Id: id }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `OperationsNotifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `OperationsNotifications`.
   */
  update(
    entity: OperationsNotifications<T>
  ): UpdateRequestBuilder<OperationsNotifications<T>, T> {
    return new UpdateRequestBuilder<OperationsNotifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `OperationsNotifications`.
   * @param id Key property. See {@link OperationsNotifications.id}.
   * @returns A request builder for creating requests that delete an entity of type `OperationsNotifications`.
   */
  delete(id: string): DeleteRequestBuilder<OperationsNotifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `OperationsNotifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `OperationsNotifications` by taking the entity as a parameter.
   */
  delete(
    entity: OperationsNotifications<T>
  ): DeleteRequestBuilder<OperationsNotifications<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<OperationsNotifications<T>, T> {
    return new DeleteRequestBuilder<OperationsNotifications<T>, T>(
      this.entityApi,
      idOrEntity instanceof OperationsNotifications
        ? idOrEntity
        : { Id: idOrEntity! }
    );
  }
}
