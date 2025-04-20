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
import { CallCenterCoupons } from './CallCenterCoupons';

/**
 * Request builder class for operations supported on the {@link CallCenterCoupons} entity.
 */
export class CallCenterCouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCoupons<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCoupons` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCoupons` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCoupons<T>, T> {
    return new GetAllRequestBuilder<CallCenterCoupons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CallCenterCoupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCoupons`.
   */
  create(
    entity: CallCenterCoupons<T>
  ): CreateRequestBuilder<CallCenterCoupons<T>, T> {
    return new CreateRequestBuilder<CallCenterCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCoupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCoupons.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterCoupons.couponId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCoupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    couponId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterCoupons<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCoupons<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CouponId: couponId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCoupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCoupons`.
   */
  update(
    entity: CallCenterCoupons<T>
  ): UpdateRequestBuilder<CallCenterCoupons<T>, T> {
    return new UpdateRequestBuilder<CallCenterCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCoupons`.
   * @param dataAreaId Key property. See {@link CallCenterCoupons.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterCoupons.couponId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCoupons`.
   */
  delete(
    dataAreaId: string,
    couponId: string
  ): DeleteRequestBuilder<CallCenterCoupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCoupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCoupons` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCoupons<T>
  ): DeleteRequestBuilder<CallCenterCoupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    couponId?: string
  ): DeleteRequestBuilder<CallCenterCoupons<T>, T> {
    return new DeleteRequestBuilder<CallCenterCoupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCoupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CouponId: couponId!
          }
    );
  }
}
