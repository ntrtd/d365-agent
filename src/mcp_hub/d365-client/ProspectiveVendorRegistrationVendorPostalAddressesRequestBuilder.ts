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
import { ProspectiveVendorRegistrationVendorPostalAddresses } from './ProspectiveVendorRegistrationVendorPostalAddresses';

/**
 * Request builder class for operations supported on the {@link ProspectiveVendorRegistrationVendorPostalAddresses} entity.
 */
export class ProspectiveVendorRegistrationVendorPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProspectiveVendorRegistrationVendorPostalAddresses<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProspectiveVendorRegistrationVendorPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `ProspectiveVendorRegistrationVendorPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProspectiveVendorRegistrationVendorPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   */
  create(
    entity: ProspectiveVendorRegistrationVendorPostalAddresses<T>
  ): CreateRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProspectiveVendorRegistrationVendorPostalAddresses` entity based on its keys.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationVendorPostalAddresses.vendorRegistrationId}.
   * @param addressLocationId Key property. See {@link ProspectiveVendorRegistrationVendorPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests to retrieve one `ProspectiveVendorRegistrationVendorPostalAddresses` entity based on its keys.
   */
  getByKey(
    vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<T>,
      T
    >(this.entityApi, {
      VendorRegistrationId: vendorRegistrationId,
      AddressLocationId: addressLocationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   */
  update(
    entity: ProspectiveVendorRegistrationVendorPostalAddresses<T>
  ): UpdateRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationVendorPostalAddresses.vendorRegistrationId}.
   * @param addressLocationId Key property. See {@link ProspectiveVendorRegistrationVendorPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   */
  delete(
    vendorRegistrationId: BigNumber,
    addressLocationId: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationVendorPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: ProspectiveVendorRegistrationVendorPostalAddresses<T>
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  >;
  delete(
    vendorRegistrationIdOrEntity: any,
    addressLocationId?: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationVendorPostalAddresses<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProspectiveVendorRegistrationVendorPostalAddresses<T>,
      T
    >(
      this.entityApi,
      vendorRegistrationIdOrEntity instanceof
      ProspectiveVendorRegistrationVendorPostalAddresses
        ? vendorRegistrationIdOrEntity
        : {
            VendorRegistrationId: vendorRegistrationIdOrEntity!,
            AddressLocationId: addressLocationId!
          }
    );
  }
}
