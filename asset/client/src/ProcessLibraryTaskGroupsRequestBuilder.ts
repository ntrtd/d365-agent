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
import { ProcessLibraryTaskGroups } from './ProcessLibraryTaskGroups';
import { BusinessProcessType } from './BusinessProcessType';

/**
 * Request builder class for operations supported on the {@link ProcessLibraryTaskGroups} entity.
 */
export class ProcessLibraryTaskGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessLibraryTaskGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessLibraryTaskGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessLibraryTaskGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessLibraryTaskGroups<T>, T> {
    return new GetAllRequestBuilder<ProcessLibraryTaskGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessLibraryTaskGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessLibraryTaskGroups`.
   */
  create(
    entity: ProcessLibraryTaskGroups<T>
  ): CreateRequestBuilder<ProcessLibraryTaskGroups<T>, T> {
    return new CreateRequestBuilder<ProcessLibraryTaskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessLibraryTaskGroups` entity based on its keys.
   * @param processType Key property. See {@link ProcessLibraryTaskGroups.processType}.
   * @param name Key property. See {@link ProcessLibraryTaskGroups.name}.
   * @returns A request builder for creating requests to retrieve one `ProcessLibraryTaskGroups` entity based on its keys.
   */
  getByKey(
    processType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BusinessProcessType'
    >,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessLibraryTaskGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProcessLibraryTaskGroups<T>, T>(
      this.entityApi,
      {
        ProcessType: processType,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessLibraryTaskGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessLibraryTaskGroups`.
   */
  update(
    entity: ProcessLibraryTaskGroups<T>
  ): UpdateRequestBuilder<ProcessLibraryTaskGroups<T>, T> {
    return new UpdateRequestBuilder<ProcessLibraryTaskGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTaskGroups`.
   * @param processType Key property. See {@link ProcessLibraryTaskGroups.processType}.
   * @param name Key property. See {@link ProcessLibraryTaskGroups.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTaskGroups`.
   */
  delete(
    processType: BusinessProcessType,
    name: string
  ): DeleteRequestBuilder<ProcessLibraryTaskGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessLibraryTaskGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessLibraryTaskGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessLibraryTaskGroups<T>
  ): DeleteRequestBuilder<ProcessLibraryTaskGroups<T>, T>;
  delete(
    processTypeOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<ProcessLibraryTaskGroups<T>, T> {
    return new DeleteRequestBuilder<ProcessLibraryTaskGroups<T>, T>(
      this.entityApi,
      processTypeOrEntity instanceof ProcessLibraryTaskGroups
        ? processTypeOrEntity
        : {
            ProcessType: processTypeOrEntity!,
            Name: name!
          }
    );
  }
}
