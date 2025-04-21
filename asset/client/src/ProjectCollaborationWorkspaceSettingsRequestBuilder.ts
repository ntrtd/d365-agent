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
import { ProjectCollaborationWorkspaceSettings } from './ProjectCollaborationWorkspaceSettings';
import { CollabSiteEntityType } from './CollabSiteEntityType';

/**
 * Request builder class for operations supported on the {@link ProjectCollaborationWorkspaceSettings} entity.
 */
export class ProjectCollaborationWorkspaceSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectCollaborationWorkspaceSettings` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectCollaborationWorkspaceSettings` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
    return new GetAllRequestBuilder<
      ProjectCollaborationWorkspaceSettings<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectCollaborationWorkspaceSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectCollaborationWorkspaceSettings`.
   */
  create(
    entity: ProjectCollaborationWorkspaceSettings<T>
  ): CreateRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
    return new CreateRequestBuilder<
      ProjectCollaborationWorkspaceSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProjectCollaborationWorkspaceSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectCollaborationWorkspaceSettings.dataAreaId}.
   * @param businessArea Key property. See {@link ProjectCollaborationWorkspaceSettings.businessArea}.
   * @returns A request builder for creating requests to retrieve one `ProjectCollaborationWorkspaceSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    businessArea: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CollabSiteEntityType'
    >
  ): GetByKeyRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
    return new GetByKeyRequestBuilder<
      ProjectCollaborationWorkspaceSettings<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      BusinessArea: businessArea
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectCollaborationWorkspaceSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectCollaborationWorkspaceSettings`.
   */
  update(
    entity: ProjectCollaborationWorkspaceSettings<T>
  ): UpdateRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
    return new UpdateRequestBuilder<
      ProjectCollaborationWorkspaceSettings<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectCollaborationWorkspaceSettings`.
   * @param dataAreaId Key property. See {@link ProjectCollaborationWorkspaceSettings.dataAreaId}.
   * @param businessArea Key property. See {@link ProjectCollaborationWorkspaceSettings.businessArea}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCollaborationWorkspaceSettings`.
   */
  delete(
    dataAreaId: string,
    businessArea: CollabSiteEntityType
  ): DeleteRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectCollaborationWorkspaceSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectCollaborationWorkspaceSettings` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectCollaborationWorkspaceSettings<T>
  ): DeleteRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    businessArea?: CollabSiteEntityType
  ): DeleteRequestBuilder<ProjectCollaborationWorkspaceSettings<T>, T> {
    return new DeleteRequestBuilder<
      ProjectCollaborationWorkspaceSettings<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectCollaborationWorkspaceSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BusinessArea: businessArea!
          }
    );
  }
}
