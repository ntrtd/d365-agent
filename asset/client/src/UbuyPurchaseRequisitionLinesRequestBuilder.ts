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
import { UbuyPurchaseRequisitionLines } from './UbuyPurchaseRequisitionLines';

/**
 * Request builder class for operations supported on the {@link UbuyPurchaseRequisitionLines} entity.
 */
export class UbuyPurchaseRequisitionLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
  /**
   * Returns a request builder for querying all `UbuyPurchaseRequisitionLines` entities.
   * @returns A request builder for creating requests to retrieve all `UbuyPurchaseRequisitionLines` entities.
   */
  getAll(): GetAllRequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
    return new GetAllRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `UbuyPurchaseRequisitionLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `UbuyPurchaseRequisitionLines`.
   */
  create(
    entity: UbuyPurchaseRequisitionLines<T>
  ): CreateRequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
    return new CreateRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `UbuyPurchaseRequisitionLines` entity based on its keys.
   * @param requisitionNumber Key property. See {@link UbuyPurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link UbuyPurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `UbuyPurchaseRequisitionLines` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
    return new GetByKeyRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `UbuyPurchaseRequisitionLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `UbuyPurchaseRequisitionLines`.
   */
  update(
    entity: UbuyPurchaseRequisitionLines<T>
  ): UpdateRequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
    return new UpdateRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `UbuyPurchaseRequisitionLines`.
   * @param requisitionNumber Key property. See {@link UbuyPurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link UbuyPurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `UbuyPurchaseRequisitionLines`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `UbuyPurchaseRequisitionLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `UbuyPurchaseRequisitionLines` by taking the entity as a parameter.
   */
  delete(
    entity: UbuyPurchaseRequisitionLines<T>
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<UbuyPurchaseRequisitionLines<T>, T> {
    return new DeleteRequestBuilder<UbuyPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof UbuyPurchaseRequisitionLines
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
