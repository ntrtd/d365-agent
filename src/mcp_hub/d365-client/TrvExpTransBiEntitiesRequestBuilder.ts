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
import { TrvExpTransBiEntities } from './TrvExpTransBiEntities';

/**
 * Request builder class for operations supported on the {@link TrvExpTransBiEntities} entity.
 */
export class TrvExpTransBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrvExpTransBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `TrvExpTransBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `TrvExpTransBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<TrvExpTransBiEntities<T>, T> {
    return new GetAllRequestBuilder<TrvExpTransBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrvExpTransBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrvExpTransBiEntities`.
   */
  create(
    entity: TrvExpTransBiEntities<T>
  ): CreateRequestBuilder<TrvExpTransBiEntities<T>, T> {
    return new CreateRequestBuilder<TrvExpTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrvExpTransBiEntities` entity based on its keys.
   * @param expTransNumber Key property. See {@link TrvExpTransBiEntities.expTransNumber}.
   * @returns A request builder for creating requests to retrieve one `TrvExpTransBiEntities` entity based on its keys.
   */
  getByKey(
    expTransNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrvExpTransBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<TrvExpTransBiEntities<T>, T>(
      this.entityApi,
      { ExpTransNumber: expTransNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrvExpTransBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrvExpTransBiEntities`.
   */
  update(
    entity: TrvExpTransBiEntities<T>
  ): UpdateRequestBuilder<TrvExpTransBiEntities<T>, T> {
    return new UpdateRequestBuilder<TrvExpTransBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrvExpTransBiEntities`.
   * @param expTransNumber Key property. See {@link TrvExpTransBiEntities.expTransNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpTransBiEntities`.
   */
  delete(
    expTransNumber: string
  ): DeleteRequestBuilder<TrvExpTransBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrvExpTransBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrvExpTransBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: TrvExpTransBiEntities<T>
  ): DeleteRequestBuilder<TrvExpTransBiEntities<T>, T>;
  delete(
    expTransNumberOrEntity: any
  ): DeleteRequestBuilder<TrvExpTransBiEntities<T>, T> {
    return new DeleteRequestBuilder<TrvExpTransBiEntities<T>, T>(
      this.entityApi,
      expTransNumberOrEntity instanceof TrvExpTransBiEntities
        ? expTransNumberOrEntity
        : { ExpTransNumber: expTransNumberOrEntity! }
    );
  }
}
