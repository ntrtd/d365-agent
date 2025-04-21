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
import { ProjectPeriods } from './ProjectPeriods';

/**
 * Request builder class for operations supported on the {@link ProjectPeriods} entity.
 */
export class ProjectPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjectPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `ProjectPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `ProjectPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<ProjectPeriods<T>, T> {
    return new GetAllRequestBuilder<ProjectPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProjectPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjectPeriods`.
   */
  create(
    entity: ProjectPeriods<T>
  ): CreateRequestBuilder<ProjectPeriods<T>, T> {
    return new CreateRequestBuilder<ProjectPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjectPeriods` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjectPeriods.dataAreaId}.
   * @param periodId Key property. See {@link ProjectPeriods.periodId}.
   * @returns A request builder for creating requests to retrieve one `ProjectPeriods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjectPeriods<T>, T> {
    return new GetByKeyRequestBuilder<ProjectPeriods<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PeriodId: periodId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProjectPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjectPeriods`.
   */
  update(
    entity: ProjectPeriods<T>
  ): UpdateRequestBuilder<ProjectPeriods<T>, T> {
    return new UpdateRequestBuilder<ProjectPeriods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjectPeriods`.
   * @param dataAreaId Key property. See {@link ProjectPeriods.dataAreaId}.
   * @param periodId Key property. See {@link ProjectPeriods.periodId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjectPeriods`.
   */
  delete(
    dataAreaId: string,
    periodId: string
  ): DeleteRequestBuilder<ProjectPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjectPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjectPeriods` by taking the entity as a parameter.
   */
  delete(entity: ProjectPeriods<T>): DeleteRequestBuilder<ProjectPeriods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string
  ): DeleteRequestBuilder<ProjectPeriods<T>, T> {
    return new DeleteRequestBuilder<ProjectPeriods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjectPeriods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!
          }
    );
  }
}
