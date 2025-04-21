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
import { RetailPosPermissionGroups } from './RetailPosPermissionGroups';

/**
 * Request builder class for operations supported on the {@link RetailPosPermissionGroups} entity.
 */
export class RetailPosPermissionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailPosPermissionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailPosPermissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailPosPermissionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailPosPermissionGroups<T>, T> {
    return new GetAllRequestBuilder<RetailPosPermissionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailPosPermissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailPosPermissionGroups`.
   */
  create(
    entity: RetailPosPermissionGroups<T>
  ): CreateRequestBuilder<RetailPosPermissionGroups<T>, T> {
    return new CreateRequestBuilder<RetailPosPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailPosPermissionGroups` entity based on its keys.
   * @param posPermissionGroupId Key property. See {@link RetailPosPermissionGroups.posPermissionGroupId}.
   * @returns A request builder for creating requests to retrieve one `RetailPosPermissionGroups` entity based on its keys.
   */
  getByKey(
    posPermissionGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailPosPermissionGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailPosPermissionGroups<T>, T>(
      this.entityApi,
      { PosPermissionGroupId: posPermissionGroupId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailPosPermissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailPosPermissionGroups`.
   */
  update(
    entity: RetailPosPermissionGroups<T>
  ): UpdateRequestBuilder<RetailPosPermissionGroups<T>, T> {
    return new UpdateRequestBuilder<RetailPosPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailPosPermissionGroups`.
   * @param posPermissionGroupId Key property. See {@link RetailPosPermissionGroups.posPermissionGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosPermissionGroups`.
   */
  delete(
    posPermissionGroupId: string
  ): DeleteRequestBuilder<RetailPosPermissionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailPosPermissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailPosPermissionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailPosPermissionGroups<T>
  ): DeleteRequestBuilder<RetailPosPermissionGroups<T>, T>;
  delete(
    posPermissionGroupIdOrEntity: any
  ): DeleteRequestBuilder<RetailPosPermissionGroups<T>, T> {
    return new DeleteRequestBuilder<RetailPosPermissionGroups<T>, T>(
      this.entityApi,
      posPermissionGroupIdOrEntity instanceof RetailPosPermissionGroups
        ? posPermissionGroupIdOrEntity
        : { PosPermissionGroupId: posPermissionGroupIdOrEntity! }
    );
  }
}
