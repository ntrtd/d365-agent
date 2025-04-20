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
import { ItemSerialNumbers } from './ItemSerialNumbers';

/**
 * Request builder class for operations supported on the {@link ItemSerialNumbers} entity.
 */
export class ItemSerialNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemSerialNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `ItemSerialNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `ItemSerialNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<ItemSerialNumbers<T>, T> {
    return new GetAllRequestBuilder<ItemSerialNumbers<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemSerialNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemSerialNumbers`.
   */
  create(
    entity: ItemSerialNumbers<T>
  ): CreateRequestBuilder<ItemSerialNumbers<T>, T> {
    return new CreateRequestBuilder<ItemSerialNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemSerialNumbers` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemSerialNumbers.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemSerialNumbers.itemNumber}.
   * @param serialNumber Key property. See {@link ItemSerialNumbers.serialNumber}.
   * @returns A request builder for creating requests to retrieve one `ItemSerialNumbers` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    serialNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ItemSerialNumbers<T>, T> {
    return new GetByKeyRequestBuilder<ItemSerialNumbers<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      SerialNumber: serialNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ItemSerialNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemSerialNumbers`.
   */
  update(
    entity: ItemSerialNumbers<T>
  ): UpdateRequestBuilder<ItemSerialNumbers<T>, T> {
    return new UpdateRequestBuilder<ItemSerialNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemSerialNumbers`.
   * @param dataAreaId Key property. See {@link ItemSerialNumbers.dataAreaId}.
   * @param itemNumber Key property. See {@link ItemSerialNumbers.itemNumber}.
   * @param serialNumber Key property. See {@link ItemSerialNumbers.serialNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ItemSerialNumbers`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    serialNumber: string
  ): DeleteRequestBuilder<ItemSerialNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemSerialNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemSerialNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: ItemSerialNumbers<T>
  ): DeleteRequestBuilder<ItemSerialNumbers<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    serialNumber?: string
  ): DeleteRequestBuilder<ItemSerialNumbers<T>, T> {
    return new DeleteRequestBuilder<ItemSerialNumbers<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemSerialNumbers
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            SerialNumber: serialNumber!
          }
    );
  }
}
