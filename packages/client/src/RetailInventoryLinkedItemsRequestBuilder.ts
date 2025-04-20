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
import { RetailInventoryLinkedItems } from './RetailInventoryLinkedItems';

/**
 * Request builder class for operations supported on the {@link RetailInventoryLinkedItems} entity.
 */
export class RetailInventoryLinkedItemsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailInventoryLinkedItems<T>, T> {
  /**
   * Returns a request builder for querying all `RetailInventoryLinkedItems` entities.
   * @returns A request builder for creating requests to retrieve all `RetailInventoryLinkedItems` entities.
   */
  getAll(): GetAllRequestBuilder<RetailInventoryLinkedItems<T>, T> {
    return new GetAllRequestBuilder<RetailInventoryLinkedItems<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailInventoryLinkedItems` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailInventoryLinkedItems`.
   */
  create(
    entity: RetailInventoryLinkedItems<T>
  ): CreateRequestBuilder<RetailInventoryLinkedItems<T>, T> {
    return new CreateRequestBuilder<RetailInventoryLinkedItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailInventoryLinkedItems` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailInventoryLinkedItems.dataAreaId}.
   * @param itemId Key property. See {@link RetailInventoryLinkedItems.itemId}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailInventoryLinkedItems.unitOfMeasureSymbol}.
   * @param linkedItemId Key property. See {@link RetailInventoryLinkedItems.linkedItemId}.
   * @returns A request builder for creating requests to retrieve one `RetailInventoryLinkedItems` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    unitOfMeasureSymbol: DeserializedType<T, 'Edm.String'>,
    linkedItemId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailInventoryLinkedItems<T>, T> {
    return new GetByKeyRequestBuilder<RetailInventoryLinkedItems<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        UnitOfMeasureSymbol: unitOfMeasureSymbol,
        LinkedItemId: linkedItemId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailInventoryLinkedItems`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailInventoryLinkedItems`.
   */
  update(
    entity: RetailInventoryLinkedItems<T>
  ): UpdateRequestBuilder<RetailInventoryLinkedItems<T>, T> {
    return new UpdateRequestBuilder<RetailInventoryLinkedItems<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailInventoryLinkedItems`.
   * @param dataAreaId Key property. See {@link RetailInventoryLinkedItems.dataAreaId}.
   * @param itemId Key property. See {@link RetailInventoryLinkedItems.itemId}.
   * @param unitOfMeasureSymbol Key property. See {@link RetailInventoryLinkedItems.unitOfMeasureSymbol}.
   * @param linkedItemId Key property. See {@link RetailInventoryLinkedItems.linkedItemId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventoryLinkedItems`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    unitOfMeasureSymbol: string,
    linkedItemId: string
  ): DeleteRequestBuilder<RetailInventoryLinkedItems<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailInventoryLinkedItems`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailInventoryLinkedItems` by taking the entity as a parameter.
   */
  delete(
    entity: RetailInventoryLinkedItems<T>
  ): DeleteRequestBuilder<RetailInventoryLinkedItems<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    unitOfMeasureSymbol?: string,
    linkedItemId?: string
  ): DeleteRequestBuilder<RetailInventoryLinkedItems<T>, T> {
    return new DeleteRequestBuilder<RetailInventoryLinkedItems<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailInventoryLinkedItems
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            UnitOfMeasureSymbol: unitOfMeasureSymbol!,
            LinkedItemId: linkedItemId!
          }
    );
  }
}
