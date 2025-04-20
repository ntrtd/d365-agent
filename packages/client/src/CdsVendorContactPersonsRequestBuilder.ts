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
import { CdsVendorContactPersons } from './CdsVendorContactPersons';

/**
 * Request builder class for operations supported on the {@link CdsVendorContactPersons} entity.
 */
export class CdsVendorContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsVendorContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `CdsVendorContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `CdsVendorContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<CdsVendorContactPersons<T>, T> {
    return new GetAllRequestBuilder<CdsVendorContactPersons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsVendorContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsVendorContactPersons`.
   */
  create(
    entity: CdsVendorContactPersons<T>
  ): CreateRequestBuilder<CdsVendorContactPersons<T>, T> {
    return new CreateRequestBuilder<CdsVendorContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsVendorContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsVendorContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsVendorContactPersons.contactPersonPartyNumber}.
   * @param vendorAccountNumber Key property. See {@link CdsVendorContactPersons.vendorAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsVendorContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    vendorAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsVendorContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<CdsVendorContactPersons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContactPersonPartyNumber: contactPersonPartyNumber,
        VendorAccountNumber: vendorAccountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsVendorContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsVendorContactPersons`.
   */
  update(
    entity: CdsVendorContactPersons<T>
  ): UpdateRequestBuilder<CdsVendorContactPersons<T>, T> {
    return new UpdateRequestBuilder<CdsVendorContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsVendorContactPersons`.
   * @param dataAreaId Key property. See {@link CdsVendorContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsVendorContactPersons.contactPersonPartyNumber}.
   * @param vendorAccountNumber Key property. See {@link CdsVendorContactPersons.vendorAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsVendorContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonPartyNumber: string,
    vendorAccountNumber: string
  ): DeleteRequestBuilder<CdsVendorContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsVendorContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsVendorContactPersons` by taking the entity as a parameter.
   */
  delete(
    entity: CdsVendorContactPersons<T>
  ): DeleteRequestBuilder<CdsVendorContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonPartyNumber?: string,
    vendorAccountNumber?: string
  ): DeleteRequestBuilder<CdsVendorContactPersons<T>, T> {
    return new DeleteRequestBuilder<CdsVendorContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsVendorContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            VendorAccountNumber: vendorAccountNumber!
          }
    );
  }
}
