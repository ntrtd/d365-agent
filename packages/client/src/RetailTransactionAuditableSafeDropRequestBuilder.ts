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
import { RetailTransactionAuditableSafeDrop } from './RetailTransactionAuditableSafeDrop';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableSafeDrop} entity.
 */
export class RetailTransactionAuditableSafeDropRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableSafeDrop` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableSafeDrop` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableSafeDrop` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableSafeDrop`.
   */
  create(
    entity: RetailTransactionAuditableSafeDrop<T>
  ): CreateRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableSafeDrop` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableSafeDrop.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableSafeDrop.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableSafeDrop.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableSafeDrop.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableSafeDrop.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableSafeDrop.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableSafeDrop` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>(
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
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableSafeDrop`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableSafeDrop`.
   */
  update(
    entity: RetailTransactionAuditableSafeDrop<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableSafeDrop`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableSafeDrop.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableSafeDrop.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableSafeDrop.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableSafeDrop.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableSafeDrop.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableSafeDrop.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableSafeDrop`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableSafeDrop`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableSafeDrop` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableSafeDrop<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAuditableSafeDrop<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableSafeDrop
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
