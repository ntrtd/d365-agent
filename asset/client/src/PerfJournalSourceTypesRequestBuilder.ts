/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PerfJournalSourceTypes } from './PerfJournalSourceTypes';
import { HcmPerfJournalSourceType } from './HcmPerfJournalSourceType';

/**
 * Request builder class for operations supported on the {@link PerfJournalSourceTypes} entity.
 */
export class PerfJournalSourceTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerfJournalSourceTypes<T>, T> {
  /**
   * Returns a request builder for querying all `PerfJournalSourceTypes` entities.
   * @returns A request builder for creating requests to retrieve all `PerfJournalSourceTypes` entities.
   */
  getAll(): GetAllRequestBuilder<PerfJournalSourceTypes<T>, T> {
    return new GetAllRequestBuilder<PerfJournalSourceTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PerfJournalSourceTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerfJournalSourceTypes`.
   */
  create(
    entity: PerfJournalSourceTypes<T>
  ): CreateRequestBuilder<PerfJournalSourceTypes<T>, T> {
    return new CreateRequestBuilder<PerfJournalSourceTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PerfJournalSourceTypes` entity based on its keys.
   * @param sourceType Key property. See {@link PerfJournalSourceTypes.sourceType}.
   * @returns A request builder for creating requests to retrieve one `PerfJournalSourceTypes` entity based on its keys.
   */
  getByKey(
    sourceType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmPerfJournalSourceType'
    >
  ): GetByKeyRequestBuilder<PerfJournalSourceTypes<T>, T> {
    return new GetByKeyRequestBuilder<PerfJournalSourceTypes<T>, T>(
      this.entityApi,
      { SourceType: sourceType }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PerfJournalSourceTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerfJournalSourceTypes`.
   */
  update(
    entity: PerfJournalSourceTypes<T>
  ): UpdateRequestBuilder<PerfJournalSourceTypes<T>, T> {
    return new UpdateRequestBuilder<PerfJournalSourceTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PerfJournalSourceTypes`.
   * @param sourceType Key property. See {@link PerfJournalSourceTypes.sourceType}.
   * @returns A request builder for creating requests that delete an entity of type `PerfJournalSourceTypes`.
   */
  delete(
    sourceType: HcmPerfJournalSourceType
  ): DeleteRequestBuilder<PerfJournalSourceTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerfJournalSourceTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerfJournalSourceTypes` by taking the entity as a parameter.
   */
  delete(
    entity: PerfJournalSourceTypes<T>
  ): DeleteRequestBuilder<PerfJournalSourceTypes<T>, T>;
  delete(
    sourceTypeOrEntity: any
  ): DeleteRequestBuilder<PerfJournalSourceTypes<T>, T> {
    return new DeleteRequestBuilder<PerfJournalSourceTypes<T>, T>(
      this.entityApi,
      sourceTypeOrEntity instanceof PerfJournalSourceTypes
        ? sourceTypeOrEntity
        : { SourceType: sourceTypeOrEntity! }
    );
  }
}
