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
import { ItemSettlementRefs } from './ItemSettlementRefs';

/**
 * Request builder class for operations supported on the {@link ItemSettlementRefs} entity.
 */
export class ItemSettlementRefsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSettlementRefs<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSettlementRefs` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSettlementRefs` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSettlementRefs<T>, T> {
    return new GetAllRequestBuilder<ItemSettlementRefs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemSettlementRefs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSettlementRefs`.
   */
  create(
    entity: ItemSettlementRefs<T>
  ): CreateRequestBuilder<ItemSettlementRefs<T>, T> {
    return new CreateRequestBuilder<ItemSettlementRefs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSettlementRefs` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSettlementRefs.dataAreaId}.
   * @param itemId Key property. See {@link ItemSettlementRefs.itemId}.
   * @param itemTypeId Key property. See {@link ItemSettlementRefs.itemTypeId}.
   * @param processingId Key property. See {@link ItemSettlementRefs.processingId}.
   * @returns A request builder for creating requests to retrieve one `ItemSettlementRefs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    itemTypeId: DeserializedType<T, 'Edm.String'>,
    processingId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemSettlementRefs<T>, T> {
    return new GetByKeyRequestBuilder<ItemSettlementRefs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        ItemTypeId: itemTypeId,
        ProcessingId: processingId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSettlementRefs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSettlementRefs`.
   */
  update(
    entity: ItemSettlementRefs<T>
  ): UpdateRequestBuilder<ItemSettlementRefs<T>, T> {
    return new UpdateRequestBuilder<ItemSettlementRefs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSettlementRefs`.
   * @param dataAreaId Key property. See {@link ItemSettlementRefs.dataAreaId}.
   * @param itemId Key property. See {@link ItemSettlementRefs.itemId}.
   * @param itemTypeId Key property. See {@link ItemSettlementRefs.itemTypeId}.
   * @param processingId Key property. See {@link ItemSettlementRefs.processingId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSettlementRefs`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    itemTypeId: string,
    processingId: string
  ): DeleteRequestBuilder<ItemSettlementRefs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSettlementRefs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSettlementRefs` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSettlementRefs<T>
  ): DeleteRequestBuilder<ItemSettlementRefs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    itemTypeId?: string,
    processingId?: string
  ): DeleteRequestBuilder<ItemSettlementRefs<T>, T> {
    return new DeleteRequestBuilder<ItemSettlementRefs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSettlementRefs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            ItemTypeId: itemTypeId!,
            ProcessingId: processingId!
          }
    );
  }
}
