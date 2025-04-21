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
import { PeriodLines } from './PeriodLines';

/**
 * Request builder class for operations supported on the {@link PeriodLines} entity.
 */
export class PeriodLinesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodLines<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodLines` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodLines` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodLines<T>, T> {
    return new GetAllRequestBuilder<PeriodLines<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PeriodLines` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodLines`.
   */
  create(entity: PeriodLines<T>): CreateRequestBuilder<PeriodLines<T>, T> {
    return new CreateRequestBuilder<PeriodLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PeriodLines` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodLines.dataAreaId}.
   * @param periodId Key property. See {@link PeriodLines.periodId}.
   * @param periodFrom Key property. See {@link PeriodLines.periodFrom}.
   * @param periodTo Key property. See {@link PeriodLines.periodTo}.
   * @returns A request builder for creating requests to retrieve one `PeriodLines` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodId: DeserializedType<T, 'Edm.String'>,
    periodFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    periodTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PeriodLines<T>, T> {
    return new GetByKeyRequestBuilder<PeriodLines<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PeriodId: periodId,
      PeriodFrom: periodFrom,
      PeriodTo: periodTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodLines`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodLines`.
   */
  update(entity: PeriodLines<T>): UpdateRequestBuilder<PeriodLines<T>, T> {
    return new UpdateRequestBuilder<PeriodLines<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodLines`.
   * @param dataAreaId Key property. See {@link PeriodLines.dataAreaId}.
   * @param periodId Key property. See {@link PeriodLines.periodId}.
   * @param periodFrom Key property. See {@link PeriodLines.periodFrom}.
   * @param periodTo Key property. See {@link PeriodLines.periodTo}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodLines`.
   */
  delete(
    dataAreaId: string,
    periodId: string,
    periodFrom: Moment,
    periodTo: Moment
  ): DeleteRequestBuilder<PeriodLines<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodLines`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodLines` by taking the entity as a parameter.
   */
  delete(entity: PeriodLines<T>): DeleteRequestBuilder<PeriodLines<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodId?: string,
    periodFrom?: Moment,
    periodTo?: Moment
  ): DeleteRequestBuilder<PeriodLines<T>, T> {
    return new DeleteRequestBuilder<PeriodLines<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodLines
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodId: periodId!,
            PeriodFrom: periodFrom!,
            PeriodTo: periodTo!
          }
    );
  }
}
