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
import { ProjSubContractPurchaseOrderLines } from './ProjSubContractPurchaseOrderLines';

/**
 * Request builder class for operations supported on the {@link ProjSubContractPurchaseOrderLines} entity.
 */
export class ProjSubContractPurchaseOrderLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
  /**
   * Returns a request builder for querying all `ProjSubContractPurchaseOrderLines` entities.
   * @returns A request builder for creating requests to retrieve all `ProjSubContractPurchaseOrderLines` entities.
   */
  getAll(): GetAllRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
    return new GetAllRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjSubContractPurchaseOrderLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjSubContractPurchaseOrderLines`.
   */
  create(
    entity: ProjSubContractPurchaseOrderLines<T>
  ): CreateRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
    return new CreateRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjSubContractPurchaseOrderLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjSubContractPurchaseOrderLines.dataAreaId}.
   * @param projSubContractLineNumber Key property. See {@link ProjSubContractPurchaseOrderLines.projSubContractLineNumber}.
   * @returns A request builder for creating requests to retrieve one `ProjSubContractPurchaseOrderLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    projSubContractLineNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
    return new GetByKeyRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProjSubContractLineNumber: projSubContractLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjSubContractPurchaseOrderLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjSubContractPurchaseOrderLines`.
   */
  update(
    entity: ProjSubContractPurchaseOrderLines<T>
  ): UpdateRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
    return new UpdateRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjSubContractPurchaseOrderLines`.
   * @param dataAreaId Key property. See {@link ProjSubContractPurchaseOrderLines.dataAreaId}.
   * @param projSubContractLineNumber Key property. See {@link ProjSubContractPurchaseOrderLines.projSubContractLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProjSubContractPurchaseOrderLines`.
   */
  delete(
    dataAreaId: string,
    projSubContractLineNumber: string
  ): DeleteRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjSubContractPurchaseOrderLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjSubContractPurchaseOrderLines` by taking the entity as a parameter.
   */
  delete(
    entity: ProjSubContractPurchaseOrderLines<T>
  ): DeleteRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    projSubContractLineNumber?: string
  ): DeleteRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T> {
    return new DeleteRequestBuilder<ProjSubContractPurchaseOrderLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjSubContractPurchaseOrderLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProjSubContractLineNumber: projSubContractLineNumber!
          }
    );
  }
}
