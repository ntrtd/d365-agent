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
import { PeriodConfirmations } from './PeriodConfirmations';

/**
 * Request builder class for operations supported on the {@link PeriodConfirmations} entity.
 */
export class PeriodConfirmationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PeriodConfirmations<T>, T> {
  /**
   * Returns a request builder for querying all `PeriodConfirmations` entities.
   * @returns A request builder for creating requests to retrieve all `PeriodConfirmations` entities.
   */
  getAll(): GetAllRequestBuilder<PeriodConfirmations<T>, T> {
    return new GetAllRequestBuilder<PeriodConfirmations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PeriodConfirmations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PeriodConfirmations`.
   */
  create(
    entity: PeriodConfirmations<T>
  ): CreateRequestBuilder<PeriodConfirmations<T>, T> {
    return new CreateRequestBuilder<PeriodConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PeriodConfirmations` entity based on its keys.
   * @param dataAreaId Key property. See {@link PeriodConfirmations.dataAreaId}.
   * @param fromDate Key property. See {@link PeriodConfirmations.fromDate}.
   * @returns A request builder for creating requests to retrieve one `PeriodConfirmations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PeriodConfirmations<T>, T> {
    return new GetByKeyRequestBuilder<PeriodConfirmations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        FromDate: fromDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PeriodConfirmations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PeriodConfirmations`.
   */
  update(
    entity: PeriodConfirmations<T>
  ): UpdateRequestBuilder<PeriodConfirmations<T>, T> {
    return new UpdateRequestBuilder<PeriodConfirmations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PeriodConfirmations`.
   * @param dataAreaId Key property. See {@link PeriodConfirmations.dataAreaId}.
   * @param fromDate Key property. See {@link PeriodConfirmations.fromDate}.
   * @returns A request builder for creating requests that delete an entity of type `PeriodConfirmations`.
   */
  delete(
    dataAreaId: string,
    fromDate: Moment
  ): DeleteRequestBuilder<PeriodConfirmations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PeriodConfirmations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PeriodConfirmations` by taking the entity as a parameter.
   */
  delete(
    entity: PeriodConfirmations<T>
  ): DeleteRequestBuilder<PeriodConfirmations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    fromDate?: Moment
  ): DeleteRequestBuilder<PeriodConfirmations<T>, T> {
    return new DeleteRequestBuilder<PeriodConfirmations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PeriodConfirmations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            FromDate: fromDate!
          }
    );
  }
}
