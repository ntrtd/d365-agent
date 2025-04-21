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
import { SalesProductSets } from './SalesProductSets';

/**
 * Request builder class for operations supported on the {@link SalesProductSets} entity.
 */
export class SalesProductSetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesProductSets<T>, T> {
  /**
   * Returns a request builder for querying all `SalesProductSets` entities.
   * @returns A request builder for creating requests to retrieve all `SalesProductSets` entities.
   */
  getAll(): GetAllRequestBuilder<SalesProductSets<T>, T> {
    return new GetAllRequestBuilder<SalesProductSets<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesProductSets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesProductSets`.
   */
  create(
    entity: SalesProductSets<T>
  ): CreateRequestBuilder<SalesProductSets<T>, T> {
    return new CreateRequestBuilder<SalesProductSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesProductSets` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesProductSets.dataAreaId}.
   * @param productSetNumber Key property. See {@link SalesProductSets.productSetNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesProductSets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    productSetNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesProductSets<T>, T> {
    return new GetByKeyRequestBuilder<SalesProductSets<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProductSetNumber: productSetNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SalesProductSets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesProductSets`.
   */
  update(
    entity: SalesProductSets<T>
  ): UpdateRequestBuilder<SalesProductSets<T>, T> {
    return new UpdateRequestBuilder<SalesProductSets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesProductSets`.
   * @param dataAreaId Key property. See {@link SalesProductSets.dataAreaId}.
   * @param productSetNumber Key property. See {@link SalesProductSets.productSetNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSets`.
   */
  delete(
    dataAreaId: string,
    productSetNumber: string
  ): DeleteRequestBuilder<SalesProductSets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesProductSets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSets` by taking the entity as a parameter.
   */
  delete(
    entity: SalesProductSets<T>
  ): DeleteRequestBuilder<SalesProductSets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    productSetNumber?: string
  ): DeleteRequestBuilder<SalesProductSets<T>, T> {
    return new DeleteRequestBuilder<SalesProductSets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesProductSets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProductSetNumber: productSetNumber!
          }
    );
  }
}
