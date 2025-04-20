/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { ProductApprovedVendors } from './ProductApprovedVendors';

/**
 * Request builder class for operations supported on the {@link ProductApprovedVendors} entity.
 */
export class ProductApprovedVendorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductApprovedVendors<T>, T> {
  /**
   * Returns a request builder for querying all `ProductApprovedVendors` entities.
   * @returns A request builder for creating requests to retrieve all `ProductApprovedVendors` entities.
   */
  getAll(): GetAllRequestBuilder<ProductApprovedVendors<T>, T> {
    return new GetAllRequestBuilder<ProductApprovedVendors<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductApprovedVendors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductApprovedVendors`.
   */
  create(
    entity: ProductApprovedVendors<T>
  ): CreateRequestBuilder<ProductApprovedVendors<T>, T> {
    return new CreateRequestBuilder<ProductApprovedVendors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductApprovedVendors` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductApprovedVendors.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductApprovedVendors.itemNumber}.
   * @param approvedVendorAccountNumber Key property. See {@link ProductApprovedVendors.approvedVendorAccountNumber}.
   * @param effectiveDate Key property. See {@link ProductApprovedVendors.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `ProductApprovedVendors` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    approvedVendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProductApprovedVendors<T>, T> {
    return new GetByKeyRequestBuilder<ProductApprovedVendors<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ApprovedVendorAccountNumber: approvedVendorAccountNumber,
        EffectiveDate: effectiveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductApprovedVendors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductApprovedVendors`.
   */
  update(
    entity: ProductApprovedVendors<T>
  ): UpdateRequestBuilder<ProductApprovedVendors<T>, T> {
    return new UpdateRequestBuilder<ProductApprovedVendors<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductApprovedVendors`.
   * @param dataAreaId Key property. See {@link ProductApprovedVendors.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductApprovedVendors.itemNumber}.
   * @param approvedVendorAccountNumber Key property. See {@link ProductApprovedVendors.approvedVendorAccountNumber}.
   * @param effectiveDate Key property. See {@link ProductApprovedVendors.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `ProductApprovedVendors`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    approvedVendorAccountNumber: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<ProductApprovedVendors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductApprovedVendors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductApprovedVendors` by taking the entity as a parameter.
   */
  delete(
    entity: ProductApprovedVendors<T>
  ): DeleteRequestBuilder<ProductApprovedVendors<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    approvedVendorAccountNumber?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<ProductApprovedVendors<T>, T> {
    return new DeleteRequestBuilder<ProductApprovedVendors<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductApprovedVendors
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ApprovedVendorAccountNumber: approvedVendorAccountNumber!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
