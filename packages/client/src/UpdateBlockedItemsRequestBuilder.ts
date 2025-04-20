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
import { UpdateBlockedItems } from './UpdateBlockedItems';

/**
 * Request builder class for operations supported on the {@link UpdateBlockedItems} entity.
 */
export class UpdateBlockedItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UpdateBlockedItems<T>, T> {
  /**
   * Returns a request builder for querying all `UpdateBlockedItems` entities.
   * @returns A request builder for creating requests to retrieve all `UpdateBlockedItems` entities.
   */
  getAll(): GetAllRequestBuilder<UpdateBlockedItems<T>, T> {
    return new GetAllRequestBuilder<UpdateBlockedItems<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `UpdateBlockedItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UpdateBlockedItems`.
   */
  create(
    entity: UpdateBlockedItems<T>
  ): CreateRequestBuilder<UpdateBlockedItems<T>, T> {
    return new CreateRequestBuilder<UpdateBlockedItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UpdateBlockedItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link UpdateBlockedItems.dataAreaId}.
   * @param itemNumber Key property. See {@link UpdateBlockedItems.itemNumber}.
   * @returns A request builder for creating requests to retrieve one `UpdateBlockedItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UpdateBlockedItems<T>, T> {
    return new GetByKeyRequestBuilder<UpdateBlockedItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UpdateBlockedItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UpdateBlockedItems`.
   */
  update(
    entity: UpdateBlockedItems<T>
  ): UpdateRequestBuilder<UpdateBlockedItems<T>, T> {
    return new UpdateRequestBuilder<UpdateBlockedItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UpdateBlockedItems`.
   * @param dataAreaId Key property. See {@link UpdateBlockedItems.dataAreaId}.
   * @param itemNumber Key property. See {@link UpdateBlockedItems.itemNumber}.
   * @returns A request builder for creating requests that delete an entity of type `UpdateBlockedItems`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string
  ): DeleteRequestBuilder<UpdateBlockedItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UpdateBlockedItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UpdateBlockedItems` by taking the entity as a parameter.
   */
  delete(
    entity: UpdateBlockedItems<T>
  ): DeleteRequestBuilder<UpdateBlockedItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string
  ): DeleteRequestBuilder<UpdateBlockedItems<T>, T> {
    return new DeleteRequestBuilder<UpdateBlockedItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof UpdateBlockedItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!
          }
    );
  }
}
