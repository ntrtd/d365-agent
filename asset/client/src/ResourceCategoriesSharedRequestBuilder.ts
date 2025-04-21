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
import { ResourceCategoriesShared } from './ResourceCategoriesShared';

/**
 * Request builder class for operations supported on the {@link ResourceCategoriesShared} entity.
 */
export class ResourceCategoriesSharedRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ResourceCategoriesShared<T>, T> {
  /**
   * Returns a request builder for querying all `ResourceCategoriesShared` entities.
   * @returns A request builder for creating requests to retrieve all `ResourceCategoriesShared` entities.
   */
  getAll(): GetAllRequestBuilder<ResourceCategoriesShared<T>, T> {
    return new GetAllRequestBuilder<ResourceCategoriesShared<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ResourceCategoriesShared` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ResourceCategoriesShared`.
   */
  create(
    entity: ResourceCategoriesShared<T>
  ): CreateRequestBuilder<ResourceCategoriesShared<T>, T> {
    return new CreateRequestBuilder<ResourceCategoriesShared<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ResourceCategoriesShared` entity based on its keys.
   * @param roleId Key property. See {@link ResourceCategoriesShared.roleId}.
   * @returns A request builder for creating requests to retrieve one `ResourceCategoriesShared` entity based on its keys.
   */
  getByKey(
    roleId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ResourceCategoriesShared<T>, T> {
    return new GetByKeyRequestBuilder<ResourceCategoriesShared<T>, T>(
      this.entityApi,
      { RoleId: roleId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ResourceCategoriesShared`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ResourceCategoriesShared`.
   */
  update(
    entity: ResourceCategoriesShared<T>
  ): UpdateRequestBuilder<ResourceCategoriesShared<T>, T> {
    return new UpdateRequestBuilder<ResourceCategoriesShared<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ResourceCategoriesShared`.
   * @param roleId Key property. See {@link ResourceCategoriesShared.roleId}.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategoriesShared`.
   */
  delete(roleId: string): DeleteRequestBuilder<ResourceCategoriesShared<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ResourceCategoriesShared`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ResourceCategoriesShared` by taking the entity as a parameter.
   */
  delete(
    entity: ResourceCategoriesShared<T>
  ): DeleteRequestBuilder<ResourceCategoriesShared<T>, T>;
  delete(
    roleIdOrEntity: any
  ): DeleteRequestBuilder<ResourceCategoriesShared<T>, T> {
    return new DeleteRequestBuilder<ResourceCategoriesShared<T>, T>(
      this.entityApi,
      roleIdOrEntity instanceof ResourceCategoriesShared
        ? roleIdOrEntity
        : { RoleId: roleIdOrEntity! }
    );
  }
}
