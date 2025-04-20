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
import { RetailTransactionSalesLines } from './RetailTransactionSalesLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionSalesLines} entity.
 */
export class RetailTransactionSalesLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionSalesLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionSalesLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionSalesLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionSalesLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionSalesLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionSalesLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionSalesLines`.
   */
  create(
    entity: RetailTransactionSalesLines<T>
  ): CreateRequestBuilder<RetailTransactionSalesLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionSalesLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionSalesLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSalesLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionSalesLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSalesLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionSalesLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionSalesLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionSalesLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionSalesLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionSalesLines`.
   */
  update(
    entity: RetailTransactionSalesLines<T>
  ): UpdateRequestBuilder<RetailTransactionSalesLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionSalesLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionSalesLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionSalesLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionSalesLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionSalesLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionSalesLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionSalesLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionSalesLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionSalesLines<T>
  ): DeleteRequestBuilder<RetailTransactionSalesLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionSalesLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionSalesLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionSalesLines
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
