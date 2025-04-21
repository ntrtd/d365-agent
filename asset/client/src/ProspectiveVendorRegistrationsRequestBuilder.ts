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
import { ProspectiveVendorRegistrations } from './ProspectiveVendorRegistrations';

/**
 * Request builder class for operations supported on the {@link ProspectiveVendorRegistrations} entity.
 */
export class ProspectiveVendorRegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProspectiveVendorRegistrations<T>, T> {
  /**
   * Returns a request builder for querying all `ProspectiveVendorRegistrations` entities.
   * @returns A request builder for creating requests to retrieve all `ProspectiveVendorRegistrations` entities.
   */
  getAll(): GetAllRequestBuilder<ProspectiveVendorRegistrations<T>, T> {
    return new GetAllRequestBuilder<ProspectiveVendorRegistrations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProspectiveVendorRegistrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProspectiveVendorRegistrations`.
   */
  create(
    entity: ProspectiveVendorRegistrations<T>
  ): CreateRequestBuilder<ProspectiveVendorRegistrations<T>, T> {
    return new CreateRequestBuilder<ProspectiveVendorRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProspectiveVendorRegistrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProspectiveVendorRegistrations.dataAreaId}.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrations.vendorRegistrationId}.
   * @returns A request builder for creating requests to retrieve one `ProspectiveVendorRegistrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    vendorRegistrationId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ProspectiveVendorRegistrations<T>, T> {
    return new GetByKeyRequestBuilder<ProspectiveVendorRegistrations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VendorRegistrationId: vendorRegistrationId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProspectiveVendorRegistrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProspectiveVendorRegistrations`.
   */
  update(
    entity: ProspectiveVendorRegistrations<T>
  ): UpdateRequestBuilder<ProspectiveVendorRegistrations<T>, T> {
    return new UpdateRequestBuilder<ProspectiveVendorRegistrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrations`.
   * @param dataAreaId Key property. See {@link ProspectiveVendorRegistrations.dataAreaId}.
   * @param vendorRegistrationId Key property. See {@link ProspectiveVendorRegistrations.vendorRegistrationId}.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrations`.
   */
  delete(
    dataAreaId: string,
    vendorRegistrationId: BigNumber
  ): DeleteRequestBuilder<ProspectiveVendorRegistrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrations` by taking the entity as a parameter.
   */
  delete(
    entity: ProspectiveVendorRegistrations<T>
  ): DeleteRequestBuilder<ProspectiveVendorRegistrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    vendorRegistrationId?: BigNumber
  ): DeleteRequestBuilder<ProspectiveVendorRegistrations<T>, T> {
    return new DeleteRequestBuilder<ProspectiveVendorRegistrations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProspectiveVendorRegistrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VendorRegistrationId: vendorRegistrationId!
          }
    );
  }
}
