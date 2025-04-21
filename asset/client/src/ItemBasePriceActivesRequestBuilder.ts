/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ItemBasePriceActives } from './ItemBasePriceActives';
import { GupBasePriceType } from './GupBasePriceType';

/**
 * Request builder class for operations supported on the {@link ItemBasePriceActives} entity.
 */
export class ItemBasePriceActivesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ItemBasePriceActives<T>, T> {
  /**
   * Returns a request builder for querying all `ItemBasePriceActives` entities.
   * @returns A request builder for creating requests to retrieve all `ItemBasePriceActives` entities.
   */
  getAll(): GetAllRequestBuilder<ItemBasePriceActives<T>, T> {
    return new GetAllRequestBuilder<ItemBasePriceActives<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ItemBasePriceActives` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ItemBasePriceActives`.
   */
  create(
    entity: ItemBasePriceActives<T>
  ): CreateRequestBuilder<ItemBasePriceActives<T>, T> {
    return new CreateRequestBuilder<ItemBasePriceActives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ItemBasePriceActives` entity based on its keys.
   * @param dataAreaId Key property. See {@link ItemBasePriceActives.dataAreaId}.
   * @param itemId Key property. See {@link ItemBasePriceActives.itemId}.
   * @param inventDimId Key property. See {@link ItemBasePriceActives.inventDimId}.
   * @param priceType Key property. See {@link ItemBasePriceActives.priceType}.
   * @param activationDate Key property. See {@link ItemBasePriceActives.activationDate}.
   * @param priceCreatedDateTime Key property. See {@link ItemBasePriceActives.priceCreatedDateTime}.
   * @returns A request builder for creating requests to retrieve one `ItemBasePriceActives` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemId: DeserializedType<T, 'Edm.String'>,
    inventDimId: DeserializedType<T, 'Edm.String'>,
    priceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.GUPBasePriceType'
    >,
    activationDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    priceCreatedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ItemBasePriceActives<T>, T> {
    return new GetByKeyRequestBuilder<ItemBasePriceActives<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemId: itemId,
        InventDimId: inventDimId,
        PriceType: priceType,
        ActivationDate: activationDate,
        PriceCreatedDateTime: priceCreatedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ItemBasePriceActives`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ItemBasePriceActives`.
   */
  update(
    entity: ItemBasePriceActives<T>
  ): UpdateRequestBuilder<ItemBasePriceActives<T>, T> {
    return new UpdateRequestBuilder<ItemBasePriceActives<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ItemBasePriceActives`.
   * @param dataAreaId Key property. See {@link ItemBasePriceActives.dataAreaId}.
   * @param itemId Key property. See {@link ItemBasePriceActives.itemId}.
   * @param inventDimId Key property. See {@link ItemBasePriceActives.inventDimId}.
   * @param priceType Key property. See {@link ItemBasePriceActives.priceType}.
   * @param activationDate Key property. See {@link ItemBasePriceActives.activationDate}.
   * @param priceCreatedDateTime Key property. See {@link ItemBasePriceActives.priceCreatedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `ItemBasePriceActives`.
   */
  delete(
    dataAreaId: string,
    itemId: string,
    inventDimId: string,
    priceType: GupBasePriceType,
    activationDate: Moment,
    priceCreatedDateTime: Moment
  ): DeleteRequestBuilder<ItemBasePriceActives<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ItemBasePriceActives`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ItemBasePriceActives` by taking the entity as a parameter.
   */
  delete(
    entity: ItemBasePriceActives<T>
  ): DeleteRequestBuilder<ItemBasePriceActives<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemId?: string,
    inventDimId?: string,
    priceType?: GupBasePriceType,
    activationDate?: Moment,
    priceCreatedDateTime?: Moment
  ): DeleteRequestBuilder<ItemBasePriceActives<T>, T> {
    return new DeleteRequestBuilder<ItemBasePriceActives<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ItemBasePriceActives
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemId: itemId!,
            InventDimId: inventDimId!,
            PriceType: priceType!,
            ActivationDate: activationDate!,
            PriceCreatedDateTime: priceCreatedDateTime!
          }
    );
  }
}
