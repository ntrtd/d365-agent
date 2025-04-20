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
import { ExchangeRatesCdsEntity } from './ExchangeRatesCdsEntity';

/**
 * Request builder class for operations supported on the {@link ExchangeRatesCdsEntity} entity.
 */
export class ExchangeRatesCdsEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRatesCdsEntity<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRatesCdsEntity` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRatesCdsEntity` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRatesCdsEntity<T>, T> {
    return new GetAllRequestBuilder<ExchangeRatesCdsEntity<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExchangeRatesCdsEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRatesCdsEntity`.
   */
  create(
    entity: ExchangeRatesCdsEntity<T>
  ): CreateRequestBuilder<ExchangeRatesCdsEntity<T>, T> {
    return new CreateRequestBuilder<ExchangeRatesCdsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRatesCdsEntity` entity based on its keys.
   * @param exchangeRateTypeName Key property. See {@link ExchangeRatesCdsEntity.exchangeRateTypeName}.
   * @param fromCurrencyCode Key property. See {@link ExchangeRatesCdsEntity.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRatesCdsEntity.toCurrencyCode}.
   * @param validFrom Key property. See {@link ExchangeRatesCdsEntity.validFrom}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRatesCdsEntity` entity based on its keys.
   */
  getByKey(
    exchangeRateTypeName: DeserializedType<T, 'Edm.String'>,
    fromCurrencyCode: DeserializedType<T, 'Edm.String'>,
    toCurrencyCode: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ExchangeRatesCdsEntity<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRatesCdsEntity<T>, T>(
      this.entityApi,
      {
        ExchangeRateTypeName: exchangeRateTypeName,
        FromCurrencyCode: fromCurrencyCode,
        ToCurrencyCode: toCurrencyCode,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRatesCdsEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRatesCdsEntity`.
   */
  update(
    entity: ExchangeRatesCdsEntity<T>
  ): UpdateRequestBuilder<ExchangeRatesCdsEntity<T>, T> {
    return new UpdateRequestBuilder<ExchangeRatesCdsEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRatesCdsEntity`.
   * @param exchangeRateTypeName Key property. See {@link ExchangeRatesCdsEntity.exchangeRateTypeName}.
   * @param fromCurrencyCode Key property. See {@link ExchangeRatesCdsEntity.fromCurrencyCode}.
   * @param toCurrencyCode Key property. See {@link ExchangeRatesCdsEntity.toCurrencyCode}.
   * @param validFrom Key property. See {@link ExchangeRatesCdsEntity.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRatesCdsEntity`.
   */
  delete(
    exchangeRateTypeName: string,
    fromCurrencyCode: string,
    toCurrencyCode: string,
    validFrom: Moment
  ): DeleteRequestBuilder<ExchangeRatesCdsEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRatesCdsEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRatesCdsEntity` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRatesCdsEntity<T>
  ): DeleteRequestBuilder<ExchangeRatesCdsEntity<T>, T>;
  delete(
    exchangeRateTypeNameOrEntity: any,
    fromCurrencyCode?: string,
    toCurrencyCode?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<ExchangeRatesCdsEntity<T>, T> {
    return new DeleteRequestBuilder<ExchangeRatesCdsEntity<T>, T>(
      this.entityApi,
      exchangeRateTypeNameOrEntity instanceof ExchangeRatesCdsEntity
        ? exchangeRateTypeNameOrEntity
        : {
            ExchangeRateTypeName: exchangeRateTypeNameOrEntity!,
            FromCurrencyCode: fromCurrencyCode!,
            ToCurrencyCode: toCurrencyCode!,
            ValidFrom: validFrom!
          }
    );
  }
}
