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
import { RetailVendorSalesPriceMarginSetups } from './RetailVendorSalesPriceMarginSetups';

/**
 * Request builder class for operations supported on the {@link RetailVendorSalesPriceMarginSetups} entity.
 */
export class RetailVendorSalesPriceMarginSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailVendorSalesPriceMarginSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailVendorSalesPriceMarginSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
    return new GetAllRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailVendorSalesPriceMarginSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailVendorSalesPriceMarginSetups`.
   */
  create(
    entity: RetailVendorSalesPriceMarginSetups<T>
  ): CreateRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
    return new CreateRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailVendorSalesPriceMarginSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailVendorSalesPriceMarginSetups.dataAreaId}.
   * @param categoryName Key property. See {@link RetailVendorSalesPriceMarginSetups.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailVendorSalesPriceMarginSetups.categoryHierarchyName}.
   * @param vendorAccount Key property. See {@link RetailVendorSalesPriceMarginSetups.vendorAccount}.
   * @returns A request builder for creating requests to retrieve one `RetailVendorSalesPriceMarginSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>,
    vendorAccount: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        CategoryName: categoryName,
        CategoryHierarchyName: categoryHierarchyName,
        VendorAccount: vendorAccount
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailVendorSalesPriceMarginSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailVendorSalesPriceMarginSetups`.
   */
  update(
    entity: RetailVendorSalesPriceMarginSetups<T>
  ): UpdateRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
    return new UpdateRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailVendorSalesPriceMarginSetups`.
   * @param dataAreaId Key property. See {@link RetailVendorSalesPriceMarginSetups.dataAreaId}.
   * @param categoryName Key property. See {@link RetailVendorSalesPriceMarginSetups.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailVendorSalesPriceMarginSetups.categoryHierarchyName}.
   * @param vendorAccount Key property. See {@link RetailVendorSalesPriceMarginSetups.vendorAccount}.
   * @returns A request builder for creating requests that delete an entity of type `RetailVendorSalesPriceMarginSetups`.
   */
  delete(
    dataAreaId: string,
    categoryName: string,
    categoryHierarchyName: string,
    vendorAccount: string
  ): DeleteRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailVendorSalesPriceMarginSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailVendorSalesPriceMarginSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailVendorSalesPriceMarginSetups<T>
  ): DeleteRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    categoryName?: string,
    categoryHierarchyName?: string,
    vendorAccount?: string
  ): DeleteRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T> {
    return new DeleteRequestBuilder<RetailVendorSalesPriceMarginSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailVendorSalesPriceMarginSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CategoryName: categoryName!,
            CategoryHierarchyName: categoryHierarchyName!,
            VendorAccount: vendorAccount!
          }
    );
  }
}
