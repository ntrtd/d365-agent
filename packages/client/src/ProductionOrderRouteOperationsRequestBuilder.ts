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
import { ProductionOrderRouteOperations } from './ProductionOrderRouteOperations';
import { RouteOprPriority } from './RouteOprPriority';

/**
 * Request builder class for operations supported on the {@link ProductionOrderRouteOperations} entity.
 */
export class ProductionOrderRouteOperationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionOrderRouteOperations<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionOrderRouteOperations` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionOrderRouteOperations` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionOrderRouteOperations<T>, T> {
    return new GetAllRequestBuilder<ProductionOrderRouteOperations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionOrderRouteOperations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionOrderRouteOperations`.
   */
  create(
    entity: ProductionOrderRouteOperations<T>
  ): CreateRequestBuilder<ProductionOrderRouteOperations<T>, T> {
    return new CreateRequestBuilder<ProductionOrderRouteOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionOrderRouteOperations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionOrderRouteOperations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderRouteOperations.productionOrderNumber}.
   * @param operationNumber Key property. See {@link ProductionOrderRouteOperations.operationNumber}.
   * @param operationPriority Key property. See {@link ProductionOrderRouteOperations.operationPriority}.
   * @returns A request builder for creating requests to retrieve one `ProductionOrderRouteOperations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionOrderNumber: DeserializedType<T, 'Edm.String'>,
    operationNumber: DeserializedType<T, 'Edm.Int32'>,
    operationPriority: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.RouteOprPriority'
    >
  ): GetByKeyRequestBuilder<ProductionOrderRouteOperations<T>, T> {
    return new GetByKeyRequestBuilder<ProductionOrderRouteOperations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductionOrderNumber: productionOrderNumber,
        OperationNumber: operationNumber,
        OperationPriority: operationPriority
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionOrderRouteOperations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionOrderRouteOperations`.
   */
  update(
    entity: ProductionOrderRouteOperations<T>
  ): UpdateRequestBuilder<ProductionOrderRouteOperations<T>, T> {
    return new UpdateRequestBuilder<ProductionOrderRouteOperations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderRouteOperations`.
   * @param dataAreaId Key property. See {@link ProductionOrderRouteOperations.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderRouteOperations.productionOrderNumber}.
   * @param operationNumber Key property. See {@link ProductionOrderRouteOperations.operationNumber}.
   * @param operationPriority Key property. See {@link ProductionOrderRouteOperations.operationPriority}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderRouteOperations`.
   */
  delete(
    dataAreaId: string,
    productionOrderNumber: string,
    operationNumber: number,
    operationPriority: RouteOprPriority
  ): DeleteRequestBuilder<ProductionOrderRouteOperations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderRouteOperations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderRouteOperations` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionOrderRouteOperations<T>
  ): DeleteRequestBuilder<ProductionOrderRouteOperations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionOrderNumber?: string,
    operationNumber?: number,
    operationPriority?: RouteOprPriority
  ): DeleteRequestBuilder<ProductionOrderRouteOperations<T>, T> {
    return new DeleteRequestBuilder<ProductionOrderRouteOperations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionOrderRouteOperations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductionOrderNumber: productionOrderNumber!,
            OperationNumber: operationNumber!,
            OperationPriority: operationPriority!
          }
    );
  }
}
