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
import { JournalTables } from './JournalTables';

/**
 * Request builder class for operations supported on the {@link JournalTables} entity.
 */
export class JournalTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalTables<T>, T> {
  /**
   * Returns a request builder for querying all `JournalTables` entities.
   * @returns A request builder for creating requests to retrieve all `JournalTables` entities.
   */
  getAll(): GetAllRequestBuilder<JournalTables<T>, T> {
    return new GetAllRequestBuilder<JournalTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalTables`.
   */
  create(entity: JournalTables<T>): CreateRequestBuilder<JournalTables<T>, T> {
    return new CreateRequestBuilder<JournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `JournalTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalTables.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalTables.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `JournalTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<JournalTables<T>, T> {
    return new GetByKeyRequestBuilder<JournalTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalTables`.
   */
  update(entity: JournalTables<T>): UpdateRequestBuilder<JournalTables<T>, T> {
    return new UpdateRequestBuilder<JournalTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalTables`.
   * @param dataAreaId Key property. See {@link JournalTables.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalTables.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `JournalTables`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string
  ): DeleteRequestBuilder<JournalTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalTables` by taking the entity as a parameter.
   */
  delete(entity: JournalTables<T>): DeleteRequestBuilder<JournalTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<JournalTables<T>, T> {
    return new DeleteRequestBuilder<JournalTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
