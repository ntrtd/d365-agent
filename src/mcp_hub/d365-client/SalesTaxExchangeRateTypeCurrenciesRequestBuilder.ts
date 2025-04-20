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
import { SalesTaxExchangeRateTypeCurrencies } from './SalesTaxExchangeRateTypeCurrencies';
import { TransactionType } from './TransactionType';

/**
 * Request builder class for operations supported on the {@link SalesTaxExchangeRateTypeCurrencies} entity.
 */
export class SalesTaxExchangeRateTypeCurrenciesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTaxExchangeRateTypeCurrencies` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxExchangeRateTypeCurrencies` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
    return new GetAllRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTaxExchangeRateTypeCurrencies` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   */
  create(
    entity: SalesTaxExchangeRateTypeCurrencies<T>
  ): CreateRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
    return new CreateRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTaxExchangeRateTypeCurrencies` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesTaxExchangeRateTypeCurrencies.dataAreaId}.
   * @param ledger Key property. See {@link SalesTaxExchangeRateTypeCurrencies.ledger}.
   * @param currency Key property. See {@link SalesTaxExchangeRateTypeCurrencies.currency}.
   * @param transactionType Key property. See {@link SalesTaxExchangeRateTypeCurrencies.transactionType}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxExchangeRateTypeCurrencies` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    ledger: DeserializedType<T, 'Edm.String'>,
    currency: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TransactionType'
    >
  ): GetByKeyRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Ledger: ledger,
        Currency: currency,
        TransactionType: transactionType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   */
  update(
    entity: SalesTaxExchangeRateTypeCurrencies<T>
  ): UpdateRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
    return new UpdateRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   * @param dataAreaId Key property. See {@link SalesTaxExchangeRateTypeCurrencies.dataAreaId}.
   * @param ledger Key property. See {@link SalesTaxExchangeRateTypeCurrencies.ledger}.
   * @param currency Key property. See {@link SalesTaxExchangeRateTypeCurrencies.currency}.
   * @param transactionType Key property. See {@link SalesTaxExchangeRateTypeCurrencies.transactionType}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   */
  delete(
    dataAreaId: string,
    ledger: string,
    currency: string,
    transactionType: TransactionType
  ): DeleteRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxExchangeRateTypeCurrencies`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxExchangeRateTypeCurrencies` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxExchangeRateTypeCurrencies<T>
  ): DeleteRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    ledger?: string,
    currency?: string,
    transactionType?: TransactionType
  ): DeleteRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T> {
    return new DeleteRequestBuilder<SalesTaxExchangeRateTypeCurrencies<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesTaxExchangeRateTypeCurrencies
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Ledger: ledger!,
            Currency: currency!,
            TransactionType: transactionType!
          }
    );
  }
}
