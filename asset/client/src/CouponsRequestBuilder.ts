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
import { Coupons } from './Coupons';

/**
 * Request builder class for operations supported on the {@link Coupons} entity.
 */
export class CouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Coupons<T>, T> {
  /**
   * Returns a request builder for querying all `Coupons` entities.
   * @returns A request builder for creating requests to retrieve all `Coupons` entities.
   */
  getAll(): GetAllRequestBuilder<Coupons<T>, T> {
    return new GetAllRequestBuilder<Coupons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Coupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Coupons`.
   */
  create(entity: Coupons<T>): CreateRequestBuilder<Coupons<T>, T> {
    return new CreateRequestBuilder<Coupons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Coupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link Coupons.dataAreaId}.
   * @param couponNumber Key property. See {@link Coupons.couponNumber}.
   * @returns A request builder for creating requests to retrieve one `Coupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    couponNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Coupons<T>, T> {
    return new GetByKeyRequestBuilder<Coupons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CouponNumber: couponNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Coupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Coupons`.
   */
  update(entity: Coupons<T>): UpdateRequestBuilder<Coupons<T>, T> {
    return new UpdateRequestBuilder<Coupons<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Coupons`.
   * @param dataAreaId Key property. See {@link Coupons.dataAreaId}.
   * @param couponNumber Key property. See {@link Coupons.couponNumber}.
   * @returns A request builder for creating requests that delete an entity of type `Coupons`.
   */
  delete(
    dataAreaId: string,
    couponNumber: string
  ): DeleteRequestBuilder<Coupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Coupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Coupons` by taking the entity as a parameter.
   */
  delete(entity: Coupons<T>): DeleteRequestBuilder<Coupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    couponNumber?: string
  ): DeleteRequestBuilder<Coupons<T>, T> {
    return new DeleteRequestBuilder<Coupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Coupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CouponNumber: couponNumber!
          }
    );
  }
}
