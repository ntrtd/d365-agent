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
import { PurchaseRequisitionHeaders } from './PurchaseRequisitionHeaders';

/**
 * Request builder class for operations supported on the {@link PurchaseRequisitionHeaders} entity.
 */
export class PurchaseRequisitionHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PurchaseRequisitionHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `PurchaseRequisitionHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `PurchaseRequisitionHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<PurchaseRequisitionHeaders<T>, T> {
    return new GetAllRequestBuilder<PurchaseRequisitionHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PurchaseRequisitionHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PurchaseRequisitionHeaders`.
   */
  create(
    entity: PurchaseRequisitionHeaders<T>
  ): CreateRequestBuilder<PurchaseRequisitionHeaders<T>, T> {
    return new CreateRequestBuilder<PurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PurchaseRequisitionHeaders` entity based on its keys.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionHeaders.requisitionNumber}.
   * @returns A request builder for creating requests to retrieve one `PurchaseRequisitionHeaders` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PurchaseRequisitionHeaders<T>, T> {
    return new GetByKeyRequestBuilder<PurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      { RequisitionNumber: requisitionNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PurchaseRequisitionHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PurchaseRequisitionHeaders`.
   */
  update(
    entity: PurchaseRequisitionHeaders<T>
  ): UpdateRequestBuilder<PurchaseRequisitionHeaders<T>, T> {
    return new UpdateRequestBuilder<PurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionHeaders`.
   * @param requisitionNumber Key property. See {@link PurchaseRequisitionHeaders.requisitionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionHeaders`.
   */
  delete(
    requisitionNumber: string
  ): DeleteRequestBuilder<PurchaseRequisitionHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PurchaseRequisitionHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PurchaseRequisitionHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: PurchaseRequisitionHeaders<T>
  ): DeleteRequestBuilder<PurchaseRequisitionHeaders<T>, T>;
  delete(
    requisitionNumberOrEntity: any
  ): DeleteRequestBuilder<PurchaseRequisitionHeaders<T>, T> {
    return new DeleteRequestBuilder<PurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof PurchaseRequisitionHeaders
        ? requisitionNumberOrEntity
        : { RequisitionNumber: requisitionNumberOrEntity! }
    );
  }
}
