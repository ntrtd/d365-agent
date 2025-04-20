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
import { Positions } from './Positions';

/**
 * Request builder class for operations supported on the {@link Positions} entity.
 */
export class PositionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Positions<T>, T> {
  /**
   * Returns a request builder for querying all `Positions` entities.
   * @returns A request builder for creating requests to retrieve all `Positions` entities.
   */
  getAll(): GetAllRequestBuilder<Positions<T>, T> {
    return new GetAllRequestBuilder<Positions<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Positions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Positions`.
   */
  create(entity: Positions<T>): CreateRequestBuilder<Positions<T>, T> {
    return new CreateRequestBuilder<Positions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Positions` entity based on its keys.
   * @param positionId Key property. See {@link Positions.positionId}.
   * @returns A request builder for creating requests to retrieve one `Positions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Positions<T>, T> {
    return new GetByKeyRequestBuilder<Positions<T>, T>(this.entityApi, {
      PositionId: positionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Positions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Positions`.
   */
  update(entity: Positions<T>): UpdateRequestBuilder<Positions<T>, T> {
    return new UpdateRequestBuilder<Positions<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Positions`.
   * @param positionId Key property. See {@link Positions.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `Positions`.
   */
  delete(positionId: string): DeleteRequestBuilder<Positions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Positions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Positions` by taking the entity as a parameter.
   */
  delete(entity: Positions<T>): DeleteRequestBuilder<Positions<T>, T>;
  delete(positionIdOrEntity: any): DeleteRequestBuilder<Positions<T>, T> {
    return new DeleteRequestBuilder<Positions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof Positions
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
