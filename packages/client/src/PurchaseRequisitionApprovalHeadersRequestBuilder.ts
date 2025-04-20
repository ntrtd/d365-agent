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
import { PurchaseRequisitionApprovalHeaders } from './PurchaseRequisitionApprovalHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionApprovalHeaders} entity.
 */
export class PurchaseRequisitionApprovalHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionApprovalHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionApprovalHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionApprovalHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionApprovalHeaders`.
   */
  create(
    entity: PurchaseRequisitionApprovalHeaders<T>
  ): CreateRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionApprovalHeaders` entity based on its keys.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionApprovalHeaders.requisitionNumber}.
   * @param workItemRecId Key property. See {@link PurchaseRequisitionApprovalHeaders.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionApprovalHeaders` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionApprovalHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionApprovalHeaders`.
   */
  update(
    entity: PurchaseRequisitionApprovalHeaders<T>
  ): UpdateRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalHeaders`.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionApprovalHeaders.requisitionNumber}.
   * @param workItemRecId Key property. See {@link PurchaseRequisitionApprovalHeaders.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalHeaders`.
   */
  delete(
    requisitionNumber: string,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionApprovalHeaders<T>
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequisitionApprovalHeaders<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof PurchaseRequisitionApprovalHeaders
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
