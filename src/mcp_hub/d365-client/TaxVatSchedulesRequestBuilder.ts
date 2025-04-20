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
import { TaxVatSchedules } from './TaxVatSchedules';

/**
 * Request builder class for operations supported on the {@link TaxVatSchedules} entity.
 */
export class TaxVatSchedulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxVatSchedules<T>, T> {
  /**
   * Returns a request builder for querying all `TaxVatSchedules` entities.
   * @returns A request builder for creating requests to retrieve all `TaxVatSchedules` entities.
   */
  getAll(): GetAllRequestBuilder<TaxVatSchedules<T>, T> {
    return new GetAllRequestBuilder<TaxVatSchedules<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxVatSchedules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxVatSchedules`.
   */
  create(
    entity: TaxVatSchedules<T>
  ): CreateRequestBuilder<TaxVatSchedules<T>, T> {
    return new CreateRequestBuilder<TaxVatSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxVatSchedules` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxVatSchedules.dataAreaId}.
   * @param schedule Key property. See {@link TaxVatSchedules.schedule}.
   * @returns A request builder for creating requests to retrieve one `TaxVatSchedules` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    schedule: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxVatSchedules<T>, T> {
    return new GetByKeyRequestBuilder<TaxVatSchedules<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Schedule: schedule
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxVatSchedules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxVatSchedules`.
   */
  update(
    entity: TaxVatSchedules<T>
  ): UpdateRequestBuilder<TaxVatSchedules<T>, T> {
    return new UpdateRequestBuilder<TaxVatSchedules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxVatSchedules`.
   * @param dataAreaId Key property. See {@link TaxVatSchedules.dataAreaId}.
   * @param schedule Key property. See {@link TaxVatSchedules.schedule}.
   * @returns A request builder for creating requests that delete an entity of type `TaxVatSchedules`.
   */
  delete(
    dataAreaId: string,
    schedule: string
  ): DeleteRequestBuilder<TaxVatSchedules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxVatSchedules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxVatSchedules` by taking the entity as a parameter.
   */
  delete(
    entity: TaxVatSchedules<T>
  ): DeleteRequestBuilder<TaxVatSchedules<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    schedule?: string
  ): DeleteRequestBuilder<TaxVatSchedules<T>, T> {
    return new DeleteRequestBuilder<TaxVatSchedules<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxVatSchedules
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Schedule: schedule!
          }
    );
  }
}
