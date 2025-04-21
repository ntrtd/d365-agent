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
import { CompensationFixedIncreaseBudgets } from './CompensationFixedIncreaseBudgets';

/**
 * Request builder class for operations supported on the {@link CompensationFixedIncreaseBudgets} entity.
 */
export class CompensationFixedIncreaseBudgetsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationFixedIncreaseBudgets` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationFixedIncreaseBudgets` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
    return new GetAllRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationFixedIncreaseBudgets` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationFixedIncreaseBudgets`.
   */
  create(
    entity: CompensationFixedIncreaseBudgets<T>
  ): CreateRequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
    return new CreateRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationFixedIncreaseBudgets` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationFixedIncreaseBudgets.dataAreaId}.
   * @param departmentNumber Key property. See {@link CompensationFixedIncreaseBudgets.departmentNumber}.
   * @param effectiveDate Key property. See {@link CompensationFixedIncreaseBudgets.effectiveDate}.
   * @returns A request builder for creating requests to retrieve one `CompensationFixedIncreaseBudgets` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    departmentNumber: DeserializedType<T, 'Edm.String'>,
    effectiveDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
    return new GetByKeyRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DepartmentNumber: departmentNumber,
        EffectiveDate: effectiveDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationFixedIncreaseBudgets`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationFixedIncreaseBudgets`.
   */
  update(
    entity: CompensationFixedIncreaseBudgets<T>
  ): UpdateRequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
    return new UpdateRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationFixedIncreaseBudgets`.
   * @param dataAreaId Key property. See {@link CompensationFixedIncreaseBudgets.dataAreaId}.
   * @param departmentNumber Key property. See {@link CompensationFixedIncreaseBudgets.departmentNumber}.
   * @param effectiveDate Key property. See {@link CompensationFixedIncreaseBudgets.effectiveDate}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationFixedIncreaseBudgets`.
   */
  delete(
    dataAreaId: string,
    departmentNumber: string,
    effectiveDate: Moment
  ): DeleteRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationFixedIncreaseBudgets`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationFixedIncreaseBudgets` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationFixedIncreaseBudgets<T>
  ): DeleteRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    departmentNumber?: string,
    effectiveDate?: Moment
  ): DeleteRequestBuilder<CompensationFixedIncreaseBudgets<T>, T> {
    return new DeleteRequestBuilder<CompensationFixedIncreaseBudgets<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationFixedIncreaseBudgets
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DepartmentNumber: departmentNumber!,
            EffectiveDate: effectiveDate!
          }
    );
  }
}
