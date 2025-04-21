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
import { LineDiscountCustomerGroups } from './LineDiscountCustomerGroups';

/**
 * Request builder class for operations supported on the {@link LineDiscountCustomerGroups} entity.
 */
export class LineDiscountCustomerGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LineDiscountCustomerGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LineDiscountCustomerGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LineDiscountCustomerGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LineDiscountCustomerGroups<T>, T> {
    return new GetAllRequestBuilder<LineDiscountCustomerGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LineDiscountCustomerGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LineDiscountCustomerGroups`.
   */
  create(
    entity: LineDiscountCustomerGroups<T>
  ): CreateRequestBuilder<LineDiscountCustomerGroups<T>, T> {
    return new CreateRequestBuilder<LineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LineDiscountCustomerGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LineDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `LineDiscountCustomerGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LineDiscountCustomerGroups<T>, T> {
    return new GetByKeyRequestBuilder<LineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LineDiscountCustomerGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LineDiscountCustomerGroups`.
   */
  update(
    entity: LineDiscountCustomerGroups<T>
  ): UpdateRequestBuilder<LineDiscountCustomerGroups<T>, T> {
    return new UpdateRequestBuilder<LineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LineDiscountCustomerGroups`.
   * @param dataAreaId Key property. See {@link LineDiscountCustomerGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountCustomerGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountCustomerGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<LineDiscountCustomerGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LineDiscountCustomerGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountCustomerGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LineDiscountCustomerGroups<T>
  ): DeleteRequestBuilder<LineDiscountCustomerGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<LineDiscountCustomerGroups<T>, T> {
    return new DeleteRequestBuilder<LineDiscountCustomerGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LineDiscountCustomerGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
