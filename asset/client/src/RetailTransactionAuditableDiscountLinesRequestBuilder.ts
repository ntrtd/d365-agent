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
import { RetailTransactionAuditableDiscountLines } from './RetailTransactionAuditableDiscountLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableDiscountLines} entity.
 */
export class RetailTransactionAuditableDiscountLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableDiscountLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableDiscountLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableDiscountLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAuditableDiscountLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableDiscountLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableDiscountLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableDiscountLines`.
   */
  create(
    entity: RetailTransactionAuditableDiscountLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableDiscountLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableDiscountLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableDiscountLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableDiscountLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableDiscountLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableDiscountLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableDiscountLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableDiscountLines.salesLineNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableDiscountLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableDiscountLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableDiscountLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      StoreNumber: storeNumber,
      RegisterNumber: registerNumber,
      TransactionId: transactionId,
      SalesLineNumber: salesLineNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableDiscountLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableDiscountLines`.
   */
  update(
    entity: RetailTransactionAuditableDiscountLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableDiscountLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableDiscountLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableDiscountLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableDiscountLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableDiscountLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableDiscountLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableDiscountLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableDiscountLines.salesLineNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableDiscountLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableDiscountLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    salesLineNumber: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableDiscountLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableDiscountLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableDiscountLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    salesLineNumber?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableDiscountLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableDiscountLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableDiscountLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            StoreNumber: storeNumber!,
            RegisterNumber: registerNumber!,
            TransactionId: transactionId!,
            SalesLineNumber: salesLineNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
