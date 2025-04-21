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
import { ProductStyleGroups } from './ProductStyleGroups';

/**
 * Request builder class for operations supported on the {@link ProductStyleGroups} entity.
 */
export class ProductStyleGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductStyleGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductStyleGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductStyleGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductStyleGroups<T>, T> {
    return new GetAllRequestBuilder<ProductStyleGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductStyleGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductStyleGroups`.
   */
  create(
    entity: ProductStyleGroups<T>
  ): CreateRequestBuilder<ProductStyleGroups<T>, T> {
    return new CreateRequestBuilder<ProductStyleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductStyleGroups` entity based on its keys.
   * @param groupId Key property. See {@link ProductStyleGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductStyleGroups` entity based on its keys.
   */
  getByKey(
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductStyleGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductStyleGroups<T>, T>(
      this.entityApi,
      { GroupId: groupId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductStyleGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductStyleGroups`.
   */
  update(
    entity: ProductStyleGroups<T>
  ): UpdateRequestBuilder<ProductStyleGroups<T>, T> {
    return new UpdateRequestBuilder<ProductStyleGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroups`.
   * @param groupId Key property. See {@link ProductStyleGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroups`.
   */
  delete(groupId: string): DeleteRequestBuilder<ProductStyleGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductStyleGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductStyleGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductStyleGroups<T>
  ): DeleteRequestBuilder<ProductStyleGroups<T>, T>;
  delete(groupIdOrEntity: any): DeleteRequestBuilder<ProductStyleGroups<T>, T> {
    return new DeleteRequestBuilder<ProductStyleGroups<T>, T>(
      this.entityApi,
      groupIdOrEntity instanceof ProductStyleGroups
        ? groupIdOrEntity
        : { GroupId: groupIdOrEntity! }
    );
  }
}
