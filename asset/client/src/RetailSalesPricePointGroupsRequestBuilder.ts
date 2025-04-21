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
import { RetailSalesPricePointGroups } from './RetailSalesPricePointGroups';

/**
 * Request builder class for operations supported on the {@link RetailSalesPricePointGroups} entity.
 */
export class RetailSalesPricePointGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailSalesPricePointGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailSalesPricePointGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailSalesPricePointGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailSalesPricePointGroups<T>, T> {
    return new GetAllRequestBuilder<RetailSalesPricePointGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailSalesPricePointGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailSalesPricePointGroups`.
   */
  create(
    entity: RetailSalesPricePointGroups<T>
  ): CreateRequestBuilder<RetailSalesPricePointGroups<T>, T> {
    return new CreateRequestBuilder<RetailSalesPricePointGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailSalesPricePointGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailSalesPricePointGroups.dataAreaId}.
   * @param groupId Key property. See {@link RetailSalesPricePointGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `RetailSalesPricePointGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailSalesPricePointGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailSalesPricePointGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailSalesPricePointGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailSalesPricePointGroups`.
   */
  update(
    entity: RetailSalesPricePointGroups<T>
  ): UpdateRequestBuilder<RetailSalesPricePointGroups<T>, T> {
    return new UpdateRequestBuilder<RetailSalesPricePointGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailSalesPricePointGroups`.
   * @param dataAreaId Key property. See {@link RetailSalesPricePointGroups.dataAreaId}.
   * @param groupId Key property. See {@link RetailSalesPricePointGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesPricePointGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<RetailSalesPricePointGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailSalesPricePointGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailSalesPricePointGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailSalesPricePointGroups<T>
  ): DeleteRequestBuilder<RetailSalesPricePointGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<RetailSalesPricePointGroups<T>, T> {
    return new DeleteRequestBuilder<RetailSalesPricePointGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailSalesPricePointGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
