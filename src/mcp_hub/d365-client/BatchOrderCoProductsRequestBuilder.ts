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
import { BatchOrderCoProducts } from './BatchOrderCoProducts';

/**
 * Request builder class for operations supported on the {@link BatchOrderCoProducts} entity.
 */
export class BatchOrderCoProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderCoProducts<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderCoProducts` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderCoProducts` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderCoProducts<T>, T> {
    return new GetAllRequestBuilder<BatchOrderCoProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchOrderCoProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderCoProducts`.
   */
  create(
    entity: BatchOrderCoProducts<T>
  ): CreateRequestBuilder<BatchOrderCoProducts<T>, T> {
    return new CreateRequestBuilder<BatchOrderCoProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderCoProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderCoProducts.dataAreaId}.
   * @param demandProductionOrderNumber Key property. See {@link BatchOrderCoProducts.demandProductionOrderNumber}.
   * @param demandProductionOrderLineNumber Key property. See {@link BatchOrderCoProducts.demandProductionOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderCoProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    demandProductionOrderNumber: DeserializedType<T, 'Edm.String'>,
    demandProductionOrderLineNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderCoProducts<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderCoProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DemandProductionOrderNumber: demandProductionOrderNumber,
        DemandProductionOrderLineNumber: demandProductionOrderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderCoProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderCoProducts`.
   */
  update(
    entity: BatchOrderCoProducts<T>
  ): UpdateRequestBuilder<BatchOrderCoProducts<T>, T> {
    return new UpdateRequestBuilder<BatchOrderCoProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderCoProducts`.
   * @param dataAreaId Key property. See {@link BatchOrderCoProducts.dataAreaId}.
   * @param demandProductionOrderNumber Key property. See {@link BatchOrderCoProducts.demandProductionOrderNumber}.
   * @param demandProductionOrderLineNumber Key property. See {@link BatchOrderCoProducts.demandProductionOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderCoProducts`.
   */
  delete(
    dataAreaId: string,
    demandProductionOrderNumber: string,
    demandProductionOrderLineNumber: string
  ): DeleteRequestBuilder<BatchOrderCoProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderCoProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderCoProducts` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderCoProducts<T>
  ): DeleteRequestBuilder<BatchOrderCoProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    demandProductionOrderNumber?: string,
    demandProductionOrderLineNumber?: string
  ): DeleteRequestBuilder<BatchOrderCoProducts<T>, T> {
    return new DeleteRequestBuilder<BatchOrderCoProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderCoProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DemandProductionOrderNumber: demandProductionOrderNumber!,
            DemandProductionOrderLineNumber: demandProductionOrderLineNumber!
          }
    );
  }
}
