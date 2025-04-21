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
import { RegistrationLegislationTypes } from './RegistrationLegislationTypes';

/**
 * Request builder class for operations supported on the {@link RegistrationLegislationTypes} entity.
 */
export class RegistrationLegislationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RegistrationLegislationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RegistrationLegislationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RegistrationLegislationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RegistrationLegislationTypes<T>, T> {
    return new GetAllRequestBuilder<RegistrationLegislationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RegistrationLegislationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RegistrationLegislationTypes`.
   */
  create(
    entity: RegistrationLegislationTypes<T>
  ): CreateRequestBuilder<RegistrationLegislationTypes<T>, T> {
    return new CreateRequestBuilder<RegistrationLegislationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RegistrationLegislationTypes` entity based on its keys.
   * @param registrationType Key property. See {@link RegistrationLegislationTypes.registrationType}.
   * @param countryRegionId Key property. See {@link RegistrationLegislationTypes.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `RegistrationLegislationTypes` entity based on its keys.
   */
  getByKey(
    registrationType: DeserializedType<T, 'Edm.String'>,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RegistrationLegislationTypes<T>, T> {
    return new GetByKeyRequestBuilder<RegistrationLegislationTypes<T>, T>(
      this.entityApi,
      {
        RegistrationType: registrationType,
        CountryRegionId: countryRegionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RegistrationLegislationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RegistrationLegislationTypes`.
   */
  update(
    entity: RegistrationLegislationTypes<T>
  ): UpdateRequestBuilder<RegistrationLegislationTypes<T>, T> {
    return new UpdateRequestBuilder<RegistrationLegislationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RegistrationLegislationTypes`.
   * @param registrationType Key property. See {@link RegistrationLegislationTypes.registrationType}.
   * @param countryRegionId Key property. See {@link RegistrationLegislationTypes.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationLegislationTypes`.
   */
  delete(
    registrationType: string,
    countryRegionId: string
  ): DeleteRequestBuilder<RegistrationLegislationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RegistrationLegislationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RegistrationLegislationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RegistrationLegislationTypes<T>
  ): DeleteRequestBuilder<RegistrationLegislationTypes<T>, T>;
  delete(
    registrationTypeOrEntity: any,
    countryRegionId?: string
  ): DeleteRequestBuilder<RegistrationLegislationTypes<T>, T> {
    return new DeleteRequestBuilder<RegistrationLegislationTypes<T>, T>(
      this.entityApi,
      registrationTypeOrEntity instanceof RegistrationLegislationTypes
        ? registrationTypeOrEntity
        : {
            RegistrationType: registrationTypeOrEntity!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
