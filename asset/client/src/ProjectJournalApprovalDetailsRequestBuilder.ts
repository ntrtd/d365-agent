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
import { ProjectJournalApprovalDetails } from './ProjectJournalApprovalDetails';

/**
 * Request builder class for operations supported on the {@link ProjectJournalApprovalDetails} entity.
 */
export class ProjectJournalApprovalDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectJournalApprovalDetails<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectJournalApprovalDetails` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectJournalApprovalDetails` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectJournalApprovalDetails<T>, T> {
    return new GetAllRequestBuilder<ProjectJournalApprovalDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectJournalApprovalDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectJournalApprovalDetails`.
   */
  create(
    entity: ProjectJournalApprovalDetails<T>
  ): CreateRequestBuilder<ProjectJournalApprovalDetails<T>, T> {
    return new CreateRequestBuilder<ProjectJournalApprovalDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectJournalApprovalDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectJournalApprovalDetails.dataAreaId}.
   * @param approve Key property. See {@link ProjectJournalApprovalDetails.approve}.
   * @param statusValue Key property. See {@link ProjectJournalApprovalDetails.statusValue}.
   * @returns A request builder for creating requests to retrieve one `ProjectJournalApprovalDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    approve: DeserializedType<T, 'Edm.String'>,
    statusValue: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectJournalApprovalDetails<T>, T> {
    return new GetByKeyRequestBuilder<ProjectJournalApprovalDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Approve: approve,
        StatusValue: statusValue
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectJournalApprovalDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectJournalApprovalDetails`.
   */
  update(
    entity: ProjectJournalApprovalDetails<T>
  ): UpdateRequestBuilder<ProjectJournalApprovalDetails<T>, T> {
    return new UpdateRequestBuilder<ProjectJournalApprovalDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalApprovalDetails`.
   * @param dataAreaId Key property. See {@link ProjectJournalApprovalDetails.dataAreaId}.
   * @param approve Key property. See {@link ProjectJournalApprovalDetails.approve}.
   * @param statusValue Key property. See {@link ProjectJournalApprovalDetails.statusValue}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalApprovalDetails`.
   */
  delete(
    dataAreaId: string,
    approve: string,
    statusValue: string
  ): DeleteRequestBuilder<ProjectJournalApprovalDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalApprovalDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalApprovalDetails` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectJournalApprovalDetails<T>
  ): DeleteRequestBuilder<ProjectJournalApprovalDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    approve?: string,
    statusValue?: string
  ): DeleteRequestBuilder<ProjectJournalApprovalDetails<T>, T> {
    return new DeleteRequestBuilder<ProjectJournalApprovalDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectJournalApprovalDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Approve: approve!,
            StatusValue: statusValue!
          }
    );
  }
}
