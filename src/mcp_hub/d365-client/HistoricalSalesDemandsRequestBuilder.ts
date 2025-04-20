/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { HistoricalSalesDemands } from './HistoricalSalesDemands';

/**
 * Request builder class for operations supported on the {@link HistoricalSalesDemands} entity.
 */
export class HistoricalSalesDemandsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HistoricalSalesDemands<T>, T> {
  /**
   * Returns a request builder for querying all `HistoricalSalesDemands` entities.
   * @returns A request builder for creating requests to retrieve all `HistoricalSalesDemands` entities.
   */
  getAll(): GetAllRequestBuilder<HistoricalSalesDemands<T>, T> {
    return new GetAllRequestBuilder<HistoricalSalesDemands<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HistoricalSalesDemands` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HistoricalSalesDemands`.
   */
  create(
    entity: HistoricalSalesDemands<T>
  ): CreateRequestBuilder<HistoricalSalesDemands<T>, T> {
    return new CreateRequestBuilder<HistoricalSalesDemands<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HistoricalSalesDemands` entity based on its keys.
   * @param recordId Key property. See {@link HistoricalSalesDemands.recordId}.
   * @returns A request builder for creating requests to retrieve one `HistoricalSalesDemands` entity based on its keys.
   */
  getByKey(
    recordId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<HistoricalSalesDemands<T>, T> {
    return new GetByKeyRequestBuilder<HistoricalSalesDemands<T>, T>(
      this.entityApi,
      { RecordId: recordId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HistoricalSalesDemands`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HistoricalSalesDemands`.
   */
  update(
    entity: HistoricalSalesDemands<T>
  ): UpdateRequestBuilder<HistoricalSalesDemands<T>, T> {
    return new UpdateRequestBuilder<HistoricalSalesDemands<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HistoricalSalesDemands`.
   * @param recordId Key property. See {@link HistoricalSalesDemands.recordId}.
   * @returns A request builder for creating requests that delete an entity of type `HistoricalSalesDemands`.
   */
  delete(
    recordId: BigNumber
  ): DeleteRequestBuilder<HistoricalSalesDemands<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HistoricalSalesDemands`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HistoricalSalesDemands` by taking the entity as a parameter.
   */
  delete(
    entity: HistoricalSalesDemands<T>
  ): DeleteRequestBuilder<HistoricalSalesDemands<T>, T>;
  delete(
    recordIdOrEntity: any
  ): DeleteRequestBuilder<HistoricalSalesDemands<T>, T> {
    return new DeleteRequestBuilder<HistoricalSalesDemands<T>, T>(
      this.entityApi,
      recordIdOrEntity instanceof HistoricalSalesDemands
        ? recordIdOrEntity
        : { RecordId: recordIdOrEntity! }
    );
  }
}
