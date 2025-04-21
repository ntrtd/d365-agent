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
import { VendVendorPostalAddresses } from './VendVendorPostalAddresses';

/**
 * Request builder class for operations supported on the {@link VendVendorPostalAddresses} entity.
 */
export class VendVendorPostalAddressesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VendVendorPostalAddresses<T>, T> {
  /**
   * Returns a request builder for querying all `VendVendorPostalAddresses` entities.
   * @returns A request builder for creating requests to retrieve all `VendVendorPostalAddresses` entities.
   */
  getAll(): GetAllRequestBuilder<VendVendorPostalAddresses<T>, T> {
    return new GetAllRequestBuilder<VendVendorPostalAddresses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VendVendorPostalAddresses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VendVendorPostalAddresses`.
   */
  create(
    entity: VendVendorPostalAddresses<T>
  ): CreateRequestBuilder<VendVendorPostalAddresses<T>, T> {
    return new CreateRequestBuilder<VendVendorPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VendVendorPostalAddresses` entity based on its keys.
   * @param dataAreaId Key property. See {@link VendVendorPostalAddresses.dataAreaId}.
   * @param vendorLegalEntityId Key property. See {@link VendVendorPostalAddresses.vendorLegalEntityId}.
   * @param vendorAccountNumber Key property. See {@link VendVendorPostalAddresses.vendorAccountNumber}.
   * @param addressLocationId Key property. See {@link VendVendorPostalAddresses.addressLocationId}.
   * @param addressValidFrom Key property. See {@link VendVendorPostalAddresses.addressValidFrom}.
   * @returns A request builder for creating requests to retrieve one `VendVendorPostalAddresses` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorLegalEntityId: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>,
    addressLocationId: DeserializedType<T, 'Edm.String'>,
    addressValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<VendVendorPostalAddresses<T>, T> {
    return new GetByKeyRequestBuilder<VendVendorPostalAddresses<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorLegalEntityId: vendorLegalEntityId,
        VendorAccountNumber: vendorAccountNumber,
        AddressLocationId: addressLocationId,
        AddressValidFrom: addressValidFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VendVendorPostalAddresses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VendVendorPostalAddresses`.
   */
  update(
    entity: VendVendorPostalAddresses<T>
  ): UpdateRequestBuilder<VendVendorPostalAddresses<T>, T> {
    return new UpdateRequestBuilder<VendVendorPostalAddresses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VendVendorPostalAddresses`.
   * @param dataAreaId Key property. See {@link VendVendorPostalAddresses.dataAreaId}.
   * @param vendorLegalEntityId Key property. See {@link VendVendorPostalAddresses.vendorLegalEntityId}.
   * @param vendorAccountNumber Key property. See {@link VendVendorPostalAddresses.vendorAccountNumber}.
   * @param addressLocationId Key property. See {@link VendVendorPostalAddresses.addressLocationId}.
   * @param addressValidFrom Key property. See {@link VendVendorPostalAddresses.addressValidFrom}.
   * @returns A request builder for creating requests that delete an entity of type `VendVendorPostalAddresses`.
   */
  delete(
    dataAreaId: string,
    vendorLegalEntityId: string,
    vendorAccountNumber: string,
    addressLocationId: string,
    addressValidFrom: Moment
  ): DeleteRequestBuilder<VendVendorPostalAddresses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VendVendorPostalAddresses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VendVendorPostalAddresses` by taking the entity as a parameter.
   */
  delete(
    entity: VendVendorPostalAddresses<T>
  ): DeleteRequestBuilder<VendVendorPostalAddresses<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorLegalEntityId?: string,
    vendorAccountNumber?: string,
    addressLocationId?: string,
    addressValidFrom?: Moment
  ): DeleteRequestBuilder<VendVendorPostalAddresses<T>, T> {
    return new DeleteRequestBuilder<VendVendorPostalAddresses<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VendVendorPostalAddresses
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorLegalEntityId: vendorLegalEntityId!,
            VendorAccountNumber: vendorAccountNumber!,
            AddressLocationId: addressLocationId!,
            AddressValidFrom: addressValidFrom!
          }
    );
  }
}
