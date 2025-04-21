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
import { WorkerResourceImports } from './WorkerResourceImports';

/**
 * Request builder class for operations supported on the {@link WorkerResourceImports} entity.
 */
export class WorkerResourceImportsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerResourceImports<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerResourceImports` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerResourceImports` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerResourceImports<T>, T> {
    return new GetAllRequestBuilder<WorkerResourceImports<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `WorkerResourceImports` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerResourceImports`.
   */
  create(
    entity: WorkerResourceImports<T>
  ): CreateRequestBuilder<WorkerResourceImports<T>, T> {
    return new CreateRequestBuilder<WorkerResourceImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerResourceImports` entity based on its keys.
   * @param projCdsResourceId Key property. See {@link WorkerResourceImports.projCdsResourceId}.
   * @returns A request builder for creating requests to retrieve one `WorkerResourceImports` entity based on its keys.
   */
  getByKey(
    projCdsResourceId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<WorkerResourceImports<T>, T> {
    return new GetByKeyRequestBuilder<WorkerResourceImports<T>, T>(
      this.entityApi,
      { ProjCDSResourceId: projCdsResourceId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerResourceImports`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerResourceImports`.
   */
  update(
    entity: WorkerResourceImports<T>
  ): UpdateRequestBuilder<WorkerResourceImports<T>, T> {
    return new UpdateRequestBuilder<WorkerResourceImports<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerResourceImports`.
   * @param projCdsResourceId Key property. See {@link WorkerResourceImports.projCdsResourceId}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerResourceImports`.
   */
  delete(
    projCdsResourceId: string
  ): DeleteRequestBuilder<WorkerResourceImports<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerResourceImports`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerResourceImports` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerResourceImports<T>
  ): DeleteRequestBuilder<WorkerResourceImports<T>, T>;
  delete(
    projCdsResourceIdOrEntity: any
  ): DeleteRequestBuilder<WorkerResourceImports<T>, T> {
    return new DeleteRequestBuilder<WorkerResourceImports<T>, T>(
      this.entityApi,
      projCdsResourceIdOrEntity instanceof WorkerResourceImports
        ? projCdsResourceIdOrEntity
        : { ProjCDSResourceId: projCdsResourceIdOrEntity! }
    );
  }
}
