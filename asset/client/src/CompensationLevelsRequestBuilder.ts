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
import { CompensationLevels } from './CompensationLevels';

/**
 * Request builder class for operations supported on the {@link CompensationLevels} entity.
 */
export class CompensationLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationLevels<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationLevels` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationLevels` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationLevels<T>, T> {
    return new GetAllRequestBuilder<CompensationLevels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CompensationLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationLevels`.
   */
  create(
    entity: CompensationLevels<T>
  ): CreateRequestBuilder<CompensationLevels<T>, T> {
    return new CreateRequestBuilder<CompensationLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationLevels` entity based on its keys.
   * @param level Key property. See {@link CompensationLevels.level}.
   * @returns A request builder for creating requests to retrieve one `CompensationLevels` entity based on its keys.
   */
  getByKey(
    level: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationLevels<T>, T> {
    return new GetByKeyRequestBuilder<CompensationLevels<T>, T>(
      this.entityApi,
      { Level: level }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationLevels`.
   */
  update(
    entity: CompensationLevels<T>
  ): UpdateRequestBuilder<CompensationLevels<T>, T> {
    return new UpdateRequestBuilder<CompensationLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationLevels`.
   * @param level Key property. See {@link CompensationLevels.level}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationLevels`.
   */
  delete(level: string): DeleteRequestBuilder<CompensationLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationLevels` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationLevels<T>
  ): DeleteRequestBuilder<CompensationLevels<T>, T>;
  delete(levelOrEntity: any): DeleteRequestBuilder<CompensationLevels<T>, T> {
    return new DeleteRequestBuilder<CompensationLevels<T>, T>(
      this.entityApi,
      levelOrEntity instanceof CompensationLevels
        ? levelOrEntity
        : { Level: levelOrEntity! }
    );
  }
}
