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
import { ServiceAccountingCodes } from './ServiceAccountingCodes';

/**
 * Request builder class for operations supported on the {@link ServiceAccountingCodes} entity.
 */
export class ServiceAccountingCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ServiceAccountingCodes<T>, T> {
  /**
   * Returns a request builder for querying all `ServiceAccountingCodes` entities.
   * @returns A request builder for creating requests to retrieve all `ServiceAccountingCodes` entities.
   */
  getAll(): GetAllRequestBuilder<ServiceAccountingCodes<T>, T> {
    return new GetAllRequestBuilder<ServiceAccountingCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ServiceAccountingCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ServiceAccountingCodes`.
   */
  create(
    entity: ServiceAccountingCodes<T>
  ): CreateRequestBuilder<ServiceAccountingCodes<T>, T> {
    return new CreateRequestBuilder<ServiceAccountingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ServiceAccountingCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ServiceAccountingCodes.dataAreaId}.
   * @param sac Key property. See {@link ServiceAccountingCodes.sac}.
   * @returns A request builder for creating requests to retrieve one `ServiceAccountingCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    sac: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ServiceAccountingCodes<T>, T> {
    return new GetByKeyRequestBuilder<ServiceAccountingCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SAC: sac
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ServiceAccountingCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ServiceAccountingCodes`.
   */
  update(
    entity: ServiceAccountingCodes<T>
  ): UpdateRequestBuilder<ServiceAccountingCodes<T>, T> {
    return new UpdateRequestBuilder<ServiceAccountingCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ServiceAccountingCodes`.
   * @param dataAreaId Key property. See {@link ServiceAccountingCodes.dataAreaId}.
   * @param sac Key property. See {@link ServiceAccountingCodes.sac}.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAccountingCodes`.
   */
  delete(
    dataAreaId: string,
    sac: string
  ): DeleteRequestBuilder<ServiceAccountingCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ServiceAccountingCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ServiceAccountingCodes` by taking the entity as a parameter.
   */
  delete(
    entity: ServiceAccountingCodes<T>
  ): DeleteRequestBuilder<ServiceAccountingCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    sac?: string
  ): DeleteRequestBuilder<ServiceAccountingCodes<T>, T> {
    return new DeleteRequestBuilder<ServiceAccountingCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ServiceAccountingCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SAC: sac!
          }
    );
  }
}
