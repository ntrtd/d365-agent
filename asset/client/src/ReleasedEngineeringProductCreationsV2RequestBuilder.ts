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
import { ReleasedEngineeringProductCreationsV2 } from './ReleasedEngineeringProductCreationsV2';

/**
 * Request builder class for operations supported on the {@link ReleasedEngineeringProductCreationsV2} entity.
 */
export class ReleasedEngineeringProductCreationsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
  /**
   * Returns a request builder for querying all `ReleasedEngineeringProductCreationsV2` entities.
   * @returns A request builder for creating requests to retrieve all `ReleasedEngineeringProductCreationsV2` entities.
   */
  getAll(): GetAllRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
    return new GetAllRequestBuilder<
      ReleasedEngineeringProductCreationsV2<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ReleasedEngineeringProductCreationsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReleasedEngineeringProductCreationsV2`.
   */
  create(
    entity: ReleasedEngineeringProductCreationsV2<T>
  ): CreateRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
    return new CreateRequestBuilder<
      ReleasedEngineeringProductCreationsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ReleasedEngineeringProductCreationsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductCreationsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedEngineeringProductCreationsV2.itemNumber}.
   * @param productVersionId Key property. See {@link ReleasedEngineeringProductCreationsV2.productVersionId}.
   * @param productColorId Key property. See {@link ReleasedEngineeringProductCreationsV2.productColorId}.
   * @param productSizeId Key property. See {@link ReleasedEngineeringProductCreationsV2.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedEngineeringProductCreationsV2.productStyleId}.
   * @param productConfigurationId Key property. See {@link ReleasedEngineeringProductCreationsV2.productConfigurationId}.
   * @returns A request builder for creating requests to retrieve one `ReleasedEngineeringProductCreationsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    productVersionId: DeserializedType<T, 'Edm.String'>,
    productColorId: DeserializedType<T, 'Edm.String'>,
    productSizeId: DeserializedType<T, 'Edm.String'>,
    productStyleId: DeserializedType<T, 'Edm.String'>,
    productConfigurationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
    return new GetByKeyRequestBuilder<
      ReleasedEngineeringProductCreationsV2<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemNumber: itemNumber,
      ProductVersionId: productVersionId,
      ProductColorId: productColorId,
      ProductSizeId: productSizeId,
      ProductStyleId: productStyleId,
      ProductConfigurationId: productConfigurationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReleasedEngineeringProductCreationsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReleasedEngineeringProductCreationsV2`.
   */
  update(
    entity: ReleasedEngineeringProductCreationsV2<T>
  ): UpdateRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
    return new UpdateRequestBuilder<
      ReleasedEngineeringProductCreationsV2<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductCreationsV2`.
   * @param dataAreaId Key property. See {@link ReleasedEngineeringProductCreationsV2.dataAreaId}.
   * @param itemNumber Key property. See {@link ReleasedEngineeringProductCreationsV2.itemNumber}.
   * @param productVersionId Key property. See {@link ReleasedEngineeringProductCreationsV2.productVersionId}.
   * @param productColorId Key property. See {@link ReleasedEngineeringProductCreationsV2.productColorId}.
   * @param productSizeId Key property. See {@link ReleasedEngineeringProductCreationsV2.productSizeId}.
   * @param productStyleId Key property. See {@link ReleasedEngineeringProductCreationsV2.productStyleId}.
   * @param productConfigurationId Key property. See {@link ReleasedEngineeringProductCreationsV2.productConfigurationId}.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductCreationsV2`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    productVersionId: string,
    productColorId: string,
    productSizeId: string,
    productStyleId: string,
    productConfigurationId: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReleasedEngineeringProductCreationsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReleasedEngineeringProductCreationsV2` by taking the entity as a parameter.
   */
  delete(
    entity: ReleasedEngineeringProductCreationsV2<T>
  ): DeleteRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    productVersionId?: string,
    productColorId?: string,
    productSizeId?: string,
    productStyleId?: string,
    productConfigurationId?: string
  ): DeleteRequestBuilder<ReleasedEngineeringProductCreationsV2<T>, T> {
    return new DeleteRequestBuilder<
      ReleasedEngineeringProductCreationsV2<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReleasedEngineeringProductCreationsV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ProductVersionId: productVersionId!,
            ProductColorId: productColorId!,
            ProductSizeId: productSizeId!,
            ProductStyleId: productStyleId!,
            ProductConfigurationId: productConfigurationId!
          }
    );
  }
}
