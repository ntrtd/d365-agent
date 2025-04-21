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
import { PurchaseOrderApprovalAttachedLines } from './PurchaseOrderApprovalAttachedLines';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderApprovalAttachedLines} entity.
 */
export class PurchaseOrderApprovalAttachedLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderApprovalAttachedLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderApprovalAttachedLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderApprovalAttachedLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderApprovalAttachedLines`.
   */
  create(
    entity: PurchaseOrderApprovalAttachedLines<T>
  ): CreateRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderApprovalAttachedLines` entity based on its keys.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalAttachedLines.legalEntity}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalAttachedLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderApprovalAttachedLines.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderApprovalAttachedLines` entity based on its keys.
   */
  getByKey(
    legalEntity: DeserializedType<T, 'Edm.String'>,
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>(
      this.entityApi,
      {
        LegalEntity: legalEntity,
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderApprovalAttachedLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderApprovalAttachedLines`.
   */
  update(
    entity: PurchaseOrderApprovalAttachedLines<T>
  ): UpdateRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalAttachedLines`.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalAttachedLines.legalEntity}.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalAttachedLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderApprovalAttachedLines.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalAttachedLines`.
   */
  delete(
    legalEntity: string,
    purchaseOrderNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalAttachedLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalAttachedLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderApprovalAttachedLines<T>
  ): DeleteRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>;
  delete(
    legalEntityOrEntity: any,
    purchaseOrderNumber?: string,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderApprovalAttachedLines<T>, T>(
      this.entityApi,
      legalEntityOrEntity instanceof PurchaseOrderApprovalAttachedLines
        ? legalEntityOrEntity
        : {
            LegalEntity: legalEntityOrEntity!,
            PurchaseOrderNumber: purchaseOrderNumber!,
            LineNumber: lineNumber!
          }
    );
  }
}
