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
import { InboundLoadPackingStructures } from './InboundLoadPackingStructures';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructures} entity.
 */
export class InboundLoadPackingStructuresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructures<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructures` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructures` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructures<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructures<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructures` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructures`.
   */
  create(
    entity: InboundLoadPackingStructures<T>
  ): CreateRequestBuilder<InboundLoadPackingStructures<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructures` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructures.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link InboundLoadPackingStructures.licensePlateNumber}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructures.inboundShipmentId}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructures` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    inboundShipmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructures<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructures<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LicensePlateNumber: licensePlateNumber,
        InboundShipmentId: inboundShipmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructures`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructures`.
   */
  update(
    entity: InboundLoadPackingStructures<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructures<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructures<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructures`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructures.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link InboundLoadPackingStructures.licensePlateNumber}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructures.inboundShipmentId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructures`.
   */
  delete(
    dataAreaId: string,
    licensePlateNumber: string,
    inboundShipmentId: string
  ): DeleteRequestBuilder<InboundLoadPackingStructures<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructures`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructures` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructures<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructures<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateNumber?: string,
    inboundShipmentId?: string
  ): DeleteRequestBuilder<InboundLoadPackingStructures<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructures<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructures
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateNumber: licensePlateNumber!,
            InboundShipmentId: inboundShipmentId!
          }
    );
  }
}
