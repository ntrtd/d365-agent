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
import { ProductionOrderHeaders } from './ProductionOrderHeaders';

/**
 * Request builder class for operations supported on the {@link ProductionOrderHeaders} entity.
 */
export class ProductionOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductionOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `ProductionOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `ProductionOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<ProductionOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<ProductionOrderHeaders<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductionOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductionOrderHeaders`.
   */
  create(
    entity: ProductionOrderHeaders<T>
  ): CreateRequestBuilder<ProductionOrderHeaders<T>, T> {
    return new CreateRequestBuilder<ProductionOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductionOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductionOrderHeaders.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderHeaders.productionOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `ProductionOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productionOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductionOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<ProductionOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ProductionOrderNumber: productionOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductionOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductionOrderHeaders`.
   */
  update(
    entity: ProductionOrderHeaders<T>
  ): UpdateRequestBuilder<ProductionOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<ProductionOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderHeaders`.
   * @param dataAreaId Key property. See {@link ProductionOrderHeaders.dataAreaId}.
   * @param productionOrderNumber Key property. See {@link ProductionOrderHeaders.productionOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    productionOrderNumber: string
  ): DeleteRequestBuilder<ProductionOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductionOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductionOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: ProductionOrderHeaders<T>
  ): DeleteRequestBuilder<ProductionOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productionOrderNumber?: string
  ): DeleteRequestBuilder<ProductionOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<ProductionOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductionOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductionOrderNumber: productionOrderNumber!
          }
    );
  }
}
