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
import { ItemBatchAttributes } from './ItemBatchAttributes';

/**
 * Request builder class for operations supported on the {@link ItemBatchAttributes} entity.
 */
export class ItemBatchAttributesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBatchAttributes<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBatchAttributes` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBatchAttributes` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBatchAttributes<T>, T> {
    return new GetAllRequestBuilder<ItemBatchAttributes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemBatchAttributes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBatchAttributes`.
   */
  create(
    entity: ItemBatchAttributes<T>
  ): CreateRequestBuilder<ItemBatchAttributes<T>, T> {
    return new CreateRequestBuilder<ItemBatchAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemBatchAttributes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBatchAttributes.dataAreaId}.
   * @param attributeId Key property. See {@link ItemBatchAttributes.attributeId}.
   * @returns A request builder for creating requests to retrieve one `ItemBatchAttributes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    attributeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemBatchAttributes<T>, T> {
    return new GetByKeyRequestBuilder<ItemBatchAttributes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AttributeId: attributeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBatchAttributes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBatchAttributes`.
   */
  update(
    entity: ItemBatchAttributes<T>
  ): UpdateRequestBuilder<ItemBatchAttributes<T>, T> {
    return new UpdateRequestBuilder<ItemBatchAttributes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributes`.
   * @param dataAreaId Key property. See {@link ItemBatchAttributes.dataAreaId}.
   * @param attributeId Key property. See {@link ItemBatchAttributes.attributeId}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributes`.
   */
  delete(
    dataAreaId: string,
    attributeId: string
  ): DeleteRequestBuilder<ItemBatchAttributes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBatchAttributes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBatchAttributes` by taking the entity as a parameter.
   */
  delete(
    entity: ItemBatchAttributes<T>
  ): DeleteRequestBuilder<ItemBatchAttributes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    attributeId?: string
  ): DeleteRequestBuilder<ItemBatchAttributes<T>, T> {
    return new DeleteRequestBuilder<ItemBatchAttributes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBatchAttributes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AttributeId: attributeId!
          }
    );
  }
}
