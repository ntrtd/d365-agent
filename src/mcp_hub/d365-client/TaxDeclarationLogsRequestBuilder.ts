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
import { TaxDeclarationLogs } from './TaxDeclarationLogs';

/**
 * Request builder class for operations supported on the {@link TaxDeclarationLogs} entity.
 */
export class TaxDeclarationLogsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxDeclarationLogs<T>, T> {
  /**
   * Returns a request builder for querying all `TaxDeclarationLogs` entities.
   * @returns A request builder for creating requests to retrieve all `TaxDeclarationLogs` entities.
   */
  getAll(): GetAllRequestBuilder<TaxDeclarationLogs<T>, T> {
    return new GetAllRequestBuilder<TaxDeclarationLogs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxDeclarationLogs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxDeclarationLogs`.
   */
  create(
    entity: TaxDeclarationLogs<T>
  ): CreateRequestBuilder<TaxDeclarationLogs<T>, T> {
    return new CreateRequestBuilder<TaxDeclarationLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxDeclarationLogs` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxDeclarationLogs.dataAreaId}.
   * @param periodValue Key property. See {@link TaxDeclarationLogs.periodValue}.
   * @param periodYear Key property. See {@link TaxDeclarationLogs.periodYear}.
   * @param executionDate Key property. See {@link TaxDeclarationLogs.executionDate}.
   * @returns A request builder for creating requests to retrieve one `TaxDeclarationLogs` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    periodValue: DeserializedType<T, 'Edm.String'>,
    periodYear: DeserializedType<T, 'Edm.String'>,
    executionDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<TaxDeclarationLogs<T>, T> {
    return new GetByKeyRequestBuilder<TaxDeclarationLogs<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        PeriodValue: periodValue,
        PeriodYear: periodYear,
        ExecutionDate: executionDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxDeclarationLogs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxDeclarationLogs`.
   */
  update(
    entity: TaxDeclarationLogs<T>
  ): UpdateRequestBuilder<TaxDeclarationLogs<T>, T> {
    return new UpdateRequestBuilder<TaxDeclarationLogs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationLogs`.
   * @param dataAreaId Key property. See {@link TaxDeclarationLogs.dataAreaId}.
   * @param periodValue Key property. See {@link TaxDeclarationLogs.periodValue}.
   * @param periodYear Key property. See {@link TaxDeclarationLogs.periodYear}.
   * @param executionDate Key property. See {@link TaxDeclarationLogs.executionDate}.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationLogs`.
   */
  delete(
    dataAreaId: string,
    periodValue: string,
    periodYear: string,
    executionDate: Moment
  ): DeleteRequestBuilder<TaxDeclarationLogs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxDeclarationLogs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxDeclarationLogs` by taking the entity as a parameter.
   */
  delete(
    entity: TaxDeclarationLogs<T>
  ): DeleteRequestBuilder<TaxDeclarationLogs<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    periodValue?: string,
    periodYear?: string,
    executionDate?: Moment
  ): DeleteRequestBuilder<TaxDeclarationLogs<T>, T> {
    return new DeleteRequestBuilder<TaxDeclarationLogs<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxDeclarationLogs
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PeriodValue: periodValue!,
            PeriodYear: periodYear!,
            ExecutionDate: executionDate!
          }
    );
  }
}
