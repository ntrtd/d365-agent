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
import { ResourceCategories } from './ResourceCategories';

/**
 * Request builder class for operations supported on the {@link ResourceCategories} entity.
 */
export class ResourceCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceCategories<T>, T> {
  /**
   * Returns a request builder for querying all `ResourceCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceCategories` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceCategories<T>, T> {
    return new GetAllRequestBuilder<ResourceCategories<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ResourceCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceCategories`.
   */
  create(
    entity: ResourceCategories<T>
  ): CreateRequestBuilder<ResourceCategories<T>, T> {
    return new CreateRequestBuilder<ResourceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ResourceCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ResourceCategories.dataAreaId}.
   * @param roleId Key property. See {@link ResourceCategories.roleId}.
   * @returns A request builder for creating requests to retrieve one `ResourceCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    roleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ResourceCategories<T>, T> {
    return new GetByKeyRequestBuilder<ResourceCategories<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        RoleId: roleId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceCategories`.
   */
  update(
    entity: ResourceCategories<T>
  ): UpdateRequestBuilder<ResourceCategories<T>, T> {
    return new UpdateRequestBuilder<ResourceCategories<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceCategories`.
   * @param dataAreaId Key property. See {@link ResourceCategories.dataAreaId}.
   * @param roleId Key property. See {@link ResourceCategories.roleId}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategories`.
   */
  delete(
    dataAreaId: string,
    roleId: string
  ): DeleteRequestBuilder<ResourceCategories<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceCategories<T>
  ): DeleteRequestBuilder<ResourceCategories<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    roleId?: string
  ): DeleteRequestBuilder<ResourceCategories<T>, T> {
    return new DeleteRequestBuilder<ResourceCategories<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ResourceCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            RoleId: roleId!
          }
    );
  }
}
