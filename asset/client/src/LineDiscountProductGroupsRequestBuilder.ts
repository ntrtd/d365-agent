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
import { LineDiscountProductGroups } from './LineDiscountProductGroups';

/**
 * Request builder class for operations supported on the {@link LineDiscountProductGroups} entity.
 */
export class LineDiscountProductGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LineDiscountProductGroups<T>, T> {
  /**
   * Returns a request builder for querying all `LineDiscountProductGroups` entities.
   * @returns A request builder for creating requests to retrieve all `LineDiscountProductGroups` entities.
   */
  getAll(): GetAllRequestBuilder<LineDiscountProductGroups<T>, T> {
    return new GetAllRequestBuilder<LineDiscountProductGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LineDiscountProductGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LineDiscountProductGroups`.
   */
  create(
    entity: LineDiscountProductGroups<T>
  ): CreateRequestBuilder<LineDiscountProductGroups<T>, T> {
    return new CreateRequestBuilder<LineDiscountProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LineDiscountProductGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link LineDiscountProductGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountProductGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `LineDiscountProductGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LineDiscountProductGroups<T>, T> {
    return new GetByKeyRequestBuilder<LineDiscountProductGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LineDiscountProductGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LineDiscountProductGroups`.
   */
  update(
    entity: LineDiscountProductGroups<T>
  ): UpdateRequestBuilder<LineDiscountProductGroups<T>, T> {
    return new UpdateRequestBuilder<LineDiscountProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LineDiscountProductGroups`.
   * @param dataAreaId Key property. See {@link LineDiscountProductGroups.dataAreaId}.
   * @param groupCode Key property. See {@link LineDiscountProductGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountProductGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<LineDiscountProductGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LineDiscountProductGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LineDiscountProductGroups` by taking the entity as a parameter.
   */
  delete(
    entity: LineDiscountProductGroups<T>
  ): DeleteRequestBuilder<LineDiscountProductGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<LineDiscountProductGroups<T>, T> {
    return new DeleteRequestBuilder<LineDiscountProductGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LineDiscountProductGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
