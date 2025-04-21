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
import { RetailTransactionAuditableIncomeExpenseLines } from './RetailTransactionAuditableIncomeExpenseLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableIncomeExpenseLines} entity.
 */
export class RetailTransactionAuditableIncomeExpenseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableIncomeExpenseLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableIncomeExpenseLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAuditableIncomeExpenseLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableIncomeExpenseLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableIncomeExpenseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   */
  create(
    entity: RetailTransactionAuditableIncomeExpenseLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableIncomeExpenseLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableIncomeExpenseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableIncomeExpenseLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionAuditableIncomeExpenseLines<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableIncomeExpenseLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      StoreNumber: storeNumber,
      RegisterNumber: registerNumber,
      TransactionId: transactionId,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   */
  update(
    entity: RetailTransactionAuditableIncomeExpenseLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableIncomeExpenseLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableIncomeExpenseLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableIncomeExpenseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableIncomeExpenseLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableIncomeExpenseLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableIncomeExpenseLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableIncomeExpenseLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableIncomeExpenseLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            StoreNumber: storeNumber!,
            RegisterNumber: registerNumber!,
            TransactionId: transactionId!,
            LineNumber: lineNumber!
          }
    );
  }
}
