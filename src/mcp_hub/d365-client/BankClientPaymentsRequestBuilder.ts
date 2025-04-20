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
import { BankClientPayments } from './BankClientPayments';
import { BankClientPaymentDirectionRu } from './BankClientPaymentDirectionRu';

/**
 * Request builder class for operations supported on the {@link BankClientPayments} entity.
 */
export class BankClientPaymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BankClientPayments<T>, T> {
  /**
   * Returns a request builder for querying all `BankClientPayments` entities.
   * @returns A request builder for creating requests to retrieve all `BankClientPayments` entities.
   */
  getAll(): GetAllRequestBuilder<BankClientPayments<T>, T> {
    return new GetAllRequestBuilder<BankClientPayments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BankClientPayments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BankClientPayments`.
   */
  create(
    entity: BankClientPayments<T>
  ): CreateRequestBuilder<BankClientPayments<T>, T> {
    return new CreateRequestBuilder<BankClientPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BankClientPayments` entity based on its keys.
   * @param dataAreaId Key property. See {@link BankClientPayments.dataAreaId}.
   * @param paymentDirection Key property. See {@link BankClientPayments.paymentDirection}.
   * @param documentNumber Key property. See {@link BankClientPayments.documentNumber}.
   * @param documentDate Key property. See {@link BankClientPayments.documentDate}.
   * @param payerAccountNumber Key property. See {@link BankClientPayments.payerAccountNumber}.
   * @param payeeAccountNumber Key property. See {@link BankClientPayments.payeeAccountNumber}.
   * @param amount Key property. See {@link BankClientPayments.amount}.
   * @param currency Key property. See {@link BankClientPayments.currency}.
   * @returns A request builder for creating requests to retrieve one `BankClientPayments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    paymentDirection: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BankClientPaymentDirection_RU'
    >,
    documentNumber: DeserializedType<T, 'Edm.String'>,
    documentDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    payerAccountNumber: DeserializedType<T, 'Edm.String'>,
    payeeAccountNumber: DeserializedType<T, 'Edm.String'>,
    amount: DeserializedType<T, 'Edm.Decimal'>,
    currency: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BankClientPayments<T>, T> {
    return new GetByKeyRequestBuilder<BankClientPayments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PaymentDirection: paymentDirection,
        DocumentNumber: documentNumber,
        DocumentDate: documentDate,
        PayerAccountNumber: payerAccountNumber,
        PayeeAccountNumber: payeeAccountNumber,
        Amount: amount,
        Currency: currency
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BankClientPayments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BankClientPayments`.
   */
  update(
    entity: BankClientPayments<T>
  ): UpdateRequestBuilder<BankClientPayments<T>, T> {
    return new UpdateRequestBuilder<BankClientPayments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BankClientPayments`.
   * @param dataAreaId Key property. See {@link BankClientPayments.dataAreaId}.
   * @param paymentDirection Key property. See {@link BankClientPayments.paymentDirection}.
   * @param documentNumber Key property. See {@link BankClientPayments.documentNumber}.
   * @param documentDate Key property. See {@link BankClientPayments.documentDate}.
   * @param payerAccountNumber Key property. See {@link BankClientPayments.payerAccountNumber}.
   * @param payeeAccountNumber Key property. See {@link BankClientPayments.payeeAccountNumber}.
   * @param amount Key property. See {@link BankClientPayments.amount}.
   * @param currency Key property. See {@link BankClientPayments.currency}.
   * @returns A request builder for creating requests that delete an entity of type `BankClientPayments`.
   */
  delete(
    dataAreaId: string,
    paymentDirection: BankClientPaymentDirectionRu,
    documentNumber: string,
    documentDate: Moment,
    payerAccountNumber: string,
    payeeAccountNumber: string,
    amount: BigNumber,
    currency: string
  ): DeleteRequestBuilder<BankClientPayments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BankClientPayments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BankClientPayments` by taking the entity as a parameter.
   */
  delete(
    entity: BankClientPayments<T>
  ): DeleteRequestBuilder<BankClientPayments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    paymentDirection?: BankClientPaymentDirectionRu,
    documentNumber?: string,
    documentDate?: Moment,
    payerAccountNumber?: string,
    payeeAccountNumber?: string,
    amount?: BigNumber,
    currency?: string
  ): DeleteRequestBuilder<BankClientPayments<T>, T> {
    return new DeleteRequestBuilder<BankClientPayments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BankClientPayments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PaymentDirection: paymentDirection!,
            DocumentNumber: documentNumber!,
            DocumentDate: documentDate!,
            PayerAccountNumber: payerAccountNumber!,
            PayeeAccountNumber: payeeAccountNumber!,
            Amount: amount!,
            Currency: currency!
          }
    );
  }
}
