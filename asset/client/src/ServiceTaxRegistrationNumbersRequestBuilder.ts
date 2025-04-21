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
import { ServiceTaxRegistrationNumbers } from './ServiceTaxRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link ServiceTaxRegistrationNumbers} entity.
 */
export class ServiceTaxRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceTaxRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceTaxRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceTaxRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceTaxRegistrationNumbers`.
   */
  create(
    entity: ServiceTaxRegistrationNumbers<T>
  ): CreateRequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceTaxRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link ServiceTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link ServiceTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `ServiceTaxRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceTaxRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceTaxRegistrationNumbers`.
   */
  update(
    entity: ServiceTaxRegistrationNumbers<T>
  ): UpdateRequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceTaxRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link ServiceTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link ServiceTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceTaxRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string
  ): DeleteRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceTaxRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceTaxRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceTaxRegistrationNumbers<T>
  ): DeleteRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string
  ): DeleteRequestBuilder<ServiceTaxRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<ServiceTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof ServiceTaxRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
