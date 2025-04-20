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
import { PurchaseOrderLines } from './PurchaseOrderLines';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderLines} entity.
 */
export class PurchaseOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderLines`.
   */
  create(
    entity: PurchaseOrderLines<T>
  ): CreateRequestBuilder<PurchaseOrderLines<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PurchaseOrderLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderLines`.
   */
  update(
    entity: PurchaseOrderLines<T>
  ): UpdateRequestBuilder<PurchaseOrderLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLines`.
   * @param dataAreaId Key property. See {@link PurchaseOrderLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLines`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderLines<T>
  ): DeleteRequestBuilder<PurchaseOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PurchaseOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
