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
import { BatchOrderByProducts } from './BatchOrderByProducts';

/**
 * Request builder class for operations supported on the {@link BatchOrderByProducts} entity.
 */
export class BatchOrderByProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BatchOrderByProducts<T>, T> {
  /**
   * Returns a request builder for querying all `BatchOrderByProducts` entities.
   * @returns A request builder for creating requests to retrieve all `BatchOrderByProducts` entities.
   */
  getAll(): GetAllRequestBuilder<BatchOrderByProducts<T>, T> {
    return new GetAllRequestBuilder<BatchOrderByProducts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BatchOrderByProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BatchOrderByProducts`.
   */
  create(
    entity: BatchOrderByProducts<T>
  ): CreateRequestBuilder<BatchOrderByProducts<T>, T> {
    return new CreateRequestBuilder<BatchOrderByProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BatchOrderByProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link BatchOrderByProducts.dataAreaId}.
   * @param demandProductionOrderNumber Key property. See {@link BatchOrderByProducts.demandProductionOrderNumber}.
   * @param demandProductionOrderLineNumber Key property. See {@link BatchOrderByProducts.demandProductionOrderLineNumber}.
   * @returns A request builder for creating requests to retrieve one `BatchOrderByProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    demandProductionOrderNumber: DeserializedType<T, 'Edm.String'>,
    demandProductionOrderLineNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BatchOrderByProducts<T>, T> {
    return new GetByKeyRequestBuilder<BatchOrderByProducts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DemandProductionOrderNumber: demandProductionOrderNumber,
        DemandProductionOrderLineNumber: demandProductionOrderLineNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BatchOrderByProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BatchOrderByProducts`.
   */
  update(
    entity: BatchOrderByProducts<T>
  ): UpdateRequestBuilder<BatchOrderByProducts<T>, T> {
    return new UpdateRequestBuilder<BatchOrderByProducts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BatchOrderByProducts`.
   * @param dataAreaId Key property. See {@link BatchOrderByProducts.dataAreaId}.
   * @param demandProductionOrderNumber Key property. See {@link BatchOrderByProducts.demandProductionOrderNumber}.
   * @param demandProductionOrderLineNumber Key property. See {@link BatchOrderByProducts.demandProductionOrderLineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderByProducts`.
   */
  delete(
    dataAreaId: string,
    demandProductionOrderNumber: string,
    demandProductionOrderLineNumber: string
  ): DeleteRequestBuilder<BatchOrderByProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BatchOrderByProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BatchOrderByProducts` by taking the entity as a parameter.
   */
  delete(
    entity: BatchOrderByProducts<T>
  ): DeleteRequestBuilder<BatchOrderByProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    demandProductionOrderNumber?: string,
    demandProductionOrderLineNumber?: string
  ): DeleteRequestBuilder<BatchOrderByProducts<T>, T> {
    return new DeleteRequestBuilder<BatchOrderByProducts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BatchOrderByProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DemandProductionOrderNumber: demandProductionOrderNumber!,
            DemandProductionOrderLineNumber: demandProductionOrderLineNumber!
          }
    );
  }
}
