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
import { LineDiscountVendorGroups } from './LineDiscountVendorGroups';

/**
 * Request builder class for operations supported on the {@link LineDiscountVendorGroups} entity.
 */
export class LineDiscountVendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LineDiscountVendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LineDiscountVendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LineDiscountVendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LineDiscountVendorGroups<T>, T> {
    return new GetAllRequestBuilder<LineDiscountVendorGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LineDiscountVendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LineDiscountVendorGroups`.
   */
  create(
    entity: LineDiscountVendorGroups<T>
  ): CreateRequestBuilder<LineDiscountVendorGroups<T>, T> {
    return new CreateRequestBuilder<LineDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LineDiscountVendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LineDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `LineDiscountVendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LineDiscountVendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<LineDiscountVendorGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LineDiscountVendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LineDiscountVendorGroups`.
   */
  update(
    entity: LineDiscountVendorGroups<T>
  ): UpdateRequestBuilder<LineDiscountVendorGroups<T>, T> {
    return new UpdateRequestBuilder<LineDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LineDiscountVendorGroups`.
   * @param dataAreaId Key property. See {@link LineDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountVendorGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<LineDiscountVendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LineDiscountVendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountVendorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LineDiscountVendorGroups<T>
  ): DeleteRequestBuilder<LineDiscountVendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<LineDiscountVendorGroups<T>, T> {
    return new DeleteRequestBuilder<LineDiscountVendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LineDiscountVendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
