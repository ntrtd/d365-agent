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
import { AcquisitionMethods } from './AcquisitionMethods';

/**
 * Request builder class for operations supported on the {@link AcquisitionMethods} entity.
 */
export class AcquisitionMethodsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AcquisitionMethods<T>, T> {
  /**
   * Returns a request builder for querying all `AcquisitionMethods` entities.
   * @returns A request builder for creating requests to retrieve all `AcquisitionMethods` entities.
   */
  getAll(): GetAllRequestBuilder<AcquisitionMethods<T>, T> {
    return new GetAllRequestBuilder<AcquisitionMethods<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `AcquisitionMethods` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AcquisitionMethods`.
   */
  create(
    entity: AcquisitionMethods<T>
  ): CreateRequestBuilder<AcquisitionMethods<T>, T> {
    return new CreateRequestBuilder<AcquisitionMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AcquisitionMethods` entity based on its keys.
   * @param dataAreaId Key property. See {@link AcquisitionMethods.dataAreaId}.
   * @param acquisitionMethod Key property. See {@link AcquisitionMethods.acquisitionMethod}.
   * @returns A request builder for creating requests to retrieve one `AcquisitionMethods` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    acquisitionMethod: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AcquisitionMethods<T>, T> {
    return new GetByKeyRequestBuilder<AcquisitionMethods<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        AcquisitionMethod: acquisitionMethod
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AcquisitionMethods`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AcquisitionMethods`.
   */
  update(
    entity: AcquisitionMethods<T>
  ): UpdateRequestBuilder<AcquisitionMethods<T>, T> {
    return new UpdateRequestBuilder<AcquisitionMethods<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AcquisitionMethods`.
   * @param dataAreaId Key property. See {@link AcquisitionMethods.dataAreaId}.
   * @param acquisitionMethod Key property. See {@link AcquisitionMethods.acquisitionMethod}.
   * @returns A request builder for creating requests that delete an entity of type `AcquisitionMethods`.
   */
  delete(
    dataAreaId: string,
    acquisitionMethod: string
  ): DeleteRequestBuilder<AcquisitionMethods<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AcquisitionMethods`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AcquisitionMethods` by taking the entity as a parameter.
   */
  delete(
    entity: AcquisitionMethods<T>
  ): DeleteRequestBuilder<AcquisitionMethods<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    acquisitionMethod?: string
  ): DeleteRequestBuilder<AcquisitionMethods<T>, T> {
    return new DeleteRequestBuilder<AcquisitionMethods<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AcquisitionMethods
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            AcquisitionMethod: acquisitionMethod!
          }
    );
  }
}
