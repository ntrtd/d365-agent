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
import { LedgerJournalCdsLines } from './LedgerJournalCdsLines';

/**
 * Request builder class for operations supported on the {@link LedgerJournalCdsLines} entity.
 */
export class LedgerJournalCdsLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalCdsLines<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalCdsLines` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalCdsLines` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalCdsLines<T>, T> {
    return new GetAllRequestBuilder<LedgerJournalCdsLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LedgerJournalCdsLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalCdsLines`.
   */
  create(
    entity: LedgerJournalCdsLines<T>
  ): CreateRequestBuilder<LedgerJournalCdsLines<T>, T> {
    return new CreateRequestBuilder<LedgerJournalCdsLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalCdsLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalCdsLines.dataAreaId}.
   * @param integrationComputedKey Key property. See {@link LedgerJournalCdsLines.integrationComputedKey}.
   * @param lineNumber Key property. See {@link LedgerJournalCdsLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalCdsLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    integrationComputedKey: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<LedgerJournalCdsLines<T>, T> {
    return new GetByKeyRequestBuilder<LedgerJournalCdsLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        IntegrationComputedKey: integrationComputedKey,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalCdsLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalCdsLines`.
   */
  update(
    entity: LedgerJournalCdsLines<T>
  ): UpdateRequestBuilder<LedgerJournalCdsLines<T>, T> {
    return new UpdateRequestBuilder<LedgerJournalCdsLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCdsLines`.
   * @param dataAreaId Key property. See {@link LedgerJournalCdsLines.dataAreaId}.
   * @param integrationComputedKey Key property. See {@link LedgerJournalCdsLines.integrationComputedKey}.
   * @param lineNumber Key property. See {@link LedgerJournalCdsLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCdsLines`.
   */
  delete(
    dataAreaId: string,
    integrationComputedKey: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCdsLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalCdsLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalCdsLines` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalCdsLines<T>
  ): DeleteRequestBuilder<LedgerJournalCdsLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    integrationComputedKey?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<LedgerJournalCdsLines<T>, T> {
    return new DeleteRequestBuilder<LedgerJournalCdsLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalCdsLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            IntegrationComputedKey: integrationComputedKey!,
            LineNumber: lineNumber!
          }
    );
  }
}
