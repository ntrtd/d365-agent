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
import { ProductApprovedVendorsForAi } from './ProductApprovedVendorsForAi';

/**
 * Request builder class for operations supported on the {@link ProductApprovedVendorsForAi} entity.
 */
export class ProductApprovedVendorsForAiRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductApprovedVendorsForAi<T>, T> {
  /**
   * Returns a request builder for querying all `ProductApprovedVendorsForAi` entities.
   * @returns A request builder for creating requests to retrieve all `ProductApprovedVendorsForAi` entities.
   */
  getAll(): GetAllRequestBuilder<ProductApprovedVendorsForAi<T>, T> {
    return new GetAllRequestBuilder<ProductApprovedVendorsForAi<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProductApprovedVendorsForAi` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductApprovedVendorsForAi`.
   */
  create(
    entity: ProductApprovedVendorsForAi<T>
  ): CreateRequestBuilder<ProductApprovedVendorsForAi<T>, T> {
    return new CreateRequestBuilder<ProductApprovedVendorsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProductApprovedVendorsForAi` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProductApprovedVendorsForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductApprovedVendorsForAi.itemNumber}.
   * @param approvedVendorAccountNumber Key property. See {@link ProductApprovedVendorsForAi.approvedVendorAccountNumber}.
   * @param validFrom Key property. See {@link ProductApprovedVendorsForAi.validFrom}.
   * @returns A request builder for creating requests to retrieve one `ProductApprovedVendorsForAi` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    itemNumber: DeserializedType<T, 'Edm.String'>,
    approvedVendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProductApprovedVendorsForAi<T>, T> {
    return new GetByKeyRequestBuilder<ProductApprovedVendorsForAi<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ItemNumber: itemNumber,
        ApprovedVendorAccountNumber: approvedVendorAccountNumber,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProductApprovedVendorsForAi`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductApprovedVendorsForAi`.
   */
  update(
    entity: ProductApprovedVendorsForAi<T>
  ): UpdateRequestBuilder<ProductApprovedVendorsForAi<T>, T> {
    return new UpdateRequestBuilder<ProductApprovedVendorsForAi<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductApprovedVendorsForAi`.
   * @param dataAreaId Key property. See {@link ProductApprovedVendorsForAi.dataAreaId}.
   * @param itemNumber Key property. See {@link ProductApprovedVendorsForAi.itemNumber}.
   * @param approvedVendorAccountNumber Key property. See {@link ProductApprovedVendorsForAi.approvedVendorAccountNumber}.
   * @param validFrom Key property. See {@link ProductApprovedVendorsForAi.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `ProductApprovedVendorsForAi`.
   */
  delete(
    dataAreaId: string,
    itemNumber: string,
    approvedVendorAccountNumber: string,
    validFrom: Moment
  ): DeleteRequestBuilder<ProductApprovedVendorsForAi<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductApprovedVendorsForAi`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductApprovedVendorsForAi` by taking the entity as a parameter.
   */
  delete(
    entity: ProductApprovedVendorsForAi<T>
  ): DeleteRequestBuilder<ProductApprovedVendorsForAi<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    itemNumber?: string,
    approvedVendorAccountNumber?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<ProductApprovedVendorsForAi<T>, T> {
    return new DeleteRequestBuilder<ProductApprovedVendorsForAi<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProductApprovedVendorsForAi
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ItemNumber: itemNumber!,
            ApprovedVendorAccountNumber: approvedVendorAccountNumber!,
            ValidFrom: validFrom!
          }
    );
  }
}
