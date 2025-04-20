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
import { PositionsV2 } from './PositionsV2';

/**
 * Request builder class for operations supported on the {@link PositionsV2} entity.
 */
export class PositionsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionsV2<T>, T> {
  /**
   * Returns a request builder for querying all `PositionsV2` entities.
   * @returns A request builder for creating requests to retrieve all `PositionsV2` entities.
   */
  getAll(): GetAllRequestBuilder<PositionsV2<T>, T> {
    return new GetAllRequestBuilder<PositionsV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionsV2`.
   */
  create(entity: PositionsV2<T>): CreateRequestBuilder<PositionsV2<T>, T> {
    return new CreateRequestBuilder<PositionsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PositionsV2` entity based on its keys.
   * @param positionId Key property. See {@link PositionsV2.positionId}.
   * @returns A request builder for creating requests to retrieve one `PositionsV2` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionsV2<T>, T> {
    return new GetByKeyRequestBuilder<PositionsV2<T>, T>(this.entityApi, {
      PositionId: positionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionsV2`.
   */
  update(entity: PositionsV2<T>): UpdateRequestBuilder<PositionsV2<T>, T> {
    return new UpdateRequestBuilder<PositionsV2<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionsV2`.
   * @param positionId Key property. See {@link PositionsV2.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionsV2`.
   */
  delete(positionId: string): DeleteRequestBuilder<PositionsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionsV2` by taking the entity as a parameter.
   */
  delete(entity: PositionsV2<T>): DeleteRequestBuilder<PositionsV2<T>, T>;
  delete(positionIdOrEntity: any): DeleteRequestBuilder<PositionsV2<T>, T> {
    return new DeleteRequestBuilder<PositionsV2<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof PositionsV2
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
