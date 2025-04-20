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
import { ProjectResources } from './ProjectResources';

/**
 * Request builder class for operations supported on the {@link ProjectResources} entity.
 */
export class ProjectResourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectResources<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectResources` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectResources` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectResources<T>, T> {
    return new GetAllRequestBuilder<ProjectResources<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectResources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectResources`.
   */
  create(
    entity: ProjectResources<T>
  ): CreateRequestBuilder<ProjectResources<T>, T> {
    return new CreateRequestBuilder<ProjectResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectResources` entity based on its keys.
   * @param resourceId Key property. See {@link ProjectResources.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjectResources.resourceCompanyId}.
   * @returns A request builder for creating requests to retrieve one `ProjectResources` entity based on its keys.
   */
  getByKey(
    resourceId: DeserializedType<T, 'Edm.String'>,
    resourceCompanyId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectResources<T>, T> {
    return new GetByKeyRequestBuilder<ProjectResources<T>, T>(this.entityApi, {
      ResourceId: resourceId,
      ResourceCompanyId: resourceCompanyId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectResources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectResources`.
   */
  update(
    entity: ProjectResources<T>
  ): UpdateRequestBuilder<ProjectResources<T>, T> {
    return new UpdateRequestBuilder<ProjectResources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectResources`.
   * @param resourceId Key property. See {@link ProjectResources.resourceId}.
   * @param resourceCompanyId Key property. See {@link ProjectResources.resourceCompanyId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectResources`.
   */
  delete(
    resourceId: string,
    resourceCompanyId: string
  ): DeleteRequestBuilder<ProjectResources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectResources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectResources` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectResources<T>
  ): DeleteRequestBuilder<ProjectResources<T>, T>;
  delete(
    resourceIdOrEntity: any,
    resourceCompanyId?: string
  ): DeleteRequestBuilder<ProjectResources<T>, T> {
    return new DeleteRequestBuilder<ProjectResources<T>, T>(
      this.entityApi,
      resourceIdOrEntity instanceof ProjectResources
        ? resourceIdOrEntity
        : {
            ResourceId: resourceIdOrEntity!,
            ResourceCompanyId: resourceCompanyId!
          }
    );
  }
}
