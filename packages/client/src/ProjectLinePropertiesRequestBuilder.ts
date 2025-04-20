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
import { ProjectLineProperties } from './ProjectLineProperties';

/**
 * Request builder class for operations supported on the {@link ProjectLineProperties} entity.
 */
export class ProjectLinePropertiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectLineProperties<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectLineProperties` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectLineProperties` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectLineProperties<T>, T> {
    return new GetAllRequestBuilder<ProjectLineProperties<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjectLineProperties` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectLineProperties`.
   */
  create(
    entity: ProjectLineProperties<T>
  ): CreateRequestBuilder<ProjectLineProperties<T>, T> {
    return new CreateRequestBuilder<ProjectLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectLineProperties` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectLineProperties.dataAreaId}.
   * @param linePropertyId Key property. See {@link ProjectLineProperties.linePropertyId}.
   * @returns A request builder for creating requests to retrieve one `ProjectLineProperties` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    linePropertyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectLineProperties<T>, T> {
    return new GetByKeyRequestBuilder<ProjectLineProperties<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LinePropertyId: linePropertyId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectLineProperties`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectLineProperties`.
   */
  update(
    entity: ProjectLineProperties<T>
  ): UpdateRequestBuilder<ProjectLineProperties<T>, T> {
    return new UpdateRequestBuilder<ProjectLineProperties<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectLineProperties`.
   * @param dataAreaId Key property. See {@link ProjectLineProperties.dataAreaId}.
   * @param linePropertyId Key property. See {@link ProjectLineProperties.linePropertyId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLineProperties`.
   */
  delete(
    dataAreaId: string,
    linePropertyId: string
  ): DeleteRequestBuilder<ProjectLineProperties<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectLineProperties`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectLineProperties` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectLineProperties<T>
  ): DeleteRequestBuilder<ProjectLineProperties<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    linePropertyId?: string
  ): DeleteRequestBuilder<ProjectLineProperties<T>, T> {
    return new DeleteRequestBuilder<ProjectLineProperties<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectLineProperties
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LinePropertyId: linePropertyId!
          }
    );
  }
}
