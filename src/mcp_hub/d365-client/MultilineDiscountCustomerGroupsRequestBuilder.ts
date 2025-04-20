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
import { MultilineDiscountCustomerGroups } from './MultilineDiscountCustomerGroups';

/**
 * Request builder class for operations supported on the {@link MultilineDiscountCustomerGroups} entity.
 */
export class MultilineDiscountCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MultilineDiscountCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MultilineDiscountCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<MultilineDiscountCustomerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultilineDiscountCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultilineDiscountCustomerGroups`.
   */
  create(
    entity: MultilineDiscountCustomerGroups<T>
  ): CreateRequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
    return new CreateRequestBuilder<MultilineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultilineDiscountCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultilineDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `MultilineDiscountCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<MultilineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultilineDiscountCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultilineDiscountCustomerGroups`.
   */
  update(
    entity: MultilineDiscountCustomerGroups<T>
  ): UpdateRequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<MultilineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountCustomerGroups`.
   * @param dataAreaId Key property. See {@link MultilineDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<MultilineDiscountCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MultilineDiscountCustomerGroups<T>
  ): DeleteRequestBuilder<MultilineDiscountCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<MultilineDiscountCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<MultilineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultilineDiscountCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
