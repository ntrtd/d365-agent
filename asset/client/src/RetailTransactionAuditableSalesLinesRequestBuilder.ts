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
import { RetailTransactionAuditableSalesLines } from './RetailTransactionAuditableSalesLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableSalesLines} entity.
 */
export class RetailTransactionAuditableSalesLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableSalesLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableSalesLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableSalesLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableSalesLines`.
   */
  create(
    entity: RetailTransactionAuditableSalesLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableSalesLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableSalesLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableSalesLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableSalesLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableSalesLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableSalesLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableSalesLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableSalesLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableSalesLines<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableSalesLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableSalesLines`.
   */
  update(
    entity: RetailTransactionAuditableSalesLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableSalesLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableSalesLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableSalesLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableSalesLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableSalesLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableSalesLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableSalesLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableSalesLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableSalesLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableSalesLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableSalesLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableSalesLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAuditableSalesLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableSalesLines
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
