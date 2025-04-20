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
import { RetailTransactionAuditablePaymentLines } from './RetailTransactionAuditablePaymentLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditablePaymentLines} entity.
 */
export class RetailTransactionAuditablePaymentLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditablePaymentLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditablePaymentLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionAuditablePaymentLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditablePaymentLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditablePaymentLines`.
   */
  create(
    entity: RetailTransactionAuditablePaymentLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditablePaymentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditablePaymentLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditablePaymentLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditablePaymentLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditablePaymentLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditablePaymentLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditablePaymentLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditablePaymentLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditablePaymentLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditablePaymentLines<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionAuditablePaymentLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditablePaymentLines`.
   */
  update(
    entity: RetailTransactionAuditablePaymentLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditablePaymentLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditablePaymentLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditablePaymentLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditablePaymentLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditablePaymentLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditablePaymentLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditablePaymentLines.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditablePaymentLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditablePaymentLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditablePaymentLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditablePaymentLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditablePaymentLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditablePaymentLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditablePaymentLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditablePaymentLines
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
