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
import { ProjectItemJournalTables } from './ProjectItemJournalTables';

/**
 * Request builder class for operations supported on the {@link ProjectItemJournalTables} entity.
 */
export class ProjectItemJournalTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectItemJournalTables<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectItemJournalTables` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectItemJournalTables` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectItemJournalTables<T>, T> {
    return new GetAllRequestBuilder<ProjectItemJournalTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectItemJournalTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectItemJournalTables`.
   */
  create(
    entity: ProjectItemJournalTables<T>
  ): CreateRequestBuilder<ProjectItemJournalTables<T>, T> {
    return new CreateRequestBuilder<ProjectItemJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectItemJournalTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectItemJournalTables.dataAreaId}.
   * @param journalId Key property. See {@link ProjectItemJournalTables.journalId}.
   * @returns A request builder for creating requests to retrieve one `ProjectItemJournalTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectItemJournalTables<T>, T> {
    return new GetByKeyRequestBuilder<ProjectItemJournalTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalId: journalId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectItemJournalTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectItemJournalTables`.
   */
  update(
    entity: ProjectItemJournalTables<T>
  ): UpdateRequestBuilder<ProjectItemJournalTables<T>, T> {
    return new UpdateRequestBuilder<ProjectItemJournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectItemJournalTables`.
   * @param dataAreaId Key property. See {@link ProjectItemJournalTables.dataAreaId}.
   * @param journalId Key property. See {@link ProjectItemJournalTables.journalId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemJournalTables`.
   */
  delete(
    dataAreaId: string,
    journalId: string
  ): DeleteRequestBuilder<ProjectItemJournalTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectItemJournalTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemJournalTables` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectItemJournalTables<T>
  ): DeleteRequestBuilder<ProjectItemJournalTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalId?: string
  ): DeleteRequestBuilder<ProjectItemJournalTables<T>, T> {
    return new DeleteRequestBuilder<ProjectItemJournalTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectItemJournalTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalId: journalId!
          }
    );
  }
}
