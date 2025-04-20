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
import { PerfPeriods } from './PerfPeriods';

/**
 * Request builder class for operations supported on the {@link PerfPeriods} entity.
 */
export class PerfPeriodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PerfPeriods<T>, T> {
  /**
   * Returns a request builder for querying all `PerfPeriods` entities.
   * @returns A request builder for creating requests to retrieve all `PerfPeriods` entities.
   */
  getAll(): GetAllRequestBuilder<PerfPeriods<T>, T> {
    return new GetAllRequestBuilder<PerfPeriods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PerfPeriods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PerfPeriods`.
   */
  create(entity: PerfPeriods<T>): CreateRequestBuilder<PerfPeriods<T>, T> {
    return new CreateRequestBuilder<PerfPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `PerfPeriods` entity based on its keys.
   * @param perfPeriodId Key property. See {@link PerfPeriods.perfPeriodId}.
   * @returns A request builder for creating requests to retrieve one `PerfPeriods` entity based on its keys.
   */
  getByKey(
    perfPeriodId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PerfPeriods<T>, T> {
    return new GetByKeyRequestBuilder<PerfPeriods<T>, T>(this.entityApi, {
      PerfPeriodId: perfPeriodId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `PerfPeriods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PerfPeriods`.
   */
  update(entity: PerfPeriods<T>): UpdateRequestBuilder<PerfPeriods<T>, T> {
    return new UpdateRequestBuilder<PerfPeriods<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PerfPeriods`.
   * @param perfPeriodId Key property. See {@link PerfPeriods.perfPeriodId}.
   * @returns A request builder for creating requests that delete an entity of type `PerfPeriods`.
   */
  delete(perfPeriodId: string): DeleteRequestBuilder<PerfPeriods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PerfPeriods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PerfPeriods` by taking the entity as a parameter.
   */
  delete(entity: PerfPeriods<T>): DeleteRequestBuilder<PerfPeriods<T>, T>;
  delete(perfPeriodIdOrEntity: any): DeleteRequestBuilder<PerfPeriods<T>, T> {
    return new DeleteRequestBuilder<PerfPeriods<T>, T>(
      this.entityApi,
      perfPeriodIdOrEntity instanceof PerfPeriods
        ? perfPeriodIdOrEntity
        : { PerfPeriodId: perfPeriodIdOrEntity! }
    );
  }
}
