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
import { ImplementationWorkspaceProjects } from './ImplementationWorkspaceProjects';

/**
 * Request builder class for operations supported on the {@link ImplementationWorkspaceProjects} entity.
 */
export class ImplementationWorkspaceProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ImplementationWorkspaceProjects<T>, T> {
  /**
   * Returns a request builder for querying all `ImplementationWorkspaceProjects` entities.
   * @returns A request builder for creating requests to retrieve all `ImplementationWorkspaceProjects` entities.
   */
  getAll(): GetAllRequestBuilder<ImplementationWorkspaceProjects<T>, T> {
    return new GetAllRequestBuilder<ImplementationWorkspaceProjects<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ImplementationWorkspaceProjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ImplementationWorkspaceProjects`.
   */
  create(
    entity: ImplementationWorkspaceProjects<T>
  ): CreateRequestBuilder<ImplementationWorkspaceProjects<T>, T> {
    return new CreateRequestBuilder<ImplementationWorkspaceProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ImplementationWorkspaceProjects` entity based on its keys.
   * @param dataAreaId Key property. See {@link ImplementationWorkspaceProjects.dataAreaId}.
   * @param implementationProject Key property. See {@link ImplementationWorkspaceProjects.implementationProject}.
   * @returns A request builder for creating requests to retrieve one `ImplementationWorkspaceProjects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    implementationProject: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ImplementationWorkspaceProjects<T>, T> {
    return new GetByKeyRequestBuilder<ImplementationWorkspaceProjects<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImplementationProject: implementationProject
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ImplementationWorkspaceProjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ImplementationWorkspaceProjects`.
   */
  update(
    entity: ImplementationWorkspaceProjects<T>
  ): UpdateRequestBuilder<ImplementationWorkspaceProjects<T>, T> {
    return new UpdateRequestBuilder<ImplementationWorkspaceProjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ImplementationWorkspaceProjects`.
   * @param dataAreaId Key property. See {@link ImplementationWorkspaceProjects.dataAreaId}.
   * @param implementationProject Key property. See {@link ImplementationWorkspaceProjects.implementationProject}.
   * @returns A request builder for creating requests that delete an entity of type `ImplementationWorkspaceProjects`.
   */
  delete(
    dataAreaId: string,
    implementationProject: string
  ): DeleteRequestBuilder<ImplementationWorkspaceProjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ImplementationWorkspaceProjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ImplementationWorkspaceProjects` by taking the entity as a parameter.
   */
  delete(
    entity: ImplementationWorkspaceProjects<T>
  ): DeleteRequestBuilder<ImplementationWorkspaceProjects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    implementationProject?: string
  ): DeleteRequestBuilder<ImplementationWorkspaceProjects<T>, T> {
    return new DeleteRequestBuilder<ImplementationWorkspaceProjects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ImplementationWorkspaceProjects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImplementationProject: implementationProject!
          }
    );
  }
}
