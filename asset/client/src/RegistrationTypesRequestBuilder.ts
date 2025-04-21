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
import { RegistrationTypes } from './RegistrationTypes';

/**
 * Request builder class for operations supported on the {@link RegistrationTypes} entity.
 */
export class RegistrationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegistrationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RegistrationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RegistrationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RegistrationTypes<T>, T> {
    return new GetAllRequestBuilder<RegistrationTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RegistrationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegistrationTypes`.
   */
  create(
    entity: RegistrationTypes<T>
  ): CreateRequestBuilder<RegistrationTypes<T>, T> {
    return new CreateRequestBuilder<RegistrationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegistrationTypes` entity based on its keys.
   * @param registrationType Key property. See {@link RegistrationTypes.registrationType}.
   * @param countryRegionId Key property. See {@link RegistrationTypes.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `RegistrationTypes` entity based on its keys.
   */
  getByKey(
    registrationType: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegistrationTypes<T>, T> {
    return new GetByKeyRequestBuilder<RegistrationTypes<T>, T>(this.entityApi, {
      RegistrationType: registrationType,
      CountryRegionId: countryRegionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RegistrationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegistrationTypes`.
   */
  update(
    entity: RegistrationTypes<T>
  ): UpdateRequestBuilder<RegistrationTypes<T>, T> {
    return new UpdateRequestBuilder<RegistrationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegistrationTypes`.
   * @param registrationType Key property. See {@link RegistrationTypes.registrationType}.
   * @param countryRegionId Key property. See {@link RegistrationTypes.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationTypes`.
   */
  delete(
    registrationType: string,
    countryRegionId: string
  ): DeleteRequestBuilder<RegistrationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegistrationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RegistrationTypes<T>
  ): DeleteRequestBuilder<RegistrationTypes<T>, T>;
  delete(
    registrationTypeOrEntity: any,
    countryRegionId?: string
  ): DeleteRequestBuilder<RegistrationTypes<T>, T> {
    return new DeleteRequestBuilder<RegistrationTypes<T>, T>(
      this.entityApi,
      registrationTypeOrEntity instanceof RegistrationTypes
        ? registrationTypeOrEntity
        : {
            RegistrationType: registrationTypeOrEntity!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
