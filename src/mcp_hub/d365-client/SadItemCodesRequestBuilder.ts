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
import { SadItemCodes } from './SadItemCodes';

/**
 * Request builder class for operations supported on the {@link SadItemCodes} entity.
 */
export class SadItemCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SadItemCodes<T>, T> {
  /**
   * Returns a request builder for querying all `SadItemCodes` entities.
   * @returns A request builder for creating requests to retrieve all `SadItemCodes` entities.
   */
  getAll(): GetAllRequestBuilder<SadItemCodes<T>, T> {
    return new GetAllRequestBuilder<SadItemCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SadItemCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SadItemCodes`.
   */
  create(entity: SadItemCodes<T>): CreateRequestBuilder<SadItemCodes<T>, T> {
    return new CreateRequestBuilder<SadItemCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `SadItemCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link SadItemCodes.dataAreaId}.
   * @param itemCommodityCode Key property. See {@link SadItemCodes.itemCommodityCode}.
   * @returns A request builder for creating requests to retrieve one `SadItemCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemCommodityCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SadItemCodes<T>, T> {
    return new GetByKeyRequestBuilder<SadItemCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ItemCommodityCode: itemCommodityCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `SadItemCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SadItemCodes`.
   */
  update(entity: SadItemCodes<T>): UpdateRequestBuilder<SadItemCodes<T>, T> {
    return new UpdateRequestBuilder<SadItemCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SadItemCodes`.
   * @param dataAreaId Key property. See {@link SadItemCodes.dataAreaId}.
   * @param itemCommodityCode Key property. See {@link SadItemCodes.itemCommodityCode}.
   * @returns A request builder for creating requests that delete an entity of type `SadItemCodes`.
   */
  delete(
    dataAreaId: string,
    itemCommodityCode: string
  ): DeleteRequestBuilder<SadItemCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SadItemCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SadItemCodes` by taking the entity as a parameter.
   */
  delete(entity: SadItemCodes<T>): DeleteRequestBuilder<SadItemCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemCommodityCode?: string
  ): DeleteRequestBuilder<SadItemCodes<T>, T> {
    return new DeleteRequestBuilder<SadItemCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SadItemCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemCommodityCode: itemCommodityCode!
          }
    );
  }
}
