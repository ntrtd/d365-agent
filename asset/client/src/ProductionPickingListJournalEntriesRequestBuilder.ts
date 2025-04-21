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
import { ProductionPickingListJournalEntries } from './ProductionPickingListJournalEntries';

/**
 * Request builder class for operations supported on the {@link ProductionPickingListJournalEntries} entity.
 */
export class ProductionPickingListJournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionPickingListJournalEntries<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionPickingListJournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionPickingListJournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionPickingListJournalEntries<T>, T> {
    return new GetAllRequestBuilder<ProductionPickingListJournalEntries<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionPickingListJournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionPickingListJournalEntries`.
   */
  create(
    entity: ProductionPickingListJournalEntries<T>
  ): CreateRequestBuilder<ProductionPickingListJournalEntries<T>, T> {
    return new CreateRequestBuilder<ProductionPickingListJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionPickingListJournalEntries` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionPickingListJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link ProductionPickingListJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link ProductionPickingListJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductionPickingListJournalEntries` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalNumber: DeserializedType<T, 'Edm.String'>,
    journalLineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProductionPickingListJournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<
      ProductionPickingListJournalEntries<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalNumber: journalNumber,
      JournalLineNumber: journalLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionPickingListJournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionPickingListJournalEntries`.
   */
  update(
    entity: ProductionPickingListJournalEntries<T>
  ): UpdateRequestBuilder<ProductionPickingListJournalEntries<T>, T> {
    return new UpdateRequestBuilder<ProductionPickingListJournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionPickingListJournalEntries`.
   * @param dataAreaId Key property. See {@link ProductionPickingListJournalEntries.dataAreaId}.
   * @param journalNumber Key property. See {@link ProductionPickingListJournalEntries.journalNumber}.
   * @param journalLineNumber Key property. See {@link ProductionPickingListJournalEntries.journalLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionPickingListJournalEntries`.
   */
  delete(
    dataAreaId: string,
    journalNumber: string,
    journalLineNumber: BigNumber
  ): DeleteRequestBuilder<ProductionPickingListJournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionPickingListJournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionPickingListJournalEntries` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionPickingListJournalEntries<T>
  ): DeleteRequestBuilder<ProductionPickingListJournalEntries<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalNumber?: string,
    journalLineNumber?: BigNumber
  ): DeleteRequestBuilder<ProductionPickingListJournalEntries<T>, T> {
    return new DeleteRequestBuilder<ProductionPickingListJournalEntries<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionPickingListJournalEntries
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalNumber: journalNumber!,
            JournalLineNumber: journalLineNumber!
          }
    );
  }
}
