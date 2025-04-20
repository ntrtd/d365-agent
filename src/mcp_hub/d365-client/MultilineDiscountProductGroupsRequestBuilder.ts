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
import { MultilineDiscountProductGroups } from './MultilineDiscountProductGroups';

/**
 * Request builder class for operations supported on the {@link MultilineDiscountProductGroups} entity.
 */
export class MultilineDiscountProductGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MultilineDiscountProductGroups<T>, T> {
  /**
   * Returns a request builder for querying all `MultilineDiscountProductGroups` entities.
   * @returns A request builder for creating requests to retrieve all `MultilineDiscountProductGroups` entities.
   */
  getAll(): GetAllRequestBuilder<MultilineDiscountProductGroups<T>, T> {
    return new GetAllRequestBuilder<MultilineDiscountProductGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MultilineDiscountProductGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MultilineDiscountProductGroups`.
   */
  create(
    entity: MultilineDiscountProductGroups<T>
  ): CreateRequestBuilder<MultilineDiscountProductGroups<T>, T> {
    return new CreateRequestBuilder<MultilineDiscountProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MultilineDiscountProductGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link MultilineDiscountProductGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountProductGroups.groupCode}.
   * @returns A request builder for creating requests to retrieve one `MultilineDiscountProductGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MultilineDiscountProductGroups<T>, T> {
    return new GetByKeyRequestBuilder<MultilineDiscountProductGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MultilineDiscountProductGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MultilineDiscountProductGroups`.
   */
  update(
    entity: MultilineDiscountProductGroups<T>
  ): UpdateRequestBuilder<MultilineDiscountProductGroups<T>, T> {
    return new UpdateRequestBuilder<MultilineDiscountProductGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountProductGroups`.
   * @param dataAreaId Key property. See {@link MultilineDiscountProductGroups.dataAreaId}.
   * @param groupCode Key property. See {@link MultilineDiscountProductGroups.groupCode}.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountProductGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string
  ): DeleteRequestBuilder<MultilineDiscountProductGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MultilineDiscountProductGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MultilineDiscountProductGroups` by taking the entity as a parameter.
   */
  delete(
    entity: MultilineDiscountProductGroups<T>
  ): DeleteRequestBuilder<MultilineDiscountProductGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string
  ): DeleteRequestBuilder<MultilineDiscountProductGroups<T>, T> {
    return new DeleteRequestBuilder<MultilineDiscountProductGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof MultilineDiscountProductGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!
          }
    );
  }
}
