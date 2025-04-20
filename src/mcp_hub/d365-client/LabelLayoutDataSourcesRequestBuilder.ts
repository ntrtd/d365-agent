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
import { LabelLayoutDataSources } from './LabelLayoutDataSources';

/**
 * Request builder class for operations supported on the {@link LabelLayoutDataSources} entity.
 */
export class LabelLayoutDataSourcesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LabelLayoutDataSources<T>, T> {
  /**
   * Returns a request builder for querying all `LabelLayoutDataSources` entities.
   * @returns A request builder for creating requests to retrieve all `LabelLayoutDataSources` entities.
   */
  getAll(): GetAllRequestBuilder<LabelLayoutDataSources<T>, T> {
    return new GetAllRequestBuilder<LabelLayoutDataSources<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LabelLayoutDataSources` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LabelLayoutDataSources`.
   */
  create(
    entity: LabelLayoutDataSources<T>
  ): CreateRequestBuilder<LabelLayoutDataSources<T>, T> {
    return new CreateRequestBuilder<LabelLayoutDataSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LabelLayoutDataSources` entity based on its keys.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSources.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSources.labelLayoutDataSourceId}.
   * @returns A request builder for creating requests to retrieve one `LabelLayoutDataSources` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LabelLayoutDataSources<T>, T> {
    return new GetByKeyRequestBuilder<LabelLayoutDataSources<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LabelLayoutDataSourceId: labelLayoutDataSourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LabelLayoutDataSources`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LabelLayoutDataSources`.
   */
  update(
    entity: LabelLayoutDataSources<T>
  ): UpdateRequestBuilder<LabelLayoutDataSources<T>, T> {
    return new UpdateRequestBuilder<LabelLayoutDataSources<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSources`.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSources.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSources.labelLayoutDataSourceId}.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSources`.
   */
  delete(
    dataAreaId: string,
    labelLayoutDataSourceId: string
  ): DeleteRequestBuilder<LabelLayoutDataSources<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSources`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSources` by taking the entity as a parameter.
   */
  delete(
    entity: LabelLayoutDataSources<T>
  ): DeleteRequestBuilder<LabelLayoutDataSources<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    labelLayoutDataSourceId?: string
  ): DeleteRequestBuilder<LabelLayoutDataSources<T>, T> {
    return new DeleteRequestBuilder<LabelLayoutDataSources<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LabelLayoutDataSources
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LabelLayoutDataSourceId: labelLayoutDataSourceId!
          }
    );
  }
}
