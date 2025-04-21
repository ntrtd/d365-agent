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
import { UbuyPurchaseRequisitionHeaders } from './UbuyPurchaseRequisitionHeaders';

/**
 * Request builder class for operations supported on the {@link UbuyPurchaseRequisitionHeaders} entity.
 */
export class UbuyPurchaseRequisitionHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `UbuyPurchaseRequisitionHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `UbuyPurchaseRequisitionHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
    return new GetAllRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UbuyPurchaseRequisitionHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UbuyPurchaseRequisitionHeaders`.
   */
  create(
    entity: UbuyPurchaseRequisitionHeaders<T>
  ): CreateRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
    return new CreateRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UbuyPurchaseRequisitionHeaders` entity based on its keys.
   * @param requisitionNumber Key property. See {@link UbuyPurchaseRequisitionHeaders.requisitionNumber}.
   * @returns A request builder for creating requests to retrieve one `UbuyPurchaseRequisitionHeaders` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
    return new GetByKeyRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      { RequisitionNumber: requisitionNumber }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UbuyPurchaseRequisitionHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UbuyPurchaseRequisitionHeaders`.
   */
  update(
    entity: UbuyPurchaseRequisitionHeaders<T>
  ): UpdateRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
    return new UpdateRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UbuyPurchaseRequisitionHeaders`.
   * @param requisitionNumber Key property. See {@link UbuyPurchaseRequisitionHeaders.requisitionNumber}.
   * @returns A request builder for creating requests that delete an entity of type `UbuyPurchaseRequisitionHeaders`.
   */
  delete(
    requisitionNumber: string
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UbuyPurchaseRequisitionHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UbuyPurchaseRequisitionHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: UbuyPurchaseRequisitionHeaders<T>
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>;
  delete(
    requisitionNumberOrEntity: any
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T> {
    return new DeleteRequestBuilder<UbuyPurchaseRequisitionHeaders<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof UbuyPurchaseRequisitionHeaders
        ? requisitionNumberOrEntity
        : { RequisitionNumber: requisitionNumberOrEntity! }
    );
  }
}
