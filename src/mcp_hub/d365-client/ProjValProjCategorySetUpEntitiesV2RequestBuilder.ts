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
import { ProjValProjCategorySetUpEntitiesV2 } from './ProjValProjCategorySetUpEntitiesV2';

/**
 * Request builder class for operations supported on the {@link ProjValProjCategorySetUpEntitiesV2} entity.
 */
export class ProjValProjCategorySetUpEntitiesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ProjValProjCategorySetUpEntitiesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ProjValProjCategorySetUpEntitiesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
    return new GetAllRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjValProjCategorySetUpEntitiesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   */
  create(
    entity: ProjValProjCategorySetUpEntitiesV2<T>
  ): CreateRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
    return new CreateRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjValProjCategorySetUpEntitiesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.dataAreaId}.
   * @param groupId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.groupId}.
   * @param projId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.projId}.
   * @param categoryId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.categoryId}.
   * @returns A request builder for creating requests to retrieve one `ProjValProjCategorySetUpEntitiesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>,
    projId: DeserializedType<T, 'Edm.String'>,
    categoryId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
    return new GetByKeyRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId,
        ProjId: projId,
        CategoryId: categoryId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   */
  update(
    entity: ProjValProjCategorySetUpEntitiesV2<T>
  ): UpdateRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
    return new UpdateRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   * @param dataAreaId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.dataAreaId}.
   * @param groupId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.groupId}.
   * @param projId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.projId}.
   * @param categoryId Key property. See {@link ProjValProjCategorySetUpEntitiesV2.categoryId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   */
  delete(
    dataAreaId: string,
    groupId: string,
    projId: string,
    categoryId: string
  ): DeleteRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjValProjCategorySetUpEntitiesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjValProjCategorySetUpEntitiesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ProjValProjCategorySetUpEntitiesV2<T>
  ): DeleteRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string,
    projId?: string,
    categoryId?: string
  ): DeleteRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T> {
    return new DeleteRequestBuilder<ProjValProjCategorySetUpEntitiesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjValProjCategorySetUpEntitiesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!,
            ProjId: projId!,
            CategoryId: categoryId!
          }
    );
  }
}
