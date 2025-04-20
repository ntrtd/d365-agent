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
import { DemandPlanningPickingListJournalEntries } from './DemandPlanningPickingListJournalEntries';

/**
 * Request builder class for operations supported on the {@link DemandPlanningPickingListJournalEntries} entity.
 */
export class DemandPlanningPickingListJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DemandPlanningPickingListJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `DemandPlanningPickingListJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `DemandPlanningPickingListJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<
    DemandPlanningPickingListJournalEntries<T>,
    T
  > {
    return new GetAllRequestBuilder<
      DemandPlanningPickingListJournalEntries<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DemandPlanningPickingListJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DemandPlanningPickingListJournalEntries`.
   */
  create(
    entity: DemandPlanningPickingListJournalEntries<T>
  ): CreateRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T> {
    return new CreateRequestBuilder<
      DemandPlanningPickingListJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `DemandPlanningPickingListJournalEntries` entity based on its keys.
   * @param journalNumber Key property. See {@link DemandPlanningPickingListJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link DemandPlanningPickingListJournalEntries.journalLineNumber}.
   * @param journalDataAreaId Key property. See {@link DemandPlanningPickingListJournalEntries.journalDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `DemandPlanningPickingListJournalEntries` entity based on its keys.
   */
  getByKey(
    journalNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      DemandPlanningPickingListJournalEntries<T>,
      T
    >(this.entityApi, {
      JournalNumber: journalNumber,
      JournalLineNumber: journalLineNumber,
      JournalDataAreaId: journalDataAreaId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DemandPlanningPickingListJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DemandPlanningPickingListJournalEntries`.
   */
  update(
    entity: DemandPlanningPickingListJournalEntries<T>
  ): UpdateRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T> {
    return new UpdateRequestBuilder<
      DemandPlanningPickingListJournalEntries<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningPickingListJournalEntries`.
   * @param journalNumber Key property. See {@link DemandPlanningPickingListJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link DemandPlanningPickingListJournalEntries.journalLineNumber}.
   * @param journalDataAreaId Key property. See {@link DemandPlanningPickingListJournalEntries.journalDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningPickingListJournalEntries`.
   */
  delete(
    journalNumber: string,
    journalLineNumber: BigNumber,
    journalDataAreaId: string
  ): DeleteRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DemandPlanningPickingListJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DemandPlanningPickingListJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: DemandPlanningPickingListJournalEntries<T>
  ): DeleteRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T>;
  delete(
    journalNumberOrEntity: any,
    journalLineNumber?: BigNumber,
    journalDataAreaId?: string
  ): DeleteRequestBuilder<DemandPlanningPickingListJournalEntries<T>, T> {
    return new DeleteRequestBuilder<
      DemandPlanningPickingListJournalEntries<T>,
      T
    >(
      this.entityApi,
      journalNumberOrEntity instanceof DemandPlanningPickingListJournalEntries
        ? journalNumberOrEntity
        : {
            JournalNumber: journalNumberOrEntity!,
            JournalLineNumber: journalLineNumber!,
            JournalDataAreaId: journalDataAreaId!
          }
    );
  }
}
