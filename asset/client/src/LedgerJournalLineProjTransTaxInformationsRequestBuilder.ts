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
import { LedgerJournalLineProjTransTaxInformations } from './LedgerJournalLineProjTransTaxInformations';

/**
 * Request builder class for operations supported on the {@link LedgerJournalLineProjTransTaxInformations} entity.
 */
export class LedgerJournalLineProjTransTaxInformationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T> {
  /**
   * Returns a request builder for querying all `LedgerJournalLineProjTransTaxInformations` entities.
   * @returns A request builder for creating requests to retrieve all `LedgerJournalLineProjTransTaxInformations` entities.
   */
  getAll(): GetAllRequestBuilder<
    LedgerJournalLineProjTransTaxInformations<T>,
    T
  > {
    return new GetAllRequestBuilder<
      LedgerJournalLineProjTransTaxInformations<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LedgerJournalLineProjTransTaxInformations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LedgerJournalLineProjTransTaxInformations`.
   */
  create(
    entity: LedgerJournalLineProjTransTaxInformations<T>
  ): CreateRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T> {
    return new CreateRequestBuilder<
      LedgerJournalLineProjTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `LedgerJournalLineProjTransTaxInformations` entity based on its keys.
   * @param dataAreaId Key property. See {@link LedgerJournalLineProjTransTaxInformations.dataAreaId}.
   * @param lineNumber Key property. See {@link LedgerJournalLineProjTransTaxInformations.lineNumber}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLineProjTransTaxInformations.journalBatchNumber}.
   * @returns A request builder for creating requests to retrieve one `LedgerJournalLineProjTransTaxInformations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T> {
    return new GetByKeyRequestBuilder<
      LedgerJournalLineProjTransTaxInformations<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      LineNumber: lineNumber,
      JournalBatchNumber: journalBatchNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LedgerJournalLineProjTransTaxInformations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LedgerJournalLineProjTransTaxInformations`.
   */
  update(
    entity: LedgerJournalLineProjTransTaxInformations<T>
  ): UpdateRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T> {
    return new UpdateRequestBuilder<
      LedgerJournalLineProjTransTaxInformations<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLineProjTransTaxInformations`.
   * @param dataAreaId Key property. See {@link LedgerJournalLineProjTransTaxInformations.dataAreaId}.
   * @param lineNumber Key property. See {@link LedgerJournalLineProjTransTaxInformations.lineNumber}.
   * @param journalBatchNumber Key property. See {@link LedgerJournalLineProjTransTaxInformations.journalBatchNumber}.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLineProjTransTaxInformations`.
   */
  delete(
    dataAreaId: string,
    lineNumber: BigNumber,
    journalBatchNumber: string
  ): DeleteRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LedgerJournalLineProjTransTaxInformations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LedgerJournalLineProjTransTaxInformations` by taking the entity as a parameter.
   */
  delete(
    entity: LedgerJournalLineProjTransTaxInformations<T>
  ): DeleteRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNumber?: BigNumber,
    journalBatchNumber?: string
  ): DeleteRequestBuilder<LedgerJournalLineProjTransTaxInformations<T>, T> {
    return new DeleteRequestBuilder<
      LedgerJournalLineProjTransTaxInformations<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof LedgerJournalLineProjTransTaxInformations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNumber: lineNumber!,
            JournalBatchNumber: journalBatchNumber!
          }
    );
  }
}
