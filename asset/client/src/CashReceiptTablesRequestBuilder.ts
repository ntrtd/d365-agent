/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { CashReceiptTables } from './CashReceiptTables';
import { LvCashReceiptTransactionsType } from './LvCashReceiptTransactionsType';

/**
 * Request builder class for operations supported on the {@link CashReceiptTables} entity.
 */
export class CashReceiptTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CashReceiptTables<T>, T> {
  /**
   * Returns a request builder for querying all `CashReceiptTables` entities.
   * @returns A request builder for creating requests to retrieve all `CashReceiptTables` entities.
   */
  getAll(): GetAllRequestBuilder<CashReceiptTables<T>, T> {
    return new GetAllRequestBuilder<CashReceiptTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CashReceiptTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CashReceiptTables`.
   */
  create(
    entity: CashReceiptTables<T>
  ): CreateRequestBuilder<CashReceiptTables<T>, T> {
    return new CreateRequestBuilder<CashReceiptTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CashReceiptTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CashReceiptTables.dataAreaId}.
   * @param batchNumber Key property. See {@link CashReceiptTables.batchNumber}.
   * @param transactionType Key property. See {@link CashReceiptTables.transactionType}.
   * @param transactionFrom Key property. See {@link CashReceiptTables.transactionFrom}.
   * @param transactionTo Key property. See {@link CashReceiptTables.transactionTo}.
   * @returns A request builder for creating requests to retrieve one `CashReceiptTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    batchNumber: DeserializedType<T, 'Edm.String'>,
    transactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LvCashReceiptTransactionsType'
    >,
    transactionFrom: DeserializedType<T, 'Edm.Int32'>,
    transactionTo: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CashReceiptTables<T>, T> {
    return new GetByKeyRequestBuilder<CashReceiptTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      BatchNumber: batchNumber,
      TransactionType: transactionType,
      TransactionFrom: transactionFrom,
      TransactionTo: transactionTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CashReceiptTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CashReceiptTables`.
   */
  update(
    entity: CashReceiptTables<T>
  ): UpdateRequestBuilder<CashReceiptTables<T>, T> {
    return new UpdateRequestBuilder<CashReceiptTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CashReceiptTables`.
   * @param dataAreaId Key property. See {@link CashReceiptTables.dataAreaId}.
   * @param batchNumber Key property. See {@link CashReceiptTables.batchNumber}.
   * @param transactionType Key property. See {@link CashReceiptTables.transactionType}.
   * @param transactionFrom Key property. See {@link CashReceiptTables.transactionFrom}.
   * @param transactionTo Key property. See {@link CashReceiptTables.transactionTo}.
   * @returns A request builder for creating requests that delete an entity of type `CashReceiptTables`.
   */
  delete(
    dataAreaId: string,
    batchNumber: string,
    transactionType: LvCashReceiptTransactionsType,
    transactionFrom: number,
    transactionTo: number
  ): DeleteRequestBuilder<CashReceiptTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CashReceiptTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CashReceiptTables` by taking the entity as a parameter.
   */
  delete(
    entity: CashReceiptTables<T>
  ): DeleteRequestBuilder<CashReceiptTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    batchNumber?: string,
    transactionType?: LvCashReceiptTransactionsType,
    transactionFrom?: number,
    transactionTo?: number
  ): DeleteRequestBuilder<CashReceiptTables<T>, T> {
    return new DeleteRequestBuilder<CashReceiptTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CashReceiptTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            BatchNumber: batchNumber!,
            TransactionType: transactionType!,
            TransactionFrom: transactionFrom!,
            TransactionTo: transactionTo!
          }
    );
  }
}
