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
import { RetailStoreHardwareStations } from './RetailStoreHardwareStations';

/**
 * Request builder class for operations supported on the {@link RetailStoreHardwareStations} entity.
 */
export class RetailStoreHardwareStationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailStoreHardwareStations<T>, T> {
  /**
   * Returns a request builder for querying all `RetailStoreHardwareStations` entities.
   * @returns A request builder for creating requests to retrieve all `RetailStoreHardwareStations` entities.
   */
  getAll(): GetAllRequestBuilder<RetailStoreHardwareStations<T>, T> {
    return new GetAllRequestBuilder<RetailStoreHardwareStations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailStoreHardwareStations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailStoreHardwareStations`.
   */
  create(
    entity: RetailStoreHardwareStations<T>
  ): CreateRequestBuilder<RetailStoreHardwareStations<T>, T> {
    return new CreateRequestBuilder<RetailStoreHardwareStations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailStoreHardwareStations` entity based on its keys.
   * @param storeNumber Key property. See {@link RetailStoreHardwareStations.storeNumber}.
   * @param eftTerminalId Key property. See {@link RetailStoreHardwareStations.eftTerminalId}.
   * @param hostName Key property. See {@link RetailStoreHardwareStations.hostName}.
   * @param hardwareProfileId Key property. See {@link RetailStoreHardwareStations.hardwareProfileId}.
   * @returns A request builder for creating requests to retrieve one `RetailStoreHardwareStations` entity based on its keys.
   */
  getByKey(
    storeNumber: DeserializedType<T, 'Edm.String'>,
    eftTerminalId: DeserializedType<T, 'Edm.String'>,
    hostName: DeserializedType<T, 'Edm.String'>,
    hardwareProfileId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RetailStoreHardwareStations<T>, T> {
    return new GetByKeyRequestBuilder<RetailStoreHardwareStations<T>, T>(
      this.entityApi,
      {
        StoreNumber: storeNumber,
        EftTerminalId: eftTerminalId,
        HostName: hostName,
        HardwareProfileId: hardwareProfileId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailStoreHardwareStations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailStoreHardwareStations`.
   */
  update(
    entity: RetailStoreHardwareStations<T>
  ): UpdateRequestBuilder<RetailStoreHardwareStations<T>, T> {
    return new UpdateRequestBuilder<RetailStoreHardwareStations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailStoreHardwareStations`.
   * @param storeNumber Key property. See {@link RetailStoreHardwareStations.storeNumber}.
   * @param eftTerminalId Key property. See {@link RetailStoreHardwareStations.eftTerminalId}.
   * @param hostName Key property. See {@link RetailStoreHardwareStations.hostName}.
   * @param hardwareProfileId Key property. See {@link RetailStoreHardwareStations.hardwareProfileId}.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreHardwareStations`.
   */
  delete(
    storeNumber: string,
    eftTerminalId: string,
    hostName: string,
    hardwareProfileId: string
  ): DeleteRequestBuilder<RetailStoreHardwareStations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailStoreHardwareStations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailStoreHardwareStations` by taking the entity as a parameter.
   */
  delete(
    entity: RetailStoreHardwareStations<T>
  ): DeleteRequestBuilder<RetailStoreHardwareStations<T>, T>;
  delete(
    storeNumberOrEntity: any,
    eftTerminalId?: string,
    hostName?: string,
    hardwareProfileId?: string
  ): DeleteRequestBuilder<RetailStoreHardwareStations<T>, T> {
    return new DeleteRequestBuilder<RetailStoreHardwareStations<T>, T>(
      this.entityApi,
      storeNumberOrEntity instanceof RetailStoreHardwareStations
        ? storeNumberOrEntity
        : {
            StoreNumber: storeNumberOrEntity!,
            EftTerminalId: eftTerminalId!,
            HostName: hostName!,
            HardwareProfileId: hardwareProfileId!
          }
    );
  }
}
