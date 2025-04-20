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
import { LedgerJournalCostLinesContainersTables } from './LedgerJournalCostLinesContainersTables';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCostLinesContainersTables} entity.
 */
export class LedgerJournalCostLinesContainersTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCostLinesContainersTables` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCostLinesContainersTables` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
    return new GetAllRequestBuilder<
      LedgerJournalCostLinesContainersTables<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCostLinesContainersTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCostLinesContainersTables`.
   */
  create(
    entity: LedgerJournalCostLinesContainersTables<T>
  ): CreateRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
    return new CreateRequestBuilder<
      LedgerJournalCostLinesContainersTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCostLinesContainersTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesContainersTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesContainersTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesContainersTables.journalLineNumber}.
   * @param shipId Key property. See {@link LedgerJournalCostLinesContainersTables.shipId}.
   * @param shipContainerId Key property. See {@link LedgerJournalCostLinesContainersTables.shipContainerId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesContainersTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCostLinesContainersTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNum: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    shipId: DeserializedType<T, 'Edm.String'>,
    shipContainerId: DeserializedType<T, 'Edm.String'>,
    costTransactionLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerJournalCostLinesContainersTables<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNum: journalNum,
      JournalLineNumber: journalLineNumber,
      ShipId: shipId,
      ShipContainerId: shipContainerId,
      CostTransactionLineNumber: costTransactionLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCostLinesContainersTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCostLinesContainersTables`.
   */
  update(
    entity: LedgerJournalCostLinesContainersTables<T>
  ): UpdateRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
    return new UpdateRequestBuilder<
      LedgerJournalCostLinesContainersTables<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesContainersTables`.
   * @param dataAreaId Key property. See {@link LedgerJournalCostLinesContainersTables.dataAreaId}.
   * @param journalNum Key property. See {@link LedgerJournalCostLinesContainersTables.journalNum}.
   * @param journalLineNumber Key property. See {@link LedgerJournalCostLinesContainersTables.journalLineNumber}.
   * @param shipId Key property. See {@link LedgerJournalCostLinesContainersTables.shipId}.
   * @param shipContainerId Key property. See {@link LedgerJournalCostLinesContainersTables.shipContainerId}.
   * @param costTransactionLineNumber Key property. See {@link LedgerJournalCostLinesContainersTables.costTransactionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesContainersTables`.
   */
  delete(
    dataAreaId: string,
    journalNum: string,
    journalLineNumber: BigNumber,
    shipId: string,
    shipContainerId: string,
    costTransactionLineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCostLinesContainersTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCostLinesContainersTables` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCostLinesContainersTables<T>
  ): DeleteRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNum?: string,
    journalLineNumber?: BigNumber,
    shipId?: string,
    shipContainerId?: string,
    costTransactionLineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCostLinesContainersTables<T>, T> {
    return new DeleteRequestBuilder<
      LedgerJournalCostLinesContainersTables<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCostLinesContainersTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNum: journalNum!,
            JournalLineNumber: journalLineNumber!,
            ShipId: shipId!,
            ShipContainerId: shipContainerId!,
            CostTransactionLineNumber: costTransactionLineNumber!
          }
    );
  }
}
