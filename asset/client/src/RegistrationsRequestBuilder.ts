/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { Registrations } from './Registrations';
import { TaxRegistrationTypesList } from './TaxRegistrationTypesList';

/**
 * Request builder class for operations supported on the {@link Registrations} entity.
 */
export class RegistrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Registrations<T>, T> {
  /**
   * Returns a request builder for querying all `Registrations` entities.
   * @returns A request builder for creating requests to retrieve all `Registrations` entities.
   */
  getAll(): GetAllRequestBuilder<Registrations<T>, T> {
    return new GetAllRequestBuilder<Registrations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Registrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Registrations`.
   */
  create(entity: Registrations<T>): CreateRequestBuilder<Registrations<T>, T> {
    return new CreateRequestBuilder<Registrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Registrations` entity based on its keys.
   * @param partyNumber Key property. See {@link Registrations.partyNumber}.
   * @param locationId Key property. See {@link Registrations.locationId}.
   * @param validFrom Key property. See {@link Registrations.validFrom}.
   * @param legislationType Key property. See {@link Registrations.legislationType}.
   * @param countryRegionId Key property. See {@link Registrations.countryRegionId}.
   * @returns A request builder for creating requests to retrieve one `Registrations` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    locationId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    legislationType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationTypesList'
    >,
    countryRegionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Registrations<T>, T> {
    return new GetByKeyRequestBuilder<Registrations<T>, T>(this.entityApi, {
      PartyNumber: partyNumber,
      LocationId: locationId,
      ValidFrom: validFrom,
      LegislationType: legislationType,
      CountryRegionId: countryRegionId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Registrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Registrations`.
   */
  update(entity: Registrations<T>): UpdateRequestBuilder<Registrations<T>, T> {
    return new UpdateRequestBuilder<Registrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Registrations`.
   * @param partyNumber Key property. See {@link Registrations.partyNumber}.
   * @param locationId Key property. See {@link Registrations.locationId}.
   * @param validFrom Key property. See {@link Registrations.validFrom}.
   * @param legislationType Key property. See {@link Registrations.legislationType}.
   * @param countryRegionId Key property. See {@link Registrations.countryRegionId}.
   * @returns A request builder for creating requests that delete an entity of type `Registrations`.
   */
  delete(
    partyNumber: string,
    locationId: string,
    validFrom: Moment,
    legislationType: TaxRegistrationTypesList,
    countryRegionId: string
  ): DeleteRequestBuilder<Registrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Registrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Registrations` by taking the entity as a parameter.
   */
  delete(entity: Registrations<T>): DeleteRequestBuilder<Registrations<T>, T>;
  delete(
    partyNumberOrEntity: any,
    locationId?: string,
    validFrom?: Moment,
    legislationType?: TaxRegistrationTypesList,
    countryRegionId?: string
  ): DeleteRequestBuilder<Registrations<T>, T> {
    return new DeleteRequestBuilder<Registrations<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof Registrations
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            LocationId: locationId!,
            ValidFrom: validFrom!,
            LegislationType: legislationType!,
            CountryRegionId: countryRegionId!
          }
    );
  }
}
