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
import { LedgerJournalCostLinesPurchLineTables } from './LedgerJournalCostLinesPurchLineTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesPurchLineTables} entity.
 */
export class LedgerJournalCostLinesPurchLineTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesPurchLineTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesPurchLineTables` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
    return new GetAllRequestBuilder<
      LedgerJournalCostLinesPurchLineTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesPurchLineTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesPurchLineTables`.
   */
  create(
    entity: LedgerJournalCostLinesPurchLineTables<T>
  ): CreateRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
    return new CreateRequestBuilder<
      LedgerJournalCostLinesPurchLineTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesPurchLineTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesPurchLineTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesPurchLineTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.journalLineNumber}.
   * @param purchaseOrderId Key property. See {@link LedgerJournalCostLinesPurchLineTables.purchaseOrderId}.
   * @param purchaseOrderLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.purchaseOrderLineNumber}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesPurchLineTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    purchaseOrderId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderLineNumber: DeserializedType<T, 'Edm.Int64'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerJournalCostLinesPurchLineTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum,
      JournalLineNumber: journalLineNumber,
      PurchaseOrderId: purchaseOrderId,
      PurchaseOrderLineNumber: purchaseOrderLineNumber,
      CostTransactionLineNumber: costTransactionLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesPurchLineTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesPurchLineTables`.
   */
  update(
    entity: LedgerJournalCostLinesPurchLineTables<T>
  ): UpdateRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
    return new UpdateRequestBuilder<
      LedgerJournalCostLinesPurchLineTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesPurchLineTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesPurchLineTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesPurchLineTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.journalLineNumber}.
   * @param purchaseOrderId Key property. See {@link LedgerJournalCostLinesPurchLineTables.purchaseOrderId}.
   * @param purchaseOrderLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.purchaseOrderLineNumber}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesPurchLineTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesPurchLineTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    purchaseOrderId: string,
    purchaseOrderLineNumber: BigNumber,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesPurchLineTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesPurchLineTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesPurchLineTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    purchaseOrderId?: string,
    purchaseOrderLineNumber?: BigNumber,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesPurchLineTables<T>, T> {
    return new DeleteRequestBuilder<
      LedgerJournalCostLinesPurchLineTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCostLinesPurchLineTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            PurchaseOrderId: purchaseOrderId!,
            PurchaseOrderLineNumber: purchaseOrderLineNumber!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
