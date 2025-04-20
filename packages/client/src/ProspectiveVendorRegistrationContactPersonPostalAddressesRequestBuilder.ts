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
import { ProspectiveVendorRegistrationContactPersonPostalAddresses } from './ProspectiveVendorRegistrationContactPersonPostalAddresses';

/**
 * Request builder class for operations supported on the {@link ProspectiveVendorRegistrationContactPersonPostalAddresses} entity.
 */
export class ProspectiveVendorRegistrationContactPersonPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<
  ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
  T
> {
  /**
   * Returns a request builder for querying all `ProspectiveVendorRegistrationContactPersonPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `ProspectiveVendorRegistrationContactPersonPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  > {
    return new GetAllRequestBuilder<
      ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProspectiveVendorRegistrationContactPersonPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   */
  create(
    entity: ProspectiveVendorRegistrationContactPersonPostalAddresses<T>
  ): CreateRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  > {
    return new CreateRequestBuilder<
      ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProspectiveVendorRegistrationContactPersonPostalAddresses` entity based on its keys.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationContactPersonPostalAddresses.vendorRegistrationId}.
   * @param addressLocationId Key property. See {@link ProspectiveVendorRegistrationContactPersonPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests to retrieve one `ProspectiveVendorRegistrationContactPersonPostalAddresses` entity based on its keys.
   */
  getByKey(
    vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  > {
    return new GetByKeyRequestBuilder<
      ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
      T
    >(this.entityApi, {
      VendorRegistrationId: vendorRegistrationId,
      AddressLocationId: addressLocationId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   */
  update(
    entity: ProspectiveVendorRegistrationContactPersonPostalAddresses<T>
  ): UpdateRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  > {
    return new UpdateRequestBuilder<
      ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrationContactPersonPostalAddresses.vendorRegistrationId}.
   * @param addressLocationId Key property. See {@link ProspectiveVendorRegistrationContactPersonPostalAddresses.addressLocationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   */
  delete(
    vendorRegistrationId: BigNumber,
    addressLocationId: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  >;
  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationContactPersonPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: ProspectiveVendorRegistrationContactPersonPostalAddresses<T>
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  >;
  delete(
    vendorRegistrationIdOrEntity: any,
    addressLocationId?: string
  ): DeleteRequestBuilder<
    ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
    T
  > {
    return new DeleteRequestBuilder<
      ProspectiveVendorRegistrationContactPersonPostalAddresses<T>,
      T
    >(
      this.entityApi,
      vendorRegistrationIdOrEntity instanceof
      ProspectiveVendorRegistrationContactPersonPostalAddresses
        ? vendorRegistrationIdOrEntity
        : {
            VendorRegistrationId: vendorRegistrationIdOrEntity!,
            AddressLocationId: addressLocationId!
          }
    );
  }
}
