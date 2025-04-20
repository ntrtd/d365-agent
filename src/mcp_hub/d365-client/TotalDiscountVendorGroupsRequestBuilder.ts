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
import { TotalDiscountVendorGroups } from './TotalDiscountVendorGroups';

/**
 * Request builder class for operations supported on the {@link TotalDiscountVendorGroups} entity.
 */
export class TotalDiscountVendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TotalDiscountVendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `TotalDiscountVendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `TotalDiscountVendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<TotalDiscountVendorGroups<T>, T> {
    return new GetAllRequestBuilder<TotalDiscountVendorGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TotalDiscountVendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TotalDiscountVendorGroups`.
   */
  create(
    entity: TotalDiscountVendorGroups<T>
  ): CreateRequestBuilder<TotalDiscountVendorGroups<T>, T> {
    return new CreateRequestBuilder<TotalDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TotalDiscountVendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link TotalDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link TotalDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `TotalDiscountVendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TotalDiscountVendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<TotalDiscountVendorGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TotalDiscountVendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TotalDiscountVendorGroups`.
   */
  update(
    entity: TotalDiscountVendorGroups<T>
  ): UpdateRequestBuilder<TotalDiscountVendorGroups<T>, T> {
    return new UpdateRequestBuilder<TotalDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TotalDiscountVendorGroups`.
   * @param dataAreaId Key property. See {@link TotalDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link TotalDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `TotalDiscountVendorGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<TotalDiscountVendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TotalDiscountVendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TotalDiscountVendorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: TotalDiscountVendorGroups<T>
  ): DeleteRequestBuilder<TotalDiscountVendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<TotalDiscountVendorGroups<T>, T> {
    return new DeleteRequestBuilder<TotalDiscountVendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TotalDiscountVendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
