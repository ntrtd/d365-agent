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
import { EssLoaRequestDetailApprovers } from './EssLoaRequestDetailApprovers';

/**
 * Request builder class for operations supported on the {@link EssLoaRequestDetailApprovers} entity.
 */
export class EssLoaRequestDetailApproversRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
  /**
   * Returns a request builder for querying all `EssLoaRequestDetailApprovers` entities.
   * @returns A request builder for creating requests to retrieve all `EssLoaRequestDetailApprovers` entities.
   */
  getAll(): GetAllRequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
    return new GetAllRequestBuilder<EssLoaRequestDetailApprovers<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EssLoaRequestDetailApprovers` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EssLoaRequestDetailApprovers`.
   */
  create(
    entity: EssLoaRequestDetailApprovers<T>
  ): CreateRequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
    return new CreateRequestBuilder<EssLoaRequestDetailApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EssLoaRequestDetailApprovers` entity based on its keys.
   * @param requestId Key property. See {@link EssLoaRequestDetailApprovers.requestId}.
   * @param startDate Key property. See {@link EssLoaRequestDetailApprovers.startDate}.
   * @param endDate Key property. See {@link EssLoaRequestDetailApprovers.endDate}.
   * @returns A request builder for creating requests to retrieve one `EssLoaRequestDetailApprovers` entity based on its keys.
   */
  getByKey(
    requestId: DeserializedType<T, 'Edm.String'>,
    startDate: DeserializedType<T, 'Edm.DateTimeOffset'>,
    endDate: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
    return new GetByKeyRequestBuilder<EssLoaRequestDetailApprovers<T>, T>(
      this.entityApi,
      {
        RequestId: requestId,
        StartDate: startDate,
        EndDate: endDate
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EssLoaRequestDetailApprovers`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EssLoaRequestDetailApprovers`.
   */
  update(
    entity: EssLoaRequestDetailApprovers<T>
  ): UpdateRequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
    return new UpdateRequestBuilder<EssLoaRequestDetailApprovers<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EssLoaRequestDetailApprovers`.
   * @param requestId Key property. See {@link EssLoaRequestDetailApprovers.requestId}.
   * @param startDate Key property. See {@link EssLoaRequestDetailApprovers.startDate}.
   * @param endDate Key property. See {@link EssLoaRequestDetailApprovers.endDate}.
   * @returns A request builder for creating requests that delete an entity of type `EssLoaRequestDetailApprovers`.
   */
  delete(
    requestId: string,
    startDate: Moment,
    endDate: Moment
  ): DeleteRequestBuilder<EssLoaRequestDetailApprovers<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EssLoaRequestDetailApprovers`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EssLoaRequestDetailApprovers` by taking the entity as a parameter.
   */
  delete(
    entity: EssLoaRequestDetailApprovers<T>
  ): DeleteRequestBuilder<EssLoaRequestDetailApprovers<T>, T>;
  delete(
    requestIdOrEntity: any,
    startDate?: Moment,
    endDate?: Moment
  ): DeleteRequestBuilder<EssLoaRequestDetailApprovers<T>, T> {
    return new DeleteRequestBuilder<EssLoaRequestDetailApprovers<T>, T>(
      this.entityApi,
      requestIdOrEntity instanceof EssLoaRequestDetailApprovers
        ? requestIdOrEntity
        : {
            RequestId: requestIdOrEntity!,
            StartDate: startDate!,
            EndDate: endDate!
          }
    );
  }
}
