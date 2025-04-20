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
import { QualityOrderHeaders } from './QualityOrderHeaders';

/**
 * Request builder class for operations supported on the {@link QualityOrderHeaders} entity.
 */
export class QualityOrderHeadersRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QualityOrderHeaders<T>, T> {
  /**
   * Returns a request builder for querying all `QualityOrderHeaders` entities.
   * @returns A request builder for creating requests to retrieve all `QualityOrderHeaders` entities.
   */
  getAll(): GetAllRequestBuilder<QualityOrderHeaders<T>, T> {
    return new GetAllRequestBuilder<QualityOrderHeaders<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `QualityOrderHeaders` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QualityOrderHeaders`.
   */
  create(
    entity: QualityOrderHeaders<T>
  ): CreateRequestBuilder<QualityOrderHeaders<T>, T> {
    return new CreateRequestBuilder<QualityOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QualityOrderHeaders` entity based on its keys.
   * @param dataAreaId Key property. See {@link QualityOrderHeaders.dataAreaId}.
   * @param qualityOrderNumber Key property. See {@link QualityOrderHeaders.qualityOrderNumber}.
   * @returns A request builder for creating requests to retrieve one `QualityOrderHeaders` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    qualityOrderNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<QualityOrderHeaders<T>, T> {
    return new GetByKeyRequestBuilder<QualityOrderHeaders<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        QualityOrderNumber: qualityOrderNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QualityOrderHeaders`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QualityOrderHeaders`.
   */
  update(
    entity: QualityOrderHeaders<T>
  ): UpdateRequestBuilder<QualityOrderHeaders<T>, T> {
    return new UpdateRequestBuilder<QualityOrderHeaders<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QualityOrderHeaders`.
   * @param dataAreaId Key property. See {@link QualityOrderHeaders.dataAreaId}.
   * @param qualityOrderNumber Key property. See {@link QualityOrderHeaders.qualityOrderNumber}.
   * @returns A request builder for creating requests that delete an entity of type `QualityOrderHeaders`.
   */
  delete(
    dataAreaId: string,
    qualityOrderNumber: string
  ): DeleteRequestBuilder<QualityOrderHeaders<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QualityOrderHeaders`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QualityOrderHeaders` by taking the entity as a parameter.
   */
  delete(
    entity: QualityOrderHeaders<T>
  ): DeleteRequestBuilder<QualityOrderHeaders<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    qualityOrderNumber?: string
  ): DeleteRequestBuilder<QualityOrderHeaders<T>, T> {
    return new DeleteRequestBuilder<QualityOrderHeaders<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QualityOrderHeaders
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            QualityOrderNumber: qualityOrderNumber!
          }
    );
  }
}
