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
import { LedgerJournalCostLinesVoyagesTables } from './LedgerJournalCostLinesVoyagesTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesVoyagesTables} entity.
 */
export class LedgerJournalCostLinesVoyagesTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesVoyagesTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesVoyagesTables` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesVoyagesTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesVoyagesTables`.
   */
  create(
    entity: LedgerJournalCostLinesVoyagesTables<T>
  ): CreateRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
    return new CreateRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesVoyagesTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesVoyagesTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesVoyagesTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesVoyagesTables.journalLineNumber}.
   * @param shipId Key property. See {@link LedgerJournalCostLinesVoyagesTables.shipId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesVoyagesTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesVoyagesTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerJournalCostLinesVoyagesTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum,
      JournalLineNumber: journalLineNumber,
      ShipId: shipId,
      CostTransactionLineNumber: costTransactionLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesVoyagesTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesVoyagesTables`.
   */
  update(
    entity: LedgerJournalCostLinesVoyagesTables<T>
  ): UpdateRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesVoyagesTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesVoyagesTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesVoyagesTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesVoyagesTables.journalLineNumber}.
   * @param shipId Key property. See {@link LedgerJournalCostLinesVoyagesTables.shipId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesVoyagesTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesVoyagesTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    shipId: string,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesVoyagesTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesVoyagesTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesVoyagesTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    shipId?: string,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalCostLinesVoyagesTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCostLinesVoyagesTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            ShipId: shipId!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
