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
import { RetailTransactionAuditableTaxLines } from './RetailTransactionAuditableTaxLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionAuditableTaxLines} entity.
 */
export class RetailTransactionAuditableTaxLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionAuditableTaxLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionAuditableTaxLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionAuditableTaxLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionAuditableTaxLines`.
   */
  create(
    entity: RetailTransactionAuditableTaxLines<T>
  ): CreateRequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionAuditableTaxLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableTaxLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableTaxLines.operatingUnitNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableTaxLines.registerNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableTaxLines.storeNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableTaxLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableTaxLines.salesLineNumber}.
   * @param taxCode Key property. See {@link RetailTransactionAuditableTaxLines.taxCode}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionAuditableTaxLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    registerNumber: DeserializedType<T, 'Edm.String'>,
    storeNumber: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        RegisterNumber: registerNumber,
        StoreNumber: storeNumber,
        TransactionId: transactionId,
        SalesLineNumber: salesLineNumber,
        TaxCode: taxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionAuditableTaxLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionAuditableTaxLines`.
   */
  update(
    entity: RetailTransactionAuditableTaxLines<T>
  ): UpdateRequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableTaxLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionAuditableTaxLines.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionAuditableTaxLines.operatingUnitNumber}.
   * @param registerNumber Key property. See {@link RetailTransactionAuditableTaxLines.registerNumber}.
   * @param storeNumber Key property. See {@link RetailTransactionAuditableTaxLines.storeNumber}.
   * @param transactionId Key property. See {@link RetailTransactionAuditableTaxLines.transactionId}.
   * @param salesLineNumber Key property. See {@link RetailTransactionAuditableTaxLines.salesLineNumber}.
   * @param taxCode Key property. See {@link RetailTransactionAuditableTaxLines.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableTaxLines`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    registerNumber: string,
    storeNumber: string,
    transactionId: string,
    salesLineNumber: BigNumber,
    taxCode: string
  ): DeleteRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionAuditableTaxLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionAuditableTaxLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionAuditableTaxLines<T>
  ): DeleteRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    registerNumber?: string,
    storeNumber?: string,
    transactionId?: string,
    salesLineNumber?: BigNumber,
    taxCode?: string
  ): DeleteRequestBuilder<RetailTransactionAuditableTaxLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionAuditableTaxLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionAuditableTaxLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            RegisterNumber: registerNumber!,
            StoreNumber: storeNumber!,
            TransactionId: transactionId!,
            SalesLineNumber: salesLineNumber!,
            TaxCode: taxCode!
          }
    );
  }
}
