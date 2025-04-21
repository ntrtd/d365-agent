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
import { ProductSizeGroups } from './ProductSizeGroups';

/**
 * Request builder class for operations supported on the {@link ProductSizeGroups} entity.
 */
export class ProductSizeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSizeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSizeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSizeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSizeGroups<T>, T> {
    return new GetAllRequestBuilder<ProductSizeGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSizeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSizeGroups`.
   */
  create(
    entity: ProductSizeGroups<T>
  ): CreateRequestBuilder<ProductSizeGroups<T>, T> {
    return new CreateRequestBuilder<ProductSizeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductSizeGroups` entity based on its keys.
   * @param groupId Key property. See {@link ProductSizeGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductSizeGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSizeGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductSizeGroups<T>, T>(this.entityApi, {
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSizeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSizeGroups`.
   */
  update(
    entity: ProductSizeGroups<T>
  ): UpdateRequestBuilder<ProductSizeGroups<T>, T> {
    return new UpdateRequestBuilder<ProductSizeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroups`.
   * @param groupId Key property. See {@link ProductSizeGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroups`.
   */
  delete(groupId: string): DeleteRequestBuilder<ProductSizeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSizeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSizeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductSizeGroups<T>
  ): DeleteRequestBuilder<ProductSizeGroups<T>, T>;
  delete(groupIdOrEntity: any): DeleteRequestBuilder<ProductSizeGroups<T>, T> {
    return new DeleteRequestBuilder<ProductSizeGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof ProductSizeGroups
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
