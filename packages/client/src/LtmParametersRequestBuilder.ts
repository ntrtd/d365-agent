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
import { LtmParameters } from './LtmParameters';
import { NoYes } from './NoYes';

/**
 * Request builder class for operations supported on the {@link LtmParameters} entity.
 */
export class LtmParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LtmParameters<T>, T> {
  /**
   * Returns a request builder for querying all `LtmParameters` entities.
   * @returns A request builder for creating requests to retrieve all `LtmParameters` entities.
   */
  getAll(): GetAllRequestBuilder<LtmParameters<T>, T> {
    return new GetAllRequestBuilder<LtmParameters<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LtmParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LtmParameters`.
   */
  create(entity: LtmParameters<T>): CreateRequestBuilder<LtmParameters<T>, T> {
    return new CreateRequestBuilder<LtmParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LtmParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LtmParameters.dataAreaId}.
   * @param configInitialized Key property. See {@link LtmParameters.configInitialized}.
   * @returns A request builder for creating requests to retrieve one `LtmParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    configInitialized: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.NoYes'
    >
  ): GetByKeyRequestBuilder<LtmParameters<T>, T> {
    return new GetByKeyRequestBuilder<LtmParameters<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ConfigInitialized: configInitialized
    });
  }

  /**
   * Returns a request builder for updating an entity of type `LtmParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LtmParameters`.
   */
  update(entity: LtmParameters<T>): UpdateRequestBuilder<LtmParameters<T>, T> {
    return new UpdateRequestBuilder<LtmParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LtmParameters`.
   * @param dataAreaId Key property. See {@link LtmParameters.dataAreaId}.
   * @param configInitialized Key property. See {@link LtmParameters.configInitialized}.
   * @returns A request builder for creating requests that delete an entity of type `LtmParameters`.
   */
  delete(
    dataAreaId: string,
    configInitialized: NoYes
  ): DeleteRequestBuilder<LtmParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LtmParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LtmParameters` by taking the entity as a parameter.
   */
  delete(entity: LtmParameters<T>): DeleteRequestBuilder<LtmParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    configInitialized?: NoYes
  ): DeleteRequestBuilder<LtmParameters<T>, T> {
    return new DeleteRequestBuilder<LtmParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LtmParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ConfigInitialized: configInitialized!
          }
    );
  }
}
