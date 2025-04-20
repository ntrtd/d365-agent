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
import { PurchaseOrderLinesV2 } from './PurchaseOrderLinesV2';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLinesV2} entity.
 */
export class PurchaseOrderLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLinesV2<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLinesV2<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLinesV2`.
   */
  create(
    entity: PurchaseOrderLinesV2<T>
  ): CreateRequestBuilder<PurchaseOrderLinesV2<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLinesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLinesV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLinesV2.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLinesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderLinesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLinesV2`.
   */
  update(
    entity: PurchaseOrderLinesV2<T>
  ): UpdateRequestBuilder<PurchaseOrderLinesV2<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLinesV2`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLinesV2.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLinesV2.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLinesV2.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLinesV2`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLinesV2<T>
  ): DeleteRequestBuilder<PurchaseOrderLinesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLinesV2<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLinesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLinesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
