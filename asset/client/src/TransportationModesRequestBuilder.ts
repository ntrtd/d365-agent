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
import { TransportationModes } from './TransportationModes';

/**
 * Request builder class for operations supported on the {@link TransportationModes} entity.
 */
export class TransportationModesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TransportationModes<T>, T> {
  /**
   * Returns a request builder for querying all `TransportationModes` entities.
   * @returns A request builder for creating requests to retrieve all `TransportationModes` entities.
   */
  getAll(): GetAllRequestBuilder<TransportationModes<T>, T> {
    return new GetAllRequestBuilder<TransportationModes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TransportationModes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TransportationModes`.
   */
  create(
    entity: TransportationModes<T>
  ): CreateRequestBuilder<TransportationModes<T>, T> {
    return new CreateRequestBuilder<TransportationModes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TransportationModes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TransportationModes.dataAreaId}.
   * @param modeCode Key property. See {@link TransportationModes.modeCode}.
   * @returns A request builder for creating requests to retrieve one `TransportationModes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    modeCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TransportationModes<T>, T> {
    return new GetByKeyRequestBuilder<TransportationModes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ModeCode: modeCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TransportationModes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TransportationModes`.
   */
  update(
    entity: TransportationModes<T>
  ): UpdateRequestBuilder<TransportationModes<T>, T> {
    return new UpdateRequestBuilder<TransportationModes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TransportationModes`.
   * @param dataAreaId Key property. See {@link TransportationModes.dataAreaId}.
   * @param modeCode Key property. See {@link TransportationModes.modeCode}.
   * @returns A request builder for creating requests that delete an entity of type `TransportationModes`.
   */
  delete(
    dataAreaId: string,
    modeCode: string
  ): DeleteRequestBuilder<TransportationModes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TransportationModes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TransportationModes` by taking the entity as a parameter.
   */
  delete(
    entity: TransportationModes<T>
  ): DeleteRequestBuilder<TransportationModes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    modeCode?: string
  ): DeleteRequestBuilder<TransportationModes<T>, T> {
    return new DeleteRequestBuilder<TransportationModes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TransportationModes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ModeCode: modeCode!
          }
    );
  }
}
