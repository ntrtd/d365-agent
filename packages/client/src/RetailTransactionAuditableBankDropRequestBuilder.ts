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
import { RetailTransactionAuditableBankDrop } from './RetailTransactionAuditableBankDrop';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableBankDrop} entity.
 */
export class RetailTransactionAuditableBankDropRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableBankDrop` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableBankDrop` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableBankDrop` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableBankDrop`.
   */
  create(
    entity: RetailTransactionAuditableBankDrop<T>
  ): CreateRequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableBankDrop` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableBankDrop.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableBankDrop.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableBankDrop.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableBankDrop.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableBankDrop.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableBankDrop.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableBankDrop` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        StoreNumber: storeNumber,
        RegisterNumber: registerNumber,
        TransactionId: transactionId,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableBankDrop`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableBankDrop`.
   */
  update(
    entity: RetailTransactionAuditableBankDrop<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableBankDrop`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableBankDrop.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableBankDrop.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableBankDrop.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableBankDrop.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableBankDrop.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableBankDrop.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableBankDrop`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableBankDrop`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableBankDrop` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableBankDrop<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableBankDrop<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAuditableBankDrop<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableBankDrop
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
