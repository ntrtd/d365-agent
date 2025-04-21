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
import { ProductRebateAndDeductionsGroups } from './ProductRebateAndDeductionsGroups';

/**
 * Request builder class for operations supported on the {@link ProductRebateAndDeductionsGroups} entity.
 */
export class ProductRebateAndDeductionsGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductRebateAndDeductionsGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductRebateAndDeductionsGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
    return new GetAllRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductRebateAndDeductionsGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductRebateAndDeductionsGroups`.
   */
  create(
    entity: ProductRebateAndDeductionsGroups<T>
  ): CreateRequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
    return new CreateRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductRebateAndDeductionsGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductRebateAndDeductionsGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductRebateAndDeductionsGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductRebateAndDeductionsGroups`.
   */
  update(
    entity: ProductRebateAndDeductionsGroups<T>
  ): UpdateRequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
    return new UpdateRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductRebateAndDeductionsGroups`.
   * @param dataAreaId Key property. See {@link ProductRebateAndDeductionsGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductRebateAndDeductionsGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductRebateAndDeductionsGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductRebateAndDeductionsGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductRebateAndDeductionsGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductRebateAndDeductionsGroups<T>
  ): DeleteRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProductRebateAndDeductionsGroups<T>, T> {
    return new DeleteRequestBuilder<ProductRebateAndDeductionsGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductRebateAndDeductionsGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
