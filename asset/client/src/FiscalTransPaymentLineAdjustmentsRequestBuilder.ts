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
import { FiscalTransPaymentLineAdjustments } from './FiscalTransPaymentLineAdjustments';

/**
 * Request builder class for operations supported on the {@link FiscalTransPaymentLineAdjustments} entity.
 */
export class FiscalTransPaymentLineAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalTransPaymentLineAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalTransPaymentLineAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
    return new GetAllRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalTransPaymentLineAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalTransPaymentLineAdjustments`.
   */
  create(
    entity: FiscalTransPaymentLineAdjustments<T>
  ): CreateRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
    return new CreateRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalTransPaymentLineAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalTransPaymentLineAdjustments.dataAreaId}.
   * @param store Key property. See {@link FiscalTransPaymentLineAdjustments.store}.
   * @param terminal Key property. See {@link FiscalTransPaymentLineAdjustments.terminal}.
   * @param transactionId Key property. See {@link FiscalTransPaymentLineAdjustments.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link FiscalTransPaymentLineAdjustments.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link FiscalTransPaymentLineAdjustments.fiscalTransactionRecordGuid}.
   * @param paymentTransactionLineNumber Key property. See {@link FiscalTransPaymentLineAdjustments.paymentTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalTransPaymentLineAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>,
    paymentTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Store: store,
        Terminal: terminal,
        TransactionId: transactionId,
        FiscalTransactionLineNumber: fiscalTransactionLineNumber,
        FiscalTransactionRecordGuid: fiscalTransactionRecordGuid,
        PaymentTransactionLineNumber: paymentTransactionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalTransPaymentLineAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalTransPaymentLineAdjustments`.
   */
  update(
    entity: FiscalTransPaymentLineAdjustments<T>
  ): UpdateRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
    return new UpdateRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalTransPaymentLineAdjustments`.
   * @param dataAreaId Key property. See {@link FiscalTransPaymentLineAdjustments.dataAreaId}.
   * @param store Key property. See {@link FiscalTransPaymentLineAdjustments.store}.
   * @param terminal Key property. See {@link FiscalTransPaymentLineAdjustments.terminal}.
   * @param transactionId Key property. See {@link FiscalTransPaymentLineAdjustments.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link FiscalTransPaymentLineAdjustments.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link FiscalTransPaymentLineAdjustments.fiscalTransactionRecordGuid}.
   * @param paymentTransactionLineNumber Key property. See {@link FiscalTransPaymentLineAdjustments.paymentTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalTransPaymentLineAdjustments`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    fiscalTransactionLineNumber: BigNumber,
    fiscalTransactionRecordGuid: string,
    paymentTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalTransPaymentLineAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalTransPaymentLineAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalTransPaymentLineAdjustments<T>
  ): DeleteRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    fiscalTransactionLineNumber?: BigNumber,
    fiscalTransactionRecordGuid?: string,
    paymentTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T> {
    return new DeleteRequestBuilder<FiscalTransPaymentLineAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalTransPaymentLineAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            FiscalTransactionLineNumber: fiscalTransactionLineNumber!,
            FiscalTransactionRecordGuid: fiscalTransactionRecordGuid!,
            PaymentTransactionLineNumber: paymentTransactionLineNumber!
          }
    );
  }
}
