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
import { ProcessGroupAssignmentMembers } from './ProcessGroupAssignmentMembers';

/**
 * Request builder class for operations supported on the {@link ProcessGroupAssignmentMembers} entity.
 */
export class ProcessGroupAssignmentMembersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessGroupAssignmentMembers` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessGroupAssignmentMembers` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
    return new GetAllRequestBuilder<ProcessGroupAssignmentMembers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessGroupAssignmentMembers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessGroupAssignmentMembers`.
   */
  create(
    entity: ProcessGroupAssignmentMembers<T>
  ): CreateRequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
    return new CreateRequestBuilder<ProcessGroupAssignmentMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessGroupAssignmentMembers` entity based on its keys.
   * @param groupName Key property. See {@link ProcessGroupAssignmentMembers.groupName}.
   * @param positionId Key property. See {@link ProcessGroupAssignmentMembers.positionId}.
   * @returns A request builder for creating requests to retrieve one `ProcessGroupAssignmentMembers` entity based on its keys.
   */
  getByKey(
    groupName: DeserializedType<T, 'Edm.String'>,
    positionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
    return new GetByKeyRequestBuilder<ProcessGroupAssignmentMembers<T>, T>(
      this.entityApi,
      {
        GroupName: groupName,
        PositionId: positionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessGroupAssignmentMembers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessGroupAssignmentMembers`.
   */
  update(
    entity: ProcessGroupAssignmentMembers<T>
  ): UpdateRequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
    return new UpdateRequestBuilder<ProcessGroupAssignmentMembers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessGroupAssignmentMembers`.
   * @param groupName Key property. See {@link ProcessGroupAssignmentMembers.groupName}.
   * @param positionId Key property. See {@link ProcessGroupAssignmentMembers.positionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGroupAssignmentMembers`.
   */
  delete(
    groupName: string,
    positionId: string
  ): DeleteRequestBuilder<ProcessGroupAssignmentMembers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessGroupAssignmentMembers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGroupAssignmentMembers` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessGroupAssignmentMembers<T>
  ): DeleteRequestBuilder<ProcessGroupAssignmentMembers<T>, T>;
  delete(
    groupNameOrEntity: any,
    positionId?: string
  ): DeleteRequestBuilder<ProcessGroupAssignmentMembers<T>, T> {
    return new DeleteRequestBuilder<ProcessGroupAssignmentMembers<T>, T>(
      this.entityApi,
      groupNameOrEntity instanceof ProcessGroupAssignmentMembers
        ? groupNameOrEntity
        : {
            GroupName: groupNameOrEntity!,
            PositionId: positionId!
          }
    );
  }
}
