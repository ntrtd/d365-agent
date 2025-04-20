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
import { LedgerJournalCostLinesPurchTables } from './LedgerJournalCostLinesPurchTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesPurchTables} entity.
 */
export class LedgerJournalCostLinesPurchTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesPurchTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesPurchTables` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesPurchTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesPurchTables`.
   */
  create(
    entity: LedgerJournalCostLinesPurchTables<T>
  ): CreateRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
    return new CreateRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesPurchTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesPurchTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesPurchTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesPurchTables.journalLineNumber}.
   * @param purchaseOrderId Key property. See {@link LedgerJournalCostLinesPurchTables.purchaseOrderId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesPurchTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesPurchTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    purchaseOrderId: DeserializedType<T, 'Edm.String'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNum: journalNum,
        JournalLineNumber: journalLineNumber,
        PurchaseOrderId: purchaseOrderId,
        CostTransactionLineNumber: costTransactionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesPurchTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesPurchTables`.
   */
  update(
    entity: LedgerJournalCostLinesPurchTables<T>
  ): UpdateRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesPurchTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesPurchTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesPurchTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesPurchTables.journalLineNumber}.
   * @param purchaseOrderId Key property. See {@link LedgerJournalCostLinesPurchTables.purchaseOrderId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesPurchTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesPurchTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    purchaseOrderId: string,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesPurchTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesPurchTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesPurchTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    purchaseOrderId?: string,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalCostLinesPurchTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCostLinesPurchTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            PurchaseOrderId: purchaseOrderId!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
