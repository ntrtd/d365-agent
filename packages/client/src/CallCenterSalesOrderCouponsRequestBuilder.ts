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
import { CallCenterSalesOrderCoupons } from './CallCenterSalesOrderCoupons';

/**
 * Request builder class for operations supported on the {@link CallCenterSalesOrderCoupons} entity.
 */
export class CallCenterSalesOrderCouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterSalesOrderCoupons` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterSalesOrderCoupons` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
    return new GetAllRequestBuilder<CallCenterSalesOrderCoupons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterSalesOrderCoupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterSalesOrderCoupons`.
   */
  create(
    entity: CallCenterSalesOrderCoupons<T>
  ): CreateRequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
    return new CreateRequestBuilder<CallCenterSalesOrderCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterSalesOrderCoupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterSalesOrderCoupons.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterSalesOrderCoupons.couponId}.
   * @param salesId Key property. See {@link CallCenterSalesOrderCoupons.salesId}.
   * @returns A request builder for creating requests to retrieve one `CallCenterSalesOrderCoupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    couponId: DeserializedType<T, 'Edm.String'>,
    salesId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterSalesOrderCoupons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CouponId: couponId,
        SalesId: salesId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterSalesOrderCoupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterSalesOrderCoupons`.
   */
  update(
    entity: CallCenterSalesOrderCoupons<T>
  ): UpdateRequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
    return new UpdateRequestBuilder<CallCenterSalesOrderCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterSalesOrderCoupons`.
   * @param dataAreaId Key property. See {@link CallCenterSalesOrderCoupons.dataAreaId}.
   * @param couponId Key property. See {@link CallCenterSalesOrderCoupons.couponId}.
   * @param salesId Key property. See {@link CallCenterSalesOrderCoupons.salesId}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterSalesOrderCoupons`.
   */
  delete(
    dataAreaId: string,
    couponId: string,
    salesId: string
  ): DeleteRequestBuilder<CallCenterSalesOrderCoupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterSalesOrderCoupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterSalesOrderCoupons` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterSalesOrderCoupons<T>
  ): DeleteRequestBuilder<CallCenterSalesOrderCoupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    couponId?: string,
    salesId?: string
  ): DeleteRequestBuilder<CallCenterSalesOrderCoupons<T>, T> {
    return new DeleteRequestBuilder<CallCenterSalesOrderCoupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterSalesOrderCoupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CouponId: couponId!,
            SalesId: salesId!
          }
    );
  }
}
