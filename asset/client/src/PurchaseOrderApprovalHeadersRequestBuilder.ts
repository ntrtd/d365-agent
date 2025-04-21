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
import { PurchaseOrderApprovalHeaders } from './PurchaseOrderApprovalHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseOrderApprovalHeaders} entity.
 */
export class PurchaseOrderApprovalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseOrderApprovalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseOrderApprovalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseOrderApprovalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseOrderApprovalHeaders`.
   */
  create(
    entity: PurchaseOrderApprovalHeaders<T>
  ): CreateRequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseOrderApprovalHeaders` entity based on its keys.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalHeaders.purchaseOrderNumber}.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalHeaders.legalEntity}.
   * @param workItemRecId Key property. See {@link PurchaseOrderApprovalHeaders.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseOrderApprovalHeaders` entity based on its keys.
   */
  getByKey(
    purchaseOrderNumber: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>(
      this.entityApi,
      {
        PurchaseOrderNumber: purchaseOrderNumber,
        LegalEntity: legalEntity,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseOrderApprovalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseOrderApprovalHeaders`.
   */
  update(
    entity: PurchaseOrderApprovalHeaders<T>
  ): UpdateRequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalHeaders`.
   * @param purchaseOrderNumber Key property. See {@link PurchaseOrderApprovalHeaders.purchaseOrderNumber}.
   * @param legalEntity Key property. See {@link PurchaseOrderApprovalHeaders.legalEntity}.
   * @param workItemRecId Key property. See {@link PurchaseOrderApprovalHeaders.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalHeaders`.
   */
  delete(
    purchaseOrderNumber: string,
    legalEntity: string,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseOrderApprovalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseOrderApprovalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseOrderApprovalHeaders<T>
  ): DeleteRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>;
  delete(
    purchaseOrderNumberOrEntity: any,
    legalEntity?: string,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<PurchaseOrderApprovalHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseOrderApprovalHeaders<T>, T>(
      this.entityApi,
      purchaseOrderNumberOrEntity instanceof PurchaseOrderApprovalHeaders
        ? purchaseOrderNumberOrEntity
        : {
            PurchaseOrderNumber: purchaseOrderNumberOrEntity!,
            LegalEntity: legalEntity!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
