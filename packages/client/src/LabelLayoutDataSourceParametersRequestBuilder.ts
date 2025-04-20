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
import { LabelLayoutDataSourceParameters } from './LabelLayoutDataSourceParameters';

/**
 * Request builder class for operations supported on the {@link LabelLayoutDataSourceParameters} entity.
 */
export class LabelLayoutDataSourceParametersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
  /**
   * Returns a request builder for querying all `LabelLayoutDataSourceParameters` entities.
   * @returns A request builder for creating requests to retrieve all `LabelLayoutDataSourceParameters` entities.
   */
  getAll(): GetAllRequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
    return new GetAllRequestBuilder<LabelLayoutDataSourceParameters<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LabelLayoutDataSourceParameters` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LabelLayoutDataSourceParameters`.
   */
  create(
    entity: LabelLayoutDataSourceParameters<T>
  ): CreateRequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
    return new CreateRequestBuilder<LabelLayoutDataSourceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LabelLayoutDataSourceParameters` entity based on its keys.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSourceParameters.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSourceParameters.labelLayoutDataSourceId}.
   * @param name Key property. See {@link LabelLayoutDataSourceParameters.name}.
   * @returns A request builder for creating requests to retrieve one `LabelLayoutDataSourceParameters` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
    return new GetByKeyRequestBuilder<LabelLayoutDataSourceParameters<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LabelLayoutDataSourceId: labelLayoutDataSourceId,
        Name: name
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LabelLayoutDataSourceParameters`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LabelLayoutDataSourceParameters`.
   */
  update(
    entity: LabelLayoutDataSourceParameters<T>
  ): UpdateRequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
    return new UpdateRequestBuilder<LabelLayoutDataSourceParameters<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSourceParameters`.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSourceParameters.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSourceParameters.labelLayoutDataSourceId}.
   * @param name Key property. See {@link LabelLayoutDataSourceParameters.name}.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSourceParameters`.
   */
  delete(
    dataAreaId: string,
    labelLayoutDataSourceId: string,
    name: string
  ): DeleteRequestBuilder<LabelLayoutDataSourceParameters<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSourceParameters`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSourceParameters` by taking the entity as a parameter.
   */
  delete(
    entity: LabelLayoutDataSourceParameters<T>
  ): DeleteRequestBuilder<LabelLayoutDataSourceParameters<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    labelLayoutDataSourceId?: string,
    name?: string
  ): DeleteRequestBuilder<LabelLayoutDataSourceParameters<T>, T> {
    return new DeleteRequestBuilder<LabelLayoutDataSourceParameters<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LabelLayoutDataSourceParameters
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LabelLayoutDataSourceId: labelLayoutDataSourceId!,
            Name: name!
          }
    );
  }
}
