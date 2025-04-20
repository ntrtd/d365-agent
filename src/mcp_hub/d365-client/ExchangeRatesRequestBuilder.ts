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
import { ExchangeRates } from './ExchangeRates';

/**
 * Request builder class for operations supported on the {@link ExchangeRates} entity.
 */
export class ExchangeRatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRates<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRates` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRates` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRates<T>, T> {
    return new GetAllRequestBuilder<ExchangeRates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExchangeRates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRates`.
   */
  create(entity: ExchangeRates<T>): CreateRequestBuilder<ExchangeRates<T>, T> {
    return new CreateRequestBuilder<ExchangeRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRates` entity based on its keys.
   * @param rateTypeName Key property. See {@link ExchangeRates.rateTypeName}.
   * @param fromCurrency Key property. See {@link ExchangeRates.fromCurrency}.
   * @param toCurrency Key property. See {@link ExchangeRates.toCurrency}.
   * @param startDate Key property. See {@link ExchangeRates.startDate}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRates` entity based on its keys.
   */
  getByKey(
    rateTypeName: DeserializedType<T, 'Edm.String'>,
    fromCurrency: DeserializedType<T, 'Edm.String'>,
    toCurrency: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ExchangeRates<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRates<T>, T>(this.entityApi, {
      RateTypeName: rateTypeName,
      FromCurrency: fromCurrency,
      ToCurrency: toCurrency,
      StartDate: startDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRates`.
   */
  update(entity: ExchangeRates<T>): UpdateRequestBuilder<ExchangeRates<T>, T> {
    return new UpdateRequestBuilder<ExchangeRates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRates`.
   * @param rateTypeName Key property. See {@link ExchangeRates.rateTypeName}.
   * @param fromCurrency Key property. See {@link ExchangeRates.fromCurrency}.
   * @param toCurrency Key property. See {@link ExchangeRates.toCurrency}.
   * @param startDate Key property. See {@link ExchangeRates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRates`.
   */
  delete(
    rateTypeName: string,
    fromCurrency: string,
    toCurrency: string,
    startDate: Moment
  ): DeleteRequestBuilder<ExchangeRates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRates` by taking the entity as a parameter.
   */
  delete(entity: ExchangeRates<T>): DeleteRequestBuilder<ExchangeRates<T>, T>;
  delete(
    rateTypeNameOrEntity: any,
    fromCurrency?: string,
    toCurrency?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<ExchangeRates<T>, T> {
    return new DeleteRequestBuilder<ExchangeRates<T>, T>(
      this.entityApi,
      rateTypeNameOrEntity instanceof ExchangeRates
        ? rateTypeNameOrEntity
        : {
            RateTypeName: rateTypeNameOrEntity!,
            FromCurrency: fromCurrency!,
            ToCurrency: toCurrency!,
            StartDate: startDate!
          }
    );
  }
}
