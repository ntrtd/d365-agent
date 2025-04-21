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
import { VariableCompensationEnrollments } from './VariableCompensationEnrollments';

/**
 * Request builder class for operations supported on the {@link VariableCompensationEnrollments} entity.
 */
export class VariableCompensationEnrollmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VariableCompensationEnrollments<T>, T> {
  /**
   * Returns a request builder for querying all `VariableCompensationEnrollments` entities.
   * @returns A request builder for creating requests to retrieve all `VariableCompensationEnrollments` entities.
   */
  getAll(): GetAllRequestBuilder<VariableCompensationEnrollments<T>, T> {
    return new GetAllRequestBuilder<VariableCompensationEnrollments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VariableCompensationEnrollments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VariableCompensationEnrollments`.
   */
  create(
    entity: VariableCompensationEnrollments<T>
  ): CreateRequestBuilder<VariableCompensationEnrollments<T>, T> {
    return new CreateRequestBuilder<VariableCompensationEnrollments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VariableCompensationEnrollments` entity based on its keys.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollments.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollments.plan}.
   * @param effectiveDate Key property. See {@link VariableCompensationEnrollments.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `VariableCompensationEnrollments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<VariableCompensationEnrollments<T>, T> {
    return new GetByKeyRequestBuilder<VariableCompensationEnrollments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PersonnelNumber: personnelNumber,
        Plan: plan,
        EffectiveDate: effectiveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VariableCompensationEnrollments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VariableCompensationEnrollments`.
   */
  update(
    entity: VariableCompensationEnrollments<T>
  ): UpdateRequestBuilder<VariableCompensationEnrollments<T>, T> {
    return new UpdateRequestBuilder<VariableCompensationEnrollments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollments`.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollments.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollments.plan}.
   * @param effectiveDate Key property. See {@link VariableCompensationEnrollments.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollments`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    plan: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<VariableCompensationEnrollments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollments` by taking the entity as a parameter.
   */
  delete(
    entity: VariableCompensationEnrollments<T>
  ): DeleteRequestBuilder<VariableCompensationEnrollments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    plan?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<VariableCompensationEnrollments<T>, T> {
    return new DeleteRequestBuilder<VariableCompensationEnrollments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VariableCompensationEnrollments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PersonnelNumber: personnelNumber!,
            Plan: plan!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
