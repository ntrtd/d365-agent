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
import { ProjValProjCategorySetupEntities } from './ProjValProjCategorySetupEntities';

/**
 * Request builder class for operations supported on the {@link ProjValProjCategorySetupEntities} entity.
 */
export class ProjValProjCategorySetupEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValProjCategorySetupEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValProjCategorySetupEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
    return new GetAllRequestBuilder<ProjValProjCategorySetupEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjValProjCategorySetupEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValProjCategorySetupEntities`.
   */
  create(
    entity: ProjValProjCategorySetupEntities<T>
  ): CreateRequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
    return new CreateRequestBuilder<ProjValProjCategorySetupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjValProjCategorySetupEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValProjCategorySetupEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValProjCategorySetupEntities.groupId}.
   * @param projectId Key property. See {@link ProjValProjCategorySetupEntities.projectId}.
   * @param category Key property. See {@link ProjValProjCategorySetupEntities.category}.
   * @returns A request builder for creating requests to retrieve one `ProjValProjCategorySetupEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    projectId: DeserializedType<T, 'Edm.String'>,
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjValProjCategorySetupEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId,
        ProjectID: projectId,
        Category: category
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValProjCategorySetupEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValProjCategorySetupEntities`.
   */
  update(
    entity: ProjValProjCategorySetupEntities<T>
  ): UpdateRequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
    return new UpdateRequestBuilder<ProjValProjCategorySetupEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValProjCategorySetupEntities`.
   * @param dataAreaId Key property. See {@link ProjValProjCategorySetupEntities.dataAreaId}.
   * @param groupId Key property. See {@link ProjValProjCategorySetupEntities.groupId}.
   * @param projectId Key property. See {@link ProjValProjCategorySetupEntities.projectId}.
   * @param category Key property. See {@link ProjValProjCategorySetupEntities.category}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValProjCategorySetupEntities`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    projectId: string,
    category: string
  ): DeleteRequestBuilder<ProjValProjCategorySetupEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValProjCategorySetupEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValProjCategorySetupEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValProjCategorySetupEntities<T>
  ): DeleteRequestBuilder<ProjValProjCategorySetupEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    projectId?: string,
    category?: string
  ): DeleteRequestBuilder<ProjValProjCategorySetupEntities<T>, T> {
    return new DeleteRequestBuilder<ProjValProjCategorySetupEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValProjCategorySetupEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            ProjectID: projectId!,
            Category: category!
          }
    );
  }
}
