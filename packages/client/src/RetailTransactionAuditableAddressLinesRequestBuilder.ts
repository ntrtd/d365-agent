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
import { RetailTransactionAuditableAddressLines } from './RetailTransactionAuditableAddressLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableAddressLines} entity.
 */
export class RetailTransactionAuditableAddressLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableAddressLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableAddressLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
    return new GetAllRequestBuilder<
      RetailTransactionAuditableAddressLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableAddressLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableAddressLines`.
   */
  create(
    entity: RetailTransactionAuditableAddressLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
    return new CreateRequestBuilder<
      RetailTransactionAuditableAddressLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableAddressLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableAddressLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableAddressLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableAddressLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableAddressLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableAddressLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableAddressLines.salesLineNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableAddressLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
    return new GetByKeyRequestBuilder<
      RetailTransactionAuditableAddressLines<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      OperatingUnitNumber: operatingUnitNumber,
      StoreNumber: storeNumber,
      RegisterNumber: registerNumber,
      TransactionId: transactionId,
      SalesLineNumber: salesLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableAddressLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableAddressLines`.
   */
  update(
    entity: RetailTransactionAuditableAddressLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
    return new UpdateRequestBuilder<
      RetailTransactionAuditableAddressLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableAddressLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableAddressLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableAddressLines.operatingUnitNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableAddressLines.storeNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableAddressLines.registerNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableAddressLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableAddressLines.salesLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableAddressLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeNumber: string,
    registerNumber: string,
    transactionId: string,
    salesLineNumber: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableAddressLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableAddressLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableAddressLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableAddressLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableAddressLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeNumber?: string,
    registerNumber?: string,
    transactionId?: string,
    salesLineNumber?: BigNumber
  ): DeleteRequestBuilder<RetailTransactionAuditableAddressLines<T>, T> {
    return new DeleteRequestBuilder<
      RetailTransactionAuditableAddressLines<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableAddressLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            StoreNumber: storeNumber!,
            RegisterNumber: registerNumber!,
            TransactionId: transactionId!,
            SalesLineNumber: salesLineNumber!
          }
    );
  }
}
