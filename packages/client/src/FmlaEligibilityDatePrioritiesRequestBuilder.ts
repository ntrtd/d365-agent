/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { FmlaEligibilityDatePriorities } from './FmlaEligibilityDatePriorities';
import { HcmFmlaPriorityCategory } from './HcmFmlaPriorityCategory';
import { HcmFmlaEligibilityPriorityDateType } from './HcmFmlaEligibilityPriorityDateType';

/**
 * Request builder class for operations supported on the {@link FmlaEligibilityDatePriorities} entity.
 */
export class FmlaEligibilityDatePrioritiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
  /**
   * Returns a request builder for querying all `FmlaEligibilityDatePriorities` entities.
   * @returns A request builder for creating requests to retrieve all `FmlaEligibilityDatePriorities` entities.
   */
  getAll(): GetAllRequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
    return new GetAllRequestBuilder<FmlaEligibilityDatePriorities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `FmlaEligibilityDatePriorities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FmlaEligibilityDatePriorities`.
   */
  create(
    entity: FmlaEligibilityDatePriorities<T>
  ): CreateRequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
    return new CreateRequestBuilder<FmlaEligibilityDatePriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `FmlaEligibilityDatePriorities` entity based on its keys.
   * @param dataAreaId Key property. See {@link FmlaEligibilityDatePriorities.dataAreaId}.
   * @param priority Key property. See {@link FmlaEligibilityDatePriorities.priority}.
   * @param priorityCategory Key property. See {@link FmlaEligibilityDatePriorities.priorityCategory}.
   * @param priorityDateType Key property. See {@link FmlaEligibilityDatePriorities.priorityDateType}.
   * @returns A request builder for creating requests to retrieve one `FmlaEligibilityDatePriorities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    priority: DeserializedType<T, 'Edm.Int32'>,
    priorityCategory: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmFMLAPriorityCategory'
    >,
    priorityDateType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.HcmFMLAEligibilityPriorityDateType'
    >
  ): GetByKeyRequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
    return new GetByKeyRequestBuilder<FmlaEligibilityDatePriorities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Priority: priority,
        PriorityCategory: priorityCategory,
        PriorityDateType: priorityDateType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `FmlaEligibilityDatePriorities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FmlaEligibilityDatePriorities`.
   */
  update(
    entity: FmlaEligibilityDatePriorities<T>
  ): UpdateRequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
    return new UpdateRequestBuilder<FmlaEligibilityDatePriorities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `FmlaEligibilityDatePriorities`.
   * @param dataAreaId Key property. See {@link FmlaEligibilityDatePriorities.dataAreaId}.
   * @param priority Key property. See {@link FmlaEligibilityDatePriorities.priority}.
   * @param priorityCategory Key property. See {@link FmlaEligibilityDatePriorities.priorityCategory}.
   * @param priorityDateType Key property. See {@link FmlaEligibilityDatePriorities.priorityDateType}.
   * @returns A request builder for creating requests that delete an entity of type `FmlaEligibilityDatePriorities`.
   */
  delete(
    dataAreaId: string,
    priority: number,
    priorityCategory: HcmFmlaPriorityCategory,
    priorityDateType: HcmFmlaEligibilityPriorityDateType
  ): DeleteRequestBuilder<FmlaEligibilityDatePriorities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `FmlaEligibilityDatePriorities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FmlaEligibilityDatePriorities` by taking the entity as a parameter.
   */
  delete(
    entity: FmlaEligibilityDatePriorities<T>
  ): DeleteRequestBuilder<FmlaEligibilityDatePriorities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    priority?: number,
    priorityCategory?: HcmFmlaPriorityCategory,
    priorityDateType?: HcmFmlaEligibilityPriorityDateType
  ): DeleteRequestBuilder<FmlaEligibilityDatePriorities<T>, T> {
    return new DeleteRequestBuilder<FmlaEligibilityDatePriorities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof FmlaEligibilityDatePriorities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Priority: priority!,
            PriorityCategory: priorityCategory!,
            PriorityDateType: priorityDateType!
          }
    );
  }
}
