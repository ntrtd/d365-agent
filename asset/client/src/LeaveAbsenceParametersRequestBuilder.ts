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
import { LeaveAbsenceParameters } from './LeaveAbsenceParameters';

/**
 * Request builder class for operations supported on the {@link LeaveAbsenceParameters} entity.
 */
export class LeaveAbsenceParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LeaveAbsenceParameters<T>, T> {
  /**
   * Returns a request builder for querying all `LeaveAbsenceParameters` entities.
   * @returns A request builder for creating requests to retrieve all `LeaveAbsenceParameters` entities.
   */
  getAll(): GetAllRequestBuilder<LeaveAbsenceParameters<T>, T> {
    return new GetAllRequestBuilder<LeaveAbsenceParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LeaveAbsenceParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LeaveAbsenceParameters`.
   */
  create(
    entity: LeaveAbsenceParameters<T>
  ): CreateRequestBuilder<LeaveAbsenceParameters<T>, T> {
    return new CreateRequestBuilder<LeaveAbsenceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LeaveAbsenceParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LeaveAbsenceParameters.dataAreaId}.
   * @returns A request builder for creating requests to retrieve one `LeaveAbsenceParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LeaveAbsenceParameters<T>, T> {
    return new GetByKeyRequestBuilder<LeaveAbsenceParameters<T>, T>(
      this.entityApi,
      { dataAreaId: dataAreaId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LeaveAbsenceParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LeaveAbsenceParameters`.
   */
  update(
    entity: LeaveAbsenceParameters<T>
  ): UpdateRequestBuilder<LeaveAbsenceParameters<T>, T> {
    return new UpdateRequestBuilder<LeaveAbsenceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LeaveAbsenceParameters`.
   * @param dataAreaId Key property. See {@link LeaveAbsenceParameters.dataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `LeaveAbsenceParameters`.
   */
  delete(
    dataAreaId: string
  ): DeleteRequestBuilder<LeaveAbsenceParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LeaveAbsenceParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LeaveAbsenceParameters` by taking the entity as a parameter.
   */
  delete(
    entity: LeaveAbsenceParameters<T>
  ): DeleteRequestBuilder<LeaveAbsenceParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any
  ): DeleteRequestBuilder<LeaveAbsenceParameters<T>, T> {
    return new DeleteRequestBuilder<LeaveAbsenceParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LeaveAbsenceParameters
        ? dataAreaIdOrEntity
        : { dataAreaId: dataAreaIdOrEntity! }
    );
  }
}
