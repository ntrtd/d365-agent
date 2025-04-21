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
import { DiscountVendorClaimFeeSetups } from './DiscountVendorClaimFeeSetups';

/**
 * Request builder class for operations supported on the {@link DiscountVendorClaimFeeSetups} entity.
 */
export class DiscountVendorClaimFeeSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountVendorClaimFeeSetups` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountVendorClaimFeeSetups` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
    return new GetAllRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountVendorClaimFeeSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountVendorClaimFeeSetups`.
   */
  create(
    entity: DiscountVendorClaimFeeSetups<T>
  ): CreateRequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
    return new CreateRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountVendorClaimFeeSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimFeeSetups.dataAreaId}.
   * @param claimFeeId Key property. See {@link DiscountVendorClaimFeeSetups.claimFeeId}.
   * @returns A request builder for creating requests to retrieve one `DiscountVendorClaimFeeSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    claimFeeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
    return new GetByKeyRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ClaimFeeId: claimFeeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountVendorClaimFeeSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountVendorClaimFeeSetups`.
   */
  update(
    entity: DiscountVendorClaimFeeSetups<T>
  ): UpdateRequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
    return new UpdateRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimFeeSetups`.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimFeeSetups.dataAreaId}.
   * @param claimFeeId Key property. See {@link DiscountVendorClaimFeeSetups.claimFeeId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimFeeSetups`.
   */
  delete(
    dataAreaId: string,
    claimFeeId: string
  ): DeleteRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimFeeSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimFeeSetups` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountVendorClaimFeeSetups<T>
  ): DeleteRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    claimFeeId?: string
  ): DeleteRequestBuilder<DiscountVendorClaimFeeSetups<T>, T> {
    return new DeleteRequestBuilder<DiscountVendorClaimFeeSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountVendorClaimFeeSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ClaimFeeId: claimFeeId!
          }
    );
  }
}
