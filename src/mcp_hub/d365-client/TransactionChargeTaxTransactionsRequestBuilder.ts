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
import { TransactionChargeTaxTransactions } from './TransactionChargeTaxTransactions';

/**
 * Request builder class for operations supported on the {@link TransactionChargeTaxTransactions} entity.
 */
export class TransactionChargeTaxTransactionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransactionChargeTaxTransactions<T>, T> {
  /**
   * Returns a request builder for querying all `TransactionChargeTaxTransactions` entities.
   * @returns A request builder for creating requests to retrieve all `TransactionChargeTaxTransactions` entities.
   */
  getAll(): GetAllRequestBuilder<TransactionChargeTaxTransactions<T>, T> {
    return new GetAllRequestBuilder<TransactionChargeTaxTransactions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransactionChargeTaxTransactions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransactionChargeTaxTransactions`.
   */
  create(
    entity: TransactionChargeTaxTransactions<T>
  ): CreateRequestBuilder<TransactionChargeTaxTransactions<T>, T> {
    return new CreateRequestBuilder<TransactionChargeTaxTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransactionChargeTaxTransactions` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransactionChargeTaxTransactions.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionChargeTaxTransactions.operatingUnitNumber}.
   * @param storeId Key property. See {@link TransactionChargeTaxTransactions.storeId}.
   * @param terminalId Key property. See {@link TransactionChargeTaxTransactions.terminalId}.
   * @param transactionId Key property. See {@link TransactionChargeTaxTransactions.transactionId}.
   * @param saleLineNumber Key property. See {@link TransactionChargeTaxTransactions.saleLineNumber}.
   * @param markupLineNumber Key property. See {@link TransactionChargeTaxTransactions.markupLineNumber}.
   * @param taxCode Key property. See {@link TransactionChargeTaxTransactions.taxCode}.
   * @returns A request builder for creating requests to retrieve one `TransactionChargeTaxTransactions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    operatingUnitNumber: DeserializedType<T, 'Edm.String'>,
    storeId: DeserializedType<T, 'Edm.String'>,
    terminalId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.String'>,
    saleLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    markupLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    taxCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransactionChargeTaxTransactions<T>, T> {
    return new GetByKeyRequestBuilder<TransactionChargeTaxTransactions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        OperatingUnitNumber: operatingUnitNumber,
        StoreId: storeId,
        TerminalId: terminalId,
        TransactionId: transactionId,
        SaleLineNumber: saleLineNumber,
        MarkupLineNumber: markupLineNumber,
        TaxCode: taxCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransactionChargeTaxTransactions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransactionChargeTaxTransactions`.
   */
  update(
    entity: TransactionChargeTaxTransactions<T>
  ): UpdateRequestBuilder<TransactionChargeTaxTransactions<T>, T> {
    return new UpdateRequestBuilder<TransactionChargeTaxTransactions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransactionChargeTaxTransactions`.
   * @param dataAreaId Key property. See {@link TransactionChargeTaxTransactions.dataAreaId}.
   * @param operatingUnitNumber Key property. See {@link TransactionChargeTaxTransactions.operatingUnitNumber}.
   * @param storeId Key property. See {@link TransactionChargeTaxTransactions.storeId}.
   * @param terminalId Key property. See {@link TransactionChargeTaxTransactions.terminalId}.
   * @param transactionId Key property. See {@link TransactionChargeTaxTransactions.transactionId}.
   * @param saleLineNumber Key property. See {@link TransactionChargeTaxTransactions.saleLineNumber}.
   * @param markupLineNumber Key property. See {@link TransactionChargeTaxTransactions.markupLineNumber}.
   * @param taxCode Key property. See {@link TransactionChargeTaxTransactions.taxCode}.
   * @returns A request builder for creating requests that delete an entity of type `TransactionChargeTaxTransactions`.
   */
  delete(
    dataAreaId: string,
    operatingUnitNumber: string,
    storeId: string,
    terminalId: string,
    transactionId: string,
    saleLineNumber: BigNumber,
    markupLineNumber: BigNumber,
    taxCode: string
  ): DeleteRequestBuilder<TransactionChargeTaxTransactions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransactionChargeTaxTransactions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransactionChargeTaxTransactions` by taking the entity as a parameter.
   */
  delete(
    entity: TransactionChargeTaxTransactions<T>
  ): DeleteRequestBuilder<TransactionChargeTaxTransactions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    operatingUnitNumber?: string,
    storeId?: string,
    terminalId?: string,
    transactionId?: string,
    saleLineNumber?: BigNumber,
    markupLineNumber?: BigNumber,
    taxCode?: string
  ): DeleteRequestBuilder<TransactionChargeTaxTransactions<T>, T> {
    return new DeleteRequestBuilder<TransactionChargeTaxTransactions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransactionChargeTaxTransactions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            OperatingUnitNumber: operatingUnitNumber!,
            StoreId: storeId!,
            TerminalId: terminalId!,
            TransactionId: transactionId!,
            SaleLineNumber: saleLineNumber!,
            MarkupLineNumber: markupLineNumber!,
            TaxCode: taxCode!
          }
    );
  }
}
