/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ProductRatings } from './ProductRatings';

/**
 * Request builder class for operations supported on the {@link ProductRatings} entity.
 */
export class ProductRatingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductRatings<T>, T> {
  /**
   * Returns a request builder for querying all `ProductRatings` entities.
   * @returns A request builder for creating requests to retrieve all `ProductRatings` entities.
   */
  getAll(): GetAllRequestBuilder<ProductRatings<T>, T> {
    return new GetAllRequestBuilder<ProductRatings<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductRatings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductRatings`.
   */
  create(
    entity: ProductRatings<T>
  ): CreateRequestBuilder<ProductRatings<T>, T> {
    return new CreateRequestBuilder<ProductRatings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductRatings` entity based on its keys.
   * @param channelId Key property. See {@link ProductRatings.channelId}.
   * @param productId Key property. See {@link ProductRatings.productId}.
   * @param masterProductId Key property. See {@link ProductRatings.masterProductId}.
   * @param rating Key property. See {@link ProductRatings.rating}.
   * @returns A request builder for creating requests to retrieve one `ProductRatings` entity based on its keys.
   */
  getByKey(
    channelId: DeserializedType<T, 'Edm.Int64'>,
    productId: DeserializedType<T, 'Edm.Int64'>,
    masterProductId: DeserializedType<T, 'Edm.Int64'>,
    rating: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<ProductRatings<T>, T> {
    return new GetByKeyRequestBuilder<ProductRatings<T>, T>(this.entityApi, {
      ChannelId: channelId,
      ProductId: productId,
      MasterProductId: masterProductId,
      Rating: rating
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductRatings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductRatings`.
   */
  update(
    entity: ProductRatings<T>
  ): UpdateRequestBuilder<ProductRatings<T>, T> {
    return new UpdateRequestBuilder<ProductRatings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductRatings`.
   * @param channelId Key property. See {@link ProductRatings.channelId}.
   * @param productId Key property. See {@link ProductRatings.productId}.
   * @param masterProductId Key property. See {@link ProductRatings.masterProductId}.
   * @param rating Key property. See {@link ProductRatings.rating}.
   * @returns A request builder for creating requests that delete an entity of type `ProductRatings`.
   */
  delete(
    channelId: BigNumber,
    productId: BigNumber,
    masterProductId: BigNumber,
    rating: BigNumber
  ): DeleteRequestBuilder<ProductRatings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductRatings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductRatings` by taking the entity as a parameter.
   */
  delete(entity: ProductRatings<T>): DeleteRequestBuilder<ProductRatings<T>, T>;
  delete(
    channelIdOrEntity: any,
    productId?: BigNumber,
    masterProductId?: BigNumber,
    rating?: BigNumber
  ): DeleteRequestBuilder<ProductRatings<T>, T> {
    return new DeleteRequestBuilder<ProductRatings<T>, T>(
      this.entityApi,
      channelIdOrEntity instanceof ProductRatings
        ? channelIdOrEntity
        : {
            ChannelId: channelIdOrEntity!,
            ProductId: productId!,
            MasterProductId: masterProductId!,
            Rating: rating!
          }
    );
  }
}
