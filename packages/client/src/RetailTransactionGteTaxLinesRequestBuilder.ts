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
import { RetailTransactionGteTaxLines } from './RetailTransactionGteTaxLines';

/**
 * Request builder class for operations supported on the {@link RetailTransactionGteTaxLines} entity.
 */
export class RetailTransactionGteTaxLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailTransactionGteTaxLines<T>, T> {
  /**
   * Returns a request builder for querying all `RetailTransactionGteTaxLines` entities.
   * @returns A request builder for creating requests to retrieve all `RetailTransactionGteTaxLines` entities.
   */
  getAll(): GetAllRequestBuilder<RetailTransactionGteTaxLines<T>, T> {
    return new GetAllRequestBuilder<RetailTransactionGteTaxLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailTransactionGteTaxLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailTransactionGteTaxLines`.
   */
  create(
    entity: RetailTransactionGteTaxLines<T>
  ): CreateRequestBuilder<RetailTransactionGteTaxLines<T>, T> {
    return new CreateRequestBuilder<RetailTransactionGteTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailTransactionGteTaxLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailTransactionGteTaxLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionGteTaxLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionGteTaxLines.transactionNumber}.
   * @param saleLineNum Key property. See {@link RetailTransactionGteTaxLines.saleLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionGteTaxLines.taxComponent}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionGteTaxLines.operatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailTransactionGteTaxLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    terminal: DeserializedType<T, 'Edm.String'>,
    transactionNumber: DeserializedType<T, 'Edm.String'>,
    saleLineNum: DeserializedType<T, 'Edm.Decimal'>,
    taxComponent: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailTransactionGteTaxLines<T>, T> {
    return new GetByKeyRequestBuilder<RetailTransactionGteTaxLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Terminal: terminal,
        TransactionNumber: transactionNumber,
        SaleLineNum: saleLineNum,
        TaxComponent: taxComponent,
        OperatingUnitNumber: operatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailTransactionGteTaxLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailTransactionGteTaxLines`.
   */
  update(
    entity: RetailTransactionGteTaxLines<T>
  ): UpdateRequestBuilder<RetailTransactionGteTaxLines<T>, T> {
    return new UpdateRequestBuilder<RetailTransactionGteTaxLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionGteTaxLines`.
   * @param dataAreaId Key property. See {@link RetailTransactionGteTaxLines.dataAreaId}.
   * @param terminal Key property. See {@link RetailTransactionGteTaxLines.terminal}.
   * @param transactionNumber Key property. See {@link RetailTransactionGteTaxLines.transactionNumber}.
   * @param saleLineNum Key property. See {@link RetailTransactionGteTaxLines.saleLineNum}.
   * @param taxComponent Key property. See {@link RetailTransactionGteTaxLines.taxComponent}.
   * @param operatingUnitNumber Key property. See {@link RetailTransactionGteTaxLines.operatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionGteTaxLines`.
   */
  delete(
    dataAreaId: string,
    terminal: string,
    transactionNumber: string,
    saleLineNum: BigNumber,
    taxComponent: string,
    operatingUnitNumber: string
  ): DeleteRequestBuilder<RetailTransactionGteTaxLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailTransactionGteTaxLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailTransactionGteTaxLines` by taking the entity as a parameter.
   */
  delete(
    entity: RetailTransactionGteTaxLines<T>
  ): DeleteRequestBuilder<RetailTransactionGteTaxLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    terminal?: string,
    transactionNumber?: string,
    saleLineNum?: BigNumber,
    taxComponent?: string,
    operatingUnitNumber?: string
  ): DeleteRequestBuilder<RetailTransactionGteTaxLines<T>, T> {
    return new DeleteRequestBuilder<RetailTransactionGteTaxLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailTransactionGteTaxLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Terminal: terminal!,
            TransactionNumber: transactionNumber!,
            SaleLineNum: saleLineNum!,
            TaxComponent: taxComponent!,
            OperatingUnitNumber: operatingUnitNumber!
          }
    );
  }
}
