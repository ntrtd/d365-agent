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
import { PickupTimeslotChannels } from './PickupTimeslotChannels';

/**
 * Request builder class for operations supported on the {@link PickupTimeslotChannels} entity.
 */
export class PickupTimeslotChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PickupTimeslotChannels<T>, T> {
  /**
   * Returns a request builder for querying all `PickupTimeslotChannels` entities.
   * @returns A request builder for creating requests to retrieve all `PickupTimeslotChannels` entities.
   */
  getAll(): GetAllRequestBuilder<PickupTimeslotChannels<T>, T> {
    return new GetAllRequestBuilder<PickupTimeslotChannels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PickupTimeslotChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickupTimeslotChannels`.
   */
  create(
    entity: PickupTimeslotChannels<T>
  ): CreateRequestBuilder<PickupTimeslotChannels<T>, T> {
    return new CreateRequestBuilder<PickupTimeslotChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PickupTimeslotChannels` entity based on its keys.
   * @param timeslotId Key property. See {@link PickupTimeslotChannels.timeslotId}.
   * @param omOperatingUnitNumber Key property. See {@link PickupTimeslotChannels.omOperatingUnitNumber}.
   * @returns A request builder for creating requests to retrieve one `PickupTimeslotChannels` entity based on its keys.
   */
  getByKey(
    timeslotId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PickupTimeslotChannels<T>, T> {
    return new GetByKeyRequestBuilder<PickupTimeslotChannels<T>, T>(
      this.entityApi,
      {
        TimeslotId: timeslotId,
        OMOperatingUnitNumber: omOperatingUnitNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PickupTimeslotChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickupTimeslotChannels`.
   */
  update(
    entity: PickupTimeslotChannels<T>
  ): UpdateRequestBuilder<PickupTimeslotChannels<T>, T> {
    return new UpdateRequestBuilder<PickupTimeslotChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotChannels`.
   * @param timeslotId Key property. See {@link PickupTimeslotChannels.timeslotId}.
   * @param omOperatingUnitNumber Key property. See {@link PickupTimeslotChannels.omOperatingUnitNumber}.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotChannels`.
   */
  delete(
    timeslotId: string,
    omOperatingUnitNumber: string
  ): DeleteRequestBuilder<PickupTimeslotChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotChannels` by taking the entity as a parameter.
   */
  delete(
    entity: PickupTimeslotChannels<T>
  ): DeleteRequestBuilder<PickupTimeslotChannels<T>, T>;
  delete(
    timeslotIdOrEntity: any,
    omOperatingUnitNumber?: string
  ): DeleteRequestBuilder<PickupTimeslotChannels<T>, T> {
    return new DeleteRequestBuilder<PickupTimeslotChannels<T>, T>(
      this.entityApi,
      timeslotIdOrEntity instanceof PickupTimeslotChannels
        ? timeslotIdOrEntity
        : {
            TimeslotId: timeslotIdOrEntity!,
            OMOperatingUnitNumber: omOperatingUnitNumber!
          }
    );
  }
}
