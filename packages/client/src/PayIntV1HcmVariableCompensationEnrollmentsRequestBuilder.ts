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
import { PayIntV1HcmVariableCompensationEnrollments } from './PayIntV1HcmVariableCompensationEnrollments';

/**
 * Request builder class for operations supported on the {@link PayIntV1HcmVariableCompensationEnrollments} entity.
 */
export class PayIntV1HcmVariableCompensationEnrollmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T> {
  /**
   * Returns a request builder for querying all `PayIntV1HcmVariableCompensationEnrollments` entities.
   * @returns A request builder for creating requests to retrieve all `PayIntV1HcmVariableCompensationEnrollments` entities.
   */
  getAll(): GetAllRequestBuilder<
    PayIntV1HcmVariableCompensationEnrollments<T>,
    T
  > {
    return new GetAllRequestBuilder<
      PayIntV1HcmVariableCompensationEnrollments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PayIntV1HcmVariableCompensationEnrollments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   */
  create(
    entity: PayIntV1HcmVariableCompensationEnrollments<T>
  ): CreateRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T> {
    return new CreateRequestBuilder<
      PayIntV1HcmVariableCompensationEnrollments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PayIntV1HcmVariableCompensationEnrollments` entity based on its keys.
   * @param dataAreaId Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.personnelNumber}.
   * @param plan Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.plan}.
   * @param effectiveDate Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `PayIntV1HcmVariableCompensationEnrollments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T> {
    return new GetByKeyRequestBuilder<
      PayIntV1HcmVariableCompensationEnrollments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      PersonnelNumber: personnelNumber,
      Plan: plan,
      EffectiveDate: effectiveDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   */
  update(
    entity: PayIntV1HcmVariableCompensationEnrollments<T>
  ): UpdateRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T> {
    return new UpdateRequestBuilder<
      PayIntV1HcmVariableCompensationEnrollments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   * @param dataAreaId Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.dataAreaId}.
   * @param personnelNumber Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.personnelNumber}.
   * @param plan Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.plan}.
   * @param effectiveDate Key property. See {@link PayIntV1HcmVariableCompensationEnrollments.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    plan: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PayIntV1HcmVariableCompensationEnrollments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayIntV1HcmVariableCompensationEnrollments` by taking the entity as a parameter.
   */
  delete(
    entity: PayIntV1HcmVariableCompensationEnrollments<T>
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    plan?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<PayIntV1HcmVariableCompensationEnrollments<T>, T> {
    return new DeleteRequestBuilder<
      PayIntV1HcmVariableCompensationEnrollments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof PayIntV1HcmVariableCompensationEnrollments
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
