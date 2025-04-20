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
import { CdsPurchaseRequisitionLinesV2 } from './CdsPurchaseRequisitionLinesV2';

/**
 * Request builder class for operations supported on the {@link CdsPurchaseRequisitionLinesV2} entity.
 */
export class CdsPurchaseRequisitionLinesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPurchaseRequisitionLinesV2` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPurchaseRequisitionLinesV2` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
    return new GetAllRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPurchaseRequisitionLinesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPurchaseRequisitionLinesV2`.
   */
  create(
    entity: CdsPurchaseRequisitionLinesV2<T>
  ): CreateRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
    return new CreateRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPurchaseRequisitionLinesV2` entity based on its keys.
   * @param requisitionNumber Key property. See {@link CdsPurchaseRequisitionLinesV2.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link CdsPurchaseRequisitionLinesV2.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsPurchaseRequisitionLinesV2` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
    return new GetByKeyRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPurchaseRequisitionLinesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPurchaseRequisitionLinesV2`.
   */
  update(
    entity: CdsPurchaseRequisitionLinesV2<T>
  ): UpdateRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
    return new UpdateRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseRequisitionLinesV2`.
   * @param requisitionNumber Key property. See {@link CdsPurchaseRequisitionLinesV2.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link CdsPurchaseRequisitionLinesV2.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseRequisitionLinesV2`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseRequisitionLinesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseRequisitionLinesV2` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPurchaseRequisitionLinesV2<T>
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T> {
    return new DeleteRequestBuilder<CdsPurchaseRequisitionLinesV2<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof CdsPurchaseRequisitionLinesV2
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
