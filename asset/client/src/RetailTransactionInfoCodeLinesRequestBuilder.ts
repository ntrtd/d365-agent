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
import { RetailTransactionInfoCodeLines } from './RetailTransactionInfoCodeLines';
import { RetailInfocodeTransType } from './RetailInfocodeTransType';

/**
 * Request builder class for operations supported on the {@link RetailTransactionInfoCodeLines} entity.
 */
export class RetailTransactionInfoCodeLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionInfoCodeLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionInfoCodeLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionInfoCodeLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionInfoCodeLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionInfoCodeLines`.
   */
  create(
    entity: RetailTransactionInfoCodeLines<T>
  ): CreateRequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionInfoCodeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionInfoCodeLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionInfoCodeLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionInfoCodeLines.terminal}.
   * @param transactionType Key property. See {@link RetailTransactionInfoCodeLines.transactionType}.
   * @param transactionNumber Key property. See {@link RetailTransactionInfoCodeLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionInfoCodeLines.lineNumber}.
   * @param infoCodeId Key property. See {@link RetailTransactionInfoCodeLines.infoCodeId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionInfoCodeLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionInfoCodeLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RetailInfocodeTransType'
    >,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    infoCodeId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionInfoCodeLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionType: transactionType,
        TransactionNumber: transactionNumber,
        LineNumber: lineNumber,
        InfoCodeId: infoCodeId,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionInfoCodeLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionInfoCodeLines`.
   */
  update(
    entity: RetailTransactionInfoCodeLines<T>
  ): UpdateRequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionInfoCodeLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionInfoCodeLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionInfoCodeLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionInfoCodeLines.terminal}.
   * @param transactionType Key property. See {@link RetailTransactionInfoCodeLines.transactionType}.
   * @param transactionNumber Key property. See {@link RetailTransactionInfoCodeLines.transactionNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionInfoCodeLines.lineNumber}.
   * @param infoCodeId Key property. See {@link RetailTransactionInfoCodeLines.infoCodeId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionInfoCodeLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionInfoCodeLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionType: RetailInfocodeTransType,
    transactionNumber: string,
    lineNumber: BigNumber,
    infoCodeId: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionInfoCodeLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionInfoCodeLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionInfoCodeLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionInfoCodeLines<T>
  ): DeleteRequestBuilder<RetailTransactionInfoCodeLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionType?: RetailInfocodeTransType,
    transactionNumber?: string,
    lineNumber?: BigNumber,
    infoCodeId?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionInfoCodeLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionInfoCodeLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionInfoCodeLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionType: transactionType!,
            TransactionNumber: transactionNumber!,
            LineNumber: lineNumber!,
            InfoCodeId: infoCodeId!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
