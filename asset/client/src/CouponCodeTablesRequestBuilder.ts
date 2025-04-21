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
import { CouponCodeTables } from './CouponCodeTables';

/**
 * Request builder class for operations supported on the {@link CouponCodeTables} entity.
 */
export class CouponCodeTablesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CouponCodeTables<T>, T> {
  /**
   * Returns a request builder for querying all `CouponCodeTables` entities.
   * @returns A request builder for creating requests to retrieve all `CouponCodeTables` entities.
   */
  getAll(): GetAllRequestBuilder<CouponCodeTables<T>, T> {
    return new GetAllRequestBuilder<CouponCodeTables<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CouponCodeTables` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CouponCodeTables`.
   */
  create(
    entity: CouponCodeTables<T>
  ): CreateRequestBuilder<CouponCodeTables<T>, T> {
    return new CreateRequestBuilder<CouponCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CouponCodeTables` entity based on its keys.
   * @param dataAreaId Key property. See {@link CouponCodeTables.dataAreaId}.
   * @param couponCodeId Key property. See {@link CouponCodeTables.couponCodeId}.
   * @returns A request builder for creating requests to retrieve one `CouponCodeTables` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    couponCodeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CouponCodeTables<T>, T> {
    return new GetByKeyRequestBuilder<CouponCodeTables<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CouponCodeId: couponCodeId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CouponCodeTables`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CouponCodeTables`.
   */
  update(
    entity: CouponCodeTables<T>
  ): UpdateRequestBuilder<CouponCodeTables<T>, T> {
    return new UpdateRequestBuilder<CouponCodeTables<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CouponCodeTables`.
   * @param dataAreaId Key property. See {@link CouponCodeTables.dataAreaId}.
   * @param couponCodeId Key property. See {@link CouponCodeTables.couponCodeId}.
   * @returns A request builder for creating requests that delete an entity of type `CouponCodeTables`.
   */
  delete(
    dataAreaId: string,
    couponCodeId: string
  ): DeleteRequestBuilder<CouponCodeTables<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CouponCodeTables`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CouponCodeTables` by taking the entity as a parameter.
   */
  delete(
    entity: CouponCodeTables<T>
  ): DeleteRequestBuilder<CouponCodeTables<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    couponCodeId?: string
  ): DeleteRequestBuilder<CouponCodeTables<T>, T> {
    return new DeleteRequestBuilder<CouponCodeTables<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CouponCodeTables
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CouponCodeId: couponCodeId!
          }
    );
  }
}
