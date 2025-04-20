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
import { ProjCategoryGroups } from './ProjCategoryGroups';

/**
 * Request builder class for operations supported on the {@link ProjCategoryGroups} entity.
 */
export class ProjCategoryGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjCategoryGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProjCategoryGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProjCategoryGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProjCategoryGroups<T>, T> {
    return new GetAllRequestBuilder<ProjCategoryGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjCategoryGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjCategoryGroups`.
   */
  create(
    entity: ProjCategoryGroups<T>
  ): CreateRequestBuilder<ProjCategoryGroups<T>, T> {
    return new CreateRequestBuilder<ProjCategoryGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjCategoryGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjCategoryGroups.dataAreaId}.
   * @param categoryGroupId Key property. See {@link ProjCategoryGroups.categoryGroupId}.
   * @returns A request builder for creating requests to retrieve one `ProjCategoryGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    categoryGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjCategoryGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProjCategoryGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CategoryGroupId: categoryGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjCategoryGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjCategoryGroups`.
   */
  update(
    entity: ProjCategoryGroups<T>
  ): UpdateRequestBuilder<ProjCategoryGroups<T>, T> {
    return new UpdateRequestBuilder<ProjCategoryGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjCategoryGroups`.
   * @param dataAreaId Key property. See {@link ProjCategoryGroups.dataAreaId}.
   * @param categoryGroupId Key property. See {@link ProjCategoryGroups.categoryGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjCategoryGroups`.
   */
  delete(
    dataAreaId: string,
    categoryGroupId: string
  ): DeleteRequestBuilder<ProjCategoryGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjCategoryGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjCategoryGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProjCategoryGroups<T>
  ): DeleteRequestBuilder<ProjCategoryGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    categoryGroupId?: string
  ): DeleteRequestBuilder<ProjCategoryGroups<T>, T> {
    return new DeleteRequestBuilder<ProjCategoryGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjCategoryGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CategoryGroupId: categoryGroupId!
          }
    );
  }
}
