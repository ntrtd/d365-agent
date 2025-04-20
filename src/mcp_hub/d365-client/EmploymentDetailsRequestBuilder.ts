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
import { EmploymentDetails } from './EmploymentDetails';

/**
 * Request builder class for operations supported on the {@link EmploymentDetails} entity.
 */
export class EmploymentDetailsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EmploymentDetails<T>, T> {
  /**
   * Returns a request builder for querying all `EmploymentDetails` entities.
   * @returns A request builder for creating requests to retrieve all `EmploymentDetails` entities.
   */
  getAll(): GetAllRequestBuilder<EmploymentDetails<T>, T> {
    return new GetAllRequestBuilder<EmploymentDetails<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EmploymentDetails` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmploymentDetails`.
   */
  create(
    entity: EmploymentDetails<T>
  ): CreateRequestBuilder<EmploymentDetails<T>, T> {
    return new CreateRequestBuilder<EmploymentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EmploymentDetails` entity based on its keys.
   * @param personnelNumber Key property. See {@link EmploymentDetails.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentDetails.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentDetails.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentDetails.employmentEndDate}.
   * @param validFrom Key property. See {@link EmploymentDetails.validFrom}.
   * @param validTo Key property. See {@link EmploymentDetails.validTo}.
   * @returns A request builder for creating requests to retrieve one `EmploymentDetails` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EmploymentDetails<T>, T> {
    return new GetByKeyRequestBuilder<EmploymentDetails<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LegalEntityId: legalEntityId,
      EmploymentStartDate: employmentStartDate,
      EmploymentEndDate: employmentEndDate,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EmploymentDetails`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmploymentDetails`.
   */
  update(
    entity: EmploymentDetails<T>
  ): UpdateRequestBuilder<EmploymentDetails<T>, T> {
    return new UpdateRequestBuilder<EmploymentDetails<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EmploymentDetails`.
   * @param personnelNumber Key property. See {@link EmploymentDetails.personnelNumber}.
   * @param legalEntityId Key property. See {@link EmploymentDetails.legalEntityId}.
   * @param employmentStartDate Key property. See {@link EmploymentDetails.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link EmploymentDetails.employmentEndDate}.
   * @param validFrom Key property. See {@link EmploymentDetails.validFrom}.
   * @param validTo Key property. See {@link EmploymentDetails.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentDetails`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<EmploymentDetails<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EmploymentDetails`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmploymentDetails` by taking the entity as a parameter.
   */
  delete(
    entity: EmploymentDetails<T>
  ): DeleteRequestBuilder<EmploymentDetails<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<EmploymentDetails<T>, T> {
    return new DeleteRequestBuilder<EmploymentDetails<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof EmploymentDetails
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
