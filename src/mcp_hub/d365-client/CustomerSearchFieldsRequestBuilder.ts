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
import { CustomerSearchFields } from './CustomerSearchFields';

/**
 * Request builder class for operations supported on the {@link CustomerSearchFields} entity.
 */
export class CustomerSearchFieldsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerSearchFields<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerSearchFields` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerSearchFields` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerSearchFields<T>, T> {
    return new GetAllRequestBuilder<CustomerSearchFields<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomerSearchFields` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerSearchFields`.
   */
  create(
    entity: CustomerSearchFields<T>
  ): CreateRequestBuilder<CustomerSearchFields<T>, T> {
    return new CreateRequestBuilder<CustomerSearchFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerSearchFields` entity based on its keys.
   * @param retailCustomerSearchFieldEnumLabel Key property. See {@link CustomerSearchFields.retailCustomerSearchFieldEnumLabel}.
   * @returns A request builder for creating requests to retrieve one `CustomerSearchFields` entity based on its keys.
   */
  getByKey(
    retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerSearchFields<T>, T> {
    return new GetByKeyRequestBuilder<CustomerSearchFields<T>, T>(
      this.entityApi,
      { RetailCustomerSearchFieldEnumLabel: retailCustomerSearchFieldEnumLabel }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerSearchFields`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerSearchFields`.
   */
  update(
    entity: CustomerSearchFields<T>
  ): UpdateRequestBuilder<CustomerSearchFields<T>, T> {
    return new UpdateRequestBuilder<CustomerSearchFields<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerSearchFields`.
   * @param retailCustomerSearchFieldEnumLabel Key property. See {@link CustomerSearchFields.retailCustomerSearchFieldEnumLabel}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerSearchFields`.
   */
  delete(
    retailCustomerSearchFieldEnumLabel: string
  ): DeleteRequestBuilder<CustomerSearchFields<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerSearchFields`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerSearchFields` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerSearchFields<T>
  ): DeleteRequestBuilder<CustomerSearchFields<T>, T>;
  delete(
    retailCustomerSearchFieldEnumLabelOrEntity: any
  ): DeleteRequestBuilder<CustomerSearchFields<T>, T> {
    return new DeleteRequestBuilder<CustomerSearchFields<T>, T>(
      this.entityApi,
      retailCustomerSearchFieldEnumLabelOrEntity instanceof CustomerSearchFields
        ? retailCustomerSearchFieldEnumLabelOrEntity
        : {
            RetailCustomerSearchFieldEnumLabel:
              retailCustomerSearchFieldEnumLabelOrEntity!
          }
    );
  }
}
