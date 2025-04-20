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
import { ConfigurationLedgers } from './ConfigurationLedgers';

/**
 * Request builder class for operations supported on the {@link ConfigurationLedgers} entity.
 */
export class ConfigurationLedgersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ConfigurationLedgers<T>, T> {
  /**
   * Returns a request builder for querying all `ConfigurationLedgers` entities.
   * @returns A request builder for creating requests to retrieve all `ConfigurationLedgers` entities.
   */
  getAll(): GetAllRequestBuilder<ConfigurationLedgers<T>, T> {
    return new GetAllRequestBuilder<ConfigurationLedgers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ConfigurationLedgers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ConfigurationLedgers`.
   */
  create(
    entity: ConfigurationLedgers<T>
  ): CreateRequestBuilder<ConfigurationLedgers<T>, T> {
    return new CreateRequestBuilder<ConfigurationLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ConfigurationLedgers` entity based on its keys.
   * @param name Key property. See {@link ConfigurationLedgers.name}.
   * @returns A request builder for creating requests to retrieve one `ConfigurationLedgers` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ConfigurationLedgers<T>, T> {
    return new GetByKeyRequestBuilder<ConfigurationLedgers<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ConfigurationLedgers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ConfigurationLedgers`.
   */
  update(
    entity: ConfigurationLedgers<T>
  ): UpdateRequestBuilder<ConfigurationLedgers<T>, T> {
    return new UpdateRequestBuilder<ConfigurationLedgers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ConfigurationLedgers`.
   * @param name Key property. See {@link ConfigurationLedgers.name}.
   * @returns A request builder for creating requests that delete an entity of type `ConfigurationLedgers`.
   */
  delete(name: string): DeleteRequestBuilder<ConfigurationLedgers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ConfigurationLedgers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ConfigurationLedgers` by taking the entity as a parameter.
   */
  delete(
    entity: ConfigurationLedgers<T>
  ): DeleteRequestBuilder<ConfigurationLedgers<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<ConfigurationLedgers<T>, T> {
    return new DeleteRequestBuilder<ConfigurationLedgers<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ConfigurationLedgers
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
