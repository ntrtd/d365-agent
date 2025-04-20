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
import { ProjectAllocationKeys } from './ProjectAllocationKeys';

/**
 * Request builder class for operations supported on the {@link ProjectAllocationKeys} entity.
 */
export class ProjectAllocationKeysRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectAllocationKeys<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectAllocationKeys` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectAllocationKeys` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectAllocationKeys<T>, T> {
    return new GetAllRequestBuilder<ProjectAllocationKeys<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectAllocationKeys` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectAllocationKeys`.
   */
  create(
    entity: ProjectAllocationKeys<T>
  ): CreateRequestBuilder<ProjectAllocationKeys<T>, T> {
    return new CreateRequestBuilder<ProjectAllocationKeys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectAllocationKeys` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectAllocationKeys.dataAreaId}.
   * @param allocationKey Key property. See {@link ProjectAllocationKeys.allocationKey}.
   * @returns A request builder for creating requests to retrieve one `ProjectAllocationKeys` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    allocationKey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectAllocationKeys<T>, T> {
    return new GetByKeyRequestBuilder<ProjectAllocationKeys<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AllocationKey: allocationKey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectAllocationKeys`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectAllocationKeys`.
   */
  update(
    entity: ProjectAllocationKeys<T>
  ): UpdateRequestBuilder<ProjectAllocationKeys<T>, T> {
    return new UpdateRequestBuilder<ProjectAllocationKeys<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectAllocationKeys`.
   * @param dataAreaId Key property. See {@link ProjectAllocationKeys.dataAreaId}.
   * @param allocationKey Key property. See {@link ProjectAllocationKeys.allocationKey}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectAllocationKeys`.
   */
  delete(
    dataAreaId: string,
    allocationKey: string
  ): DeleteRequestBuilder<ProjectAllocationKeys<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectAllocationKeys`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectAllocationKeys` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectAllocationKeys<T>
  ): DeleteRequestBuilder<ProjectAllocationKeys<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    allocationKey?: string
  ): DeleteRequestBuilder<ProjectAllocationKeys<T>, T> {
    return new DeleteRequestBuilder<ProjectAllocationKeys<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectAllocationKeys
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AllocationKey: allocationKey!
          }
    );
  }
}
