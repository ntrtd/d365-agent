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
import { StoreHoursChannels } from './StoreHoursChannels';

/**
 * Request builder class for operations supported on the {@link StoreHoursChannels} entity.
 */
export class StoreHoursChannelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<StoreHoursChannels<T>, T> {
  /**
   * Returns a request builder for querying all `StoreHoursChannels` entities.
   * @returns A request builder for creating requests to retrieve all `StoreHoursChannels` entities.
   */
  getAll(): GetAllRequestBuilder<StoreHoursChannels<T>, T> {
    return new GetAllRequestBuilder<StoreHoursChannels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `StoreHoursChannels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `StoreHoursChannels`.
   */
  create(
    entity: StoreHoursChannels<T>
  ): CreateRequestBuilder<StoreHoursChannels<T>, T> {
    return new CreateRequestBuilder<StoreHoursChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `StoreHoursChannels` entity based on its keys.
   * @param dataAreaId Key property. See {@link StoreHoursChannels.dataAreaId}.
   * @param storeHoursTemplateId Key property. See {@link StoreHoursChannels.storeHoursTemplateId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link StoreHoursChannels.omOperatingUnitPartyNumber}.
   * @returns A request builder for creating requests to retrieve one `StoreHoursChannels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    storeHoursTemplateId: DeserializedType<T, 'Edm.String'>,
    omOperatingUnitPartyNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<StoreHoursChannels<T>, T> {
    return new GetByKeyRequestBuilder<StoreHoursChannels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        StoreHoursTemplateId: storeHoursTemplateId,
        OMOperatingUnitPartyNumber: omOperatingUnitPartyNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `StoreHoursChannels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `StoreHoursChannels`.
   */
  update(
    entity: StoreHoursChannels<T>
  ): UpdateRequestBuilder<StoreHoursChannels<T>, T> {
    return new UpdateRequestBuilder<StoreHoursChannels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `StoreHoursChannels`.
   * @param dataAreaId Key property. See {@link StoreHoursChannels.dataAreaId}.
   * @param storeHoursTemplateId Key property. See {@link StoreHoursChannels.storeHoursTemplateId}.
   * @param omOperatingUnitPartyNumber Key property. See {@link StoreHoursChannels.omOperatingUnitPartyNumber}.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursChannels`.
   */
  delete(
    dataAreaId: string,
    storeHoursTemplateId: string,
    omOperatingUnitPartyNumber: string
  ): DeleteRequestBuilder<StoreHoursChannels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `StoreHoursChannels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `StoreHoursChannels` by taking the entity as a parameter.
   */
  delete(
    entity: StoreHoursChannels<T>
  ): DeleteRequestBuilder<StoreHoursChannels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    storeHoursTemplateId?: string,
    omOperatingUnitPartyNumber?: string
  ): DeleteRequestBuilder<StoreHoursChannels<T>, T> {
    return new DeleteRequestBuilder<StoreHoursChannels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof StoreHoursChannels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            StoreHoursTemplateId: storeHoursTemplateId!,
            OMOperatingUnitPartyNumber: omOperatingUnitPartyNumber!
          }
    );
  }
}
