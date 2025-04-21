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
import { ServerClusterConfigurations } from './ServerClusterConfigurations';

/**
 * Request builder class for operations supported on the {@link ServerClusterConfigurations} entity.
 */
export class ServerClusterConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServerClusterConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `ServerClusterConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `ServerClusterConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<ServerClusterConfigurations<T>, T> {
    return new GetAllRequestBuilder<ServerClusterConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServerClusterConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServerClusterConfigurations`.
   */
  create(
    entity: ServerClusterConfigurations<T>
  ): CreateRequestBuilder<ServerClusterConfigurations<T>, T> {
    return new CreateRequestBuilder<ServerClusterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServerClusterConfigurations` entity based on its keys.
   * @param name Key property. See {@link ServerClusterConfigurations.name}.
   * @returns A request builder for creating requests to retrieve one `ServerClusterConfigurations` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServerClusterConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<ServerClusterConfigurations<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServerClusterConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServerClusterConfigurations`.
   */
  update(
    entity: ServerClusterConfigurations<T>
  ): UpdateRequestBuilder<ServerClusterConfigurations<T>, T> {
    return new UpdateRequestBuilder<ServerClusterConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServerClusterConfigurations`.
   * @param name Key property. See {@link ServerClusterConfigurations.name}.
   * @returns A request builder for creating requests that delete an entity of type `ServerClusterConfigurations`.
   */
  delete(name: string): DeleteRequestBuilder<ServerClusterConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServerClusterConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServerClusterConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: ServerClusterConfigurations<T>
  ): DeleteRequestBuilder<ServerClusterConfigurations<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<ServerClusterConfigurations<T>, T> {
    return new DeleteRequestBuilder<ServerClusterConfigurations<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ServerClusterConfigurations
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
