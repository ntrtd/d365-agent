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
import { LedgerJournalLineTransTaxInformations } from './LedgerJournalLineTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link LedgerJournalLineTransTaxInformations} entity.
 */
export class LedgerJournalLineTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalLineTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalLineTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
    return new GetAllRequestBuilder<
      LedgerJournalLineTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalLineTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalLineTransTaxInformations`.
   */
  create(
    entity: LedgerJournalLineTransTaxInformations<T>
  ): CreateRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      LedgerJournalLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalLineTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalLineTransTaxInformations.dataAreaId}.
   * @param lineNumber Key property. See {@link LedgerJournalLineTransTaxInformations.lineNumber}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLineTransTaxInformations.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalLineTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerJournalLineTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalLineTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalLineTransTaxInformations`.
   */
  update(
    entity: LedgerJournalLineTransTaxInformations<T>
  ): UpdateRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      LedgerJournalLineTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLineTransTaxInformations`.
   * @param dataAreaId Key property. See {@link LedgerJournalLineTransTaxInformations.dataAreaId}.
   * @param lineNumber Key property. See {@link LedgerJournalLineTransTaxInformations.lineNumber}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLineTransTaxInformations.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLineTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    journalBatchNumber: string
  ): DeleteRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLineTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLineTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalLineTransTaxInformations<T>
  ): DeleteRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<LedgerJournalLineTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      LedgerJournalLineTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalLineTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
