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
import { ExchangeRatesNonIso } from './ExchangeRatesNonIso';

/**
 * Request builder class for operations supported on the {@link ExchangeRatesNonIso} entity.
 */
export class ExchangeRatesNonIsoRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRatesNonIso<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRatesNonIso` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRatesNonIso` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRatesNonIso<T>, T> {
    return new GetAllRequestBuilder<ExchangeRatesNonIso<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ExchangeRatesNonIso` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRatesNonIso`.
   */
  create(
    entity: ExchangeRatesNonIso<T>
  ): CreateRequestBuilder<ExchangeRatesNonIso<T>, T> {
    return new CreateRequestBuilder<ExchangeRatesNonIso<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRatesNonIso` entity based on its keys.
   * @param rateTypeName Key property. See {@link ExchangeRatesNonIso.rateTypeName}.
   * @param fromCurrency Key property. See {@link ExchangeRatesNonIso.fromCurrency}.
   * @param toCurrency Key property. See {@link ExchangeRatesNonIso.toCurrency}.
   * @param startDate Key property. See {@link ExchangeRatesNonIso.startDate}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRatesNonIso` entity based on its keys.
   */
  getByKey(
    rateTypeName: DeserializedType<T, 'Edm.String'>,
    fromCurrency: DeserializedType<T, 'Edm.String'>,
    toCurrency: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ExchangeRatesNonIso<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRatesNonIso<T>, T>(
      this.entityApi,
      {
        RateTypeName: rateTypeName,
        FromCurrency: fromCurrency,
        ToCurrency: toCurrency,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRatesNonIso`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRatesNonIso`.
   */
  update(
    entity: ExchangeRatesNonIso<T>
  ): UpdateRequestBuilder<ExchangeRatesNonIso<T>, T> {
    return new UpdateRequestBuilder<ExchangeRatesNonIso<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRatesNonIso`.
   * @param rateTypeName Key property. See {@link ExchangeRatesNonIso.rateTypeName}.
   * @param fromCurrency Key property. See {@link ExchangeRatesNonIso.fromCurrency}.
   * @param toCurrency Key property. See {@link ExchangeRatesNonIso.toCurrency}.
   * @param startDate Key property. See {@link ExchangeRatesNonIso.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRatesNonIso`.
   */
  delete(
    rateTypeName: string,
    fromCurrency: string,
    toCurrency: string,
    startDate: Moment
  ): DeleteRequestBuilder<ExchangeRatesNonIso<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRatesNonIso`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRatesNonIso` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRatesNonIso<T>
  ): DeleteRequestBuilder<ExchangeRatesNonIso<T>, T>;
  delete(
    rateTypeNameOrEntity: any,
    fromCurrency?: string,
    toCurrency?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<ExchangeRatesNonIso<T>, T> {
    return new DeleteRequestBuilder<ExchangeRatesNonIso<T>, T>(
      this.entityApi,
      rateTypeNameOrEntity instanceof ExchangeRatesNonIso
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
