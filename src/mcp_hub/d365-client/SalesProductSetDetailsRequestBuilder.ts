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
import { SalesProductSetDetails } from './SalesProductSetDetails';

/**
 * Request builder class for operations supported on the {@link SalesProductSetDetails} entity.
 */
export class SalesProductSetDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesProductSetDetails<T>, T> {
  /**
   * Returns a request builder for querying all `SalesProductSetDetails` entities.
   * @returns A request builder for creating requests to retrieve all `SalesProductSetDetails` entities.
   */
  getAll(): GetAllRequestBuilder<SalesProductSetDetails<T>, T> {
    return new GetAllRequestBuilder<SalesProductSetDetails<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesProductSetDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesProductSetDetails`.
   */
  create(
    entity: SalesProductSetDetails<T>
  ): CreateRequestBuilder<SalesProductSetDetails<T>, T> {
    return new CreateRequestBuilder<SalesProductSetDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesProductSetDetails` entity based on its keys.
   * @param dataAreaId Key property. See {@link SalesProductSetDetails.dataAreaId}.
   * @param salesProductSetNumber Key property. See {@link SalesProductSetDetails.salesProductSetNumber}.
   * @param itemNumber Key property. See {@link SalesProductSetDetails.itemNumber}.
   * @param productColorId Key property. See {@link SalesProductSetDetails.productColorId}.
   * @param productStyleId Key property. See {@link SalesProductSetDetails.productStyleId}.
   * @param productSizeId Key property. See {@link SalesProductSetDetails.productSizeId}.
   * @param productConfigurationId Key property. See {@link SalesProductSetDetails.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `SalesProductSetDetails` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salesProductSetNumber: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesProductSetDetails<T>, T> {
    return new GetByKeyRequestBuilder<SalesProductSetDetails<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SalesProductSetNumber: salesProductSetNumber,
        ItemNumber: itemNumber,
        ProductColorId: productColorId,
        ProductStyleId: productStyleId,
        ProductSizeId: productSizeId,
        ProductConfigurationId: productConfigurationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesProductSetDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesProductSetDetails`.
   */
  update(
    entity: SalesProductSetDetails<T>
  ): UpdateRequestBuilder<SalesProductSetDetails<T>, T> {
    return new UpdateRequestBuilder<SalesProductSetDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesProductSetDetails`.
   * @param dataAreaId Key property. See {@link SalesProductSetDetails.dataAreaId}.
   * @param salesProductSetNumber Key property. See {@link SalesProductSetDetails.salesProductSetNumber}.
   * @param itemNumber Key property. See {@link SalesProductSetDetails.itemNumber}.
   * @param productColorId Key property. See {@link SalesProductSetDetails.productColorId}.
   * @param productStyleId Key property. See {@link SalesProductSetDetails.productStyleId}.
   * @param productSizeId Key property. See {@link SalesProductSetDetails.productSizeId}.
   * @param productConfigurationId Key property. See {@link SalesProductSetDetails.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSetDetails`.
   */
  delete(
    dataAreaId: string,
    salesProductSetNumber: string,
    itemNumber: string,
    productColorId: string,
    productStyleId: string,
    productSizeId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<SalesProductSetDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesProductSetDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesProductSetDetails` by taking the entity as a parameter.
   */
  delete(
    entity: SalesProductSetDetails<T>
  ): DeleteRequestBuilder<SalesProductSetDetails<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salesProductSetNumber?: string,
    itemNumber?: string,
    productColorId?: string,
    productStyleId?: string,
    productSizeId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<SalesProductSetDetails<T>, T> {
    return new DeleteRequestBuilder<SalesProductSetDetails<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SalesProductSetDetails
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalesProductSetNumber: salesProductSetNumber!,
            ItemNumber: itemNumber!,
            ProductColorId: productColorId!,
            ProductStyleId: productStyleId!,
            ProductSizeId: productSizeId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
