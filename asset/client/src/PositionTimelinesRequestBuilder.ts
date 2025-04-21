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
import { PositionTimelines } from './PositionTimelines';

/**
 * Request builder class for operations supported on the {@link PositionTimelines} entity.
 */
export class PositionTimelinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionTimelines<T>, T> {
  /**
   * Returns a request builder for querying all `PositionTimelines` entities.
   * @returns A request builder for creating requests to retrieve all `PositionTimelines` entities.
   */
  getAll(): GetAllRequestBuilder<PositionTimelines<T>, T> {
    return new GetAllRequestBuilder<PositionTimelines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionTimelines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionTimelines`.
   */
  create(
    entity: PositionTimelines<T>
  ): CreateRequestBuilder<PositionTimelines<T>, T> {
    return new CreateRequestBuilder<PositionTimelines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionTimelines` entity based on its keys.
   * @param positionId Key property. See {@link PositionTimelines.positionId}.
   * @returns A request builder for creating requests to retrieve one `PositionTimelines` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionTimelines<T>, T> {
    return new GetByKeyRequestBuilder<PositionTimelines<T>, T>(this.entityApi, {
      PositionId: positionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionTimelines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionTimelines`.
   */
  update(
    entity: PositionTimelines<T>
  ): UpdateRequestBuilder<PositionTimelines<T>, T> {
    return new UpdateRequestBuilder<PositionTimelines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionTimelines`.
   * @param positionId Key property. See {@link PositionTimelines.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionTimelines`.
   */
  delete(positionId: string): DeleteRequestBuilder<PositionTimelines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionTimelines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionTimelines` by taking the entity as a parameter.
   */
  delete(
    entity: PositionTimelines<T>
  ): DeleteRequestBuilder<PositionTimelines<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<PositionTimelines<T>, T> {
    return new DeleteRequestBuilder<PositionTimelines<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionTimelines
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
