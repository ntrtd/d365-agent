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
import { RetailPositionPosPermissions } from './RetailPositionPosPermissions';

/**
 * Request builder class for operations supported on the {@link RetailPositionPosPermissions} entity.
 */
export class RetailPositionPosPermissionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPositionPosPermissions<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPositionPosPermissions` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPositionPosPermissions` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPositionPosPermissions<T>, T> {
    return new GetAllRequestBuilder<RetailPositionPosPermissions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailPositionPosPermissions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPositionPosPermissions`.
   */
  create(
    entity: RetailPositionPosPermissions<T>
  ): CreateRequestBuilder<RetailPositionPosPermissions<T>, T> {
    return new CreateRequestBuilder<RetailPositionPosPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPositionPosPermissions` entity based on its keys.
   * @param positionId Key property. See {@link RetailPositionPosPermissions.positionId}.
   * @returns A request builder for creating requests to retrieve one `RetailPositionPosPermissions` entity based on its keys.
   */
  getByKey(
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPositionPosPermissions<T>, T> {
    return new GetByKeyRequestBuilder<RetailPositionPosPermissions<T>, T>(
      this.entityApi,
      { PositionId: positionId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPositionPosPermissions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPositionPosPermissions`.
   */
  update(
    entity: RetailPositionPosPermissions<T>
  ): UpdateRequestBuilder<RetailPositionPosPermissions<T>, T> {
    return new UpdateRequestBuilder<RetailPositionPosPermissions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPositionPosPermissions`.
   * @param positionId Key property. See {@link RetailPositionPosPermissions.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPositionPosPermissions`.
   */
  delete(
    positionId: string
  ): DeleteRequestBuilder<RetailPositionPosPermissions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPositionPosPermissions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPositionPosPermissions` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPositionPosPermissions<T>
  ): DeleteRequestBuilder<RetailPositionPosPermissions<T>, T>;
  delete(
    positionIdOrEntity: any
  ): DeleteRequestBuilder<RetailPositionPosPermissions<T>, T> {
    return new DeleteRequestBuilder<RetailPositionPosPermissions<T>, T>(
      this.entityApi,
      positionIdOrEntity instanceof RetailPositionPosPermissions
        ? positionIdOrEntity
        : { PositionId: positionIdOrEntity! }
    );
  }
}
