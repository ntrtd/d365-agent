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
import { CountingJournals } from './CountingJournals';

/**
 * Request builder class for operations supported on the {@link CountingJournals} entity.
 */
export class CountingJournalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CountingJournals<T>, T> {
  /**
   * Returns a request builder for querying all `CountingJournals` entities.
   * @returns A request builder for creating requests to retrieve all `CountingJournals` entities.
   */
  getAll(): GetAllRequestBuilder<CountingJournals<T>, T> {
    return new GetAllRequestBuilder<CountingJournals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CountingJournals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CountingJournals`.
   */
  create(
    entity: CountingJournals<T>
  ): CreateRequestBuilder<CountingJournals<T>, T> {
    return new CreateRequestBuilder<CountingJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CountingJournals` entity based on its keys.
   * @param dataAreaId Key property. See {@link CountingJournals.dataAreaId}.
   * @param countingStartDate Key property. See {@link CountingJournals.countingStartDate}.
   * @returns A request builder for creating requests to retrieve one `CountingJournals` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    countingStartDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CountingJournals<T>, T> {
    return new GetByKeyRequestBuilder<CountingJournals<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      CountingStartDate: countingStartDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CountingJournals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CountingJournals`.
   */
  update(
    entity: CountingJournals<T>
  ): UpdateRequestBuilder<CountingJournals<T>, T> {
    return new UpdateRequestBuilder<CountingJournals<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CountingJournals`.
   * @param dataAreaId Key property. See {@link CountingJournals.dataAreaId}.
   * @param countingStartDate Key property. See {@link CountingJournals.countingStartDate}.
   * @returns A request builder for creating requests that delete an entity of type `CountingJournals`.
   */
  delete(
    dataAreaId: string,
    countingStartDate: Moment
  ): DeleteRequestBuilder<CountingJournals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CountingJournals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CountingJournals` by taking the entity as a parameter.
   */
  delete(
    entity: CountingJournals<T>
  ): DeleteRequestBuilder<CountingJournals<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    countingStartDate?: Moment
  ): DeleteRequestBuilder<CountingJournals<T>, T> {
    return new DeleteRequestBuilder<CountingJournals<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CountingJournals
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CountingStartDate: countingStartDate!
          }
    );
  }
}
