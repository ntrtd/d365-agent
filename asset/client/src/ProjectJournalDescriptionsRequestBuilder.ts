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
import { ProjectJournalDescriptions } from './ProjectJournalDescriptions';

/**
 * Request builder class for operations supported on the {@link ProjectJournalDescriptions} entity.
 */
export class ProjectJournalDescriptionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectJournalDescriptions<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectJournalDescriptions` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectJournalDescriptions` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectJournalDescriptions<T>, T> {
    return new GetAllRequestBuilder<ProjectJournalDescriptions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectJournalDescriptions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectJournalDescriptions`.
   */
  create(
    entity: ProjectJournalDescriptions<T>
  ): CreateRequestBuilder<ProjectJournalDescriptions<T>, T> {
    return new CreateRequestBuilder<ProjectJournalDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectJournalDescriptions` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectJournalDescriptions.dataAreaId}.
   * @param searchName Key property. See {@link ProjectJournalDescriptions.searchName}.
   * @returns A request builder for creating requests to retrieve one `ProjectJournalDescriptions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    searchName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectJournalDescriptions<T>, T> {
    return new GetByKeyRequestBuilder<ProjectJournalDescriptions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SearchName: searchName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectJournalDescriptions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectJournalDescriptions`.
   */
  update(
    entity: ProjectJournalDescriptions<T>
  ): UpdateRequestBuilder<ProjectJournalDescriptions<T>, T> {
    return new UpdateRequestBuilder<ProjectJournalDescriptions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalDescriptions`.
   * @param dataAreaId Key property. See {@link ProjectJournalDescriptions.dataAreaId}.
   * @param searchName Key property. See {@link ProjectJournalDescriptions.searchName}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalDescriptions`.
   */
  delete(
    dataAreaId: string,
    searchName: string
  ): DeleteRequestBuilder<ProjectJournalDescriptions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalDescriptions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalDescriptions` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectJournalDescriptions<T>
  ): DeleteRequestBuilder<ProjectJournalDescriptions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    searchName?: string
  ): DeleteRequestBuilder<ProjectJournalDescriptions<T>, T> {
    return new DeleteRequestBuilder<ProjectJournalDescriptions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectJournalDescriptions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SearchName: searchName!
          }
    );
  }
}
