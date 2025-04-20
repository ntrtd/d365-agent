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
import { CustomerSearchFieldTranslations } from './CustomerSearchFieldTranslations';

/**
 * Request builder class for operations supported on the {@link CustomerSearchFieldTranslations} entity.
 */
export class CustomerSearchFieldTranslationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomerSearchFieldTranslations<T>, T> {
  /**
   * Returns a request builder for querying all `CustomerSearchFieldTranslations` entities.
   * @returns A request builder for creating requests to retrieve all `CustomerSearchFieldTranslations` entities.
   */
  getAll(): GetAllRequestBuilder<CustomerSearchFieldTranslations<T>, T> {
    return new GetAllRequestBuilder<CustomerSearchFieldTranslations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomerSearchFieldTranslations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomerSearchFieldTranslations`.
   */
  create(
    entity: CustomerSearchFieldTranslations<T>
  ): CreateRequestBuilder<CustomerSearchFieldTranslations<T>, T> {
    return new CreateRequestBuilder<CustomerSearchFieldTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomerSearchFieldTranslations` entity based on its keys.
   * @param retailCustomerSearchFieldEnumLabel Key property. See {@link CustomerSearchFieldTranslations.retailCustomerSearchFieldEnumLabel}.
   * @param languageId Key property. See {@link CustomerSearchFieldTranslations.languageId}.
   * @returns A request builder for creating requests to retrieve one `CustomerSearchFieldTranslations` entity based on its keys.
   */
  getByKey(
    retailCustomerSearchFieldEnumLabel: DeserializedType<T, 'Edm.String'>,
    languageId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomerSearchFieldTranslations<T>, T> {
    return new GetByKeyRequestBuilder<CustomerSearchFieldTranslations<T>, T>(
      this.entityApi,
      {
        RetailCustomerSearchFieldEnumLabel: retailCustomerSearchFieldEnumLabel,
        LanguageId: languageId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomerSearchFieldTranslations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomerSearchFieldTranslations`.
   */
  update(
    entity: CustomerSearchFieldTranslations<T>
  ): UpdateRequestBuilder<CustomerSearchFieldTranslations<T>, T> {
    return new UpdateRequestBuilder<CustomerSearchFieldTranslations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomerSearchFieldTranslations`.
   * @param retailCustomerSearchFieldEnumLabel Key property. See {@link CustomerSearchFieldTranslations.retailCustomerSearchFieldEnumLabel}.
   * @param languageId Key property. See {@link CustomerSearchFieldTranslations.languageId}.
   * @returns A request builder for creating requests that delete an entity of type `CustomerSearchFieldTranslations`.
   */
  delete(
    retailCustomerSearchFieldEnumLabel: string,
    languageId: string
  ): DeleteRequestBuilder<CustomerSearchFieldTranslations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomerSearchFieldTranslations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomerSearchFieldTranslations` by taking the entity as a parameter.
   */
  delete(
    entity: CustomerSearchFieldTranslations<T>
  ): DeleteRequestBuilder<CustomerSearchFieldTranslations<T>, T>;
  delete(
    retailCustomerSearchFieldEnumLabelOrEntity: any,
    languageId?: string
  ): DeleteRequestBuilder<CustomerSearchFieldTranslations<T>, T> {
    return new DeleteRequestBuilder<CustomerSearchFieldTranslations<T>, T>(
      this.entityApi,
      retailCustomerSearchFieldEnumLabelOrEntity instanceof
      CustomerSearchFieldTranslations
        ? retailCustomerSearchFieldEnumLabelOrEntity
        : {
            RetailCustomerSearchFieldEnumLabel:
              retailCustomerSearchFieldEnumLabelOrEntity!,
            LanguageId: languageId!
          }
    );
  }
}
