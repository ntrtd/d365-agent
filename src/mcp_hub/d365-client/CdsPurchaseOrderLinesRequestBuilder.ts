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
import { CdsPurchaseOrderLines } from './CdsPurchaseOrderLines';

/**
 * Request builder class for operations supported on the {@link CdsPurchaseOrderLines} entity.
 */
export class CdsPurchaseOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPurchaseOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPurchaseOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPurchaseOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPurchaseOrderLines<T>, T> {
    return new GetAllRequestBuilder<CdsPurchaseOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPurchaseOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPurchaseOrderLines`.
   */
  create(
    entity: CdsPurchaseOrderLines<T>
  ): CreateRequestBuilder<CdsPurchaseOrderLines<T>, T> {
    return new CreateRequestBuilder<CdsPurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPurchaseOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsPurchaseOrderLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link CdsPurchaseOrderLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link CdsPurchaseOrderLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsPurchaseOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<CdsPurchaseOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsPurchaseOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPurchaseOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPurchaseOrderLines`.
   */
  update(
    entity: CdsPurchaseOrderLines<T>
  ): UpdateRequestBuilder<CdsPurchaseOrderLines<T>, T> {
    return new UpdateRequestBuilder<CdsPurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseOrderLines`.
   * @param dataAreaId Key property. See {@link CdsPurchaseOrderLines.dataAreaId}.
   * @param purchaseOrderNumber Key property. See {@link CdsPurchaseOrderLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link CdsPurchaseOrderLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseOrderLines`.
   */
  delete(
    dataAreaId: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<CdsPurchaseOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPurchaseOrderLines<T>
  ): DeleteRequestBuilder<CdsPurchaseOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<CdsPurchaseOrderLines<T>, T> {
    return new DeleteRequestBuilder<CdsPurchaseOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsPurchaseOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
