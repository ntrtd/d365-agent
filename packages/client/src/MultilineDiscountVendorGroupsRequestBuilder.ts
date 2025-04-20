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
import { MultilineDiscountVendorGroups } from './MultilineDiscountVendorGroups';

/**
 * Request builder class for operations supported on the {@link MultilineDiscountVendorGroups} entity.
 */
export class MultilineDiscountVendorGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultilineDiscountVendorGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MultilineDiscountVendorGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MultilineDiscountVendorGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MultilineDiscountVendorGroups<T>, T> {
    return new GetAllRequestBuilder<MultilineDiscountVendorGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultilineDiscountVendorGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultilineDiscountVendorGroups`.
   */
  create(
    entity: MultilineDiscountVendorGroups<T>
  ): CreateRequestBuilder<MultilineDiscountVendorGroups<T>, T> {
    return new CreateRequestBuilder<MultilineDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultilineDiscountVendorGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultilineDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `MultilineDiscountVendorGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultilineDiscountVendorGroups<T>, T> {
    return new GetByKeyRequestBuilder<MultilineDiscountVendorGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultilineDiscountVendorGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultilineDiscountVendorGroups`.
   */
  update(
    entity: MultilineDiscountVendorGroups<T>
  ): UpdateRequestBuilder<MultilineDiscountVendorGroups<T>, T> {
    return new UpdateRequestBuilder<MultilineDiscountVendorGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountVendorGroups`.
   * @param dataAreaId Key property. See {@link MultilineDiscountVendorGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountVendorGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountVendorGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<MultilineDiscountVendorGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountVendorGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountVendorGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MultilineDiscountVendorGroups<T>
  ): DeleteRequestBuilder<MultilineDiscountVendorGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<MultilineDiscountVendorGroups<T>, T> {
    return new DeleteRequestBuilder<MultilineDiscountVendorGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultilineDiscountVendorGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
