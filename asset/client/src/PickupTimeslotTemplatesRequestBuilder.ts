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
import { PickupTimeslotTemplates } from './PickupTimeslotTemplates';

/**
 * Request builder class for operations supported on the {@link PickupTimeslotTemplates} entity.
 */
export class PickupTimeslotTemplatesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PickupTimeslotTemplates<T>, T> {
  /**
   * Returns a request builder for querying all `PickupTimeslotTemplates` entities.
   * @returns A request builder for creating requests to retrieve all `PickupTimeslotTemplates` entities.
   */
  getAll(): GetAllRequestBuilder<PickupTimeslotTemplates<T>, T> {
    return new GetAllRequestBuilder<PickupTimeslotTemplates<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PickupTimeslotTemplates` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickupTimeslotTemplates`.
   */
  create(
    entity: PickupTimeslotTemplates<T>
  ): CreateRequestBuilder<PickupTimeslotTemplates<T>, T> {
    return new CreateRequestBuilder<PickupTimeslotTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PickupTimeslotTemplates` entity based on its keys.
   * @param dataAreaId Key property. See {@link PickupTimeslotTemplates.dataAreaId}.
   * @param timeslotId Key property. See {@link PickupTimeslotTemplates.timeslotId}.
   * @returns A request builder for creating requests to retrieve one `PickupTimeslotTemplates` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    timeslotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PickupTimeslotTemplates<T>, T> {
    return new GetByKeyRequestBuilder<PickupTimeslotTemplates<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TimeslotId: timeslotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PickupTimeslotTemplates`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickupTimeslotTemplates`.
   */
  update(
    entity: PickupTimeslotTemplates<T>
  ): UpdateRequestBuilder<PickupTimeslotTemplates<T>, T> {
    return new UpdateRequestBuilder<PickupTimeslotTemplates<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotTemplates`.
   * @param dataAreaId Key property. See {@link PickupTimeslotTemplates.dataAreaId}.
   * @param timeslotId Key property. See {@link PickupTimeslotTemplates.timeslotId}.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotTemplates`.
   */
  delete(
    dataAreaId: string,
    timeslotId: string
  ): DeleteRequestBuilder<PickupTimeslotTemplates<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotTemplates`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotTemplates` by taking the entity as a parameter.
   */
  delete(
    entity: PickupTimeslotTemplates<T>
  ): DeleteRequestBuilder<PickupTimeslotTemplates<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    timeslotId?: string
  ): DeleteRequestBuilder<PickupTimeslotTemplates<T>, T> {
    return new DeleteRequestBuilder<PickupTimeslotTemplates<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PickupTimeslotTemplates
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TimeslotId: timeslotId!
          }
    );
  }
}
