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
import { PurchaseRequisitionApprovalAttachedLines } from './PurchaseRequisitionApprovalAttachedLines';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionApprovalAttachedLines} entity.
 */
export class PurchaseRequisitionApprovalAttachedLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionApprovalAttachedLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionApprovalAttachedLines` entities.
   */
  getAll(): GetAllRequestBuilder<
    PurchaseRequisitionApprovalAttachedLines<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PurchaseRequisitionApprovalAttachedLines<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionApprovalAttachedLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   */
  create(
    entity: PurchaseRequisitionApprovalAttachedLines<T>
  ): CreateRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T> {
    return new CreateRequestBuilder<
      PurchaseRequisitionApprovalAttachedLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionApprovalAttachedLines` entity based on its keys.
   * @param requisitionTableRecId Key property. See {@link PurchaseRequisitionApprovalAttachedLines.requisitionTableRecId}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionApprovalAttachedLines.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionApprovalAttachedLines` entity based on its keys.
   */
  getByKey(
    requisitionTableRecId: DeserializedType<T, 'Edm.Int64'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T> {
    return new GetByKeyRequestBuilder<
      PurchaseRequisitionApprovalAttachedLines<T>,
      T
    >(this.entityApi, {
      RequisitionTableRecId: requisitionTableRecId,
      RequisitionLineNumber: requisitionLineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   */
  update(
    entity: PurchaseRequisitionApprovalAttachedLines<T>
  ): UpdateRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T> {
    return new UpdateRequestBuilder<
      PurchaseRequisitionApprovalAttachedLines<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   * @param requisitionTableRecId Key property. See {@link PurchaseRequisitionApprovalAttachedLines.requisitionTableRecId}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionApprovalAttachedLines.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   */
  delete(
    requisitionTableRecId: BigNumber,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionApprovalAttachedLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionApprovalAttachedLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionApprovalAttachedLines<T>
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T>;
  delete(
    requisitionTableRecIdOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<PurchaseRequisitionApprovalAttachedLines<T>, T> {
    return new DeleteRequestBuilder<
      PurchaseRequisitionApprovalAttachedLines<T>,
      T
    >(
      this.entityApi,
      requisitionTableRecIdOrEntity instanceof
      PurchaseRequisitionApprovalAttachedLines
        ? requisitionTableRecIdOrEntity
        : {
            RequisitionTableRecId: requisitionTableRecIdOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
