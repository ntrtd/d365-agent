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
import { ProductGroups } from './ProductGroups';

/**
 * Request builder class for operations supported on the {@link ProductGroups} entity.
 */
export class ProductGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductGroups<T>, T> {
    return new GetAllRequestBuilder<ProductGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductGroups`.
   */
  create(entity: ProductGroups<T>): CreateRequestBuilder<ProductGroups<T>, T> {
    return new CreateRequestBuilder<ProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductGroups<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductGroups`.
   */
  update(entity: ProductGroups<T>): UpdateRequestBuilder<ProductGroups<T>, T> {
    return new UpdateRequestBuilder<ProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductGroups`.
   * @param dataAreaId Key property. See {@link ProductGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProductGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductGroups` by taking the entity as a parameter.
   */
  delete(entity: ProductGroups<T>): DeleteRequestBuilder<ProductGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProductGroups<T>, T> {
    return new DeleteRequestBuilder<ProductGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
