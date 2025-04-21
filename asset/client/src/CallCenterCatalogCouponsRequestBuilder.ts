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
import { CallCenterCatalogCoupons } from './CallCenterCatalogCoupons';
import { McrTableAll } from './McrTableAll';

/**
 * Request builder class for operations supported on the {@link CallCenterCatalogCoupons} entity.
 */
export class CallCenterCatalogCouponsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CallCenterCatalogCoupons<T>, T> {
  /**
   * Returns a request builder for querying all `CallCenterCatalogCoupons` entities.
   * @returns A request builder for creating requests to retrieve all `CallCenterCatalogCoupons` entities.
   */
  getAll(): GetAllRequestBuilder<CallCenterCatalogCoupons<T>, T> {
    return new GetAllRequestBuilder<CallCenterCatalogCoupons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CallCenterCatalogCoupons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CallCenterCatalogCoupons`.
   */
  create(
    entity: CallCenterCatalogCoupons<T>
  ): CreateRequestBuilder<CallCenterCatalogCoupons<T>, T> {
    return new CreateRequestBuilder<CallCenterCatalogCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CallCenterCatalogCoupons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CallCenterCatalogCoupons.dataAreaId}.
   * @param catalogCode Key property. See {@link CallCenterCatalogCoupons.catalogCode}.
   * @param couponId Key property. See {@link CallCenterCatalogCoupons.couponId}.
   * @param catalogNumber Key property. See {@link CallCenterCatalogCoupons.catalogNumber}.
   * @returns A request builder for creating requests to retrieve one `CallCenterCatalogCoupons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    catalogCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.MCRTableAll'
    >,
    couponId: DeserializedType<T, 'Edm.String'>,
    catalogNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CallCenterCatalogCoupons<T>, T> {
    return new GetByKeyRequestBuilder<CallCenterCatalogCoupons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CatalogCode: catalogCode,
        CouponId: couponId,
        CatalogNumber: catalogNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CallCenterCatalogCoupons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CallCenterCatalogCoupons`.
   */
  update(
    entity: CallCenterCatalogCoupons<T>
  ): UpdateRequestBuilder<CallCenterCatalogCoupons<T>, T> {
    return new UpdateRequestBuilder<CallCenterCatalogCoupons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CallCenterCatalogCoupons`.
   * @param dataAreaId Key property. See {@link CallCenterCatalogCoupons.dataAreaId}.
   * @param catalogCode Key property. See {@link CallCenterCatalogCoupons.catalogCode}.
   * @param couponId Key property. See {@link CallCenterCatalogCoupons.couponId}.
   * @param catalogNumber Key property. See {@link CallCenterCatalogCoupons.catalogNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCatalogCoupons`.
   */
  delete(
    dataAreaId: string,
    catalogCode: McrTableAll,
    couponId: string,
    catalogNumber: string
  ): DeleteRequestBuilder<CallCenterCatalogCoupons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CallCenterCatalogCoupons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CallCenterCatalogCoupons` by taking the entity as a parameter.
   */
  delete(
    entity: CallCenterCatalogCoupons<T>
  ): DeleteRequestBuilder<CallCenterCatalogCoupons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    catalogCode?: McrTableAll,
    couponId?: string,
    catalogNumber?: string
  ): DeleteRequestBuilder<CallCenterCatalogCoupons<T>, T> {
    return new DeleteRequestBuilder<CallCenterCatalogCoupons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CallCenterCatalogCoupons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CatalogCode: catalogCode!,
            CouponId: couponId!,
            CatalogNumber: catalogNumber!
          }
    );
  }
}
