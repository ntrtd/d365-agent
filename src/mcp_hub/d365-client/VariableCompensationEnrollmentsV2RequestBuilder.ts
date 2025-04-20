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
import { VariableCompensationEnrollmentsV2 } from './VariableCompensationEnrollmentsV2';

/**
 * Request builder class for operations supported on the {@link VariableCompensationEnrollmentsV2} entity.
 */
export class VariableCompensationEnrollmentsV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
  /**
   * Returns a request builder for querying all `VariableCompensationEnrollmentsV2` entities.
   * @returns A request builder for creating requests to retrieve all `VariableCompensationEnrollmentsV2` entities.
   */
  getAll(): GetAllRequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
    return new GetAllRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VariableCompensationEnrollmentsV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VariableCompensationEnrollmentsV2`.
   */
  create(
    entity: VariableCompensationEnrollmentsV2<T>
  ): CreateRequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
    return new CreateRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VariableCompensationEnrollmentsV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollmentsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollmentsV2.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollmentsV2.plan}.
   * @param effectiveDate Key property. See {@link VariableCompensationEnrollmentsV2.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `VariableCompensationEnrollmentsV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    plan: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
    return new GetByKeyRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>(
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
   * Returns a request builder for updating an entity of type `VariableCompensationEnrollmentsV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VariableCompensationEnrollmentsV2`.
   */
  update(
    entity: VariableCompensationEnrollmentsV2<T>
  ): UpdateRequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
    return new UpdateRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollmentsV2`.
   * @param dataAreaId Key property. See {@link VariableCompensationEnrollmentsV2.dataAreaId}.
   * @param personnelNumber Key property. See {@link VariableCompensationEnrollmentsV2.personnelNumber}.
   * @param plan Key property. See {@link VariableCompensationEnrollmentsV2.plan}.
   * @param effectiveDate Key property. See {@link VariableCompensationEnrollmentsV2.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollmentsV2`.
   */
  delete(
    dataAreaId: string,
    personnelNumber: string,
    plan: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VariableCompensationEnrollmentsV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VariableCompensationEnrollmentsV2` by taking the entity as a parameter.
   */
  delete(
    entity: VariableCompensationEnrollmentsV2<T>
  ): DeleteRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    personnelNumber?: string,
    plan?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<VariableCompensationEnrollmentsV2<T>, T> {
    return new DeleteRequestBuilder<VariableCompensationEnrollmentsV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VariableCompensationEnrollmentsV2
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
