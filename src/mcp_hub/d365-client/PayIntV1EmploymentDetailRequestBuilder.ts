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
import { PayIntV1EmploymentDetail } from './PayIntV1EmploymentDetail';

/**
 * Request builder class for operations supported on the {@link PayIntV1EmploymentDetail} entity.
 */
export class PayIntV1EmploymentDetailRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1EmploymentDetail<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1EmploymentDetail` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1EmploymentDetail` entities.
   */
  getAll(): GetAllRequestBuilder<PayIntV1EmploymentDetail<T>, T> {
    return new GetAllRequestBuilder<PayIntV1EmploymentDetail<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PayIntV1EmploymentDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1EmploymentDetail`.
   */
  create(
    entity: PayIntV1EmploymentDetail<T>
  ): CreateRequestBuilder<PayIntV1EmploymentDetail<T>, T> {
    return new CreateRequestBuilder<PayIntV1EmploymentDetail<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1EmploymentDetail` entity based on its keys.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentDetail.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentDetail.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayIntV1EmploymentDetail.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link PayIntV1EmploymentDetail.employmentEndDate}.
   * @param validFrom Key property. See {@link PayIntV1EmploymentDetail.validFrom}.
   * @param validTo Key property. See {@link PayIntV1EmploymentDetail.validTo}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1EmploymentDetail` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    employmentStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    employmentEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1EmploymentDetail<T>, T> {
    return new GetByKeyRequestBuilder<PayIntV1EmploymentDetail<T>, T>(
      this.entityApi,
      {
        PersonnelNumber: personnelNumber,
        LegalEntityId: legalEntityId,
        EmploymentStartDate: employmentStartDate,
        EmploymentEndDate: employmentEndDate,
        ValidFrom: validFrom,
        ValidTo: validTo
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1EmploymentDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1EmploymentDetail`.
   */
  update(
    entity: PayIntV1EmploymentDetail<T>
  ): UpdateRequestBuilder<PayIntV1EmploymentDetail<T>, T> {
    return new UpdateRequestBuilder<PayIntV1EmploymentDetail<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentDetail`.
   * @param personnelNumber Key property. See {@link PayIntV1EmploymentDetail.personnelNumber}.
   * @param legalEntityId Key property. See {@link PayIntV1EmploymentDetail.legalEntityId}.
   * @param employmentStartDate Key property. See {@link PayIntV1EmploymentDetail.employmentStartDate}.
   * @param employmentEndDate Key property. See {@link PayIntV1EmploymentDetail.employmentEndDate}.
   * @param validFrom Key property. See {@link PayIntV1EmploymentDetail.validFrom}.
   * @param validTo Key property. See {@link PayIntV1EmploymentDetail.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentDetail`.
   */
  delete(
    personnelNumber: string,
    legalEntityId: string,
    employmentStartDate: Moment,
    employmentEndDate: Moment,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<PayIntV1EmploymentDetail<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1EmploymentDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1EmploymentDetail` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1EmploymentDetail<T>
  ): DeleteRequestBuilder<PayIntV1EmploymentDetail<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    legalEntityId?: string,
    employmentStartDate?: Moment,
    employmentEndDate?: Moment,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<PayIntV1EmploymentDetail<T>, T> {
    return new DeleteRequestBuilder<PayIntV1EmploymentDetail<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof PayIntV1EmploymentDetail
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
