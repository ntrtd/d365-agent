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
import { EmploymentTerms } from './EmploymentTerms';

/**
 * Request builder class for operations supported on the {@link EmploymentTerms} entity.
 */
export class EmploymentTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentTerms<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentTerms` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentTerms` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentTerms<T>, T> {
    return new GetAllRequestBuilder<EmploymentTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentTerms`.
   */
  create(
    entity: EmploymentTerms<T>
  ): CreateRequestBuilder<EmploymentTerms<T>, T> {
    return new CreateRequestBuilder<EmploymentTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentTerms` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentTerms.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentTerms.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentTerms.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentTerms.employmentEndDate}.
   * @param agreementTermId Key property. See {@link EmploymentTerms.agreementTermId}.
   * @param validFrom Key property. See {@link EmploymentTerms.validFrom}.
   * @param validTo Key property. See {@link EmploymentTerms.validTo}.
   * @returns A request builder for creating requests to retrieve one `EmploymentTerms` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    agreementTermId: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentTerms<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentTerms<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LegalEntityId: legalEntityId,
      EmploymentStartDate: employmentStartDate,
      EmploymentEndDate: employmentEndDate,
      AgreementTermId: agreementTermId,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentTerms`.
   */
  update(
    entity: EmploymentTerms<T>
  ): UpdateRequestBuilder<EmploymentTerms<T>, T> {
    return new UpdateRequestBuilder<EmploymentTerms<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentTerms`.
   * @param personnelNumber Key property. See {@link EmploymentTerms.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentTerms.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentTerms.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentTerms.employmentEndDate}.
   * @param agreementTermId Key property. See {@link EmploymentTerms.agreementTermId}.
   * @param validFrom Key property. See {@link EmploymentTerms.validFrom}.
   * @param validTo Key property. See {@link EmploymentTerms.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentTerms`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    agreementTermId: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<EmploymentTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentTerms` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentTerms<T>
  ): DeleteRequestBuilder<EmploymentTerms<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    agreementTermId?: string,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<EmploymentTerms<T>, T> {
    return new DeleteRequestBuilder<EmploymentTerms<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentTerms
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            AgreementTermId: agreementTermId!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
