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
import { FiscalTransSalesLineAdjustments } from './FiscalTransSalesLineAdjustments';

/**
 * Request builder class for operations supported on the {@link FiscalTransSalesLineAdjustments} entity.
 */
export class FiscalTransSalesLineAdjustmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
  /**
   * Returns a request builder for querying all `FiscalTransSalesLineAdjustments` entities.
   * @returns A request builder for creating requests to retrieve all `FiscalTransSalesLineAdjustments` entities.
   */
  getAll(): GetAllRequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
    return new GetAllRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FiscalTransSalesLineAdjustments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FiscalTransSalesLineAdjustments`.
   */
  create(
    entity: FiscalTransSalesLineAdjustments<T>
  ): CreateRequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
    return new CreateRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FiscalTransSalesLineAdjustments` entity based on its keys.
   * @param dataAreaId Key property. See {@link FiscalTransSalesLineAdjustments.dataAreaId}.
   * @param store Key property. See {@link FiscalTransSalesLineAdjustments.store}.
   * @param terminal Key property. See {@link FiscalTransSalesLineAdjustments.terminal}.
   * @param transactionId Key property. See {@link FiscalTransSalesLineAdjustments.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link FiscalTransSalesLineAdjustments.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link FiscalTransSalesLineAdjustments.fiscalTransactionRecordGuid}.
   * @param salesTransactionLineNumber Key property. See {@link FiscalTransSalesLineAdjustments.salesTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `FiscalTransSalesLineAdjustments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    store: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    fiscalTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    fiscalTransactionRecordGuid: DeserializedType<T, 'Edm.Guid'>,
    salesTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
    return new GetByKeyRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Store: store,
        Terminal: terminal,
        TransactionId: transactionId,
        FiscalTransactionLineNumber: fiscalTransactionLineNumber,
        FiscalTransactionRecordGuid: fiscalTransactionRecordGuid,
        SalesTransactionLineNumber: salesTransactionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FiscalTransSalesLineAdjustments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FiscalTransSalesLineAdjustments`.
   */
  update(
    entity: FiscalTransSalesLineAdjustments<T>
  ): UpdateRequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
    return new UpdateRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FiscalTransSalesLineAdjustments`.
   * @param dataAreaId Key property. See {@link FiscalTransSalesLineAdjustments.dataAreaId}.
   * @param store Key property. See {@link FiscalTransSalesLineAdjustments.store}.
   * @param terminal Key property. See {@link FiscalTransSalesLineAdjustments.terminal}.
   * @param transactionId Key property. See {@link FiscalTransSalesLineAdjustments.transactionId}.
   * @param fiscalTransactionLineNumber Key property. See {@link FiscalTransSalesLineAdjustments.fiscalTransactionLineNumber}.
   * @param fiscalTransactionRecordGuid Key property. See {@link FiscalTransSalesLineAdjustments.fiscalTransactionRecordGuid}.
   * @param salesTransactionLineNumber Key property. See {@link FiscalTransSalesLineAdjustments.salesTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `FiscalTransSalesLineAdjustments`.
   */
  delete(
    dataAreaId: string,
    store: string,
    terminal: string,
    transactionId: string,
    fiscalTransactionLineNumber: BigNumber,
    fiscalTransactionRecordGuid: string,
    salesTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FiscalTransSalesLineAdjustments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FiscalTransSalesLineAdjustments` by taking the entity as a parameter.
   */
  delete(
    entity: FiscalTransSalesLineAdjustments<T>
  ): DeleteRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    store?: string,
    terminal?: string,
    transactionId?: string,
    fiscalTransactionLineNumber?: BigNumber,
    fiscalTransactionRecordGuid?: string,
    salesTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<FiscalTransSalesLineAdjustments<T>, T> {
    return new DeleteRequestBuilder<FiscalTransSalesLineAdjustments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FiscalTransSalesLineAdjustments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Store: store!,
            Terminal: terminal!,
            TransactionId: transactionId!,
            FiscalTransactionLineNumber: fiscalTransactionLineNumber!,
            FiscalTransactionRecordGuid: fiscalTransactionRecordGuid!,
            SalesTransactionLineNumber: salesTransactionLineNumber!
          }
    );
  }
}
