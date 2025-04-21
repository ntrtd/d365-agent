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
import { RetailTransactionAuditableTenderDeclarations } from './RetailTransactionAuditableTenderDeclarations';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableTenderDeclarations} entity.
 */
export class RetailTransactionAuditableTenderDeclarationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableTenderDeclarations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableTenderDeclarations` entities.
   */
  getAll(): GetAllRequestBuilder<
    RetailTransactionAuditableTenderDeclarations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableTenderDeclarations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableTenderDeclarations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableTenderDeclarations`.
   */
  create(
    entity: RetailTransactionAuditableTenderDeclarations<T>
  ): CreateRequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableTenderDeclarations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableTenderDeclarations` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableTenderDeclarations.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableTenderDeclarations.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableTenderDeclarations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    RetailTransactionAuditableTenderDeclarations<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableTenderDeclarations<T>,
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
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableTenderDeclarations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableTenderDeclarations`.
   */
  update(
    entity: RetailTransactionAuditableTenderDeclarations<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableTenderDeclarations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableTenderDeclarations`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableTenderDeclarations.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableTenderDeclarations.transactionId}.
   * @param lineNumber Key property. See {@link RetailTransactionAuditableTenderDeclarations.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableTenderDeclarations`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableTenderDeclarations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableTenderDeclarations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableTenderDeclarations<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableTenderDeclarations<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableTenderDeclarations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableTenderDeclarations
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
