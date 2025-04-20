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
import { InboundLoadPackingStructureCases } from './InboundLoadPackingStructureCases';

/**
 * Request builder class for operations supported on the {@link InboundLoadPackingStructureCases} entity.
 */
export class InboundLoadPackingStructureCasesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<InboundLoadPackingStructureCases<T>, T> {
  /**
   * Returns a request builder for querying all `InboundLoadPackingStructureCases` entities.
   * @returns A request builder for creating requests to retrieve all `InboundLoadPackingStructureCases` entities.
   */
  getAll(): GetAllRequestBuilder<InboundLoadPackingStructureCases<T>, T> {
    return new GetAllRequestBuilder<InboundLoadPackingStructureCases<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `InboundLoadPackingStructureCases` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InboundLoadPackingStructureCases`.
   */
  create(
    entity: InboundLoadPackingStructureCases<T>
  ): CreateRequestBuilder<InboundLoadPackingStructureCases<T>, T> {
    return new CreateRequestBuilder<InboundLoadPackingStructureCases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `InboundLoadPackingStructureCases` entity based on its keys.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCases.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link InboundLoadPackingStructureCases.licensePlateNumber}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCases.inboundShipmentId}.
   * @returns A request builder for creating requests to retrieve one `InboundLoadPackingStructureCases` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    licensePlateNumber: DeserializedType<T, 'Edm.String'>,
    inboundShipmentId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<InboundLoadPackingStructureCases<T>, T> {
    return new GetByKeyRequestBuilder<InboundLoadPackingStructureCases<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LicensePlateNumber: licensePlateNumber,
        InboundShipmentId: inboundShipmentId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `InboundLoadPackingStructureCases`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InboundLoadPackingStructureCases`.
   */
  update(
    entity: InboundLoadPackingStructureCases<T>
  ): UpdateRequestBuilder<InboundLoadPackingStructureCases<T>, T> {
    return new UpdateRequestBuilder<InboundLoadPackingStructureCases<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCases`.
   * @param dataAreaId Key property. See {@link InboundLoadPackingStructureCases.dataAreaId}.
   * @param licensePlateNumber Key property. See {@link InboundLoadPackingStructureCases.licensePlateNumber}.
   * @param inboundShipmentId Key property. See {@link InboundLoadPackingStructureCases.inboundShipmentId}.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCases`.
   */
  delete(
    dataAreaId: string,
    licensePlateNumber: string,
    inboundShipmentId: string
  ): DeleteRequestBuilder<InboundLoadPackingStructureCases<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `InboundLoadPackingStructureCases`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InboundLoadPackingStructureCases` by taking the entity as a parameter.
   */
  delete(
    entity: InboundLoadPackingStructureCases<T>
  ): DeleteRequestBuilder<InboundLoadPackingStructureCases<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    licensePlateNumber?: string,
    inboundShipmentId?: string
  ): DeleteRequestBuilder<InboundLoadPackingStructureCases<T>, T> {
    return new DeleteRequestBuilder<InboundLoadPackingStructureCases<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof InboundLoadPackingStructureCases
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LicensePlateNumber: licensePlateNumber!,
            InboundShipmentId: inboundShipmentId!
          }
    );
  }
}
