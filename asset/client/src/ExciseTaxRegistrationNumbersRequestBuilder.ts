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
import { ExciseTaxRegistrationNumbers } from './ExciseTaxRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';
import { ExciseReferenceIn } from './ExciseReferenceIn';

/**
 * Request builder class for operations supported on the {@link ExciseTaxRegistrationNumbers} entity.
 */
export class ExciseTaxRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `ExciseTaxRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `ExciseTaxRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExciseTaxRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExciseTaxRegistrationNumbers`.
   */
  create(
    entity: ExciseTaxRegistrationNumbers<T>
  ): CreateRequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExciseTaxRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link ExciseTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link ExciseTaxRegistrationNumbers.registrationNumber}.
   * @param reference Key property. See {@link ExciseTaxRegistrationNumbers.reference}.
   * @returns A request builder for creating requests to retrieve one `ExciseTaxRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>,
    reference: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.ExciseReference_IN'
    >
  ): GetByKeyRequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber,
        Reference: reference
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExciseTaxRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExciseTaxRegistrationNumbers`.
   */
  update(
    entity: ExciseTaxRegistrationNumbers<T>
  ): UpdateRequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExciseTaxRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link ExciseTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link ExciseTaxRegistrationNumbers.registrationNumber}.
   * @param reference Key property. See {@link ExciseTaxRegistrationNumbers.reference}.
   * @returns A request builder for creating requests that delete an entity of type `ExciseTaxRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string,
    reference: ExciseReferenceIn
  ): DeleteRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExciseTaxRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExciseTaxRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: ExciseTaxRegistrationNumbers<T>
  ): DeleteRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string,
    reference?: ExciseReferenceIn
  ): DeleteRequestBuilder<ExciseTaxRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<ExciseTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof ExciseTaxRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!,
            Reference: reference!
          }
    );
  }
}
