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
import { ExchangeRateCurrencyPairs } from './ExchangeRateCurrencyPairs';

/**
 * Request builder class for operations supported on the {@link ExchangeRateCurrencyPairs} entity.
 */
export class ExchangeRateCurrencyPairsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRateCurrencyPairs` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRateCurrencyPairs` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
    return new GetAllRequestBuilder<ExchangeRateCurrencyPairs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExchangeRateCurrencyPairs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRateCurrencyPairs`.
   */
  create(
    entity: ExchangeRateCurrencyPairs<T>
  ): CreateRequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
    return new CreateRequestBuilder<ExchangeRateCurrencyPairs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRateCurrencyPairs` entity based on its keys.
   * @param fromCurrencyCode Key property. See {@link ExchangeRateCurrencyPairs.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRateCurrencyPairs.toCurrencyCode}.
   * @param exchangeRateTypeName Key property. See {@link ExchangeRateCurrencyPairs.exchangeRateTypeName}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRateCurrencyPairs` entity based on its keys.
   */
  getByKey(
    fromCurrencyCode: DeserializedType<T, 'Edm.String'>,
    toCurrencyCode: DeserializedType<T, 'Edm.String'>,
    exchangeRateTypeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRateCurrencyPairs<T>, T>(
      this.entityApi,
      {
        FromCurrencyCode: fromCurrencyCode,
        ToCurrencyCode: toCurrencyCode,
        ExchangeRateTypeName: exchangeRateTypeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRateCurrencyPairs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRateCurrencyPairs`.
   */
  update(
    entity: ExchangeRateCurrencyPairs<T>
  ): UpdateRequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
    return new UpdateRequestBuilder<ExchangeRateCurrencyPairs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateCurrencyPairs`.
   * @param fromCurrencyCode Key property. See {@link ExchangeRateCurrencyPairs.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRateCurrencyPairs.toCurrencyCode}.
   * @param exchangeRateTypeName Key property. See {@link ExchangeRateCurrencyPairs.exchangeRateTypeName}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateCurrencyPairs`.
   */
  delete(
    fromCurrencyCode: string,
    toCurrencyCode: string,
    exchangeRateTypeName: string
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateCurrencyPairs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateCurrencyPairs` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRateCurrencyPairs<T>
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairs<T>, T>;
  delete(
    fromCurrencyCodeOrEntity: any,
    toCurrencyCode?: string,
    exchangeRateTypeName?: string
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairs<T>, T> {
    return new DeleteRequestBuilder<ExchangeRateCurrencyPairs<T>, T>(
      this.entityApi,
      fromCurrencyCodeOrEntity instanceof ExchangeRateCurrencyPairs
        ? fromCurrencyCodeOrEntity
        : {
            FromCurrencyCode: fromCurrencyCodeOrEntity!,
            ToCurrencyCode: toCurrencyCode!,
            ExchangeRateTypeName: exchangeRateTypeName!
          }
    );
  }
}
