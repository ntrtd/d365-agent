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
import { LedgerJournalCostLinesFoliosTables } from './LedgerJournalCostLinesFoliosTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesFoliosTables} entity.
 */
export class LedgerJournalCostLinesFoliosTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesFoliosTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesFoliosTables` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesFoliosTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesFoliosTables`.
   */
  create(
    entity: LedgerJournalCostLinesFoliosTables<T>
  ): CreateRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
    return new CreateRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesFoliosTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesFoliosTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesFoliosTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesFoliosTables.journalLineNumber}.
   * @param shipFolioId Key property. See {@link LedgerJournalCostLinesFoliosTables.shipFolioId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesFoliosTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesFoliosTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    shipFolioId: DeserializedType<T, 'Edm.String'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalNum: journalNum,
        JournalLineNumber: journalLineNumber,
        ShipFolioId: shipFolioId,
        CostTransactionLineNumber: costTransactionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesFoliosTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesFoliosTables`.
   */
  update(
    entity: LedgerJournalCostLinesFoliosTables<T>
  ): UpdateRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesFoliosTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesFoliosTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesFoliosTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesFoliosTables.journalLineNumber}.
   * @param shipFolioId Key property. See {@link LedgerJournalCostLinesFoliosTables.shipFolioId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesFoliosTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesFoliosTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    shipFolioId: string,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesFoliosTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesFoliosTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesFoliosTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    shipFolioId?: string,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalCostLinesFoliosTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCostLinesFoliosTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            ShipFolioId: shipFolioId!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
