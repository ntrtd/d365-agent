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
import { ProductColorGroups } from './ProductColorGroups';

/**
 * Request builder class for operations supported on the {@link ProductColorGroups} entity.
 */
export class ProductColorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductColorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductColorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductColorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductColorGroups<T>, T> {
    return new GetAllRequestBuilder<ProductColorGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductColorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductColorGroups`.
   */
  create(
    entity: ProductColorGroups<T>
  ): CreateRequestBuilder<ProductColorGroups<T>, T> {
    return new CreateRequestBuilder<ProductColorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductColorGroups` entity based on its keys.
   * @param groupId Key property. See {@link ProductColorGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductColorGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductColorGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductColorGroups<T>, T>(
      this.entityApi,
      { GroupId: groupId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductColorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductColorGroups`.
   */
  update(
    entity: ProductColorGroups<T>
  ): UpdateRequestBuilder<ProductColorGroups<T>, T> {
    return new UpdateRequestBuilder<ProductColorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroups`.
   * @param groupId Key property. See {@link ProductColorGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroups`.
   */
  delete(groupId: string): DeleteRequestBuilder<ProductColorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductColorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductColorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductColorGroups<T>
  ): DeleteRequestBuilder<ProductColorGroups<T>, T>;
  delete(groupIdOrEntity: any): DeleteRequestBuilder<ProductColorGroups<T>, T> {
    return new DeleteRequestBuilder<ProductColorGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof ProductColorGroups
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
