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
import { CallCenterCouponDiscounts } from './CallCenterCouponDiscounts';

/**
 * Request builder class for operations supported on the {@link CallCenterCouponDiscounts} entity.
 */
export class CallCenterCouponDiscountsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCouponDiscounts<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCouponDiscounts` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCouponDiscounts` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCouponDiscounts<T>, T> {
    return new GetAllRequestBuilder<CallCenterCouponDiscounts<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCouponDiscounts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCouponDiscounts`.
   */
  create(
    entity: CallCenterCouponDiscounts<T>
  ): CreateRequestBuilder<CallCenterCouponDiscounts<T>, T> {
    return new CreateRequestBuilder<CallCenterCouponDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCouponDiscounts` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCouponDiscounts.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterCouponDiscounts.couponId}.
   * @param couponAmount Key property. See {@link CallCenterCouponDiscounts.couponAmount}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCouponDiscounts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    couponId: DeserializedType<T, 'Edm.String'>,
    couponAmount: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<CallCenterCouponDiscounts<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCouponDiscounts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CouponId: couponId,
        CouponAmount: couponAmount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCouponDiscounts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCouponDiscounts`.
   */
  update(
    entity: CallCenterCouponDiscounts<T>
  ): UpdateRequestBuilder<CallCenterCouponDiscounts<T>, T> {
    return new UpdateRequestBuilder<CallCenterCouponDiscounts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCouponDiscounts`.
   * @param dataAreaId Key property. See {@link CallCenterCouponDiscounts.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterCouponDiscounts.couponId}.
   * @param couponAmount Key property. See {@link CallCenterCouponDiscounts.couponAmount}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCouponDiscounts`.
   */
  delete(
    dataAreaId: string,
    couponId: string,
    couponAmount: BigNumber
  ): DeleteRequestBuilder<CallCenterCouponDiscounts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCouponDiscounts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCouponDiscounts` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCouponDiscounts<T>
  ): DeleteRequestBuilder<CallCenterCouponDiscounts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    couponId?: string,
    couponAmount?: BigNumber
  ): DeleteRequestBuilder<CallCenterCouponDiscounts<T>, T> {
    return new DeleteRequestBuilder<CallCenterCouponDiscounts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCouponDiscounts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CouponId: couponId!,
            CouponAmount: couponAmount!
          }
    );
  }
}
