/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { PurchaseRequisitionLines } from './PurchaseRequisitionLines';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionLines} entity.
 */
export class PurchaseRequisitionLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionLines<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionLines` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionLines` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequisitionLines<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequisitionLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionLines`.
   */
  create(
    entity: PurchaseRequisitionLines<T>
  ): CreateRequestBuilder<PurchaseRequisitionLines<T>, T> {
    return new CreateRequestBuilder<PurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionLines` entity based on its keys.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionLines` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionLines<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequisitionLines<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionLines`.
   */
  update(
    entity: PurchaseRequisitionLines<T>
  ): UpdateRequestBuilder<PurchaseRequisitionLines<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLines`.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLines`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<PurchaseRequisitionLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLines` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionLines<T>
  ): DeleteRequestBuilder<PurchaseRequisitionLines<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<PurchaseRequisitionLines<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequisitionLines<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof PurchaseRequisitionLines
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
