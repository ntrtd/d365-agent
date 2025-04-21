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
import { RetailTransactionFiscalLines } from './RetailTransactionFiscalLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionFiscalLines} entity.
 */
export class RetailTransactionFiscalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionFiscalLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionFiscalLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionFiscalLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionFiscalLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionFiscalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionFiscalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionFiscalLines`.
   */
  create(
    entity: RetailTransactionFiscalLines<T>
  ): CreateRequestBuilder<RetailTransactionFiscalLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionFiscalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionFiscalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionFiscalLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionFiscalLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionFiscalLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionFiscalLines.lineNumber}.
   * @param recordGuid Key property. See {@link RetailTransactionFiscalLines.recordGuid}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionFiscalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    recordGuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<RetailTransactionFiscalLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionFiscalLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber,
        RecordGuid: recordGuid
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionFiscalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionFiscalLines`.
   */
  update(
    entity: RetailTransactionFiscalLines<T>
  ): UpdateRequestBuilder<RetailTransactionFiscalLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionFiscalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionFiscalLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionFiscalLines.operatingUnitNumber}.
   * @param terminal Key property. See {@link RetailTransactionFiscalLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionFiscalLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionFiscalLines.lineNumber}.
   * @param recordGuid Key property. See {@link RetailTransactionFiscalLines.recordGuid}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    recordGuid: string
  ): DeleteRequestBuilder<RetailTransactionFiscalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionFiscalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionFiscalLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionFiscalLines<T>
  ): DeleteRequestBuilder<RetailTransactionFiscalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    recordGuid?: string
  ): DeleteRequestBuilder<RetailTransactionFiscalLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionFiscalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionFiscalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!,
            RecordGuid: recordGuid!
          }
    );
  }
}
