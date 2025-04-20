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
import { ProspectiveVendorRegistrationProcurementCategories } from './ProspectiveVendorRegistrationProcurementCategories';

/**
 * Request builder class for operations supported on the {@link ProspectiveVendorRegistrationProcurementCategories} entity.
 */
export class ProspectiveVendorRegistrationProcurementCategoriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProspectiveVendorRegistrationProcurementCategories<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProspectiveVendorRegistrationProcurementCategories` entities.
   * @returns A request builder for creating requests to retrieve all `ProspectiveVendorRegistrationProcurementCategories` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProspectiveVendorRegistrationProcurementCategories<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProspectiveVendorRegistrationProcurementCategories` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   */
  create(
    entity: ProspectiveVendorRegistrationProcurementCategories<T>
  ): CreateRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProspectiveVendorRegistrationProcurementCategories<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProspectiveVendorRegistrationProcurementCategories` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.dataAreaId}.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.vendorRegistrationId}.
   * @param categoryName Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests to retrieve one `ProspectiveVendorRegistrationProcurementCategories` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>,
    categoryName: DeserializedType<T, 'Edm.String'>,
    categoryHierarchyName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProspectiveVendorRegistrationProcurementCategories<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      VendorRegistrationId: vendorRegistrationId,
      CategoryName: categoryName,
      CategoryHierarchyName: categoryHierarchyName
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   */
  update(
    entity: ProspectiveVendorRegistrationProcurementCategories<T>
  ): UpdateRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProspectiveVendorRegistrationProcurementCategories<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   * @param dataAreaId Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.dataAreaId}.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.vendorRegistrationId}.
   * @param categoryName Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.categoryName}.
   * @param categoryHierarchyName Key property. See {@link ProspectiveVendorRegistrationProcurementCategories.categoryHierarchyName}.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   */
  delete(
    dataAreaId: string,
    vendorRegistrationId: BigNumber,
    categoryName: string,
    categoryHierarchyName: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationProcurementCategories`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationProcurementCategories` by taking the entity as a parameter.
   */
  delete(
    entity: ProspectiveVendorRegistrationProcurementCategories<T>
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  >;
  delete(
    dataAreaIdOrEntity: any,
    vendorRegistrationId?: BigNumber,
    categoryName?: string,
    categoryHierarchyName?: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationProcurementCategories<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProspectiveVendorRegistrationProcurementCategories<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof
      ProspectiveVendorRegistrationProcurementCategories
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorRegistrationId: vendorRegistrationId!,
            CategoryName: categoryName!,
            CategoryHierarchyName: categoryHierarchyName!
          }
    );
  }
}
