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
import { PayIntV1HcmEmploymentTerms } from './PayIntV1HcmEmploymentTerms';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmEmploymentTerms} entity.
 */
export class PayIntV1HcmEmploymentTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmEmploymentTerms` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmEmploymentTerms` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
    return new GetAllRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmEmploymentTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmEmploymentTerms`.
   */
  create(
    entity: PayIntV1HcmEmploymentTerms<T>
  ): CreateRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
    return new CreateRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmEmploymentTerms` entity based on its keys.
   * @param validTo Key property. See {@link PayIntV1HcmEmploymentTerms.validTo}.
   * @param agreementTermId Key property. See {@link PayIntV1HcmEmploymentTerms.agreementTermId}.
   * @param legalEntityId Key property. See {@link PayIntV1HcmEmploymentTerms.legalEntityId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmEmploymentTerms.personnelNumber}.
   * @param employmentStartDate Key property. See {@link PayIntV1HcmEmploymentTerms.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link PayIntV1HcmEmploymentTerms.employmentEndDate}.
   * @param validFrom Key property. See {@link PayIntV1HcmEmploymentTerms.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmEmploymentTerms` entity based on its keys.
   */
  getByKey(
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    agreementTermId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>(
      this.entityApi,
      {
        ValidTo: validTo,
        AgreementTermId: agreementTermId,
        LegalEntityId: legalEntityId,
        PersonnelNumber: personnelNumber,
        EmploymentStartDate: employmentStartDate,
        EmploymentEndDate: employmentEndDate,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmEmploymentTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmEmploymentTerms`.
   */
  update(
    entity: PayIntV1HcmEmploymentTerms<T>
  ): UpdateRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
    return new UpdateRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmEmploymentTerms`.
   * @param validTo Key property. See {@link PayIntV1HcmEmploymentTerms.validTo}.
   * @param agreementTermId Key property. See {@link PayIntV1HcmEmploymentTerms.agreementTermId}.
   * @param legalEntityId Key property. See {@link PayIntV1HcmEmploymentTerms.legalEntityId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmEmploymentTerms.personnelNumber}.
   * @param employmentStartDate Key property. See {@link PayIntV1HcmEmploymentTerms.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link PayIntV1HcmEmploymentTerms.employmentEndDate}.
   * @param validFrom Key property. See {@link PayIntV1HcmEmploymentTerms.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmEmploymentTerms`.
   */
  delete(
    validTo: Moment,
    agreementTermId: string,
    legalEntityId: string,
    personnelNumber: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    validFrom: Moment
  ): DeleteRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmEmploymentTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmEmploymentTerms` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmEmploymentTerms<T>
  ): DeleteRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>;
  delete(
    validToOrEntity: any,
    agreementTermId?: string,
    legalEntityId?: string,
    personnelNumber?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    validFrom?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T> {
    return new DeleteRequestBuilder<PayIntV1HcmEmploymentTerms<T>, T>(
      this.entityApi,
      validToOrEntity instanceof PayIntV1HcmEmploymentTerms
        ? validToOrEntity
        : {
            ValidTo: validToOrEntity!,
            AgreementTermId: agreementTermId!,
            LegalEntityId: legalEntityId!,
            PersonnelNumber: personnelNumber!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            ValidFrom: validFrom!
          }
    );
  }
}
