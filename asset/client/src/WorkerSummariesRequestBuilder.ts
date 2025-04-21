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
import { WorkerSummaries } from './WorkerSummaries';

/**
 * Request builder class for operations supported on the {@link WorkerSummaries} entity.
 */
export class WorkerSummariesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<WorkerSummaries<T>, T> {
  /**
   * Returns a request builder for querying all `WorkerSummaries` entities.
   * @returns A request builder for creating requests to retrieve all `WorkerSummaries` entities.
   */
  getAll(): GetAllRequestBuilder<WorkerSummaries<T>, T> {
    return new GetAllRequestBuilder<WorkerSummaries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `WorkerSummaries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkerSummaries`.
   */
  create(
    entity: WorkerSummaries<T>
  ): CreateRequestBuilder<WorkerSummaries<T>, T> {
    return new CreateRequestBuilder<WorkerSummaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `WorkerSummaries` entity based on its keys.
   * @param personnelNumber Key property. See {@link WorkerSummaries.personnelNumber}.
   * @param validFrom Key property. See {@link WorkerSummaries.validFrom}.
   * @param validTo Key property. See {@link WorkerSummaries.validTo}.
   * @returns A request builder for creating requests to retrieve one `WorkerSummaries` entity based on its keys.
   */
  getByKey(
    personnelNumber: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<WorkerSummaries<T>, T> {
    return new GetByKeyRequestBuilder<WorkerSummaries<T>, T>(this.entityApi, {
      PersonnelNumber: personnelNumber,
      ValidFrom: validFrom,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `WorkerSummaries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkerSummaries`.
   */
  update(
    entity: WorkerSummaries<T>
  ): UpdateRequestBuilder<WorkerSummaries<T>, T> {
    return new UpdateRequestBuilder<WorkerSummaries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkerSummaries`.
   * @param personnelNumber Key property. See {@link WorkerSummaries.personnelNumber}.
   * @param validFrom Key property. See {@link WorkerSummaries.validFrom}.
   * @param validTo Key property. See {@link WorkerSummaries.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `WorkerSummaries`.
   */
  delete(
    personnelNumber: string,
    validFrom: Moment,
    validTo: Moment
  ): DeleteRequestBuilder<WorkerSummaries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `WorkerSummaries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkerSummaries` by taking the entity as a parameter.
   */
  delete(
    entity: WorkerSummaries<T>
  ): DeleteRequestBuilder<WorkerSummaries<T>, T>;
  delete(
    personnelNumberOrEntity: any,
    validFrom?: Moment,
    validTo?: Moment
  ): DeleteRequestBuilder<WorkerSummaries<T>, T> {
    return new DeleteRequestBuilder<WorkerSummaries<T>, T>(
      this.entityApi,
      personnelNumberOrEntity instanceof WorkerSummaries
        ? personnelNumberOrEntity
        : {
            PersonnelNumber: personnelNumberOrEntity!,
            ValidFrom: validFrom!,
            ValidTo: validTo!
          }
    );
  }
}
