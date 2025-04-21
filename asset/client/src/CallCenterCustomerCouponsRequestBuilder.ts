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
import { CallCenterCustomerCoupons } from './CallCenterCustomerCoupons';

/**
 * Request builder class for operations supported on the {@link CallCenterCustomerCoupons} entity.
 */
export class CallCenterCustomerCouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCustomerCoupons<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCustomerCoupons` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCustomerCoupons` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCustomerCoupons<T>, T> {
    return new GetAllRequestBuilder<CallCenterCustomerCoupons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCustomerCoupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCustomerCoupons`.
   */
  create(
    entity: CallCenterCustomerCoupons<T>
  ): CreateRequestBuilder<CallCenterCustomerCoupons<T>, T> {
    return new CreateRequestBuilder<CallCenterCustomerCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCustomerCoupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCustomerCoupons.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CallCenterCustomerCoupons.customerAccountNumber}.
   * @param customerGroupId Key property. See {@link CallCenterCustomerCoupons.customerGroupId}.
   * @param couponId Key property. See {@link CallCenterCustomerCoupons.couponId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCustomerCoupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>,
    customerGroupId: DeserializedType<T, 'Edm.String'>,
    couponId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterCustomerCoupons<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCustomerCoupons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CustomerAccountNumber: customerAccountNumber,
        CustomerGroupId: customerGroupId,
        CouponId: couponId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCustomerCoupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCustomerCoupons`.
   */
  update(
    entity: CallCenterCustomerCoupons<T>
  ): UpdateRequestBuilder<CallCenterCustomerCoupons<T>, T> {
    return new UpdateRequestBuilder<CallCenterCustomerCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerCoupons`.
   * @param dataAreaId Key property. See {@link CallCenterCustomerCoupons.dataAreaId}.
   * @param customerAccountNumber Key property. See {@link CallCenterCustomerCoupons.customerAccountNumber}.
   * @param customerGroupId Key property. See {@link CallCenterCustomerCoupons.customerGroupId}.
   * @param couponId Key property. See {@link CallCenterCustomerCoupons.couponId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerCoupons`.
   */
  delete(
    dataAreaId: string,
    customerAccountNumber: string,
    customerGroupId: string,
    couponId: string
  ): DeleteRequestBuilder<CallCenterCustomerCoupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCustomerCoupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCustomerCoupons` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCustomerCoupons<T>
  ): DeleteRequestBuilder<CallCenterCustomerCoupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    customerAccountNumber?: string,
    customerGroupId?: string,
    couponId?: string
  ): DeleteRequestBuilder<CallCenterCustomerCoupons<T>, T> {
    return new DeleteRequestBuilder<CallCenterCustomerCoupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCustomerCoupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustomerAccountNumber: customerAccountNumber!,
            CustomerGroupId: customerGroupId!,
            CouponId: couponId!
          }
    );
  }
}
