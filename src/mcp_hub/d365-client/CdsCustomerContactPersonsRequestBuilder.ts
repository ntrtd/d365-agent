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
import { CdsCustomerContactPersons } from './CdsCustomerContactPersons';

/**
 * Request builder class for operations supported on the {@link CdsCustomerContactPersons} entity.
 */
export class CdsCustomerContactPersonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsCustomerContactPersons<T>, T> {
  /**
   * Returns a request builder for querying all `CdsCustomerContactPersons` entities.
   * @returns A request builder for creating requests to retrieve all `CdsCustomerContactPersons` entities.
   */
  getAll(): GetAllRequestBuilder<CdsCustomerContactPersons<T>, T> {
    return new GetAllRequestBuilder<CdsCustomerContactPersons<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsCustomerContactPersons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsCustomerContactPersons`.
   */
  create(
    entity: CdsCustomerContactPersons<T>
  ): CreateRequestBuilder<CdsCustomerContactPersons<T>, T> {
    return new CreateRequestBuilder<CdsCustomerContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsCustomerContactPersons` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsCustomerContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsCustomerContactPersons.contactPersonPartyNumber}.
   * @param customerAccountNumber Key property. See {@link CdsCustomerContactPersons.customerAccountNumber}.
   * @returns A request builder for creating requests to retrieve one `CdsCustomerContactPersons` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    contactPersonPartyNumber: DeserializedType<T, 'Edm.String'>,
    customerAccountNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsCustomerContactPersons<T>, T> {
    return new GetByKeyRequestBuilder<CdsCustomerContactPersons<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ContactPersonPartyNumber: contactPersonPartyNumber,
        CustomerAccountNumber: customerAccountNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsCustomerContactPersons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsCustomerContactPersons`.
   */
  update(
    entity: CdsCustomerContactPersons<T>
  ): UpdateRequestBuilder<CdsCustomerContactPersons<T>, T> {
    return new UpdateRequestBuilder<CdsCustomerContactPersons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsCustomerContactPersons`.
   * @param dataAreaId Key property. See {@link CdsCustomerContactPersons.dataAreaId}.
   * @param contactPersonPartyNumber Key property. See {@link CdsCustomerContactPersons.contactPersonPartyNumber}.
   * @param customerAccountNumber Key property. See {@link CdsCustomerContactPersons.customerAccountNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CdsCustomerContactPersons`.
   */
  delete(
    dataAreaId: string,
    contactPersonPartyNumber: string,
    customerAccountNumber: string
  ): DeleteRequestBuilder<CdsCustomerContactPersons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsCustomerContactPersons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsCustomerContactPersons` by taking the entity as a parameter.
   */
  delete(
    entity: CdsCustomerContactPersons<T>
  ): DeleteRequestBuilder<CdsCustomerContactPersons<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    contactPersonPartyNumber?: string,
    customerAccountNumber?: string
  ): DeleteRequestBuilder<CdsCustomerContactPersons<T>, T> {
    return new DeleteRequestBuilder<CdsCustomerContactPersons<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsCustomerContactPersons
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ContactPersonPartyNumber: contactPersonPartyNumber!,
            CustomerAccountNumber: customerAccountNumber!
          }
    );
  }
}
