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
import { SalesTaxRegistrationNumbers } from './SalesTaxRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link SalesTaxRegistrationNumbers} entity.
 */
export class SalesTaxRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `SalesTaxRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `SalesTaxRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<SalesTaxRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesTaxRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesTaxRegistrationNumbers`.
   */
  create(
    entity: SalesTaxRegistrationNumbers<T>
  ): CreateRequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<SalesTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesTaxRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link SalesTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link SalesTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests to retrieve one `SalesTaxRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<SalesTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesTaxRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesTaxRegistrationNumbers`.
   */
  update(
    entity: SalesTaxRegistrationNumbers<T>
  ): UpdateRequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<SalesTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesTaxRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link SalesTaxRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link SalesTaxRegistrationNumbers.registrationNumber}.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string
  ): DeleteRequestBuilder<SalesTaxRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesTaxRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesTaxRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: SalesTaxRegistrationNumbers<T>
  ): DeleteRequestBuilder<SalesTaxRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string
  ): DeleteRequestBuilder<SalesTaxRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<SalesTaxRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof SalesTaxRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!
          }
    );
  }
}
