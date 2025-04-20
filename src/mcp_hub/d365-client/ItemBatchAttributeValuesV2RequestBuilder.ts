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
import { ItemBatchAttributeValuesV2 } from './ItemBatchAttributeValuesV2';

/**
 * Request builder class for operations supported on the {@link ItemBatchAttributeValuesV2} entity.
 */
export class ItemBatchAttributeValuesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBatchAttributeValuesV2` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBatchAttributeValuesV2` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
    return new GetAllRequestBuilder<ItemBatchAttributeValuesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ItemBatchAttributeValuesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBatchAttributeValuesV2`.
   */
  create(
    entity: ItemBatchAttributeValuesV2<T>
  ): CreateRequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
    return new CreateRequestBuilder<ItemBatchAttributeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemBatchAttributeValuesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBatchAttributeValuesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatchAttributeValuesV2.itemNumber}.
   * @param itemBatchNumber Key property. See {@link ItemBatchAttributeValuesV2.itemBatchNumber}.
   * @param itemBatchAttributeId Key property. See {@link ItemBatchAttributeValuesV2.itemBatchAttributeId}.
   * @returns A request builder for creating requests to retrieve one `ItemBatchAttributeValuesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    itemBatchNumber: DeserializedType<T, 'Edm.String'>,
    itemBatchAttributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
    return new GetByKeyRequestBuilder<ItemBatchAttributeValuesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ItemBatchNumber: itemBatchNumber,
        ItemBatchAttributeId: itemBatchAttributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBatchAttributeValuesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBatchAttributeValuesV2`.
   */
  update(
    entity: ItemBatchAttributeValuesV2<T>
  ): UpdateRequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
    return new UpdateRequestBuilder<ItemBatchAttributeValuesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributeValuesV2`.
   * @param dataAreaId Key property. See {@link ItemBatchAttributeValuesV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemBatchAttributeValuesV2.itemNumber}.
   * @param itemBatchNumber Key property. See {@link ItemBatchAttributeValuesV2.itemBatchNumber}.
   * @param itemBatchAttributeId Key property. See {@link ItemBatchAttributeValuesV2.itemBatchAttributeId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributeValuesV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    itemBatchNumber: string,
    itemBatchAttributeId: string
  ): DeleteRequestBuilder<ItemBatchAttributeValuesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributeValuesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributeValuesV2` by taking the entity as a parameter.
   */
  delete(
    entity: ItemBatchAttributeValuesV2<T>
  ): DeleteRequestBuilder<ItemBatchAttributeValuesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    itemBatchNumber?: string,
    itemBatchAttributeId?: string
  ): DeleteRequestBuilder<ItemBatchAttributeValuesV2<T>, T> {
    return new DeleteRequestBuilder<ItemBatchAttributeValuesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBatchAttributeValuesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ItemBatchNumber: itemBatchNumber!,
            ItemBatchAttributeId: itemBatchAttributeId!
          }
    );
  }
}
