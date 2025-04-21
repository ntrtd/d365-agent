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
import { ShippingGoodsDescriptionTables } from './ShippingGoodsDescriptionTables';

/**
 * Request builder class for operations supported on the {@link ShippingGoodsDescriptionTables} entity.
 */
export class ShippingGoodsDescriptionTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
  /**
   * Returns a request builder for querying all `ShippingGoodsDescriptionTables` entities.
   * @returns A request builder for creating requests to retrieve all `ShippingGoodsDescriptionTables` entities.
   */
  getAll(): GetAllRequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
    return new GetAllRequestBuilder<ShippingGoodsDescriptionTables<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ShippingGoodsDescriptionTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ShippingGoodsDescriptionTables`.
   */
  create(
    entity: ShippingGoodsDescriptionTables<T>
  ): CreateRequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
    return new CreateRequestBuilder<ShippingGoodsDescriptionTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ShippingGoodsDescriptionTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link ShippingGoodsDescriptionTables.dataAreaId}.
   * @param goodsDescription Key property. See {@link ShippingGoodsDescriptionTables.goodsDescription}.
   * @returns A request builder for creating requests to retrieve one `ShippingGoodsDescriptionTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    goodsDescription: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
    return new GetByKeyRequestBuilder<ShippingGoodsDescriptionTables<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        GoodsDescription: goodsDescription
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ShippingGoodsDescriptionTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ShippingGoodsDescriptionTables`.
   */
  update(
    entity: ShippingGoodsDescriptionTables<T>
  ): UpdateRequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
    return new UpdateRequestBuilder<ShippingGoodsDescriptionTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ShippingGoodsDescriptionTables`.
   * @param dataAreaId Key property. See {@link ShippingGoodsDescriptionTables.dataAreaId}.
   * @param goodsDescription Key property. See {@link ShippingGoodsDescriptionTables.goodsDescription}.
   * @returns A request builder for creating requests that delete an entity of type `ShippingGoodsDescriptionTables`.
   */
  delete(
    dataAreaId: string,
    goodsDescription: string
  ): DeleteRequestBuilder<ShippingGoodsDescriptionTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ShippingGoodsDescriptionTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ShippingGoodsDescriptionTables` by taking the entity as a parameter.
   */
  delete(
    entity: ShippingGoodsDescriptionTables<T>
  ): DeleteRequestBuilder<ShippingGoodsDescriptionTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    goodsDescription?: string
  ): DeleteRequestBuilder<ShippingGoodsDescriptionTables<T>, T> {
    return new DeleteRequestBuilder<ShippingGoodsDescriptionTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ShippingGoodsDescriptionTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            GoodsDescription: goodsDescription!
          }
    );
  }
}
