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
import { ProjectExpensePolicyGroups } from './ProjectExpensePolicyGroups';

/**
 * Request builder class for operations supported on the {@link ProjectExpensePolicyGroups} entity.
 */
export class ProjectExpensePolicyGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectExpensePolicyGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectExpensePolicyGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectExpensePolicyGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectExpensePolicyGroups<T>, T> {
    return new GetAllRequestBuilder<ProjectExpensePolicyGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectExpensePolicyGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectExpensePolicyGroups`.
   */
  create(
    entity: ProjectExpensePolicyGroups<T>
  ): CreateRequestBuilder<ProjectExpensePolicyGroups<T>, T> {
    return new CreateRequestBuilder<ProjectExpensePolicyGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectExpensePolicyGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicyGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProjectExpensePolicyGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProjectExpensePolicyGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectExpensePolicyGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProjectExpensePolicyGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectExpensePolicyGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectExpensePolicyGroups`.
   */
  update(
    entity: ProjectExpensePolicyGroups<T>
  ): UpdateRequestBuilder<ProjectExpensePolicyGroups<T>, T> {
    return new UpdateRequestBuilder<ProjectExpensePolicyGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicyGroups`.
   * @param dataAreaId Key property. See {@link ProjectExpensePolicyGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProjectExpensePolicyGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicyGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProjectExpensePolicyGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectExpensePolicyGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectExpensePolicyGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectExpensePolicyGroups<T>
  ): DeleteRequestBuilder<ProjectExpensePolicyGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProjectExpensePolicyGroups<T>, T> {
    return new DeleteRequestBuilder<ProjectExpensePolicyGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectExpensePolicyGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
