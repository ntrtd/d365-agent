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
import { AssetJournalV2 } from './AssetJournalV2';

/**
 * Request builder class for operations supported on the {@link AssetJournalV2} entity.
 */
export class AssetJournalV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AssetJournalV2<T>, T> {
  /**
   * Returns a request builder for querying all `AssetJournalV2` entities.
   * @returns A request builder for creating requests to retrieve all `AssetJournalV2` entities.
   */
  getAll(): GetAllRequestBuilder<AssetJournalV2<T>, T> {
    return new GetAllRequestBuilder<AssetJournalV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AssetJournalV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AssetJournalV2`.
   */
  create(
    entity: AssetJournalV2<T>
  ): CreateRequestBuilder<AssetJournalV2<T>, T> {
    return new CreateRequestBuilder<AssetJournalV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AssetJournalV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link AssetJournalV2.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalV2.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetJournalV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `AssetJournalV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    journalBatchNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<AssetJournalV2<T>, T> {
    return new GetByKeyRequestBuilder<AssetJournalV2<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      JournalBatchNumber: journalBatchNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `AssetJournalV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AssetJournalV2`.
   */
  update(
    entity: AssetJournalV2<T>
  ): UpdateRequestBuilder<AssetJournalV2<T>, T> {
    return new UpdateRequestBuilder<AssetJournalV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AssetJournalV2`.
   * @param dataAreaId Key property. See {@link AssetJournalV2.dataAreaId}.
   * @param journalBatchNumber Key property. See {@link AssetJournalV2.journalBatchNumber}.
   * @param lineNumber Key property. See {@link AssetJournalV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalV2`.
   */
  delete(
    dataAreaId: string,
    journalBatchNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<AssetJournalV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AssetJournalV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AssetJournalV2` by taking the entity as a parameter.
   */
  delete(entity: AssetJournalV2<T>): DeleteRequestBuilder<AssetJournalV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    journalBatchNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<AssetJournalV2<T>, T> {
    return new DeleteRequestBuilder<AssetJournalV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AssetJournalV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JournalBatchNumber: journalBatchNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
