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
import { ProjectJournalNames } from './ProjectJournalNames';

/**
 * Request builder class for operations supported on the {@link ProjectJournalNames} entity.
 */
export class ProjectJournalNamesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectJournalNames<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectJournalNames` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectJournalNames` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectJournalNames<T>, T> {
    return new GetAllRequestBuilder<ProjectJournalNames<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectJournalNames` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectJournalNames`.
   */
  create(
    entity: ProjectJournalNames<T>
  ): CreateRequestBuilder<ProjectJournalNames<T>, T> {
    return new CreateRequestBuilder<ProjectJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectJournalNames` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectJournalNames.dataAreaId}.
   * @param name Key property. See {@link ProjectJournalNames.name}.
   * @returns A request builder for creating requests to retrieve one `ProjectJournalNames` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectJournalNames<T>, T> {
    return new GetByKeyRequestBuilder<ProjectJournalNames<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectJournalNames`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectJournalNames`.
   */
  update(
    entity: ProjectJournalNames<T>
  ): UpdateRequestBuilder<ProjectJournalNames<T>, T> {
    return new UpdateRequestBuilder<ProjectJournalNames<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalNames`.
   * @param dataAreaId Key property. See {@link ProjectJournalNames.dataAreaId}.
   * @param name Key property. See {@link ProjectJournalNames.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalNames`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<ProjectJournalNames<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectJournalNames`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectJournalNames` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectJournalNames<T>
  ): DeleteRequestBuilder<ProjectJournalNames<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ProjectJournalNames<T>, T> {
    return new DeleteRequestBuilder<ProjectJournalNames<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectJournalNames
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}
