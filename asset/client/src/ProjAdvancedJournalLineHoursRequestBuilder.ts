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
import { ProjAdvancedJournalLineHours } from './ProjAdvancedJournalLineHours';

/**
 * Request builder class for operations supported on the {@link ProjAdvancedJournalLineHours} entity.
 */
export class ProjAdvancedJournalLineHoursRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
  /**
   * Returns a request builder for querying all `ProjAdvancedJournalLineHours` entities.
   * @returns A request builder for creating requests to retrieve all `ProjAdvancedJournalLineHours` entities.
   */
  getAll(): GetAllRequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
    return new GetAllRequestBuilder<ProjAdvancedJournalLineHours<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjAdvancedJournalLineHours` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjAdvancedJournalLineHours`.
   */
  create(
    entity: ProjAdvancedJournalLineHours<T>
  ): CreateRequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
    return new CreateRequestBuilder<ProjAdvancedJournalLineHours<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjAdvancedJournalLineHours` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineHours.dataAreaId}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineHours.lineNumber}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineHours.projAdvancedJournal}.
   * @returns A request builder for creating requests to retrieve one `ProjAdvancedJournalLineHours` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    projAdvancedJournal: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
    return new GetByKeyRequestBuilder<ProjAdvancedJournalLineHours<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNumber: lineNumber,
        ProjAdvancedJournal: projAdvancedJournal
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjAdvancedJournalLineHours`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjAdvancedJournalLineHours`.
   */
  update(
    entity: ProjAdvancedJournalLineHours<T>
  ): UpdateRequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
    return new UpdateRequestBuilder<ProjAdvancedJournalLineHours<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineHours`.
   * @param dataAreaId Key property. See {@link ProjAdvancedJournalLineHours.dataAreaId}.
   * @param lineNumber Key property. See {@link ProjAdvancedJournalLineHours.lineNumber}.
   * @param projAdvancedJournal Key property. See {@link ProjAdvancedJournalLineHours.projAdvancedJournal}.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineHours`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    projAdvancedJournal: BigNumber
  ): DeleteRequestBuilder<ProjAdvancedJournalLineHours<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjAdvancedJournalLineHours`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjAdvancedJournalLineHours` by taking the entity as a parameter.
   */
  delete(
    entity: ProjAdvancedJournalLineHours<T>
  ): DeleteRequestBuilder<ProjAdvancedJournalLineHours<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    projAdvancedJournal?: BigNumber
  ): DeleteRequestBuilder<ProjAdvancedJournalLineHours<T>, T> {
    return new DeleteRequestBuilder<ProjAdvancedJournalLineHours<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjAdvancedJournalLineHours
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            ProjAdvancedJournal: projAdvancedJournal!
          }
    );
  }
}
