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
import { CdsPurchaseRequisitionLines } from './CdsPurchaseRequisitionLines';

/**
 * Request builder class for operations supported on the {@link CdsPurchaseRequisitionLines} entity.
 */
export class CdsPurchaseRequisitionLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
  /**
   * Returns a request builder for querying all `CdsPurchaseRequisitionLines` entities.
   * @returns A request builder for creating requests to retrieve all `CdsPurchaseRequisitionLines` entities.
   */
  getAll(): GetAllRequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
    return new GetAllRequestBuilder<CdsPurchaseRequisitionLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsPurchaseRequisitionLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsPurchaseRequisitionLines`.
   */
  create(
    entity: CdsPurchaseRequisitionLines<T>
  ): CreateRequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
    return new CreateRequestBuilder<CdsPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsPurchaseRequisitionLines` entity based on its keys.
   * @param requisitionNumber Key property. See {@link CdsPurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link CdsPurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsPurchaseRequisitionLines` entity based on its keys.
   */
  getByKey(
    requisitionNumber: DeserializedType<T, 'Edm.String'>,
    requisitionLineNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
    return new GetByKeyRequestBuilder<CdsPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      {
        RequisitionNumber: requisitionNumber,
        RequisitionLineNumber: requisitionLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsPurchaseRequisitionLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsPurchaseRequisitionLines`.
   */
  update(
    entity: CdsPurchaseRequisitionLines<T>
  ): UpdateRequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
    return new UpdateRequestBuilder<CdsPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseRequisitionLines`.
   * @param requisitionNumber Key property. See {@link CdsPurchaseRequisitionLines.requisitionNumber}.
   * @param requisitionLineNumber Key property. See {@link CdsPurchaseRequisitionLines.requisitionLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseRequisitionLines`.
   */
  delete(
    requisitionNumber: string,
    requisitionLineNumber: number
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsPurchaseRequisitionLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsPurchaseRequisitionLines` by taking the entity as a parameter.
   */
  delete(
    entity: CdsPurchaseRequisitionLines<T>
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLines<T>, T>;
  delete(
    requisitionNumberOrEntity: any,
    requisitionLineNumber?: number
  ): DeleteRequestBuilder<CdsPurchaseRequisitionLines<T>, T> {
    return new DeleteRequestBuilder<CdsPurchaseRequisitionLines<T>, T>(
      this.entityApi,
      requisitionNumberOrEntity instanceof CdsPurchaseRequisitionLines
        ? requisitionNumberOrEntity
        : {
            RequisitionNumber: requisitionNumberOrEntity!,
            RequisitionLineNumber: requisitionLineNumber!
          }
    );
  }
}
