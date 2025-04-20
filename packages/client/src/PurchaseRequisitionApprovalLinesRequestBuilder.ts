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
import { PurchaseRequisitionApprovalLines } from './PurchaseRequisitionApprovalLines';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionApprovalLines} entity.
 */
export class PurchaseRequisitionApprovalLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionApprovalLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionApprovalLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionApprovalLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionApprovalLines`.
   */
  create(
    entity: PurchaseRequisitionApprovalLines<T>
  ): CreateRequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
    return new CreateRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionApprovalLines` entity based on its keys.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionApprovalLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionApprovalLines.requisitionLineNumber}.
   * @param workItemRecId Key property. See {@link PurchaseRequisitionApprovalLines.workItemRecId}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionApprovalLines` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>,
    workItemRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber,
        WorkItemRecId: workItemRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionApprovalLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionApprovalLines`.
   */
  update(
    entity: PurchaseRequisitionApprovalLines<T>
  ): UpdateRequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalLines`.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionApprovalLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionApprovalLines.requisitionLineNumber}.
   * @param workItemRecId Key property. See {@link PurchaseRequisitionApprovalLines.workItemRecId}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalLines`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number,
    workItemRecId: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionApprovalLines<T>
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number,
    workItemRecId?: BigNumber
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequisitionApprovalLines<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof PurchaseRequisitionApprovalLines
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!,
            WorkItemRecId: workItemRecId!
          }
    );
  }
}
