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
import { PurchaseOrderApprovalLines } from './PurchaseOrderApprovalLines';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderApprovalLines} entity.
 */
export class PurchaseOrderApprovalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderApprovalLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderApprovalLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderApprovalLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderApprovalLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderApprovalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderApprovalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderApprovalLines`.
   */
  create(
    entity: PurchaseOrderApprovalLines<T>
  ): CreateRequestBuilder<PurchaseOrderApprovalLines<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderApprovalLines` entity based on its keys.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderApprovalLines.lineNumber}.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalLines.legalEntity}.
   * @param workItemRecId Key property. See {@link PurchaseOrderApprovalLines.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderApprovalLines` entity based on its keys.
   */
  getByKey(
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Int64'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderApprovalLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderApprovalLines<T>, T>(
      this.entityApi,
      {
        PurchaseOrderNumber: purchaseOrderNumber,
        LineNumber: lineNumber,
        LegalEntity: legalEntity,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderApprovalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderApprovalLines`.
   */
  update(
    entity: PurchaseOrderApprovalLines<T>
  ): UpdateRequestBuilder<PurchaseOrderApprovalLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalLines`.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalLines.purchaseOrderNumber}.
   * @param lineNumber Key property. See {@link PurchaseOrderApprovalLines.lineNumber}.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalLines.legalEntity}.
   * @param workItemRecId Key property. See {@link PurchaseOrderApprovalLines.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalLines`.
   */
  delete(
    purchaseOrderNumber: string,
    lineNumber: BigNumber,
    legalEntity: string,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderApprovalLines<T>
  ): DeleteRequestBuilder<PurchaseOrderApprovalLines<T>, T>;
  delete(
    purchaseOrderNumberOrEntity: any,
    lineNumber?: BigNumber,
    legalEntity?: string,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderApprovalLines<T>, T>(
      this.entityApi,
      purchaseOrderNumberOrEntity instanceof PurchaseOrderApprovalLines
        ? purchaseOrderNumberOrEntity
        : {
            PurchaseOrderNumber: purchaseOrderNumberOrEntity!,
            LineNumber: lineNumber!,
            LegalEntity: legalEntity!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
