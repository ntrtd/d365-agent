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
import { ProductLandedCostTypeGroups } from './ProductLandedCostTypeGroups';

/**
 * Request builder class for operations supported on the {@link ProductLandedCostTypeGroups} entity.
 */
export class ProductLandedCostTypeGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductLandedCostTypeGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ProductLandedCostTypeGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ProductLandedCostTypeGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ProductLandedCostTypeGroups<T>, T> {
    return new GetAllRequestBuilder<ProductLandedCostTypeGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductLandedCostTypeGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductLandedCostTypeGroups`.
   */
  create(
    entity: ProductLandedCostTypeGroups<T>
  ): CreateRequestBuilder<ProductLandedCostTypeGroups<T>, T> {
    return new CreateRequestBuilder<ProductLandedCostTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductLandedCostTypeGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductLandedCostTypeGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductLandedCostTypeGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ProductLandedCostTypeGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductLandedCostTypeGroups<T>, T> {
    return new GetByKeyRequestBuilder<ProductLandedCostTypeGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductLandedCostTypeGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductLandedCostTypeGroups`.
   */
  update(
    entity: ProductLandedCostTypeGroups<T>
  ): UpdateRequestBuilder<ProductLandedCostTypeGroups<T>, T> {
    return new UpdateRequestBuilder<ProductLandedCostTypeGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductLandedCostTypeGroups`.
   * @param dataAreaId Key property. See {@link ProductLandedCostTypeGroups.dataAreaId}.
   * @param groupId Key property. See {@link ProductLandedCostTypeGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductLandedCostTypeGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ProductLandedCostTypeGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductLandedCostTypeGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductLandedCostTypeGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ProductLandedCostTypeGroups<T>
  ): DeleteRequestBuilder<ProductLandedCostTypeGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ProductLandedCostTypeGroups<T>, T> {
    return new DeleteRequestBuilder<ProductLandedCostTypeGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductLandedCostTypeGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
