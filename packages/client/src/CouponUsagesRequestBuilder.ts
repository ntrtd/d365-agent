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
import { CouponUsages } from './CouponUsages';

/**
 * Request builder class for operations supported on the {@link CouponUsages} entity.
 */
export class CouponUsagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CouponUsages<T>, T> {
  /**
   * Returns a request builder for querying all `CouponUsages` entities.
   * @returns A request builder for creating requests to retrieve all `CouponUsages` entities.
   */
  getAll(): GetAllRequestBuilder<CouponUsages<T>, T> {
    return new GetAllRequestBuilder<CouponUsages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CouponUsages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CouponUsages`.
   */
  create(entity: CouponUsages<T>): CreateRequestBuilder<CouponUsages<T>, T> {
    return new CreateRequestBuilder<CouponUsages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CouponUsages` entity based on its keys.
   * @param dataAreaId Key property. See {@link CouponUsages.dataAreaId}.
   * @param usageId Key property. See {@link CouponUsages.usageId}.
   * @param retailChannelId Key property. See {@link CouponUsages.retailChannelId}.
   * @returns A request builder for creating requests to retrieve one `CouponUsages` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    usageId: DeserializedType<T, 'Edm.Guid'>,
    retailChannelId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CouponUsages<T>, T> {
    return new GetByKeyRequestBuilder<CouponUsages<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      UsageId: usageId,
      RetailChannelId: retailChannelId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CouponUsages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CouponUsages`.
   */
  update(entity: CouponUsages<T>): UpdateRequestBuilder<CouponUsages<T>, T> {
    return new UpdateRequestBuilder<CouponUsages<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CouponUsages`.
   * @param dataAreaId Key property. See {@link CouponUsages.dataAreaId}.
   * @param usageId Key property. See {@link CouponUsages.usageId}.
   * @param retailChannelId Key property. See {@link CouponUsages.retailChannelId}.
   * @returns A request builder for creating requests that delete an entity of type `CouponUsages`.
   */
  delete(
    dataAreaId: string,
    usageId: string,
    retailChannelId: string
  ): DeleteRequestBuilder<CouponUsages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CouponUsages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CouponUsages` by taking the entity as a parameter.
   */
  delete(entity: CouponUsages<T>): DeleteRequestBuilder<CouponUsages<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    usageId?: string,
    retailChannelId?: string
  ): DeleteRequestBuilder<CouponUsages<T>, T> {
    return new DeleteRequestBuilder<CouponUsages<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CouponUsages
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            UsageId: usageId!,
            RetailChannelId: retailChannelId!
          }
    );
  }
}
