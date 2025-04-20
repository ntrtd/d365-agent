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
import { TotalDiscountCustomerGroups } from './TotalDiscountCustomerGroups';

/**
 * Request builder class for operations supported on the {@link TotalDiscountCustomerGroups} entity.
 */
export class TotalDiscountCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalDiscountCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TotalDiscountCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TotalDiscountCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TotalDiscountCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<TotalDiscountCustomerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalDiscountCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalDiscountCustomerGroups`.
   */
  create(
    entity: TotalDiscountCustomerGroups<T>
  ): CreateRequestBuilder<TotalDiscountCustomerGroups<T>, T> {
    return new CreateRequestBuilder<TotalDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalDiscountCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TotalDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link TotalDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `TotalDiscountCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalDiscountCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<TotalDiscountCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalDiscountCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalDiscountCustomerGroups`.
   */
  update(
    entity: TotalDiscountCustomerGroups<T>
  ): UpdateRequestBuilder<TotalDiscountCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<TotalDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalDiscountCustomerGroups`.
   * @param dataAreaId Key property. See {@link TotalDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link TotalDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TotalDiscountCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<TotalDiscountCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalDiscountCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalDiscountCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TotalDiscountCustomerGroups<T>
  ): DeleteRequestBuilder<TotalDiscountCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<TotalDiscountCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<TotalDiscountCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TotalDiscountCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
