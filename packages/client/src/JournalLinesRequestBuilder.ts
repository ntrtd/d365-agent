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
import { JournalLines } from './JournalLines';

/**
 * Request builder class for operations supported on the {@link JournalLines} entity.
 */
export class JournalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalLines<T>, T> {
  /**
   * Returns a request builder for querying all `JournalLines` entities.
   * @returns A request builder for creating requests to retrieve all `JournalLines` entities.
   */
  getAll(): GetAllRequestBuilder<JournalLines<T>, T> {
    return new GetAllRequestBuilder<JournalLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalLines`.
   */
  create(entity: JournalLines<T>): CreateRequestBuilder<JournalLines<T>, T> {
    return new CreateRequestBuilder<JournalLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `JournalLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link JournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link JournalLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `JournalLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<JournalLines<T>, T> {
    return new GetByKeyRequestBuilder<JournalLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `JournalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalLines`.
   */
  update(entity: JournalLines<T>): UpdateRequestBuilder<JournalLines<T>, T> {
    return new UpdateRequestBuilder<JournalLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalLines`.
   * @param dataAreaId Key property. See {@link JournalLines.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link JournalLines.journalBatchNumber}.
   * @param lineNumber Key property. See {@link JournalLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `JournalLines`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<JournalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalLines` by taking the entity as a parameter.
   */
  delete(entity: JournalLines<T>): DeleteRequestBuilder<JournalLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<JournalLines<T>, T> {
    return new DeleteRequestBuilder<JournalLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof JournalLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
