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
import { CustomsTaxRegistrationNumbers } from './CustomsTaxRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link CustomsTaxRegistrationNumbers} entity.
 */
export class CustomsTaxRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `CustomsTaxRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsTaxRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CustomsTaxRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsTaxRegistrationNumbers`.
   */
  create(
    entity: CustomsTaxRegistrationNumbers<T>
  ): CreateRequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomsTaxRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link CustomsTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link CustomsTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `CustomsTaxRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsTaxRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsTaxRegistrationNumbers`.
   */
  update(
    entity: CustomsTaxRegistrationNumbers<T>
  ): UpdateRequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsTaxRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link CustomsTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link CustomsTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsTaxRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string
  ): DeleteRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsTaxRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsTaxRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsTaxRegistrationNumbers<T>
  ): DeleteRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string
  ): DeleteRequestBuilder<CustomsTaxRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<CustomsTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof CustomsTaxRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
