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
import { RetailTransactionTaxLines } from './RetailTransactionTaxLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionTaxLines} entity.
 */
export class RetailTransactionTaxLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionTaxLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionTaxLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionTaxLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionTaxLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionTaxLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionTaxLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionTaxLines`.
   */
  create(
    entity: RetailTransactionTaxLines<T>
  ): CreateRequestBuilder<RetailTransactionTaxLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionTaxLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionTaxLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionTaxLines.transactionNumber}.
   * @param salesLineNumber Key property. See {@link RetailTransactionTaxLines.salesLineNumber}.
   * @param taxCode Key property. See {@link RetailTransactionTaxLines.taxCode}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionTaxLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionTaxLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    salesLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionTaxLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionTaxLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        SalesLineNumber: salesLineNumber,
        TaxCode: taxCode,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionTaxLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionTaxLines`.
   */
  update(
    entity: RetailTransactionTaxLines<T>
  ): UpdateRequestBuilder<RetailTransactionTaxLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionTaxLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionTaxLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionTaxLines.transactionNumber}.
   * @param salesLineNumber Key property. See {@link RetailTransactionTaxLines.salesLineNumber}.
   * @param taxCode Key property. See {@link RetailTransactionTaxLines.taxCode}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionTaxLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    salesLineNumber: BigNumber,
    taxCode: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionTaxLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionTaxLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionTaxLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionTaxLines<T>
  ): DeleteRequestBuilder<RetailTransactionTaxLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    salesLineNumber?: BigNumber,
    taxCode?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionTaxLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionTaxLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionTaxLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            SalesLineNumber: salesLineNumber!,
            TaxCode: taxCode!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
