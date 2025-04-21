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
import { LedgerJournalCostLinesInventTransferLineTables } from './LedgerJournalCostLinesInventTransferLineTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesInventTransferLineTables} entity.
 */
export class LedgerJournalCostLinesInventTransferLineTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesInventTransferLineTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesInventTransferLineTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesInventTransferLineTables` entities.
   */
  getAll(): GetAllRequestBuilder<
    LedgerJournalCostLinesInventTransferLineTables<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LedgerJournalCostLinesInventTransferLineTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesInventTransferLineTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   */
  create(
    entity: LedgerJournalCostLinesInventTransferLineTables<T>
  ): CreateRequestBuilder<
    LedgerJournalCostLinesInventTransferLineTables<T>,
    T
  > {
    return new CreateRequestBuilder<
      LedgerJournalCostLinesInventTransferLineTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesInventTransferLineTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.journalLineNumber}.
   * @param transferId Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.transferId}.
   * @param transferLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.transferLineNumber}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesInventTransferLineTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    transferId: DeserializedType<T, 'Edm.String'>,
    transferLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<
    LedgerJournalCostLinesInventTransferLineTables<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      LedgerJournalCostLinesInventTransferLineTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum,
      JournalLineNumber: journalLineNumber,
      TransferId: transferId,
      TransferLineNumber: transferLineNumber,
      CostTransactionLineNumber: costTransactionLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   */
  update(
    entity: LedgerJournalCostLinesInventTransferLineTables<T>
  ): UpdateRequestBuilder<
    LedgerJournalCostLinesInventTransferLineTables<T>,
    T
  > {
    return new UpdateRequestBuilder<
      LedgerJournalCostLinesInventTransferLineTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.journalLineNumber}.
   * @param transferId Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.transferId}.
   * @param transferLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.transferLineNumber}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesInventTransferLineTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    transferId: string,
    transferLineNumber: BigNumber,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesInventTransferLineTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesInventTransferLineTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesInventTransferLineTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesInventTransferLineTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesInventTransferLineTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    transferId?: string,
    transferLineNumber?: BigNumber,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<
    LedgerJournalCostLinesInventTransferLineTables<T>,
    T
  > {
    return new DeleteRequestBuilder<
      LedgerJournalCostLinesInventTransferLineTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      LedgerJournalCostLinesInventTransferLineTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            TransferId: transferId!,
            TransferLineNumber: transferLineNumber!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
