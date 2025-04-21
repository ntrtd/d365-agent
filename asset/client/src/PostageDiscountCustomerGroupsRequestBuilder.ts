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
import { PostageDiscountCustomerGroups } from './PostageDiscountCustomerGroups';

/**
 * Request builder class for operations supported on the {@link PostageDiscountCustomerGroups} entity.
 */
export class PostageDiscountCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PostageDiscountCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `PostageDiscountCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `PostageDiscountCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<PostageDiscountCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<PostageDiscountCustomerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PostageDiscountCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PostageDiscountCustomerGroups`.
   */
  create(
    entity: PostageDiscountCustomerGroups<T>
  ): CreateRequestBuilder<PostageDiscountCustomerGroups<T>, T> {
    return new CreateRequestBuilder<PostageDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PostageDiscountCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link PostageDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PostageDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `PostageDiscountCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PostageDiscountCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<PostageDiscountCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PostageDiscountCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PostageDiscountCustomerGroups`.
   */
  update(
    entity: PostageDiscountCustomerGroups<T>
  ): UpdateRequestBuilder<PostageDiscountCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<PostageDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PostageDiscountCustomerGroups`.
   * @param dataAreaId Key property. See {@link PostageDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link PostageDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `PostageDiscountCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<PostageDiscountCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PostageDiscountCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PostageDiscountCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: PostageDiscountCustomerGroups<T>
  ): DeleteRequestBuilder<PostageDiscountCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<PostageDiscountCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<PostageDiscountCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PostageDiscountCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
