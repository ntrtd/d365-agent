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
import { RetailTransactionDiscountLines } from './RetailTransactionDiscountLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionDiscountLines} entity.
 */
export class RetailTransactionDiscountLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionDiscountLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionDiscountLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionDiscountLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionDiscountLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionDiscountLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionDiscountLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionDiscountLines`.
   */
  create(
    entity: RetailTransactionDiscountLines<T>
  ): CreateRequestBuilder<RetailTransactionDiscountLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionDiscountLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionDiscountLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionDiscountLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionDiscountLines.transactionNumber}.
   * @param salesLineNumber Key property. See {@link RetailTransactionDiscountLines.salesLineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionDiscountLines.operatingUnitNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionDiscountLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionDiscountLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionDiscountLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionDiscountLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        SalesLineNumber: salesLineNumber,
        OperatingUnitNumber: operatingUnitNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionDiscountLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionDiscountLines`.
   */
  update(
    entity: RetailTransactionDiscountLines<T>
  ): UpdateRequestBuilder<RetailTransactionDiscountLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionDiscountLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDiscountLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionDiscountLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionDiscountLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionDiscountLines.transactionNumber}.
   * @param salesLineNumber Key property. See {@link RetailTransactionDiscountLines.salesLineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionDiscountLines.operatingUnitNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionDiscountLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDiscountLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    salesLineNumber: BigNumber,
    operatingUnitNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionDiscountLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionDiscountLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionDiscountLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionDiscountLines<T>
  ): DeleteRequestBuilder<RetailTransactionDiscountLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    salesLineNumber?: BigNumber,
    operatingUnitNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionDiscountLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionDiscountLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionDiscountLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            SalesLineNumber: salesLineNumber!,
            OperatingUnitNumber: operatingUnitNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
