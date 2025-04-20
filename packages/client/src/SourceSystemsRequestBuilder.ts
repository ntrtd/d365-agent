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
import { SourceSystems } from './SourceSystems';

/**
 * Request builder class for operations supported on the {@link SourceSystems} entity.
 */
export class SourceSystemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SourceSystems<T>, T> {
  /**
   * Returns a request builder for querying all `SourceSystems` entities.
   * @returns A request builder for creating requests to retrieve all `SourceSystems` entities.
   */
  getAll(): GetAllRequestBuilder<SourceSystems<T>, T> {
    return new GetAllRequestBuilder<SourceSystems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SourceSystems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SourceSystems`.
   */
  create(entity: SourceSystems<T>): CreateRequestBuilder<SourceSystems<T>, T> {
    return new CreateRequestBuilder<SourceSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SourceSystems` entity based on its keys.
   * @param name Key property. See {@link SourceSystems.name}.
   * @returns A request builder for creating requests to retrieve one `SourceSystems` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SourceSystems<T>, T> {
    return new GetByKeyRequestBuilder<SourceSystems<T>, T>(this.entityApi, {
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SourceSystems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SourceSystems`.
   */
  update(entity: SourceSystems<T>): UpdateRequestBuilder<SourceSystems<T>, T> {
    return new UpdateRequestBuilder<SourceSystems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SourceSystems`.
   * @param name Key property. See {@link SourceSystems.name}.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystems`.
   */
  delete(name: string): DeleteRequestBuilder<SourceSystems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SourceSystems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SourceSystems` by taking the entity as a parameter.
   */
  delete(entity: SourceSystems<T>): DeleteRequestBuilder<SourceSystems<T>, T>;
  delete(nameOrEntity: any): DeleteRequestBuilder<SourceSystems<T>, T> {
    return new DeleteRequestBuilder<SourceSystems<T>, T>(
      this.entityApi,
      nameOrEntity instanceof SourceSystems
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
