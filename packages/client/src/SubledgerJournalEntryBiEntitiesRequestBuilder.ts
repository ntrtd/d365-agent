/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { SubledgerJournalEntryBiEntities } from './SubledgerJournalEntryBiEntities';
import { CurrentOperationsTax } from './CurrentOperationsTax';
import { SubledgerJournalEntryType } from './SubledgerJournalEntryType';
import { SubledgerJournalEntryStatus } from './SubledgerJournalEntryStatus';

/**
 * Request builder class for operations supported on the {@link SubledgerJournalEntryBiEntities} entity.
 */
export class SubledgerJournalEntryBiEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
  /**
   * Returns a request builder for querying all `SubledgerJournalEntryBiEntities` entities.
   * @returns A request builder for creating requests to retrieve all `SubledgerJournalEntryBiEntities` entities.
   */
  getAll(): GetAllRequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
    return new GetAllRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubledgerJournalEntryBiEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubledgerJournalEntryBiEntities`.
   */
  create(
    entity: SubledgerJournalEntryBiEntities<T>
  ): CreateRequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
    return new CreateRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubledgerJournalEntryBiEntities` entity based on its keys.
   * @param ledger Key property. See {@link SubledgerJournalEntryBiEntities.ledger}.
   * @param postingLayer Key property. See {@link SubledgerJournalEntryBiEntities.postingLayer}.
   * @param fiscalCalendarPeriod Key property. See {@link SubledgerJournalEntryBiEntities.fiscalCalendarPeriod}.
   * @param accountingEvent Key property. See {@link SubledgerJournalEntryBiEntities.accountingEvent}.
   * @param type Key property. See {@link SubledgerJournalEntryBiEntities.type}.
   * @param status Key property. See {@link SubledgerJournalEntryBiEntities.status}.
   * @param sysModifiedDateTime Key property. See {@link SubledgerJournalEntryBiEntities.sysModifiedDateTime}.
   * @returns A request builder for creating requests to retrieve one `SubledgerJournalEntryBiEntities` entity based on its keys.
   */
  getByKey(
    ledger: DeserializedType<T, 'Edm.Int64'>,
    postingLayer: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.CurrentOperationsTax'
    >,
    fiscalCalendarPeriod: DeserializedType<T, 'Edm.Int64'>,
    accountingEvent: DeserializedType<T, 'Edm.Int64'>,
    type: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubledgerJournalEntryType'
    >,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubledgerJournalEntryStatus'
    >,
    sysModifiedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
    return new GetByKeyRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>(
      this.entityApi,
      {
        Ledger: ledger,
        PostingLayer: postingLayer,
        FiscalCalendarPeriod: fiscalCalendarPeriod,
        AccountingEvent: accountingEvent,
        Type: type,
        Status: status,
        SysModifiedDateTime: sysModifiedDateTime
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubledgerJournalEntryBiEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubledgerJournalEntryBiEntities`.
   */
  update(
    entity: SubledgerJournalEntryBiEntities<T>
  ): UpdateRequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
    return new UpdateRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalEntryBiEntities`.
   * @param ledger Key property. See {@link SubledgerJournalEntryBiEntities.ledger}.
   * @param postingLayer Key property. See {@link SubledgerJournalEntryBiEntities.postingLayer}.
   * @param fiscalCalendarPeriod Key property. See {@link SubledgerJournalEntryBiEntities.fiscalCalendarPeriod}.
   * @param accountingEvent Key property. See {@link SubledgerJournalEntryBiEntities.accountingEvent}.
   * @param type Key property. See {@link SubledgerJournalEntryBiEntities.type}.
   * @param status Key property. See {@link SubledgerJournalEntryBiEntities.status}.
   * @param sysModifiedDateTime Key property. See {@link SubledgerJournalEntryBiEntities.sysModifiedDateTime}.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalEntryBiEntities`.
   */
  delete(
    ledger: BigNumber,
    postingLayer: CurrentOperationsTax,
    fiscalCalendarPeriod: BigNumber,
    accountingEvent: BigNumber,
    type: SubledgerJournalEntryType,
    status: SubledgerJournalEntryStatus,
    sysModifiedDateTime: Moment
  ): DeleteRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubledgerJournalEntryBiEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubledgerJournalEntryBiEntities` by taking the entity as a parameter.
   */
  delete(
    entity: SubledgerJournalEntryBiEntities<T>
  ): DeleteRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>;
  delete(
    ledgerOrEntity: any,
    postingLayer?: CurrentOperationsTax,
    fiscalCalendarPeriod?: BigNumber,
    accountingEvent?: BigNumber,
    type?: SubledgerJournalEntryType,
    status?: SubledgerJournalEntryStatus,
    sysModifiedDateTime?: Moment
  ): DeleteRequestBuilder<SubledgerJournalEntryBiEntities<T>, T> {
    return new DeleteRequestBuilder<SubledgerJournalEntryBiEntities<T>, T>(
      this.entityApi,
      ledgerOrEntity instanceof SubledgerJournalEntryBiEntities
        ? ledgerOrEntity
        : {
            Ledger: ledgerOrEntity!,
            PostingLayer: postingLayer!,
            FiscalCalendarPeriod: fiscalCalendarPeriod!,
            AccountingEvent: accountingEvent!,
            Type: type!,
            Status: status!,
            SysModifiedDateTime: sysModifiedDateTime!
          }
    );
  }
}
