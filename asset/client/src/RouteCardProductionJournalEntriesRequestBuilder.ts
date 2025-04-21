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
import { RouteCardProductionJournalEntries } from './RouteCardProductionJournalEntries';

/**
 * Request builder class for operations supported on the {@link RouteCardProductionJournalEntries} entity.
 */
export class RouteCardProductionJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RouteCardProductionJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `RouteCardProductionJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `RouteCardProductionJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<RouteCardProductionJournalEntries<T>, T> {
    return new GetAllRequestBuilder<RouteCardProductionJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RouteCardProductionJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RouteCardProductionJournalEntries`.
   */
  create(
    entity: RouteCardProductionJournalEntries<T>
  ): CreateRequestBuilder<RouteCardProductionJournalEntries<T>, T> {
    return new CreateRequestBuilder<RouteCardProductionJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RouteCardProductionJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link RouteCardProductionJournalEntries.dataAreaId}.
   * @param journalLineNumber Key property. See {@link RouteCardProductionJournalEntries.journalLineNumber}.
   * @param journalNumber Key property. See {@link RouteCardProductionJournalEntries.journalNumber}.
   * @returns A request builder for creating requests to retrieve one `RouteCardProductionJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RouteCardProductionJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<RouteCardProductionJournalEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JournalLineNumber: journalLineNumber,
        JournalNumber: journalNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RouteCardProductionJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RouteCardProductionJournalEntries`.
   */
  update(
    entity: RouteCardProductionJournalEntries<T>
  ): UpdateRequestBuilder<RouteCardProductionJournalEntries<T>, T> {
    return new UpdateRequestBuilder<RouteCardProductionJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RouteCardProductionJournalEntries`.
   * @param dataAreaId Key property. See {@link RouteCardProductionJournalEntries.dataAreaId}.
   * @param journalLineNumber Key property. See {@link RouteCardProductionJournalEntries.journalLineNumber}.
   * @param journalNumber Key property. See {@link RouteCardProductionJournalEntries.journalNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RouteCardProductionJournalEntries`.
   */
  delete(
    dataAreaId: string,
    journalLineNumber: BigNumber,
    journalNumber: string
  ): DeleteRequestBuilder<RouteCardProductionJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RouteCardProductionJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RouteCardProductionJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: RouteCardProductionJournalEntries<T>
  ): DeleteRequestBuilder<RouteCardProductionJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalLineNumber?: BigNumber,
    journalNumber?: string
  ): DeleteRequestBuilder<RouteCardProductionJournalEntries<T>, T> {
    return new DeleteRequestBuilder<RouteCardProductionJournalEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RouteCardProductionJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalLineNumber: journalLineNumber!,
            JournalNumber: journalNumber!
          }
    );
  }
}
