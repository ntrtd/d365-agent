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
import { PersonCertificates } from './PersonCertificates';

/**
 * Request builder class for operations supported on the {@link PersonCertificates} entity.
 */
export class PersonCertificatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PersonCertificates<T>, T> {
  /**
   * Returns a request builder for querying all `PersonCertificates` entities.
   * @returns A request builder for creating requests to retrieve all `PersonCertificates` entities.
   */
  getAll(): GetAllRequestBuilder<PersonCertificates<T>, T> {
    return new GetAllRequestBuilder<PersonCertificates<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PersonCertificates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PersonCertificates`.
   */
  create(
    entity: PersonCertificates<T>
  ): CreateRequestBuilder<PersonCertificates<T>, T> {
    return new CreateRequestBuilder<PersonCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PersonCertificates` entity based on its keys.
   * @param partyNumber Key property. See {@link PersonCertificates.partyNumber}.
   * @param certificateTypeId Key property. See {@link PersonCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link PersonCertificates.startDate}.
   * @returns A request builder for creating requests to retrieve one `PersonCertificates` entity based on its keys.
   */
  getByKey(
    partyNumber: DeserializedType<T, 'Edm.String'>,
    certificateTypeId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PersonCertificates<T>, T> {
    return new GetByKeyRequestBuilder<PersonCertificates<T>, T>(
      this.entityApi,
      {
        PartyNumber: partyNumber,
        CertificateTypeId: certificateTypeId,
        StartDate: startDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PersonCertificates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PersonCertificates`.
   */
  update(
    entity: PersonCertificates<T>
  ): UpdateRequestBuilder<PersonCertificates<T>, T> {
    return new UpdateRequestBuilder<PersonCertificates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PersonCertificates`.
   * @param partyNumber Key property. See {@link PersonCertificates.partyNumber}.
   * @param certificateTypeId Key property. See {@link PersonCertificates.certificateTypeId}.
   * @param startDate Key property. See {@link PersonCertificates.startDate}.
   * @returns A request builder for creating requests that delete an entity of type `PersonCertificates`.
   */
  delete(
    partyNumber: string,
    certificateTypeId: string,
    startDate: Moment
  ): DeleteRequestBuilder<PersonCertificates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PersonCertificates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PersonCertificates` by taking the entity as a parameter.
   */
  delete(
    entity: PersonCertificates<T>
  ): DeleteRequestBuilder<PersonCertificates<T>, T>;
  delete(
    partyNumberOrEntity: any,
    certificateTypeId?: string,
    startDate?: Moment
  ): DeleteRequestBuilder<PersonCertificates<T>, T> {
    return new DeleteRequestBuilder<PersonCertificates<T>, T>(
      this.entityApi,
      partyNumberOrEntity instanceof PersonCertificates
        ? partyNumberOrEntity
        : {
            PartyNumber: partyNumberOrEntity!,
            CertificateTypeId: certificateTypeId!,
            StartDate: startDate!
          }
    );
  }
}
