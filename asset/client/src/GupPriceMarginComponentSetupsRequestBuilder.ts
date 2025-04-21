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
import { GupPriceMarginComponentSetups } from './GupPriceMarginComponentSetups';

/**
 * Request builder class for operations supported on the {@link GupPriceMarginComponentSetups} entity.
 */
export class GupPriceMarginComponentSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GupPriceMarginComponentSetups<T>, T> {
  /**
   * Returns a request builder for querying all `GupPriceMarginComponentSetups` entities.
   * @returns A request builder for creating requests to retrieve all `GupPriceMarginComponentSetups` entities.
   */
  getAll(): GetAllRequestBuilder<GupPriceMarginComponentSetups<T>, T> {
    return new GetAllRequestBuilder<GupPriceMarginComponentSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GupPriceMarginComponentSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GupPriceMarginComponentSetups`.
   */
  create(
    entity: GupPriceMarginComponentSetups<T>
  ): CreateRequestBuilder<GupPriceMarginComponentSetups<T>, T> {
    return new CreateRequestBuilder<GupPriceMarginComponentSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GupPriceMarginComponentSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link GupPriceMarginComponentSetups.dataAreaId}.
   * @param priceTreeName Key property. See {@link GupPriceMarginComponentSetups.priceTreeName}.
   * @param priceComponentCodeName Key property. See {@link GupPriceMarginComponentSetups.priceComponentCodeName}.
   * @returns A request builder for creating requests to retrieve one `GupPriceMarginComponentSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priceTreeName: DeserializedType<T, 'Edm.String'>,
    priceComponentCodeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<GupPriceMarginComponentSetups<T>, T> {
    return new GetByKeyRequestBuilder<GupPriceMarginComponentSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PriceTreeName: priceTreeName,
        PriceComponentCodeName: priceComponentCodeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GupPriceMarginComponentSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GupPriceMarginComponentSetups`.
   */
  update(
    entity: GupPriceMarginComponentSetups<T>
  ): UpdateRequestBuilder<GupPriceMarginComponentSetups<T>, T> {
    return new UpdateRequestBuilder<GupPriceMarginComponentSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GupPriceMarginComponentSetups`.
   * @param dataAreaId Key property. See {@link GupPriceMarginComponentSetups.dataAreaId}.
   * @param priceTreeName Key property. See {@link GupPriceMarginComponentSetups.priceTreeName}.
   * @param priceComponentCodeName Key property. See {@link GupPriceMarginComponentSetups.priceComponentCodeName}.
   * @returns A request builder for creating requests that delete an entity of type `GupPriceMarginComponentSetups`.
   */
  delete(
    dataAreaId: string,
    priceTreeName: string,
    priceComponentCodeName: string
  ): DeleteRequestBuilder<GupPriceMarginComponentSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GupPriceMarginComponentSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GupPriceMarginComponentSetups` by taking the entity as a parameter.
   */
  delete(
    entity: GupPriceMarginComponentSetups<T>
  ): DeleteRequestBuilder<GupPriceMarginComponentSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priceTreeName?: string,
    priceComponentCodeName?: string
  ): DeleteRequestBuilder<GupPriceMarginComponentSetups<T>, T> {
    return new DeleteRequestBuilder<GupPriceMarginComponentSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof GupPriceMarginComponentSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PriceTreeName: priceTreeName!,
            PriceComponentCodeName: priceComponentCodeName!
          }
    );
  }
}
