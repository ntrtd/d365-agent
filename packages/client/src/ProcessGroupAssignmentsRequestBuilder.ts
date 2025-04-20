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
import { ProcessGroupAssignments } from './ProcessGroupAssignments';

/**
 * Request builder class for operations supported on the {@link ProcessGroupAssignments} entity.
 */
export class ProcessGroupAssignmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProcessGroupAssignments<T>, T> {
  /**
   * Returns a request builder for querying all `ProcessGroupAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `ProcessGroupAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<ProcessGroupAssignments<T>, T> {
    return new GetAllRequestBuilder<ProcessGroupAssignments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProcessGroupAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProcessGroupAssignments`.
   */
  create(
    entity: ProcessGroupAssignments<T>
  ): CreateRequestBuilder<ProcessGroupAssignments<T>, T> {
    return new CreateRequestBuilder<ProcessGroupAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProcessGroupAssignments` entity based on its keys.
   * @param name Key property. See {@link ProcessGroupAssignments.name}.
   * @returns A request builder for creating requests to retrieve one `ProcessGroupAssignments` entity based on its keys.
   */
  getByKey(
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProcessGroupAssignments<T>, T> {
    return new GetByKeyRequestBuilder<ProcessGroupAssignments<T>, T>(
      this.entityApi,
      { Name: name }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProcessGroupAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProcessGroupAssignments`.
   */
  update(
    entity: ProcessGroupAssignments<T>
  ): UpdateRequestBuilder<ProcessGroupAssignments<T>, T> {
    return new UpdateRequestBuilder<ProcessGroupAssignments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProcessGroupAssignments`.
   * @param name Key property. See {@link ProcessGroupAssignments.name}.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGroupAssignments`.
   */
  delete(name: string): DeleteRequestBuilder<ProcessGroupAssignments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProcessGroupAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProcessGroupAssignments` by taking the entity as a parameter.
   */
  delete(
    entity: ProcessGroupAssignments<T>
  ): DeleteRequestBuilder<ProcessGroupAssignments<T>, T>;
  delete(
    nameOrEntity: any
  ): DeleteRequestBuilder<ProcessGroupAssignments<T>, T> {
    return new DeleteRequestBuilder<ProcessGroupAssignments<T>, T>(
      this.entityApi,
      nameOrEntity instanceof ProcessGroupAssignments
        ? nameOrEntity
        : { Name: nameOrEntity! }
    );
  }
}
