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
import { PurchaseRequisitionLinesV2 } from './PurchaseRequisitionLinesV2';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionLinesV2} entity.
 */
export class PurchaseRequisitionLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequisitionLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionLinesV2`.
   */
  create(
    entity: PurchaseRequisitionLinesV2<T>
  ): CreateRequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
    return new CreateRequestBuilder<PurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionLinesV2` entity based on its keys.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionLinesV2.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionLinesV2.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionLinesV2` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionLinesV2`.
   */
  update(
    entity: PurchaseRequisitionLinesV2<T>
  ): UpdateRequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLinesV2`.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionLinesV2.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link PurchaseRequisitionLinesV2.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLinesV2`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<PurchaseRequisitionLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionLinesV2<T>
  ): DeleteRequestBuilder<PurchaseRequisitionLinesV2<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<PurchaseRequisitionLinesV2<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof PurchaseRequisitionLinesV2
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
