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
import { RetailJobPosPermissionGroups } from './RetailJobPosPermissionGroups';

/**
 * Request builder class for operations supported on the {@link RetailJobPosPermissionGroups} entity.
 */
export class RetailJobPosPermissionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailJobPosPermissionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailJobPosPermissionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailJobPosPermissionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailJobPosPermissionGroups<T>, T> {
    return new GetAllRequestBuilder<RetailJobPosPermissionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailJobPosPermissionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailJobPosPermissionGroups`.
   */
  create(
    entity: RetailJobPosPermissionGroups<T>
  ): CreateRequestBuilder<RetailJobPosPermissionGroups<T>, T> {
    return new CreateRequestBuilder<RetailJobPosPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailJobPosPermissionGroups` entity based on its keys.
   * @param jobId Key property. See {@link RetailJobPosPermissionGroups.jobId}.
   * @returns A request builder for creating requests to retrieve one `RetailJobPosPermissionGroups` entity based on its keys.
   */
  getByKey(
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailJobPosPermissionGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailJobPosPermissionGroups<T>, T>(
      this.entityApi,
      { JobId: jobId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailJobPosPermissionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailJobPosPermissionGroups`.
   */
  update(
    entity: RetailJobPosPermissionGroups<T>
  ): UpdateRequestBuilder<RetailJobPosPermissionGroups<T>, T> {
    return new UpdateRequestBuilder<RetailJobPosPermissionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailJobPosPermissionGroups`.
   * @param jobId Key property. See {@link RetailJobPosPermissionGroups.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailJobPosPermissionGroups`.
   */
  delete(
    jobId: string
  ): DeleteRequestBuilder<RetailJobPosPermissionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailJobPosPermissionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailJobPosPermissionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailJobPosPermissionGroups<T>
  ): DeleteRequestBuilder<RetailJobPosPermissionGroups<T>, T>;
  delete(
    jobIdOrEntity: any
  ): DeleteRequestBuilder<RetailJobPosPermissionGroups<T>, T> {
    return new DeleteRequestBuilder<RetailJobPosPermissionGroups<T>, T>(
      this.entityApi,
      jobIdOrEntity instanceof RetailJobPosPermissionGroups
        ? jobIdOrEntity
        : { JobId: jobIdOrEntity! }
    );
  }
}
