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
import { RetailTransactionPaymentLines } from './RetailTransactionPaymentLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionPaymentLines} entity.
 */
export class RetailTransactionPaymentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionPaymentLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionPaymentLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionPaymentLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionPaymentLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionPaymentLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionPaymentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionPaymentLines`.
   */
  create(
    entity: RetailTransactionPaymentLines<T>
  ): CreateRequestBuilder<RetailTransactionPaymentLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionPaymentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionPaymentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionPaymentLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionPaymentLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionPaymentLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionPaymentLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionPaymentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionPaymentLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionPaymentLines<T>, T>(
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
   * Returns a request builder for updating an entity of type `RetailTransactionPaymentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionPaymentLines`.
   */
  update(
    entity: RetailTransactionPaymentLines<T>
  ): UpdateRequestBuilder<RetailTransactionPaymentLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionPaymentLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionPaymentLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionPaymentLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionPaymentLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionPaymentLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionPaymentLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionPaymentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionPaymentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionPaymentLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionPaymentLines<T>
  ): DeleteRequestBuilder<RetailTransactionPaymentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionPaymentLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionPaymentLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionPaymentLines
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
