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
import { DualWriteProjectPartitionMappings } from './DualWriteProjectPartitionMappings';

/**
 * Request builder class for operations supported on the {@link DualWriteProjectPartitionMappings} entity.
 */
export class DualWriteProjectPartitionMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteProjectPartitionMappings` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteProjectPartitionMappings` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
    return new GetAllRequestBuilder<DualWriteProjectPartitionMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteProjectPartitionMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteProjectPartitionMappings`.
   */
  create(
    entity: DualWriteProjectPartitionMappings<T>
  ): CreateRequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
    return new CreateRequestBuilder<DualWriteProjectPartitionMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteProjectPartitionMappings` entity based on its keys.
   * @param projectName Key property. See {@link DualWriteProjectPartitionMappings.projectName}.
   * @param externalCompanyName Key property. See {@link DualWriteProjectPartitionMappings.externalCompanyName}.
   * @param internalCompanyName Key property. See {@link DualWriteProjectPartitionMappings.internalCompanyName}.
   * @returns A request builder for creating requests to retrieve one `DualWriteProjectPartitionMappings` entity based on its keys.
   */
  getByKey(
    projectName: DeserializedType<T, 'Edm.String'>,
    externalCompanyName: DeserializedType<T, 'Edm.String'>,
    internalCompanyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteProjectPartitionMappings<T>, T>(
      this.entityApi,
      {
        ProjectName: projectName,
        ExternalCompanyName: externalCompanyName,
        InternalCompanyName: internalCompanyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteProjectPartitionMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteProjectPartitionMappings`.
   */
  update(
    entity: DualWriteProjectPartitionMappings<T>
  ): UpdateRequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
    return new UpdateRequestBuilder<DualWriteProjectPartitionMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteProjectPartitionMappings`.
   * @param projectName Key property. See {@link DualWriteProjectPartitionMappings.projectName}.
   * @param externalCompanyName Key property. See {@link DualWriteProjectPartitionMappings.externalCompanyName}.
   * @param internalCompanyName Key property. See {@link DualWriteProjectPartitionMappings.internalCompanyName}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteProjectPartitionMappings`.
   */
  delete(
    projectName: string,
    externalCompanyName: string,
    internalCompanyName: string
  ): DeleteRequestBuilder<DualWriteProjectPartitionMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteProjectPartitionMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteProjectPartitionMappings` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteProjectPartitionMappings<T>
  ): DeleteRequestBuilder<DualWriteProjectPartitionMappings<T>, T>;
  delete(
    projectNameOrEntity: any,
    externalCompanyName?: string,
    internalCompanyName?: string
  ): DeleteRequestBuilder<DualWriteProjectPartitionMappings<T>, T> {
    return new DeleteRequestBuilder<DualWriteProjectPartitionMappings<T>, T>(
      this.entityApi,
      projectNameOrEntity instanceof DualWriteProjectPartitionMappings
        ? projectNameOrEntity
        : {
            ProjectName: projectNameOrEntity!,
            ExternalCompanyName: externalCompanyName!,
            InternalCompanyName: internalCompanyName!
          }
    );
  }
}
