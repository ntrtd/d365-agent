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
import { DualWriteProjectConfigurations } from './DualWriteProjectConfigurations';

/**
 * Request builder class for operations supported on the {@link DualWriteProjectConfigurations} entity.
 */
export class DualWriteProjectConfigurationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DualWriteProjectConfigurations<T>, T> {
  /**
   * Returns a request builder for querying all `DualWriteProjectConfigurations` entities.
   * @returns A request builder for creating requests to retrieve all `DualWriteProjectConfigurations` entities.
   */
  getAll(): GetAllRequestBuilder<DualWriteProjectConfigurations<T>, T> {
    return new GetAllRequestBuilder<DualWriteProjectConfigurations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DualWriteProjectConfigurations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DualWriteProjectConfigurations`.
   */
  create(
    entity: DualWriteProjectConfigurations<T>
  ): CreateRequestBuilder<DualWriteProjectConfigurations<T>, T> {
    return new CreateRequestBuilder<DualWriteProjectConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DualWriteProjectConfigurations` entity based on its keys.
   * @param projectName Key property. See {@link DualWriteProjectConfigurations.projectName}.
   * @returns A request builder for creating requests to retrieve one `DualWriteProjectConfigurations` entity based on its keys.
   */
  getByKey(
    projectName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DualWriteProjectConfigurations<T>, T> {
    return new GetByKeyRequestBuilder<DualWriteProjectConfigurations<T>, T>(
      this.entityApi,
      { ProjectName: projectName }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DualWriteProjectConfigurations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DualWriteProjectConfigurations`.
   */
  update(
    entity: DualWriteProjectConfigurations<T>
  ): UpdateRequestBuilder<DualWriteProjectConfigurations<T>, T> {
    return new UpdateRequestBuilder<DualWriteProjectConfigurations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DualWriteProjectConfigurations`.
   * @param projectName Key property. See {@link DualWriteProjectConfigurations.projectName}.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteProjectConfigurations`.
   */
  delete(
    projectName: string
  ): DeleteRequestBuilder<DualWriteProjectConfigurations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DualWriteProjectConfigurations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DualWriteProjectConfigurations` by taking the entity as a parameter.
   */
  delete(
    entity: DualWriteProjectConfigurations<T>
  ): DeleteRequestBuilder<DualWriteProjectConfigurations<T>, T>;
  delete(
    projectNameOrEntity: any
  ): DeleteRequestBuilder<DualWriteProjectConfigurations<T>, T> {
    return new DeleteRequestBuilder<DualWriteProjectConfigurations<T>, T>(
      this.entityApi,
      projectNameOrEntity instanceof DualWriteProjectConfigurations
        ? projectNameOrEntity
        : { ProjectName: projectNameOrEntity! }
    );
  }
}
