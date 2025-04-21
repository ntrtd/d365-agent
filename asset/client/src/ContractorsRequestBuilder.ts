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
import { Contractors } from './Contractors';

/**
 * Request builder class for operations supported on the {@link Contractors} entity.
 */
export class ContractorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Contractors<T>, T> {
  /**
   * Returns a request builder for querying all `Contractors` entities.
   * @returns A request builder for creating requests to retrieve all `Contractors` entities.
   */
  getAll(): GetAllRequestBuilder<Contractors<T>, T> {
    return new GetAllRequestBuilder<Contractors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Contractors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Contractors`.
   */
  create(entity: Contractors<T>): CreateRequestBuilder<Contractors<T>, T> {
    return new CreateRequestBuilder<Contractors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Contractors` entity based on its keys.
   * @param personnelNumber Key property. See {@link Contractors.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link Contractors.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link Contractors.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Contractors.employmentEndDate}.
   * @returns A request builder for creating requests to retrieve one `Contractors` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    employmentLegalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<Contractors<T>, T> {
    return new GetByKeyRequestBuilder<Contractors<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      EmploymentLegalEntityId: employmentLegalEntityId,
      EmploymentStartDate: employmentStartDate,
      EmploymentEndDate: employmentEndDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Contractors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Contractors`.
   */
  update(entity: Contractors<T>): UpdateRequestBuilder<Contractors<T>, T> {
    return new UpdateRequestBuilder<Contractors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Contractors`.
   * @param personnelNumber Key property. See {@link Contractors.personnelNumber}.
   * @param employmentLegalEntityId Key property. See {@link Contractors.employmentLegalEntityId}.
   * @param employmentStartDate Key property. See {@link Contractors.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link Contractors.employmentEndDate}.
   * @returns A request builder for creating requests that delete an entity of type `Contractors`.
   */
  delete(
    personnelNumber: string,
    employmentLegalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment
  ): DeleteRequestBuilder<Contractors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Contractors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Contractors` by taking the entity as a parameter.
   */
  delete(entity: Contractors<T>): DeleteRequestBuilder<Contractors<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    employmentLegalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment
  ): DeleteRequestBuilder<Contractors<T>, T> {
    return new DeleteRequestBuilder<Contractors<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof Contractors
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            EmploymentLegalEntityId: employmentLegalEntityId!,
            EmploymentStartDate: employmentStartDate!,
            EmploymentEndDate: employmentEndDate!
          }
    );
  }
}
