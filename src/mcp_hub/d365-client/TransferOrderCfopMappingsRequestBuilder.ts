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
import { TransferOrderCfopMappings } from './TransferOrderCfopMappings';

/**
 * Request builder class for operations supported on the {@link TransferOrderCfopMappings} entity.
 */
export class TransferOrderCfopMappingsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransferOrderCfopMappings<T>, T> {
  /**
   * Returns a request builder for querying all `TransferOrderCfopMappings` entities.
   * @returns A request builder for creating requests to retrieve all `TransferOrderCfopMappings` entities.
   */
  getAll(): GetAllRequestBuilder<TransferOrderCfopMappings<T>, T> {
    return new GetAllRequestBuilder<TransferOrderCfopMappings<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `TransferOrderCfopMappings` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransferOrderCfopMappings`.
   */
  create(
    entity: TransferOrderCfopMappings<T>
  ): CreateRequestBuilder<TransferOrderCfopMappings<T>, T> {
    return new CreateRequestBuilder<TransferOrderCfopMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransferOrderCfopMappings` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransferOrderCfopMappings.dataAreaId}.
   * @param shipmentCfop Key property. See {@link TransferOrderCfopMappings.shipmentCfop}.
   * @returns A request builder for creating requests to retrieve one `TransferOrderCfopMappings` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    shipmentCfop: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransferOrderCfopMappings<T>, T> {
    return new GetByKeyRequestBuilder<TransferOrderCfopMappings<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ShipmentCFOP: shipmentCfop
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransferOrderCfopMappings`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransferOrderCfopMappings`.
   */
  update(
    entity: TransferOrderCfopMappings<T>
  ): UpdateRequestBuilder<TransferOrderCfopMappings<T>, T> {
    return new UpdateRequestBuilder<TransferOrderCfopMappings<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransferOrderCfopMappings`.
   * @param dataAreaId Key property. See {@link TransferOrderCfopMappings.dataAreaId}.
   * @param shipmentCfop Key property. See {@link TransferOrderCfopMappings.shipmentCfop}.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderCfopMappings`.
   */
  delete(
    dataAreaId: string,
    shipmentCfop: string
  ): DeleteRequestBuilder<TransferOrderCfopMappings<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransferOrderCfopMappings`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransferOrderCfopMappings` by taking the entity as a parameter.
   */
  delete(
    entity: TransferOrderCfopMappings<T>
  ): DeleteRequestBuilder<TransferOrderCfopMappings<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    shipmentCfop?: string
  ): DeleteRequestBuilder<TransferOrderCfopMappings<T>, T> {
    return new DeleteRequestBuilder<TransferOrderCfopMappings<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransferOrderCfopMappings
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ShipmentCFOP: shipmentCfop!
          }
    );
  }
}
