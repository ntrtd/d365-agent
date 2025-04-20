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
import { ElectronicPaymentSegments } from './ElectronicPaymentSegments';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentSegments} entity.
 */
export class ElectronicPaymentSegmentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentSegments<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentSegments` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentSegments` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentSegments<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentSegments<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentSegments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentSegments`.
   */
  create(
    entity: ElectronicPaymentSegments<T>
  ): CreateRequestBuilder<ElectronicPaymentSegments<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentSegments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentSegments` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentSegments.dataAreaId}.
   * @param segment Key property. See {@link ElectronicPaymentSegments.segment}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentSegments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    segment: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentSegments<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentSegments<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Segment: segment
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentSegments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentSegments`.
   */
  update(
    entity: ElectronicPaymentSegments<T>
  ): UpdateRequestBuilder<ElectronicPaymentSegments<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentSegments<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentSegments`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentSegments.dataAreaId}.
   * @param segment Key property. See {@link ElectronicPaymentSegments.segment}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentSegments`.
   */
  delete(
    dataAreaId: string,
    segment: string
  ): DeleteRequestBuilder<ElectronicPaymentSegments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentSegments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentSegments` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentSegments<T>
  ): DeleteRequestBuilder<ElectronicPaymentSegments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    segment?: string
  ): DeleteRequestBuilder<ElectronicPaymentSegments<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentSegments<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentSegments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Segment: segment!
          }
    );
  }
}
