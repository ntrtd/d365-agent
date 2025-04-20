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
import { RateCurrencyPairCalculationRules } from './RateCurrencyPairCalculationRules';

/**
 * Request builder class for operations supported on the {@link RateCurrencyPairCalculationRules} entity.
 */
export class RateCurrencyPairCalculationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
  /**
   * Returns a request builder for querying all `RateCurrencyPairCalculationRules` entities.
   * @returns A request builder for creating requests to retrieve all `RateCurrencyPairCalculationRules` entities.
   */
  getAll(): GetAllRequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
    return new GetAllRequestBuilder<RateCurrencyPairCalculationRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RateCurrencyPairCalculationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RateCurrencyPairCalculationRules`.
   */
  create(
    entity: RateCurrencyPairCalculationRules<T>
  ): CreateRequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
    return new CreateRequestBuilder<RateCurrencyPairCalculationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RateCurrencyPairCalculationRules` entity based on its keys.
   * @param exchangeRateType Key property. See {@link RateCurrencyPairCalculationRules.exchangeRateType}.
   * @param company Key property. See {@link RateCurrencyPairCalculationRules.company}.
   * @param fromCurrency Key property. See {@link RateCurrencyPairCalculationRules.fromCurrency}.
   * @param toCurrency Key property. See {@link RateCurrencyPairCalculationRules.toCurrency}.
   * @returns A request builder for creating requests to retrieve one `RateCurrencyPairCalculationRules` entity based on its keys.
   */
  getByKey(
    exchangeRateType: DeserializedType<T, 'Edm.String'>,
    company: DeserializedType<T, 'Edm.String'>,
    fromCurrency: DeserializedType<T, 'Edm.String'>,
    toCurrency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
    return new GetByKeyRequestBuilder<RateCurrencyPairCalculationRules<T>, T>(
      this.entityApi,
      {
        ExchangeRateType: exchangeRateType,
        Company: company,
        FromCurrency: fromCurrency,
        ToCurrency: toCurrency
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RateCurrencyPairCalculationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RateCurrencyPairCalculationRules`.
   */
  update(
    entity: RateCurrencyPairCalculationRules<T>
  ): UpdateRequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
    return new UpdateRequestBuilder<RateCurrencyPairCalculationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RateCurrencyPairCalculationRules`.
   * @param exchangeRateType Key property. See {@link RateCurrencyPairCalculationRules.exchangeRateType}.
   * @param company Key property. See {@link RateCurrencyPairCalculationRules.company}.
   * @param fromCurrency Key property. See {@link RateCurrencyPairCalculationRules.fromCurrency}.
   * @param toCurrency Key property. See {@link RateCurrencyPairCalculationRules.toCurrency}.
   * @returns A request builder for creating requests that delete an entity of type `RateCurrencyPairCalculationRules`.
   */
  delete(
    exchangeRateType: string,
    company: string,
    fromCurrency: string,
    toCurrency: string
  ): DeleteRequestBuilder<RateCurrencyPairCalculationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RateCurrencyPairCalculationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RateCurrencyPairCalculationRules` by taking the entity as a parameter.
   */
  delete(
    entity: RateCurrencyPairCalculationRules<T>
  ): DeleteRequestBuilder<RateCurrencyPairCalculationRules<T>, T>;
  delete(
    exchangeRateTypeOrEntity: any,
    company?: string,
    fromCurrency?: string,
    toCurrency?: string
  ): DeleteRequestBuilder<RateCurrencyPairCalculationRules<T>, T> {
    return new DeleteRequestBuilder<RateCurrencyPairCalculationRules<T>, T>(
      this.entityApi,
      exchangeRateTypeOrEntity instanceof RateCurrencyPairCalculationRules
        ? exchangeRateTypeOrEntity
        : {
            ExchangeRateType: exchangeRateTypeOrEntity!,
            Company: company!,
            FromCurrency: fromCurrency!,
            ToCurrency: toCurrency!
          }
    );
  }
}
