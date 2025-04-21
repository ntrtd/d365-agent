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
import { CdsPurchaseOrderSoftDeletedLines } from './CdsPurchaseOrderSoftDeletedLines';

/**
 * Request builder class for operations supported on the {@link CdsPurchaseOrderSoftDeletedLines} entity.
 */
export class CdsPurchaseOrderSoftDeletedLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPurchaseOrderSoftDeletedLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPurchaseOrderSoftDeletedLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
    return new GetAllRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPurchaseOrderSoftDeletedLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   */
  create(
    entity: CdsPurchaseOrderSoftDeletedLines<T>
  ): CreateRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
    return new CreateRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPurchaseOrderSoftDeletedLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsPurchaseOrderSoftDeletedLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link CdsPurchaseOrderSoftDeletedLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link CdsPurchaseOrderSoftDeletedLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsPurchaseOrderSoftDeletedLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   */
  update(
    entity: CdsPurchaseOrderSoftDeletedLines<T>
  ): UpdateRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
    return new UpdateRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   * @param dataAreaId Key property. See {@link CdsPurchaseOrderSoftDeletedLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link CdsPurchaseOrderSoftDeletedLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link CdsPurchaseOrderSoftDeletedLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseOrderSoftDeletedLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseOrderSoftDeletedLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPurchaseOrderSoftDeletedLines<T>
  ): DeleteRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T> {
    return new DeleteRequestBuilder<CdsPurchaseOrderSoftDeletedLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsPurchaseOrderSoftDeletedLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
