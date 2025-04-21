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
import { ProspectiveVendorRegistrationRequests } from './ProspectiveVendorRegistrationRequests';

/**
 * Request builder class for operations supported on the {@link ProspectiveVendorRegistrationRequests} entity.
 */
export class ProspectiveVendorRegistrationRequestsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
  /**
   * Returns a request builder for querying all `ProspectiveVendorRegistrationRequests` entities.
   * @returns A request builder for creating requests to retrieve all `ProspectiveVendorRegistrationRequests` entities.
   */
  getAll(): GetAllRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
    return new GetAllRequestBuilder<
      ProspectiveVendorRegistrationRequests<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProspectiveVendorRegistrationRequests` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProspectiveVendorRegistrationRequests`.
   */
  create(
    entity: ProspectiveVendorRegistrationRequests<T>
  ): CreateRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
    return new CreateRequestBuilder<
      ProspectiveVendorRegistrationRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProspectiveVendorRegistrationRequests` entity based on its keys.
   * @param emailAddress Key property. See {@link ProspectiveVendorRegistrationRequests.emailAddress}.
   * @returns A request builder for creating requests to retrieve one `ProspectiveVendorRegistrationRequests` entity based on its keys.
   */
  getByKey(
    emailAddress: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
    return new GetByKeyRequestBuilder<
      ProspectiveVendorRegistrationRequests<T>,
      T
    >(this.entityApi, { EmailAddress: emailAddress });
  }

  /**
   * Returns a request builder for updating an entity of type `ProspectiveVendorRegistrationRequests`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProspectiveVendorRegistrationRequests`.
   */
  update(
    entity: ProspectiveVendorRegistrationRequests<T>
  ): UpdateRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
    return new UpdateRequestBuilder<
      ProspectiveVendorRegistrationRequests<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationRequests`.
   * @param emailAddress Key property. See {@link ProspectiveVendorRegistrationRequests.emailAddress}.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationRequests`.
   */
  delete(
    emailAddress: string
  ): DeleteRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProspectiveVendorRegistrationRequests`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProspectiveVendorRegistrationRequests` by taking the entity as a parameter.
   */
  delete(
    entity: ProspectiveVendorRegistrationRequests<T>
  ): DeleteRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T>;
  delete(
    emailAddressOrEntity: any
  ): DeleteRequestBuilder<ProspectiveVendorRegistrationRequests<T>, T> {
    return new DeleteRequestBuilder<
      ProspectiveVendorRegistrationRequests<T>,
      T
    >(
      this.entityApi,
      emailAddressOrEntity instanceof ProspectiveVendorRegistrationRequests
        ? emailAddressOrEntity
        : { EmailAddress: emailAddressOrEntity! }
    );
  }
}
