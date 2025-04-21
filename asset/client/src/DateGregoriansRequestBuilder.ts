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
import { DateGregorians } from './DateGregorians';

/**
 * Request builder class for operations supported on the {@link DateGregorians} entity.
 */
export class DateGregoriansRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DateGregorians<T>, T> {
  /**
   * Returns a request builder for querying all `DateGregorians` entities.
   * @returns A request builder for creating requests to retrieve all `DateGregorians` entities.
   */
  getAll(): GetAllRequestBuilder<DateGregorians<T>, T> {
    return new GetAllRequestBuilder<DateGregorians<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DateGregorians` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DateGregorians`.
   */
  create(
    entity: DateGregorians<T>
  ): CreateRequestBuilder<DateGregorians<T>, T> {
    return new CreateRequestBuilder<DateGregorians<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DateGregorians` entity based on its keys.
   * @param gregorianDate Key property. See {@link DateGregorians.gregorianDate}.
   * @returns A request builder for creating requests to retrieve one `DateGregorians` entity based on its keys.
   */
  getByKey(
    gregorianDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<DateGregorians<T>, T> {
    return new GetByKeyRequestBuilder<DateGregorians<T>, T>(this.entityApi, {
      GregorianDate: gregorianDate
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DateGregorians`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DateGregorians`.
   */
  update(
    entity: DateGregorians<T>
  ): UpdateRequestBuilder<DateGregorians<T>, T> {
    return new UpdateRequestBuilder<DateGregorians<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DateGregorians`.
   * @param gregorianDate Key property. See {@link DateGregorians.gregorianDate}.
   * @returns A request builder for creating requests that delete an entity of type `DateGregorians`.
   */
  delete(gregorianDate: Moment): DeleteRequestBuilder<DateGregorians<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DateGregorians`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DateGregorians` by taking the entity as a parameter.
   */
  delete(entity: DateGregorians<T>): DeleteRequestBuilder<DateGregorians<T>, T>;
  delete(
    gregorianDateOrEntity: any
  ): DeleteRequestBuilder<DateGregorians<T>, T> {
    return new DeleteRequestBuilder<DateGregorians<T>, T>(
      this.entityApi,
      gregorianDateOrEntity instanceof DateGregorians
        ? gregorianDateOrEntity
        : { GregorianDate: gregorianDateOrEntity! }
    );
  }
}
