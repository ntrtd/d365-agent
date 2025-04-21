/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RetailVendorSalesPricePointSetups } from './RetailVendorSalesPricePointSetups';

/**
 * Request builder class for operations supported on the {@link RetailVendorSalesPricePointSetups} entity.
 */
export class RetailVendorSalesPricePointSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RetailVendorSalesPricePointSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RetailVendorSalesPricePointSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
    return new GetAllRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailVendorSalesPricePointSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailVendorSalesPricePointSetups`.
   */
  create(
    entity: RetailVendorSalesPricePointSetups<T>
  ): CreateRequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
    return new CreateRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailVendorSalesPricePointSetups` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailVendorSalesPricePointSetups.dataAreaId}.
   * @param vendorAccount Key property. See {@link RetailVendorSalesPricePointSetups.vendorAccount}.
   * @param suggestedRetailPrice Key property. See {@link RetailVendorSalesPricePointSetups.suggestedRetailPrice}.
   * @param categoryName Key property. See {@link RetailVendorSalesPricePointSetups.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailVendorSalesPricePointSetups.categoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `RetailVendorSalesPricePointSetups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorAccount: DeserializedType<T, 'Edm.String'>,
    suggestedRetailPrice: DeserializedType<T, 'Edm.Decimal'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
    return new GetByKeyRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorAccount: vendorAccount,
        suggestedRetailPrice: suggestedRetailPrice,
        CategoryName: categoryName,
        CategoryHierarchyName: categoryHierarchyName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailVendorSalesPricePointSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailVendorSalesPricePointSetups`.
   */
  update(
    entity: RetailVendorSalesPricePointSetups<T>
  ): UpdateRequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
    return new UpdateRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailVendorSalesPricePointSetups`.
   * @param dataAreaId Key property. See {@link RetailVendorSalesPricePointSetups.dataAreaId}.
   * @param vendorAccount Key property. See {@link RetailVendorSalesPricePointSetups.vendorAccount}.
   * @param suggestedRetailPrice Key property. See {@link RetailVendorSalesPricePointSetups.suggestedRetailPrice}.
   * @param categoryName Key property. See {@link RetailVendorSalesPricePointSetups.categoryName}.
   * @param categoryHierarchyName Key property. See {@link RetailVendorSalesPricePointSetups.categoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `RetailVendorSalesPricePointSetups`.
   */
  delete(
    dataAreaId: string,
    vendorAccount: string,
    suggestedRetailPrice: BigNumber,
    categoryName: string,
    categoryHierarchyName: string
  ): DeleteRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailVendorSalesPricePointSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailVendorSalesPricePointSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RetailVendorSalesPricePointSetups<T>
  ): DeleteRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorAccount?: string,
    suggestedRetailPrice?: BigNumber,
    categoryName?: string,
    categoryHierarchyName?: string
  ): DeleteRequestBuilder<RetailVendorSalesPricePointSetups<T>, T> {
    return new DeleteRequestBuilder<RetailVendorSalesPricePointSetups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailVendorSalesPricePointSetups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorAccount: vendorAccount!,
            suggestedRetailPrice: suggestedRetailPrice!,
            CategoryName: categoryName!,
            CategoryHierarchyName: categoryHierarchyName!
          }
    );
  }
}
