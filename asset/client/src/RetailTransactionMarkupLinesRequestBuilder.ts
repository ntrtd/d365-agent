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
import { RetailTransactionMarkupLines } from './RetailTransactionMarkupLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionMarkupLines} entity.
 */
export class RetailTransactionMarkupLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionMarkupLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionMarkupLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionMarkupLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionMarkupLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionMarkupLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionMarkupLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionMarkupLines`.
   */
  create(
    entity: RetailTransactionMarkupLines<T>
  ): CreateRequestBuilder<RetailTransactionMarkupLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionMarkupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionMarkupLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionMarkupLines.dataAreaId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionMarkupLines.salesLineNumber}.
   * @param transactionNumber Key property. See {@link RetailTransactionMarkupLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionMarkupLines.terminal}.
   * @param lineNumber Key property. See {@link RetailTransactionMarkupLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionMarkupLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionMarkupLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionMarkupLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionMarkupLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesLineNumber: salesLineNumber,
        TransactionNumber: transactionNumber,
        Terminal: terminal,
        LineNumber: lineNumber,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionMarkupLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionMarkupLines`.
   */
  update(
    entity: RetailTransactionMarkupLines<T>
  ): UpdateRequestBuilder<RetailTransactionMarkupLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionMarkupLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionMarkupLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionMarkupLines.dataAreaId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionMarkupLines.salesLineNumber}.
   * @param transactionNumber Key property. See {@link RetailTransactionMarkupLines.transactionNumber}.
   * @param terminal Key property. See {@link RetailTransactionMarkupLines.terminal}.
   * @param lineNumber Key property. See {@link RetailTransactionMarkupLines.lineNumber}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionMarkupLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionMarkupLines`.
   */
  delete(
    dataAreaId: string,
    salesLineNumber: BigNumber,
    transactionNumber: string,
    terminal: string,
    lineNumber: BigNumber,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionMarkupLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionMarkupLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionMarkupLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionMarkupLines<T>
  ): DeleteRequestBuilder<RetailTransactionMarkupLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesLineNumber?: BigNumber,
    transactionNumber?: string,
    terminal?: string,
    lineNumber?: BigNumber,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionMarkupLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionMarkupLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionMarkupLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesLineNumber: salesLineNumber!,
            TransactionNumber: transactionNumber!,
            Terminal: terminal!,
            LineNumber: lineNumber!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
