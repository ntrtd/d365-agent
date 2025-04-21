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
import { RetailBarcodeMaskSegments } from './RetailBarcodeMaskSegments';

/**
 * Request builder class for operations supported on the {@link RetailBarcodeMaskSegments} entity.
 */
export class RetailBarcodeMaskSegmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetailBarcodeMaskSegments<T>, T> {
  /**
   * Returns a request builder for querying all `RetailBarcodeMaskSegments` entities.
   * @returns A request builder for creating requests to retrieve all `RetailBarcodeMaskSegments` entities.
   */
  getAll(): GetAllRequestBuilder<RetailBarcodeMaskSegments<T>, T> {
    return new GetAllRequestBuilder<RetailBarcodeMaskSegments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `RetailBarcodeMaskSegments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetailBarcodeMaskSegments`.
   */
  create(
    entity: RetailBarcodeMaskSegments<T>
  ): CreateRequestBuilder<RetailBarcodeMaskSegments<T>, T> {
    return new CreateRequestBuilder<RetailBarcodeMaskSegments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RetailBarcodeMaskSegments` entity based on its keys.
   * @param dataAreaId Key property. See {@link RetailBarcodeMaskSegments.dataAreaId}.
   * @param maskId Key property. See {@link RetailBarcodeMaskSegments.maskId}.
   * @param segmentNumber Key property. See {@link RetailBarcodeMaskSegments.segmentNumber}.
   * @returns A request builder for creating requests to retrieve one `RetailBarcodeMaskSegments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    maskId: DeserializedType<T, 'Edm.String'>,
    segmentNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetailBarcodeMaskSegments<T>, T> {
    return new GetByKeyRequestBuilder<RetailBarcodeMaskSegments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        MaskId: maskId,
        SegmentNumber: segmentNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RetailBarcodeMaskSegments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetailBarcodeMaskSegments`.
   */
  update(
    entity: RetailBarcodeMaskSegments<T>
  ): UpdateRequestBuilder<RetailBarcodeMaskSegments<T>, T> {
    return new UpdateRequestBuilder<RetailBarcodeMaskSegments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMaskSegments`.
   * @param dataAreaId Key property. See {@link RetailBarcodeMaskSegments.dataAreaId}.
   * @param maskId Key property. See {@link RetailBarcodeMaskSegments.maskId}.
   * @param segmentNumber Key property. See {@link RetailBarcodeMaskSegments.segmentNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMaskSegments`.
   */
  delete(
    dataAreaId: string,
    maskId: string,
    segmentNumber: number
  ): DeleteRequestBuilder<RetailBarcodeMaskSegments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetailBarcodeMaskSegments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetailBarcodeMaskSegments` by taking the entity as a parameter.
   */
  delete(
    entity: RetailBarcodeMaskSegments<T>
  ): DeleteRequestBuilder<RetailBarcodeMaskSegments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    maskId?: string,
    segmentNumber?: number
  ): DeleteRequestBuilder<RetailBarcodeMaskSegments<T>, T> {
    return new DeleteRequestBuilder<RetailBarcodeMaskSegments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RetailBarcodeMaskSegments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            MaskId: maskId!,
            SegmentNumber: segmentNumber!
          }
    );
  }
}
