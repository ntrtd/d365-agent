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
import { ItemPriceToleranceGroups } from './ItemPriceToleranceGroups';

/**
 * Request builder class for operations supported on the {@link ItemPriceToleranceGroups} entity.
 */
export class ItemPriceToleranceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemPriceToleranceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ItemPriceToleranceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ItemPriceToleranceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ItemPriceToleranceGroups<T>, T> {
    return new GetAllRequestBuilder<ItemPriceToleranceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemPriceToleranceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemPriceToleranceGroups`.
   */
  create(
    entity: ItemPriceToleranceGroups<T>
  ): CreateRequestBuilder<ItemPriceToleranceGroups<T>, T> {
    return new CreateRequestBuilder<ItemPriceToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemPriceToleranceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemPriceToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link ItemPriceToleranceGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ItemPriceToleranceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemPriceToleranceGroups<T>, T> {
    return new GetByKeyRequestBuilder<ItemPriceToleranceGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GroupId: groupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemPriceToleranceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemPriceToleranceGroups`.
   */
  update(
    entity: ItemPriceToleranceGroups<T>
  ): UpdateRequestBuilder<ItemPriceToleranceGroups<T>, T> {
    return new UpdateRequestBuilder<ItemPriceToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemPriceToleranceGroups`.
   * @param dataAreaId Key property. See {@link ItemPriceToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link ItemPriceToleranceGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemPriceToleranceGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ItemPriceToleranceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemPriceToleranceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemPriceToleranceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ItemPriceToleranceGroups<T>
  ): DeleteRequestBuilder<ItemPriceToleranceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ItemPriceToleranceGroups<T>, T> {
    return new DeleteRequestBuilder<ItemPriceToleranceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemPriceToleranceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
