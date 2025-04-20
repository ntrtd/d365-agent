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
import { DiscountVendorClaimFees } from './DiscountVendorClaimFees';

/**
 * Request builder class for operations supported on the {@link DiscountVendorClaimFees} entity.
 */
export class DiscountVendorClaimFeesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiscountVendorClaimFees<T>, T> {
  /**
   * Returns a request builder for querying all `DiscountVendorClaimFees` entities.
   * @returns A request builder for creating requests to retrieve all `DiscountVendorClaimFees` entities.
   */
  getAll(): GetAllRequestBuilder<DiscountVendorClaimFees<T>, T> {
    return new GetAllRequestBuilder<DiscountVendorClaimFees<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiscountVendorClaimFees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiscountVendorClaimFees`.
   */
  create(
    entity: DiscountVendorClaimFees<T>
  ): CreateRequestBuilder<DiscountVendorClaimFees<T>, T> {
    return new CreateRequestBuilder<DiscountVendorClaimFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiscountVendorClaimFees` entity based on its keys.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimFees.dataAreaId}.
   * @param feeId Key property. See {@link DiscountVendorClaimFees.feeId}.
   * @returns A request builder for creating requests to retrieve one `DiscountVendorClaimFees` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    feeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiscountVendorClaimFees<T>, T> {
    return new GetByKeyRequestBuilder<DiscountVendorClaimFees<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FeeId: feeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiscountVendorClaimFees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiscountVendorClaimFees`.
   */
  update(
    entity: DiscountVendorClaimFees<T>
  ): UpdateRequestBuilder<DiscountVendorClaimFees<T>, T> {
    return new UpdateRequestBuilder<DiscountVendorClaimFees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimFees`.
   * @param dataAreaId Key property. See {@link DiscountVendorClaimFees.dataAreaId}.
   * @param feeId Key property. See {@link DiscountVendorClaimFees.feeId}.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimFees`.
   */
  delete(
    dataAreaId: string,
    feeId: string
  ): DeleteRequestBuilder<DiscountVendorClaimFees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiscountVendorClaimFees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiscountVendorClaimFees` by taking the entity as a parameter.
   */
  delete(
    entity: DiscountVendorClaimFees<T>
  ): DeleteRequestBuilder<DiscountVendorClaimFees<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    feeId?: string
  ): DeleteRequestBuilder<DiscountVendorClaimFees<T>, T> {
    return new DeleteRequestBuilder<DiscountVendorClaimFees<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DiscountVendorClaimFees
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FeeId: feeId!
          }
    );
  }
}
