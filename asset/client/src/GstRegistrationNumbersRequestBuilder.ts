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
import { GstRegistrationNumbers } from './GstRegistrationNumbers';
import { TaxRegistrationTypeIn } from './TaxRegistrationTypeIn';

/**
 * Request builder class for operations supported on the {@link GstRegistrationNumbers} entity.
 */
export class GstRegistrationNumbersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<GstRegistrationNumbers<T>, T> {
  /**
   * Returns a request builder for querying all `GstRegistrationNumbers` entities.
   * @returns A request builder for creating requests to retrieve all `GstRegistrationNumbers` entities.
   */
  getAll(): GetAllRequestBuilder<GstRegistrationNumbers<T>, T> {
    return new GetAllRequestBuilder<GstRegistrationNumbers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `GstRegistrationNumbers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `GstRegistrationNumbers`.
   */
  create(
    entity: GstRegistrationNumbers<T>
  ): CreateRequestBuilder<GstRegistrationNumbers<T>, T> {
    return new CreateRequestBuilder<GstRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `GstRegistrationNumbers` entity based on its keys.
   * @param registrationNumberType Key property. See {@link GstRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link GstRegistrationNumbers.registrationNumber}.
   * @param casualToDate Key property. See {@link GstRegistrationNumbers.casualToDate}.
   * @param casualFromDate Key property. See {@link GstRegistrationNumbers.casualFromDate}.
   * @returns A request builder for creating requests to retrieve one `GstRegistrationNumbers` entity based on its keys.
   */
  getByKey(
    registrationNumberType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.TaxRegistrationType_IN'
    >,
    registrationNumber: DeserializedType<T, 'Edm.String'>,
    casualToDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    casualFromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<GstRegistrationNumbers<T>, T> {
    return new GetByKeyRequestBuilder<GstRegistrationNumbers<T>, T>(
      this.entityApi,
      {
        RegistrationNumberType: registrationNumberType,
        RegistrationNumber: registrationNumber,
        CasualToDate: casualToDate,
        CasualFromDate: casualFromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `GstRegistrationNumbers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `GstRegistrationNumbers`.
   */
  update(
    entity: GstRegistrationNumbers<T>
  ): UpdateRequestBuilder<GstRegistrationNumbers<T>, T> {
    return new UpdateRequestBuilder<GstRegistrationNumbers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `GstRegistrationNumbers`.
   * @param registrationNumberType Key property. See {@link GstRegistrationNumbers.registrationNumberType}.
   * @param registrationNumber Key property. See {@link GstRegistrationNumbers.registrationNumber}.
   * @param casualToDate Key property. See {@link GstRegistrationNumbers.casualToDate}.
   * @param casualFromDate Key property. See {@link GstRegistrationNumbers.casualFromDate}.
   * @returns A request builder for creating requests that delete an entity of type `GstRegistrationNumbers`.
   */
  delete(
    registrationNumberType: TaxRegistrationTypeIn,
    registrationNumber: string,
    casualToDate: Moment,
    casualFromDate: Moment
  ): DeleteRequestBuilder<GstRegistrationNumbers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `GstRegistrationNumbers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `GstRegistrationNumbers` by taking the entity as a parameter.
   */
  delete(
    entity: GstRegistrationNumbers<T>
  ): DeleteRequestBuilder<GstRegistrationNumbers<T>, T>;
  delete(
    registrationNumberTypeOrEntity: any,
    registrationNumber?: string,
    casualToDate?: Moment,
    casualFromDate?: Moment
  ): DeleteRequestBuilder<GstRegistrationNumbers<T>, T> {
    return new DeleteRequestBuilder<GstRegistrationNumbers<T>, T>(
      this.entityApi,
      registrationNumberTypeOrEntity instanceof GstRegistrationNumbers
        ? registrationNumberTypeOrEntity
        : {
            RegistrationNumberType: registrationNumberTypeOrEntity!,
            RegistrationNumber: registrationNumber!,
            CasualToDate: casualToDate!,
            CasualFromDate: casualFromDate!
          }
    );
  }
}
