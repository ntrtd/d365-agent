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
import { ItemOverUnderDeliveryToleranceGroups } from './ItemOverUnderDeliveryToleranceGroups';

/**
 * Request builder class for operations supported on the {@link ItemOverUnderDeliveryToleranceGroups} entity.
 */
export class ItemOverUnderDeliveryToleranceGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
  /**
   * Returns a request builder for querying all `ItemOverUnderDeliveryToleranceGroups` entities.
   * @returns A request builder for creating requests to retrieve all `ItemOverUnderDeliveryToleranceGroups` entities.
   */
  getAll(): GetAllRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
    return new GetAllRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemOverUnderDeliveryToleranceGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   */
  create(
    entity: ItemOverUnderDeliveryToleranceGroups<T>
  ): CreateRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
    return new CreateRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemOverUnderDeliveryToleranceGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemOverUnderDeliveryToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link ItemOverUnderDeliveryToleranceGroups.groupId}.
   * @returns A request builder for creating requests to retrieve one `ItemOverUnderDeliveryToleranceGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    groupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
    return new GetByKeyRequestBuilder<
      ItemOverUnderDeliveryToleranceGroups<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      GroupId: groupId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   */
  update(
    entity: ItemOverUnderDeliveryToleranceGroups<T>
  ): UpdateRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
    return new UpdateRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   * @param dataAreaId Key property. See {@link ItemOverUnderDeliveryToleranceGroups.dataAreaId}.
   * @param groupId Key property. See {@link ItemOverUnderDeliveryToleranceGroups.groupId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   */
  delete(
    dataAreaId: string,
    groupId: string
  ): DeleteRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemOverUnderDeliveryToleranceGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemOverUnderDeliveryToleranceGroups` by taking the entity as a parameter.
   */
  delete(
    entity: ItemOverUnderDeliveryToleranceGroups<T>
  ): DeleteRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    groupId?: string
  ): DeleteRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T> {
    return new DeleteRequestBuilder<ItemOverUnderDeliveryToleranceGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemOverUnderDeliveryToleranceGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GroupId: groupId!
          }
    );
  }
}
