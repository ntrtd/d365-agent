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
import { Employments } from './Employments';

/**
 * Request builder class for operations supported on the {@link Employments} entity.
 */
export class EmploymentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Employments<T>, T> {
  /**
   * Returns a request builder for querying all `Employments` entities.
   * @returns A request builder for creating requests to retrieve all `Employments` entities.
   */
  getAll(): GetAllRequestBuilder<Employments<T>, T> {
    return new GetAllRequestBuilder<Employments<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Employments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Employments`.
   */
  create(entity: Employments<T>): CreateRequestBuilder<Employments<T>, T> {
    return new CreateRequestBuilder<Employments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Employments` entity based on its keys.
   * @param personnelNumber Key property. See {@link Employments.personnelNumber}.
   * @param legalEntityId Key property. See {@link Employments.legalEntityId}.
   * @param employmentStartDate Key property. See {@link Employments.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Employments.employmentEndDate}.
   * @returns A request builder for creating requests to retrieve one `Employments` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Employments<T>, T> {
    return new GetByKeyRequestBuilder<Employments<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      LegalEntityId: legalEntityId,
      EmploymentStartDate: employmentStartDate,
      EmploymentEndDate: employmentEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Employments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Employments`.
   */
  update(entity: Employments<T>): UpdateRequestBuilder<Employments<T>, T> {
    return new UpdateRequestBuilder<Employments<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Employments`.
   * @param personnelNumber Key property. See {@link Employments.personnelNumber}.
   * @param legalEntityId Key property. See {@link Employments.legalEntityId}.
   * @param employmentStartDate Key property. See {@link Employments.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Employments.employmentEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `Employments`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment
  ): DeleteRequestBuilder<Employments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Employments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Employments` by taking the entity as a parameter.
   */
  delete(entity: Employments<T>): DeleteRequestBuilder<Employments<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment
  ): DeleteRequestBuilder<Employments<T>, T> {
    return new DeleteRequestBuilder<Employments<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof Employments
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            LegalEntityId: legalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!
          }
    );
  }
}
