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
import { ProcessLibraryTaskGroupings } from './ProcessLibraryTaskGroupings';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * Request builder class for operations supported on the {@link ProcessLibraryTaskGroupings} entity.
 */
export class ProcessLibraryTaskGroupingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessLibraryTaskGroupings` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessLibraryTaskGroupings` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
    return new GetAllRequestBuilder<ProcessLibraryTaskGroupings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessLibraryTaskGroupings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessLibraryTaskGroupings`.
   */
  create(
    entity: ProcessLibraryTaskGroupings<T>
  ): CreateRequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
    return new CreateRequestBuilder<ProcessLibraryTaskGroupings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessLibraryTaskGroupings` entity based on its keys.
   * @param libraryTaskProcessType Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskProcessType}.
   * @param libraryTaskName Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskName}.
   * @param libraryTaskGroupProcessType Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskGroupProcessType}.
   * @param libraryTaskGroupName Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskGroupName}.
   * @returns A request builder for creating requests to retrieve one `ProcessLibraryTaskGroupings` entity based on its keys.
   */
  getByKey(
    libraryTaskProcessType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    libraryTaskName: DeserializedType<T, 'Edm.String'>,
    libraryTaskGroupProcessType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    libraryTaskGroupName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
    return new GetByKeyRequestBuilder<ProcessLibraryTaskGroupings<T>, T>(
      this.entityApi,
      {
        LibraryTask_ProcessType: libraryTaskProcessType,
        LibraryTask_Name: libraryTaskName,
        LibraryTaskGroup_ProcessType: libraryTaskGroupProcessType,
        LibraryTaskGroup_Name: libraryTaskGroupName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessLibraryTaskGroupings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessLibraryTaskGroupings`.
   */
  update(
    entity: ProcessLibraryTaskGroupings<T>
  ): UpdateRequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
    return new UpdateRequestBuilder<ProcessLibraryTaskGroupings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTaskGroupings`.
   * @param libraryTaskProcessType Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskProcessType}.
   * @param libraryTaskName Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskName}.
   * @param libraryTaskGroupProcessType Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskGroupProcessType}.
   * @param libraryTaskGroupName Key property. See {@link ProcessLibraryTaskGroupings.libraryTaskGroupName}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTaskGroupings`.
   */
  delete(
    libraryTaskProcessType: BusinessProcessType,
    libraryTaskName: string,
    libraryTaskGroupProcessType: BusinessProcessType,
    libraryTaskGroupName: string
  ): DeleteRequestBuilder<ProcessLibraryTaskGroupings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTaskGroupings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTaskGroupings` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessLibraryTaskGroupings<T>
  ): DeleteRequestBuilder<ProcessLibraryTaskGroupings<T>, T>;
  delete(
    libraryTaskProcessTypeOrEntity: any,
    libraryTaskName?: string,
    libraryTaskGroupProcessType?: BusinessProcessType,
    libraryTaskGroupName?: string
  ): DeleteRequestBuilder<ProcessLibraryTaskGroupings<T>, T> {
    return new DeleteRequestBuilder<ProcessLibraryTaskGroupings<T>, T>(
      this.entityApi,
      libraryTaskProcessTypeOrEntity instanceof ProcessLibraryTaskGroupings
        ? libraryTaskProcessTypeOrEntity
        : {
            LibraryTask_ProcessType: libraryTaskProcessTypeOrEntity!,
            LibraryTask_Name: libraryTaskName!,
            LibraryTaskGroup_ProcessType: libraryTaskGroupProcessType!,
            LibraryTaskGroup_Name: libraryTaskGroupName!
          }
    );
  }
}
