/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ExchangeRateBiEntities } from './ExchangeRateBiEntities';

/**
 * Request builder class for operations supported on the {@link ExchangeRateBiEntities} entity.
 */
export class ExchangeRateBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExchangeRateBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ExchangeRateBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ExchangeRateBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ExchangeRateBiEntities<T>, T> {
    return new GetAllRequestBuilder<ExchangeRateBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExchangeRateBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExchangeRateBiEntities`.
   */
  create(
    entity: ExchangeRateBiEntities<T>
  ): CreateRequestBuilder<ExchangeRateBiEntities<T>, T> {
    return new CreateRequestBuilder<ExchangeRateBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExchangeRateBiEntities` entity based on its keys.
   * @param exchangeRateCurrencyPair Key property. See {@link ExchangeRateBiEntities.exchangeRateCurrencyPair}.
   * @param validFrom Key property. See {@link ExchangeRateBiEntities.validFrom}.
   * @param validTo Key property. See {@link ExchangeRateBiEntities.validTo}.
   * @returns A request builder for creating requests to retrieve one `ExchangeRateBiEntities` entity based on its keys.
   */
  getByKey(
    exchangeRateCurrencyPair: DeserializedType<T, 'Edm.Int64'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ExchangeRateBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<ExchangeRateBiEntities<T>, T>(
      this.entityApi,
      {
        ExchangeRateCurrencyPair: exchangeRateCurrencyPair,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExchangeRateBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExchangeRateBiEntities`.
   */
  update(
    entity: ExchangeRateBiEntities<T>
  ): UpdateRequestBuilder<ExchangeRateBiEntities<T>, T> {
    return new UpdateRequestBuilder<ExchangeRateBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateBiEntities`.
   * @param exchangeRateCurrencyPair Key property. See {@link ExchangeRateBiEntities.exchangeRateCurrencyPair}.
   * @param validFrom Key property. See {@link ExchangeRateBiEntities.validFrom}.
   * @param validTo Key property. See {@link ExchangeRateBiEntities.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateBiEntities`.
   */
  delete(
    exchangeRateCurrencyPair: BigNumber,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<ExchangeRateBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExchangeRateBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExchangeRateBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ExchangeRateBiEntities<T>
  ): DeleteRequestBuilder<ExchangeRateBiEntities<T>, T>;
  delete(
    exchangeRateCurrencyPairOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<ExchangeRateBiEntities<T>, T> {
    return new DeleteRequestBuilder<ExchangeRateBiEntities<T>, T>(
      this.entityApi,
      exchangeRateCurrencyPairOrEntity instanceof ExchangeRateBiEntities
        ? exchangeRateCurrencyPairOrEntity
        : {
            ExchangeRateCurrencyPair: exchangeRateCurrencyPairOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
