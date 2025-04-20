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
import { PurchaseOrderLinesForAi } from './PurchaseOrderLinesForAi';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLinesForAi} entity.
 */
export class PurchaseOrderLinesForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLinesForAi<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLinesForAi` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLinesForAi` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLinesForAi<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLinesForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLinesForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLinesForAi`.
   */
  create(
    entity: PurchaseOrderLinesForAi<T>
  ): CreateRequestBuilder<PurchaseOrderLinesForAi<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLinesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLinesForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLinesForAi.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLinesForAi.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLinesForAi.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLinesForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderLinesForAi<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderLinesForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLinesForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLinesForAi`.
   */
  update(
    entity: PurchaseOrderLinesForAi<T>
  ): UpdateRequestBuilder<PurchaseOrderLinesForAi<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLinesForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLinesForAi`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLinesForAi.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLinesForAi.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLinesForAi.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLinesForAi`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLinesForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLinesForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLinesForAi` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLinesForAi<T>
  ): DeleteRequestBuilder<PurchaseOrderLinesForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLinesForAi<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLinesForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLinesForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
