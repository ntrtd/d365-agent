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
import { ProjPeriodEmplEntity_DataEntities } from './ProjPeriodEmplEntity_DataEntities';

/**
 * Request builder class for operations supported on the {@link ProjPeriodEmplEntity_DataEntities} entity.
 */
export class ProjPeriodEmplEntity_DataEntitiesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
  /**
   * Returns a request builder for querying all `ProjPeriodEmplEntity_DataEntities` entities.
   * @returns A request builder for creating requests to retrieve all `ProjPeriodEmplEntity_DataEntities` entities.
   */
  getAll(): GetAllRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
    return new GetAllRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjPeriodEmplEntity_DataEntities` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjPeriodEmplEntity_DataEntities`.
   */
  create(
    entity: ProjPeriodEmplEntity_DataEntities<T>
  ): CreateRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
    return new CreateRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjPeriodEmplEntity_DataEntities` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjPeriodEmplEntity_DataEntities.dataAreaId}.
   * @param periodId Key property. See {@link ProjPeriodEmplEntity_DataEntities.periodId}.
   * @param periodFrom Key property. See {@link ProjPeriodEmplEntity_DataEntities.periodFrom}.
   * @returns A request builder for creating requests to retrieve one `ProjPeriodEmplEntity_DataEntities` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
    return new GetByKeyRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodId: periodId,
        PeriodFrom: periodFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjPeriodEmplEntity_DataEntities`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjPeriodEmplEntity_DataEntities`.
   */
  update(
    entity: ProjPeriodEmplEntity_DataEntities<T>
  ): UpdateRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
    return new UpdateRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjPeriodEmplEntity_DataEntities`.
   * @param dataAreaId Key property. See {@link ProjPeriodEmplEntity_DataEntities.dataAreaId}.
   * @param periodId Key property. See {@link ProjPeriodEmplEntity_DataEntities.periodId}.
   * @param periodFrom Key property. See {@link ProjPeriodEmplEntity_DataEntities.periodFrom}.
   * @returns A request builder for creating requests that delete an entity of type `ProjPeriodEmplEntity_DataEntities`.
   */
  delete(
    dataAreaId: string,
    periodId: string,
    periodFrom: Moment
  ): DeleteRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjPeriodEmplEntity_DataEntities`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjPeriodEmplEntity_DataEntities` by taking the entity as a parameter.
   */
  delete(
    entity: ProjPeriodEmplEntity_DataEntities<T>
  ): DeleteRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string,
    periodFrom?: Moment
  ): DeleteRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T> {
    return new DeleteRequestBuilder<ProjPeriodEmplEntity_DataEntities<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjPeriodEmplEntity_DataEntities
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!,
            PeriodFrom: periodFrom!
          }
    );
  }
}
