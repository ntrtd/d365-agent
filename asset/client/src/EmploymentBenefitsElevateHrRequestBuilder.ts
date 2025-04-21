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
import { EmploymentBenefitsElevateHr } from './EmploymentBenefitsElevateHr';

/**
 * Request builder class for operations supported on the {@link EmploymentBenefitsElevateHr} entity.
 */
export class EmploymentBenefitsElevateHrRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentBenefitsElevateHr` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentBenefitsElevateHr` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
    return new GetAllRequestBuilder<EmploymentBenefitsElevateHr<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EmploymentBenefitsElevateHr` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentBenefitsElevateHr`.
   */
  create(
    entity: EmploymentBenefitsElevateHr<T>
  ): CreateRequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
    return new CreateRequestBuilder<EmploymentBenefitsElevateHr<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentBenefitsElevateHr` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentBenefitsElevateHr.personnelNumber}.
   * @param legalEntity Key property. See {@link EmploymentBenefitsElevateHr.legalEntity}.
   * @param employmentValidFrom Key property. See {@link EmploymentBenefitsElevateHr.employmentValidFrom}.
   * @param employmentValidTo Key property. See {@link EmploymentBenefitsElevateHr.employmentValidTo}.
   * @param validFrom Key property. See {@link EmploymentBenefitsElevateHr.validFrom}.
   * @param validTo Key property. See {@link EmploymentBenefitsElevateHr.validTo}.
   * @returns A request builder for creating requests to retrieve one `EmploymentBenefitsElevateHr` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntity: DeserializedType<T, 'Edm.String'>,
    employmentValidFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentValidTo: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentBenefitsElevateHr<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntity: legalEntity,
        Employment_ValidFrom: employmentValidFrom,
        Employment_ValidTo: employmentValidTo,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentBenefitsElevateHr`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentBenefitsElevateHr`.
   */
  update(
    entity: EmploymentBenefitsElevateHr<T>
  ): UpdateRequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
    return new UpdateRequestBuilder<EmploymentBenefitsElevateHr<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentBenefitsElevateHr`.
   * @param personnelNumber Key property. See {@link EmploymentBenefitsElevateHr.personnelNumber}.
   * @param legalEntity Key property. See {@link EmploymentBenefitsElevateHr.legalEntity}.
   * @param employmentValidFrom Key property. See {@link EmploymentBenefitsElevateHr.employmentValidFrom}.
   * @param employmentValidTo Key property. See {@link EmploymentBenefitsElevateHr.employmentValidTo}.
   * @param validFrom Key property. See {@link EmploymentBenefitsElevateHr.validFrom}.
   * @param validTo Key property. See {@link EmploymentBenefitsElevateHr.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentBenefitsElevateHr`.
   */
  delete(
    personnelNumber: string,
    legalEntity: string,
    employmentValidFrom: Moment,
    employmentValidTo: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<EmploymentBenefitsElevateHr<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentBenefitsElevateHr`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentBenefitsElevateHr` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentBenefitsElevateHr<T>
  ): DeleteRequestBuilder<EmploymentBenefitsElevateHr<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntity?: string,
    employmentValidFrom?: Moment,
    employmentValidTo?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<EmploymentBenefitsElevateHr<T>, T> {
    return new DeleteRequestBuilder<EmploymentBenefitsElevateHr<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentBenefitsElevateHr
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntity: legalEntity!,
            Employment_ValidFrom: employmentValidFrom!,
            Employment_ValidTo: employmentValidTo!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
