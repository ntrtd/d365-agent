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
import { VatRegistrationNumbers } from './VatRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link VatRegistrationNumbers} entity.
 */
export class VatRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VatRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `VatRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `VatRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<VatRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<VatRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VatRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VatRegistrationNumbers`.
   */
  create(
    entity: VatRegistrationNumbers<T>
  ): CreateRequestBuilder<VatRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<VatRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VatRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link VatRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link VatRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `VatRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<VatRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<VatRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VatRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VatRegistrationNumbers`.
   */
  update(
    entity: VatRegistrationNumbers<T>
  ): UpdateRequestBuilder<VatRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<VatRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VatRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link VatRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link VatRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `VatRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string
  ): DeleteRequestBuilder<VatRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VatRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VatRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: VatRegistrationNumbers<T>
  ): DeleteRequestBuilder<VatRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string
  ): DeleteRequestBuilder<VatRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<VatRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof VatRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
