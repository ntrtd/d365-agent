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
import { LabelLayoutDataSourcesV2 } from './LabelLayoutDataSourcesV2';

/**
 * Request builder class for operations supported on the {@link LabelLayoutDataSourcesV2} entity.
 */
export class LabelLayoutDataSourcesV2RequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
  /**
   * Returns a request builder for querying all `LabelLayoutDataSourcesV2` entities.
   * @returns A request builder for creating requests to retrieve all `LabelLayoutDataSourcesV2` entities.
   */
  getAll(): GetAllRequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
    return new GetAllRequestBuilder<LabelLayoutDataSourcesV2<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `LabelLayoutDataSourcesV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LabelLayoutDataSourcesV2`.
   */
  create(
    entity: LabelLayoutDataSourcesV2<T>
  ): CreateRequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
    return new CreateRequestBuilder<LabelLayoutDataSourcesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `LabelLayoutDataSourcesV2` entity based on its keys.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSourcesV2.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSourcesV2.labelLayoutDataSourceId}.
   * @returns A request builder for creating requests to retrieve one `LabelLayoutDataSourcesV2` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    labelLayoutDataSourceId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
    return new GetByKeyRequestBuilder<LabelLayoutDataSourcesV2<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LabelLayoutDataSourceId: labelLayoutDataSourceId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `LabelLayoutDataSourcesV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LabelLayoutDataSourcesV2`.
   */
  update(
    entity: LabelLayoutDataSourcesV2<T>
  ): UpdateRequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
    return new UpdateRequestBuilder<LabelLayoutDataSourcesV2<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSourcesV2`.
   * @param dataAreaId Key property. See {@link LabelLayoutDataSourcesV2.dataAreaId}.
   * @param labelLayoutDataSourceId Key property. See {@link LabelLayoutDataSourcesV2.labelLayoutDataSourceId}.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSourcesV2`.
   */
  delete(
    dataAreaId: string,
    labelLayoutDataSourceId: string
  ): DeleteRequestBuilder<LabelLayoutDataSourcesV2<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LabelLayoutDataSourcesV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LabelLayoutDataSourcesV2` by taking the entity as a parameter.
   */
  delete(
    entity: LabelLayoutDataSourcesV2<T>
  ): DeleteRequestBuilder<LabelLayoutDataSourcesV2<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    labelLayoutDataSourceId?: string
  ): DeleteRequestBuilder<LabelLayoutDataSourcesV2<T>, T> {
    return new DeleteRequestBuilder<LabelLayoutDataSourcesV2<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof LabelLayoutDataSourcesV2
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LabelLayoutDataSourceId: labelLayoutDataSourceId!
          }
    );
  }
}
