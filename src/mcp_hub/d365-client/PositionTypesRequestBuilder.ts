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
import { PositionTypes } from './PositionTypes';

/**
 * Request builder class for operations supported on the {@link PositionTypes} entity.
 */
export class PositionTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PositionTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PositionTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PositionTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PositionTypes<T>, T> {
    return new GetAllRequestBuilder<PositionTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PositionTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PositionTypes`.
   */
  create(entity: PositionTypes<T>): CreateRequestBuilder<PositionTypes<T>, T> {
    return new CreateRequestBuilder<PositionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PositionTypes` entity based on its keys.
   * @param positionTypeId Key property. See {@link PositionTypes.positionTypeId}.
   * @returns A request builder for creating requests to retrieve one `PositionTypes` entity based on its keys.
   */
  getByKey(
    positionTypeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PositionTypes<T>, T> {
    return new GetByKeyRequestBuilder<PositionTypes<T>, T>(this.entityApi, {
      PositionTypeId: positionTypeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PositionTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PositionTypes`.
   */
  update(entity: PositionTypes<T>): UpdateRequestBuilder<PositionTypes<T>, T> {
    return new UpdateRequestBuilder<PositionTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PositionTypes`.
   * @param positionTypeId Key property. See {@link PositionTypes.positionTypeId}.
   * @returns A request builder for creating requests that delete an entity of type `PositionTypes`.
   */
  delete(positionTypeId: string): DeleteRequestBuilder<PositionTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PositionTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PositionTypes` by taking the entity as a parameter.
   */
  delete(entity: PositionTypes<T>): DeleteRequestBuilder<PositionTypes<T>, T>;
  delete(
    positionTypeIdOrEntity: any
  ): DeleteRequestBuilder<PositionTypes<T>, T> {
    return new DeleteRequestBuilder<PositionTypes<T>, T>(
      this.entityApi,
      positionTypeIdOrEntity instanceof PositionTypes
        ? positionTypeIdOrEntity
        : { PositionTypeId: positionTypeIdOrEntity! }
    );
  }
}
