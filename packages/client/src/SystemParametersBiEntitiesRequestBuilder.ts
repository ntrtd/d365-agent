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
import { SystemParametersBiEntities } from './SystemParametersBiEntities';

/**
 * Request builder class for operations supported on the {@link SystemParametersBiEntities} entity.
 */
export class SystemParametersBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SystemParametersBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SystemParametersBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SystemParametersBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SystemParametersBiEntities<T>, T> {
    return new GetAllRequestBuilder<SystemParametersBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SystemParametersBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SystemParametersBiEntities`.
   */
  create(
    entity: SystemParametersBiEntities<T>
  ): CreateRequestBuilder<SystemParametersBiEntities<T>, T> {
    return new CreateRequestBuilder<SystemParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SystemParametersBiEntities` entity based on its keys.
   * @param sourceKey Key property. See {@link SystemParametersBiEntities.sourceKey}.
   * @returns A request builder for creating requests to retrieve one `SystemParametersBiEntities` entity based on its keys.
   */
  getByKey(
    sourceKey: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<SystemParametersBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SystemParametersBiEntities<T>, T>(
      this.entityApi,
      { SourceKey: sourceKey }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SystemParametersBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SystemParametersBiEntities`.
   */
  update(
    entity: SystemParametersBiEntities<T>
  ): UpdateRequestBuilder<SystemParametersBiEntities<T>, T> {
    return new UpdateRequestBuilder<SystemParametersBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SystemParametersBiEntities`.
   * @param sourceKey Key property. See {@link SystemParametersBiEntities.sourceKey}.
   * @returns A request builder for creating requests that delete an entity of type `SystemParametersBiEntities`.
   */
  delete(
    sourceKey: BigNumber
  ): DeleteRequestBuilder<SystemParametersBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SystemParametersBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SystemParametersBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SystemParametersBiEntities<T>
  ): DeleteRequestBuilder<SystemParametersBiEntities<T>, T>;
  delete(
    sourceKeyOrEntity: any
  ): DeleteRequestBuilder<SystemParametersBiEntities<T>, T> {
    return new DeleteRequestBuilder<SystemParametersBiEntities<T>, T>(
      this.entityApi,
      sourceKeyOrEntity instanceof SystemParametersBiEntities
        ? sourceKeyOrEntity
        : { SourceKey: sourceKeyOrEntity! }
    );
  }
}
