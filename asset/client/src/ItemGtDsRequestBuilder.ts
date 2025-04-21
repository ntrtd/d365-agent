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
import { ItemGtDs } from './ItemGtDs';

/**
 * Request builder class for operations supported on the {@link ItemGtDs} entity.
 */
export class ItemGtDsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemGtDs<T>, T> {
  /**
   * Returns a request builder for querying all `ItemGtDs` entities.
   * @returns A request builder for creating requests to retrieve all `ItemGtDs` entities.
   */
  getAll(): GetAllRequestBuilder<ItemGtDs<T>, T> {
    return new GetAllRequestBuilder<ItemGtDs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemGtDs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemGtDs`.
   */
  create(entity: ItemGtDs<T>): CreateRequestBuilder<ItemGtDs<T>, T> {
    return new CreateRequestBuilder<ItemGtDs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ItemGtDs` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemGtDs.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemGtDs.itemNumber}.
   * @param gtdNumber Key property. See {@link ItemGtDs.gtdNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemGtDs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    gtdNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemGtDs<T>, T> {
    return new GetByKeyRequestBuilder<ItemGtDs<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      GTDNumber: gtdNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemGtDs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemGtDs`.
   */
  update(entity: ItemGtDs<T>): UpdateRequestBuilder<ItemGtDs<T>, T> {
    return new UpdateRequestBuilder<ItemGtDs<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemGtDs`.
   * @param dataAreaId Key property. See {@link ItemGtDs.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemGtDs.itemNumber}.
   * @param gtdNumber Key property. See {@link ItemGtDs.gtdNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemGtDs`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    gtdNumber: string
  ): DeleteRequestBuilder<ItemGtDs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemGtDs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemGtDs` by taking the entity as a parameter.
   */
  delete(entity: ItemGtDs<T>): DeleteRequestBuilder<ItemGtDs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    gtdNumber?: string
  ): DeleteRequestBuilder<ItemGtDs<T>, T> {
    return new DeleteRequestBuilder<ItemGtDs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemGtDs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            GTDNumber: gtdNumber!
          }
    );
  }
}
