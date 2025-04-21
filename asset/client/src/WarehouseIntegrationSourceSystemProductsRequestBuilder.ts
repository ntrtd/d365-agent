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
import { WarehouseIntegrationSourceSystemProducts } from './WarehouseIntegrationSourceSystemProducts';

/**
 * Request builder class for operations supported on the {@link WarehouseIntegrationSourceSystemProducts} entity.
 */
export class WarehouseIntegrationSourceSystemProductsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T> {
  /**
   * Returns a request builder for querying all `WarehouseIntegrationSourceSystemProducts` entities.
   * @returns A request builder for creating requests to retrieve all `WarehouseIntegrationSourceSystemProducts` entities.
   */
  getAll(): GetAllRequestBuilder<
    WarehouseIntegrationSourceSystemProducts<T>,
    T
  > {
    return new GetAllRequestBuilder<
      WarehouseIntegrationSourceSystemProducts<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WarehouseIntegrationSourceSystemProducts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WarehouseIntegrationSourceSystemProducts`.
   */
  create(
    entity: WarehouseIntegrationSourceSystemProducts<T>
  ): CreateRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T> {
    return new CreateRequestBuilder<
      WarehouseIntegrationSourceSystemProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `WarehouseIntegrationSourceSystemProducts` entity based on its keys.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemProducts.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystemProducts.sourceSystemId}.
   * @param sourceSystemProductNumber Key property. See {@link WarehouseIntegrationSourceSystemProducts.sourceSystemProductNumber}.
   * @returns A request builder for creating requests to retrieve one `WarehouseIntegrationSourceSystemProducts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sourceSystemId: DeserializedType<T, 'Edm.String'>,
    sourceSystemProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T> {
    return new GetByKeyRequestBuilder<
      WarehouseIntegrationSourceSystemProducts<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      SourceSystemId: sourceSystemId,
      SourceSystemProductNumber: sourceSystemProductNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WarehouseIntegrationSourceSystemProducts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WarehouseIntegrationSourceSystemProducts`.
   */
  update(
    entity: WarehouseIntegrationSourceSystemProducts<T>
  ): UpdateRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T> {
    return new UpdateRequestBuilder<
      WarehouseIntegrationSourceSystemProducts<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemProducts`.
   * @param dataAreaId Key property. See {@link WarehouseIntegrationSourceSystemProducts.dataAreaId}.
   * @param sourceSystemId Key property. See {@link WarehouseIntegrationSourceSystemProducts.sourceSystemId}.
   * @param sourceSystemProductNumber Key property. See {@link WarehouseIntegrationSourceSystemProducts.sourceSystemProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemProducts`.
   */
  delete(
    dataAreaId: string,
    sourceSystemId: string,
    sourceSystemProductNumber: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WarehouseIntegrationSourceSystemProducts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WarehouseIntegrationSourceSystemProducts` by taking the entity as a parameter.
   */
  delete(
    entity: WarehouseIntegrationSourceSystemProducts<T>
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sourceSystemId?: string,
    sourceSystemProductNumber?: string
  ): DeleteRequestBuilder<WarehouseIntegrationSourceSystemProducts<T>, T> {
    return new DeleteRequestBuilder<
      WarehouseIntegrationSourceSystemProducts<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof WarehouseIntegrationSourceSystemProducts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SourceSystemId: sourceSystemId!,
            SourceSystemProductNumber: sourceSystemProductNumber!
          }
    );
  }
}
