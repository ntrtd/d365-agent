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
import { ProjectJournalApprovals } from './ProjectJournalApprovals';

/**
 * Request builder class for operations supported on the {@link ProjectJournalApprovals} entity.
 */
export class ProjectJournalApprovalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectJournalApprovals<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectJournalApprovals` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectJournalApprovals` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectJournalApprovals<T>, T> {
    return new GetAllRequestBuilder<ProjectJournalApprovals<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectJournalApprovals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectJournalApprovals`.
   */
  create(
    entity: ProjectJournalApprovals<T>
  ): CreateRequestBuilder<ProjectJournalApprovals<T>, T> {
    return new CreateRequestBuilder<ProjectJournalApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectJournalApprovals` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectJournalApprovals.dataAreaId}.
   * @param approve Key property. See {@link ProjectJournalApprovals.approve}.
   * @returns A request builder for creating requests to retrieve one `ProjectJournalApprovals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    approve: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectJournalApprovals<T>, T> {
    return new GetByKeyRequestBuilder<ProjectJournalApprovals<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Approve: approve
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectJournalApprovals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectJournalApprovals`.
   */
  update(
    entity: ProjectJournalApprovals<T>
  ): UpdateRequestBuilder<ProjectJournalApprovals<T>, T> {
    return new UpdateRequestBuilder<ProjectJournalApprovals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalApprovals`.
   * @param dataAreaId Key property. See {@link ProjectJournalApprovals.dataAreaId}.
   * @param approve Key property. See {@link ProjectJournalApprovals.approve}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalApprovals`.
   */
  delete(
    dataAreaId: string,
    approve: string
  ): DeleteRequestBuilder<ProjectJournalApprovals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalApprovals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalApprovals` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectJournalApprovals<T>
  ): DeleteRequestBuilder<ProjectJournalApprovals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    approve?: string
  ): DeleteRequestBuilder<ProjectJournalApprovals<T>, T> {
    return new DeleteRequestBuilder<ProjectJournalApprovals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectJournalApprovals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Approve: approve!
          }
    );
  }
}
