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
import { RetailTransactionAuditableChargeLines } from './RetailTransactionAuditableChargeLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableChargeLines} entity.
 */
export class RetailTransactionAuditableChargeLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableChargeLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableChargeLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableChargeLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableChargeLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableChargeLines`.
   */
  create(
    entity: RetailTransactionAuditableChargeLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableChargeLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableChargeLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableChargeLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableChargeLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableChargeLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableChargeLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableChargeLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableChargeLines.salesLineNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableChargeLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableChargeLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableChargeLines<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableChargeLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableChargeLines`.
   */
  update(
    entity: RetailTransactionAuditableChargeLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableChargeLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableChargeLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableChargeLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableChargeLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableChargeLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableChargeLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableChargeLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableChargeLines.salesLineNumber}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableChargeLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableChargeLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    salesLineNumber: BigNumber,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableChargeLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableChargeLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableChargeLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableChargeLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableChargeLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    salesLineNumber?: BigNumber,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableChargeLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableChargeLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableChargeLines
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
