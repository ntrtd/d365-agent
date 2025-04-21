/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { PurchaseOrderResponseLines } from './PurchaseOrderResponseLines';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderResponseLines} entity.
 */
export class PurchaseOrderResponseLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderResponseLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderResponseLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderResponseLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderResponseLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderResponseLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderResponseLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderResponseLines`.
   */
  create(
    entity: PurchaseOrderResponseLines<T>
  ): CreateRequestBuilder<PurchaseOrderResponseLines<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderResponseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderResponseLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderResponseLines.dataAreaId}.
   * @param purchaseOrderResponseLastModificationDateTime Key property. See {@link PurchaseOrderResponseLines.purchaseOrderResponseLastModificationDateTime}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderResponseLines.purchaseOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link PurchaseOrderResponseLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderResponseLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderResponseLastModificationDateTime: DeserializedType<
      T,
      'Edm.DateTimeOffset'
    >,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineCreationSequenceNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderResponseLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderResponseLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderResponseLastModificationDateTime:
          purchaseOrderResponseLastModificationDateTime,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineCreationSequenceNumber: lineCreationSequenceNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderResponseLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderResponseLines`.
   */
  update(
    entity: PurchaseOrderResponseLines<T>
  ): UpdateRequestBuilder<PurchaseOrderResponseLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderResponseLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderResponseLines`.
   * @param dataAreaId Key property. See {@link PurchaseOrderResponseLines.dataAreaId}.
   * @param purchaseOrderResponseLastModificationDateTime Key property. See {@link PurchaseOrderResponseLines.purchaseOrderResponseLastModificationDateTime}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderResponseLines.purchaseOrderNumber}.
   * @param lineCreationSequenceNumber Key property. See {@link PurchaseOrderResponseLines.lineCreationSequenceNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderResponseLines`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderResponseLastModificationDateTime: Moment,
    purchaseOrderNumber: string,
    lineCreationSequenceNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderResponseLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderResponseLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderResponseLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderResponseLines<T>
  ): DeleteRequestBuilder<PurchaseOrderResponseLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderResponseLastModificationDateTime?: Moment,
    purchaseOrderNumber?: string,
    lineCreationSequenceNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderResponseLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderResponseLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderResponseLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderResponseLastModificationDateTime:
              purchaseOrderResponseLastModificationDateTime!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineCreationSequenceNumber: lineCreationSequenceNumber!
          }
    );
  }
}
