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
import { StockTransferPrices } from './StockTransferPrices';

/**
 * Request builder class for operations supported on the {@link StockTransferPrices} entity.
 */
export class StockTransferPricesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StockTransferPrices<T>, T> {
  /**
   * Returns a request builder for querying all `StockTransferPrices` entities.
   * @returns A request builder for creating requests to retrieve all `StockTransferPrices` entities.
   */
  getAll(): GetAllRequestBuilder<StockTransferPrices<T>, T> {
    return new GetAllRequestBuilder<StockTransferPrices<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StockTransferPrices` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StockTransferPrices`.
   */
  create(
    entity: StockTransferPrices<T>
  ): CreateRequestBuilder<StockTransferPrices<T>, T> {
    return new CreateRequestBuilder<StockTransferPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StockTransferPrices` entity based on its keys.
   * @param dataAreaId Key property. See {@link StockTransferPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link StockTransferPrices.itemNumber}.
   * @param fromWarehouse Key property. See {@link StockTransferPrices.fromWarehouse}.
   * @param toWarehouse Key property. See {@link StockTransferPrices.toWarehouse}.
   * @param fromDate Key property. See {@link StockTransferPrices.fromDate}.
   * @param toDate Key property. See {@link StockTransferPrices.toDate}.
   * @returns A request builder for creating requests to retrieve one `StockTransferPrices` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    fromWarehouse: DeserializedType<T, 'Edm.String'>,
    toWarehouse: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    toDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<StockTransferPrices<T>, T> {
    return new GetByKeyRequestBuilder<StockTransferPrices<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        FromWarehouse: fromWarehouse,
        ToWarehouse: toWarehouse,
        FromDate: fromDate,
        ToDate: toDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StockTransferPrices`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StockTransferPrices`.
   */
  update(
    entity: StockTransferPrices<T>
  ): UpdateRequestBuilder<StockTransferPrices<T>, T> {
    return new UpdateRequestBuilder<StockTransferPrices<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StockTransferPrices`.
   * @param dataAreaId Key property. See {@link StockTransferPrices.dataAreaId}.
   * @param itemNumber Key property. See {@link StockTransferPrices.itemNumber}.
   * @param fromWarehouse Key property. See {@link StockTransferPrices.fromWarehouse}.
   * @param toWarehouse Key property. See {@link StockTransferPrices.toWarehouse}.
   * @param fromDate Key property. See {@link StockTransferPrices.fromDate}.
   * @param toDate Key property. See {@link StockTransferPrices.toDate}.
   * @returns A request builder for creating requests that delete an entity of type `StockTransferPrices`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    fromWarehouse: string,
    toWarehouse: string,
    fromDate: Moment,
    toDate: Moment
  ): DeleteRequestBuilder<StockTransferPrices<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StockTransferPrices`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StockTransferPrices` by taking the entity as a parameter.
   */
  delete(
    entity: StockTransferPrices<T>
  ): DeleteRequestBuilder<StockTransferPrices<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    fromWarehouse?: string,
    toWarehouse?: string,
    fromDate?: Moment,
    toDate?: Moment
  ): DeleteRequestBuilder<StockTransferPrices<T>, T> {
    return new DeleteRequestBuilder<StockTransferPrices<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StockTransferPrices
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            FromWarehouse: fromWarehouse!,
            ToWarehouse: toWarehouse!,
            FromDate: fromDate!,
            ToDate: toDate!
          }
    );
  }
}
