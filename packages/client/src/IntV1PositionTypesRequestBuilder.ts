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
import { IntV1PositionTypes } from './IntV1PositionTypes';

/**
 * Request builder class for operations supported on the {@link IntV1PositionTypes} entity.
 */
export class IntV1PositionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntV1PositionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `IntV1PositionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `IntV1PositionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<IntV1PositionTypes<T>, T> {
    return new GetAllRequestBuilder<IntV1PositionTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IntV1PositionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntV1PositionTypes`.
   */
  create(
    entity: IntV1PositionTypes<T>
  ): CreateRequestBuilder<IntV1PositionTypes<T>, T> {
    return new CreateRequestBuilder<IntV1PositionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntV1PositionTypes` entity based on its keys.
   * @param positionTypeId Key property. See {@link IntV1PositionTypes.positionTypeId}.
   * @returns A request builder for creating requests to retrieve one `IntV1PositionTypes` entity based on its keys.
   */
  getByKey(
    positionTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntV1PositionTypes<T>, T> {
    return new GetByKeyRequestBuilder<IntV1PositionTypes<T>, T>(
      this.entityApi,
      { PositionTypeId: positionTypeId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntV1PositionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntV1PositionTypes`.
   */
  update(
    entity: IntV1PositionTypes<T>
  ): UpdateRequestBuilder<IntV1PositionTypes<T>, T> {
    return new UpdateRequestBuilder<IntV1PositionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntV1PositionTypes`.
   * @param positionTypeId Key property. See {@link IntV1PositionTypes.positionTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `IntV1PositionTypes`.
   */
  delete(
    positionTypeId: string
  ): DeleteRequestBuilder<IntV1PositionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntV1PositionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntV1PositionTypes` by taking the entity as a parameter.
   */
  delete(
    entity: IntV1PositionTypes<T>
  ): DeleteRequestBuilder<IntV1PositionTypes<T>, T>;
  delete(
    positionTypeIdOrEntity: any
  ): DeleteRequestBuilder<IntV1PositionTypes<T>, T> {
    return new DeleteRequestBuilder<IntV1PositionTypes<T>, T>(
      this.entityApi,
      positionTypeIdOrEntity instanceof IntV1PositionTypes
        ? positionTypeIdOrEntity
        : { PositionTypeId: positionTypeIdOrEntity! }
    );
  }
}
