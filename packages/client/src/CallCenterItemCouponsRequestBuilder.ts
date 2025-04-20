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
import { CallCenterItemCoupons } from './CallCenterItemCoupons';

/**
 * Request builder class for operations supported on the {@link CallCenterItemCoupons} entity.
 */
export class CallCenterItemCouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterItemCoupons<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterItemCoupons` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterItemCoupons` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterItemCoupons<T>, T> {
    return new GetAllRequestBuilder<CallCenterItemCoupons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterItemCoupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterItemCoupons`.
   */
  create(
    entity: CallCenterItemCoupons<T>
  ): CreateRequestBuilder<CallCenterItemCoupons<T>, T> {
    return new CreateRequestBuilder<CallCenterItemCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterItemCoupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterItemCoupons.dataAreaId}.
   * @param itemNumber Key property. See {@link CallCenterItemCoupons.itemNumber}.
   * @param itemGroupId Key property. See {@link CallCenterItemCoupons.itemGroupId}.
   * @param couponId Key property. See {@link CallCenterItemCoupons.couponId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterItemCoupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    itemGroupId: DeserializedType<T, 'Edm.String'>,
    couponId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterItemCoupons<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterItemCoupons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ItemGroupId: itemGroupId,
        CouponId: couponId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterItemCoupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterItemCoupons`.
   */
  update(
    entity: CallCenterItemCoupons<T>
  ): UpdateRequestBuilder<CallCenterItemCoupons<T>, T> {
    return new UpdateRequestBuilder<CallCenterItemCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterItemCoupons`.
   * @param dataAreaId Key property. See {@link CallCenterItemCoupons.dataAreaId}.
   * @param itemNumber Key property. See {@link CallCenterItemCoupons.itemNumber}.
   * @param itemGroupId Key property. See {@link CallCenterItemCoupons.itemGroupId}.
   * @param couponId Key property. See {@link CallCenterItemCoupons.couponId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterItemCoupons`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    itemGroupId: string,
    couponId: string
  ): DeleteRequestBuilder<CallCenterItemCoupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterItemCoupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterItemCoupons` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterItemCoupons<T>
  ): DeleteRequestBuilder<CallCenterItemCoupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    itemGroupId?: string,
    couponId?: string
  ): DeleteRequestBuilder<CallCenterItemCoupons<T>, T> {
    return new DeleteRequestBuilder<CallCenterItemCoupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterItemCoupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ItemGroupId: itemGroupId!,
            CouponId: couponId!
          }
    );
  }
}
