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
import { ProductionOrderRouteJobs } from './ProductionOrderRouteJobs';

/**
 * Request builder class for operations supported on the {@link ProductionOrderRouteJobs} entity.
 */
export class ProductionOrderRouteJobsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionOrderRouteJobs<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionOrderRouteJobs` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionOrderRouteJobs` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionOrderRouteJobs<T>, T> {
    return new GetAllRequestBuilder<ProductionOrderRouteJobs<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionOrderRouteJobs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionOrderRouteJobs`.
   */
  create(
    entity: ProductionOrderRouteJobs<T>
  ): CreateRequestBuilder<ProductionOrderRouteJobs<T>, T> {
    return new CreateRequestBuilder<ProductionOrderRouteJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionOrderRouteJobs` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionOrderRouteJobs.dataAreaId}.
   * @param jobId Key property. See {@link ProductionOrderRouteJobs.jobId}.
   * @returns A request builder for creating requests to retrieve one `ProductionOrderRouteJobs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    jobId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductionOrderRouteJobs<T>, T> {
    return new GetByKeyRequestBuilder<ProductionOrderRouteJobs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        JobId: jobId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionOrderRouteJobs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionOrderRouteJobs`.
   */
  update(
    entity: ProductionOrderRouteJobs<T>
  ): UpdateRequestBuilder<ProductionOrderRouteJobs<T>, T> {
    return new UpdateRequestBuilder<ProductionOrderRouteJobs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderRouteJobs`.
   * @param dataAreaId Key property. See {@link ProductionOrderRouteJobs.dataAreaId}.
   * @param jobId Key property. See {@link ProductionOrderRouteJobs.jobId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderRouteJobs`.
   */
  delete(
    dataAreaId: string,
    jobId: string
  ): DeleteRequestBuilder<ProductionOrderRouteJobs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderRouteJobs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderRouteJobs` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionOrderRouteJobs<T>
  ): DeleteRequestBuilder<ProductionOrderRouteJobs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    jobId?: string
  ): DeleteRequestBuilder<ProductionOrderRouteJobs<T>, T> {
    return new DeleteRequestBuilder<ProductionOrderRouteJobs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionOrderRouteJobs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            JobId: jobId!
          }
    );
  }
}
