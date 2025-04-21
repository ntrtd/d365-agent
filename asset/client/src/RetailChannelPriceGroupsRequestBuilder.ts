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
import { RetailChannelPriceGroups } from './RetailChannelPriceGroups';

/**
 * Request builder class for operations supported on the {@link RetailChannelPriceGroups} entity.
 */
export class RetailChannelPriceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailChannelPriceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailChannelPriceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailChannelPriceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailChannelPriceGroups<T>, T> {
    return new GetAllRequestBuilder<RetailChannelPriceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailChannelPriceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailChannelPriceGroups`.
   */
  create(
    entity: RetailChannelPriceGroups<T>
  ): CreateRequestBuilder<RetailChannelPriceGroups<T>, T> {
    return new CreateRequestBuilder<RetailChannelPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailChannelPriceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailChannelPriceGroups.dataAreaId}.
   * @param groupCode Key property. See {@link RetailChannelPriceGroups.groupCode}.
   * @param retailChannelId Key property. See {@link RetailChannelPriceGroups.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `RetailChannelPriceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupCode: DeserializedType<T, 'Edm.String'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailChannelPriceGroups<T>, T> {
    return new GetByKeyRequestBuilder<RetailChannelPriceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupCode: groupCode,
        RetailChannelId: retailChannelId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailChannelPriceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailChannelPriceGroups`.
   */
  update(
    entity: RetailChannelPriceGroups<T>
  ): UpdateRequestBuilder<RetailChannelPriceGroups<T>, T> {
    return new UpdateRequestBuilder<RetailChannelPriceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailChannelPriceGroups`.
   * @param dataAreaId Key property. See {@link RetailChannelPriceGroups.dataAreaId}.
   * @param groupCode Key property. See {@link RetailChannelPriceGroups.groupCode}.
   * @param retailChannelId Key property. See {@link RetailChannelPriceGroups.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelPriceGroups`.
   */
  delete(
    dataAreaId: string,
    groupCode: string,
    retailChannelId: string
  ): DeleteRequestBuilder<RetailChannelPriceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailChannelPriceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailChannelPriceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailChannelPriceGroups<T>
  ): DeleteRequestBuilder<RetailChannelPriceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupCode?: string,
    retailChannelId?: string
  ): DeleteRequestBuilder<RetailChannelPriceGroups<T>, T> {
    return new DeleteRequestBuilder<RetailChannelPriceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailChannelPriceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupCode: groupCode!,
            RetailChannelId: retailChannelId!
          }
    );
  }
}
