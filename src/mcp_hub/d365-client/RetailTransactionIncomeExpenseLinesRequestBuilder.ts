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
import { RetailTransactionIncomeExpenseLines } from './RetailTransactionIncomeExpenseLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionIncomeExpenseLines} entity.
 */
export class RetailTransactionIncomeExpenseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionIncomeExpenseLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionIncomeExpenseLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionIncomeExpenseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionIncomeExpenseLines`.
   */
  create(
    entity: RetailTransactionIncomeExpenseLines<T>
  ): CreateRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionIncomeExpenseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionIncomeExpenseLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionIncomeExpenseLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionIncomeExpenseLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionIncomeExpenseLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionIncomeExpenseLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionIncomeExpenseLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionIncomeExpenseLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Terminal: terminal,
      TransactionNumber: transactionNumber,
      LineNumber: lineNumber,
      OperatingUnitNumber: operatingUnitNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionIncomeExpenseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionIncomeExpenseLines`.
   */
  update(
    entity: RetailTransactionIncomeExpenseLines<T>
  ): UpdateRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionIncomeExpenseLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionIncomeExpenseLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionIncomeExpenseLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionIncomeExpenseLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionIncomeExpenseLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionIncomeExpenseLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionIncomeExpenseLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionIncomeExpenseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionIncomeExpenseLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionIncomeExpenseLines<T>
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionIncomeExpenseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionIncomeExpenseLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
