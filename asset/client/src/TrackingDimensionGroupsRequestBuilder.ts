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
import { TrackingDimensionGroups } from './TrackingDimensionGroups';

/**
 * Request builder class for operations supported on the {@link TrackingDimensionGroups} entity.
 */
export class TrackingDimensionGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrackingDimensionGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TrackingDimensionGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TrackingDimensionGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TrackingDimensionGroups<T>, T> {
    return new GetAllRequestBuilder<TrackingDimensionGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TrackingDimensionGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrackingDimensionGroups`.
   */
  create(
    entity: TrackingDimensionGroups<T>
  ): CreateRequestBuilder<TrackingDimensionGroups<T>, T> {
    return new CreateRequestBuilder<TrackingDimensionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TrackingDimensionGroups` entity based on its keys.
   * @param groupName Key property. See {@link TrackingDimensionGroups.groupName}.
   * @returns A request builder for creating requests to retrieve one `TrackingDimensionGroups` entity based on its keys.
   */
  getByKey(
    groupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TrackingDimensionGroups<T>, T> {
    return new GetByKeyRequestBuilder<TrackingDimensionGroups<T>, T>(
      this.entityApi,
      { GroupName: groupName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrackingDimensionGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrackingDimensionGroups`.
   */
  update(
    entity: TrackingDimensionGroups<T>
  ): UpdateRequestBuilder<TrackingDimensionGroups<T>, T> {
    return new UpdateRequestBuilder<TrackingDimensionGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrackingDimensionGroups`.
   * @param groupName Key property. See {@link TrackingDimensionGroups.groupName}.
   * @returns A request builder for creating requests that delete an entity of type `TrackingDimensionGroups`.
   */
  delete(
    groupName: string
  ): DeleteRequestBuilder<TrackingDimensionGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrackingDimensionGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrackingDimensionGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TrackingDimensionGroups<T>
  ): DeleteRequestBuilder<TrackingDimensionGroups<T>, T>;
  delete(
    groupNameOrEntity: any
  ): DeleteRequestBuilder<TrackingDimensionGroups<T>, T> {
    return new DeleteRequestBuilder<TrackingDimensionGroups<T>, T>(
      this.entityApi,
      groupNameOrEntity instanceof TrackingDimensionGroups
        ? groupNameOrEntity
        : { GroupName: groupNameOrEntity! }
    );
  }
}
