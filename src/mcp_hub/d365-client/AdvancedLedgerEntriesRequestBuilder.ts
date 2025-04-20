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
import { AdvancedLedgerEntries } from './AdvancedLedgerEntries';

/**
 * Request builder class for operations supported on the {@link AdvancedLedgerEntries} entity.
 */
export class AdvancedLedgerEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AdvancedLedgerEntries<T>, T> {
  /**
   * Returns a request builder for querying all `AdvancedLedgerEntries` entities.
   * @returns A request builder for creating requests to retrieve all `AdvancedLedgerEntries` entities.
   */
  getAll(): GetAllRequestBuilder<AdvancedLedgerEntries<T>, T> {
    return new GetAllRequestBuilder<AdvancedLedgerEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AdvancedLedgerEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AdvancedLedgerEntries`.
   */
  create(
    entity: AdvancedLedgerEntries<T>
  ): CreateRequestBuilder<AdvancedLedgerEntries<T>, T> {
    return new CreateRequestBuilder<AdvancedLedgerEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AdvancedLedgerEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link AdvancedLedgerEntries.dataAreaId}.
   * @param headerTransactionNumber Key property. See {@link AdvancedLedgerEntries.headerTransactionNumber}.
   * @param lineNumber Key property. See {@link AdvancedLedgerEntries.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AdvancedLedgerEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    headerTransactionNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AdvancedLedgerEntries<T>, T> {
    return new GetByKeyRequestBuilder<AdvancedLedgerEntries<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        HeaderTransactionNumber: headerTransactionNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AdvancedLedgerEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AdvancedLedgerEntries`.
   */
  update(
    entity: AdvancedLedgerEntries<T>
  ): UpdateRequestBuilder<AdvancedLedgerEntries<T>, T> {
    return new UpdateRequestBuilder<AdvancedLedgerEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AdvancedLedgerEntries`.
   * @param dataAreaId Key property. See {@link AdvancedLedgerEntries.dataAreaId}.
   * @param headerTransactionNumber Key property. See {@link AdvancedLedgerEntries.headerTransactionNumber}.
   * @param lineNumber Key property. See {@link AdvancedLedgerEntries.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedLedgerEntries`.
   */
  delete(
    dataAreaId: string,
    headerTransactionNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AdvancedLedgerEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AdvancedLedgerEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AdvancedLedgerEntries` by taking the entity as a parameter.
   */
  delete(
    entity: AdvancedLedgerEntries<T>
  ): DeleteRequestBuilder<AdvancedLedgerEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    headerTransactionNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AdvancedLedgerEntries<T>, T> {
    return new DeleteRequestBuilder<AdvancedLedgerEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AdvancedLedgerEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            HeaderTransactionNumber: headerTransactionNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
