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
import { ProjectItemForecasts } from './ProjectItemForecasts';
import { BudgetAllocateMethod } from './BudgetAllocateMethod';
import { PeriodUnit } from './PeriodUnit';

/**
 * Request builder class for operations supported on the {@link ProjectItemForecasts} entity.
 */
export class ProjectItemForecastsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectItemForecasts<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectItemForecasts` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectItemForecasts` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectItemForecasts<T>, T> {
    return new GetAllRequestBuilder<ProjectItemForecasts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectItemForecasts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectItemForecasts`.
   */
  create(
    entity: ProjectItemForecasts<T>
  ): CreateRequestBuilder<ProjectItemForecasts<T>, T> {
    return new CreateRequestBuilder<ProjectItemForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectItemForecasts` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectItemForecasts.dataAreaId}.
   * @param allocateMethod Key property. See {@link ProjectItemForecasts.allocateMethod}.
   * @param endDate Key property. See {@link ProjectItemForecasts.endDate}.
   * @param periods Key property. See {@link ProjectItemForecasts.periods}.
   * @param unit Key property. See {@link ProjectItemForecasts.unit}.
   * @param periodKeyId Key property. See {@link ProjectItemForecasts.periodKeyId}.
   * @param projectTransactionId Key property. See {@link ProjectItemForecasts.projectTransactionId}.
   * @returns A request builder for creating requests to retrieve one `ProjectItemForecasts` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    allocateMethod: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetAllocateMethod'
    >,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periods: DeserializedType<T, 'Edm.Int32'>,
    unit: DeserializedType<T, 'Microsoft.Dynamics.DataEntities.PeriodUnit'>,
    periodKeyId: DeserializedType<T, 'Edm.String'>,
    projectTransactionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectItemForecasts<T>, T> {
    return new GetByKeyRequestBuilder<ProjectItemForecasts<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AllocateMethod: allocateMethod,
        EndDate: endDate,
        Periods: periods,
        Unit: unit,
        PeriodKeyId: periodKeyId,
        ProjectTransactionId: projectTransactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectItemForecasts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectItemForecasts`.
   */
  update(
    entity: ProjectItemForecasts<T>
  ): UpdateRequestBuilder<ProjectItemForecasts<T>, T> {
    return new UpdateRequestBuilder<ProjectItemForecasts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectItemForecasts`.
   * @param dataAreaId Key property. See {@link ProjectItemForecasts.dataAreaId}.
   * @param allocateMethod Key property. See {@link ProjectItemForecasts.allocateMethod}.
   * @param endDate Key property. See {@link ProjectItemForecasts.endDate}.
   * @param periods Key property. See {@link ProjectItemForecasts.periods}.
   * @param unit Key property. See {@link ProjectItemForecasts.unit}.
   * @param periodKeyId Key property. See {@link ProjectItemForecasts.periodKeyId}.
   * @param projectTransactionId Key property. See {@link ProjectItemForecasts.projectTransactionId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemForecasts`.
   */
  delete(
    dataAreaId: string,
    allocateMethod: BudgetAllocateMethod,
    endDate: Moment,
    periods: number,
    unit: PeriodUnit,
    periodKeyId: string,
    projectTransactionId: string
  ): DeleteRequestBuilder<ProjectItemForecasts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectItemForecasts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectItemForecasts` by taking the entity as a parameter.
   */
  delete(
    entity: ProjectItemForecasts<T>
  ): DeleteRequestBuilder<ProjectItemForecasts<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    allocateMethod?: BudgetAllocateMethod,
    endDate?: Moment,
    periods?: number,
    unit?: PeriodUnit,
    periodKeyId?: string,
    projectTransactionId?: string
  ): DeleteRequestBuilder<ProjectItemForecasts<T>, T> {
    return new DeleteRequestBuilder<ProjectItemForecasts<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectItemForecasts
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AllocateMethod: allocateMethod!,
            EndDate: endDate!,
            Periods: periods!,
            Unit: unit!,
            PeriodKeyId: periodKeyId!,
            ProjectTransactionId: projectTransactionId!
          }
    );
  }
}
