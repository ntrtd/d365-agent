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
import { ExchangeRateCurrencyPairBiEntities } from './ExchangeRateCurrencyPairBiEntities';

/**
 * Request builder class for operations supported on the {@link ExchangeRateCurrencyPairBiEntities} entity.
 */
export class ExchangeRateCurrencyPairBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRateCurrencyPairBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRateCurrencyPairBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
    return new GetAllRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExchangeRateCurrencyPairBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRateCurrencyPairBiEntities`.
   */
  create(
    entity: ExchangeRateCurrencyPairBiEntities<T>
  ): CreateRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
    return new CreateRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRateCurrencyPairBiEntities` entity based on its keys.
   * @param fromCurrencyCode Key property. See {@link ExchangeRateCurrencyPairBiEntities.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRateCurrencyPairBiEntities.toCurrencyCode}.
   * @param exchangeRateType Key property. See {@link ExchangeRateCurrencyPairBiEntities.exchangeRateType}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRateCurrencyPairBiEntities` entity based on its keys.
   */
  getByKey(
    fromCurrencyCode: DeserializedType<T, 'Edm.String'>,
    toCurrencyCode: DeserializedType<T, 'Edm.String'>,
    exchangeRateType: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>(
      this.entityApi,
      {
        FromCurrencyCode: fromCurrencyCode,
        ToCurrencyCode: toCurrencyCode,
        ExchangeRateType: exchangeRateType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRateCurrencyPairBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRateCurrencyPairBiEntities`.
   */
  update(
    entity: ExchangeRateCurrencyPairBiEntities<T>
  ): UpdateRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
    return new UpdateRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateCurrencyPairBiEntities`.
   * @param fromCurrencyCode Key property. See {@link ExchangeRateCurrencyPairBiEntities.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRateCurrencyPairBiEntities.toCurrencyCode}.
   * @param exchangeRateType Key property. See {@link ExchangeRateCurrencyPairBiEntities.exchangeRateType}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateCurrencyPairBiEntities`.
   */
  delete(
    fromCurrencyCode: string,
    toCurrencyCode: string,
    exchangeRateType: BigNumber
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateCurrencyPairBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateCurrencyPairBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRateCurrencyPairBiEntities<T>
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>;
  delete(
    fromCurrencyCodeOrEntity: any,
    toCurrencyCode?: string,
    exchangeRateType?: BigNumber
  ): DeleteRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T> {
    return new DeleteRequestBuilder<ExchangeRateCurrencyPairBiEntities<T>, T>(
      this.entityApi,
      fromCurrencyCodeOrEntity instanceof ExchangeRateCurrencyPairBiEntities
        ? fromCurrencyCodeOrEntity
        : {
            FromCurrencyCode: fromCurrencyCodeOrEntity!,
            ToCurrencyCode: toCurrencyCode!,
            ExchangeRateType: exchangeRateType!
          }
    );
  }
}
