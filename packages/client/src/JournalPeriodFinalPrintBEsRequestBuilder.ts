/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { JournalPeriodFinalPrintBEs } from './JournalPeriodFinalPrintBEs';

/**
 * Request builder class for operations supported on the {@link JournalPeriodFinalPrintBEs} entity.
 */
export class JournalPeriodFinalPrintBEsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
  /**
   * Returns a request builder for querying all `JournalPeriodFinalPrintBEs` entities.
   * @returns A request builder for creating requests to retrieve all `JournalPeriodFinalPrintBEs` entities.
   */
  getAll(): GetAllRequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
    return new GetAllRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `JournalPeriodFinalPrintBEs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalPeriodFinalPrintBEs`.
   */
  create(
    entity: JournalPeriodFinalPrintBEs<T>
  ): CreateRequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
    return new CreateRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalPeriodFinalPrintBEs` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalPeriodFinalPrintBEs.dataAreaId}.
   * @param journal Key property. See {@link JournalPeriodFinalPrintBEs.journal}.
   * @param start Key property. See {@link JournalPeriodFinalPrintBEs.start}.
   * @param end Key property. See {@link JournalPeriodFinalPrintBEs.end}.
   * @returns A request builder for creating requests to retrieve one `JournalPeriodFinalPrintBEs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journal: DeserializedType<T, 'Edm.String'>,
    start: DeserializedType<T, 'Edm.DateTimeOffset'>,
    end: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
    return new GetByKeyRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Journal: journal,
        Start: start,
        End: end
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JournalPeriodFinalPrintBEs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalPeriodFinalPrintBEs`.
   */
  update(
    entity: JournalPeriodFinalPrintBEs<T>
  ): UpdateRequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
    return new UpdateRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalPeriodFinalPrintBEs`.
   * @param dataAreaId Key property. See {@link JournalPeriodFinalPrintBEs.dataAreaId}.
   * @param journal Key property. See {@link JournalPeriodFinalPrintBEs.journal}.
   * @param start Key property. See {@link JournalPeriodFinalPrintBEs.start}.
   * @param end Key property. See {@link JournalPeriodFinalPrintBEs.end}.
   * @returns A request builder for creating requests that delete an entity of type `JournalPeriodFinalPrintBEs`.
   */
  delete(
    dataAreaId: string,
    journal: string,
    start: Moment,
    end: Moment
  ): DeleteRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalPeriodFinalPrintBEs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalPeriodFinalPrintBEs` by taking the entity as a parameter.
   */
  delete(
    entity: JournalPeriodFinalPrintBEs<T>
  ): DeleteRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journal?: string,
    start?: Moment,
    end?: Moment
  ): DeleteRequestBuilder<JournalPeriodFinalPrintBEs<T>, T> {
    return new DeleteRequestBuilder<JournalPeriodFinalPrintBEs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalPeriodFinalPrintBEs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Journal: journal!,
            Start: start!,
            End: end!
          }
    );
  }
}
