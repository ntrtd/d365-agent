/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { PickupTimeslotSettings } from './PickupTimeslotSettings';

/**
 * Request builder class for operations supported on the {@link PickupTimeslotSettings} entity.
 */
export class PickupTimeslotSettingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PickupTimeslotSettings<T>, T> {
  /**
   * Returns a request builder for querying all `PickupTimeslotSettings` entities.
   * @returns A request builder for creating requests to retrieve all `PickupTimeslotSettings` entities.
   */
  getAll(): GetAllRequestBuilder<PickupTimeslotSettings<T>, T> {
    return new GetAllRequestBuilder<PickupTimeslotSettings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `PickupTimeslotSettings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickupTimeslotSettings`.
   */
  create(
    entity: PickupTimeslotSettings<T>
  ): CreateRequestBuilder<PickupTimeslotSettings<T>, T> {
    return new CreateRequestBuilder<PickupTimeslotSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PickupTimeslotSettings` entity based on its keys.
   * @param dataAreaId Key property. See {@link PickupTimeslotSettings.dataAreaId}.
   * @param lineNum Key property. See {@link PickupTimeslotSettings.lineNum}.
   * @param timeslotId Key property. See {@link PickupTimeslotSettings.timeslotId}.
   * @returns A request builder for creating requests to retrieve one `PickupTimeslotSettings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    lineNum: DeserializedType<T, 'Edm.Decimal'>,
    timeslotId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<PickupTimeslotSettings<T>, T> {
    return new GetByKeyRequestBuilder<PickupTimeslotSettings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LineNum: lineNum,
        TimeslotId: timeslotId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PickupTimeslotSettings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickupTimeslotSettings`.
   */
  update(
    entity: PickupTimeslotSettings<T>
  ): UpdateRequestBuilder<PickupTimeslotSettings<T>, T> {
    return new UpdateRequestBuilder<PickupTimeslotSettings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotSettings`.
   * @param dataAreaId Key property. See {@link PickupTimeslotSettings.dataAreaId}.
   * @param lineNum Key property. See {@link PickupTimeslotSettings.lineNum}.
   * @param timeslotId Key property. See {@link PickupTimeslotSettings.timeslotId}.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotSettings`.
   */
  delete(
    dataAreaId: string,
    lineNum: BigNumber,
    timeslotId: string
  ): DeleteRequestBuilder<PickupTimeslotSettings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PickupTimeslotSettings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickupTimeslotSettings` by taking the entity as a parameter.
   */
  delete(
    entity: PickupTimeslotSettings<T>
  ): DeleteRequestBuilder<PickupTimeslotSettings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    lineNum?: BigNumber,
    timeslotId?: string
  ): DeleteRequestBuilder<PickupTimeslotSettings<T>, T> {
    return new DeleteRequestBuilder<PickupTimeslotSettings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof PickupTimeslotSettings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LineNum: lineNum!,
            TimeslotId: timeslotId!
          }
    );
  }
}
