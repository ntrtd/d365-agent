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
import { EfDocumentReceivedXmls } from './EfDocumentReceivedXmls';

/**
 * Request builder class for operations supported on the {@link EfDocumentReceivedXmls} entity.
 */
export class EfDocumentReceivedXmlsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocumentReceivedXmls<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocumentReceivedXmls` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocumentReceivedXmls` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocumentReceivedXmls<T>, T> {
    return new GetAllRequestBuilder<EfDocumentReceivedXmls<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EfDocumentReceivedXmls` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocumentReceivedXmls`.
   */
  create(
    entity: EfDocumentReceivedXmls<T>
  ): CreateRequestBuilder<EfDocumentReceivedXmls<T>, T> {
    return new CreateRequestBuilder<EfDocumentReceivedXmls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EfDocumentReceivedXmls` entity based on its keys.
   * @param dataAreaId Key property. See {@link EfDocumentReceivedXmls.dataAreaId}.
   * @param accesskey Key property. See {@link EfDocumentReceivedXmls.accesskey}.
   * @returns A request builder for creating requests to retrieve one `EfDocumentReceivedXmls` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    accesskey: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EfDocumentReceivedXmls<T>, T> {
    return new GetByKeyRequestBuilder<EfDocumentReceivedXmls<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Accesskey: accesskey
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocumentReceivedXmls`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocumentReceivedXmls`.
   */
  update(
    entity: EfDocumentReceivedXmls<T>
  ): UpdateRequestBuilder<EfDocumentReceivedXmls<T>, T> {
    return new UpdateRequestBuilder<EfDocumentReceivedXmls<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocumentReceivedXmls`.
   * @param dataAreaId Key property. See {@link EfDocumentReceivedXmls.dataAreaId}.
   * @param accesskey Key property. See {@link EfDocumentReceivedXmls.accesskey}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocumentReceivedXmls`.
   */
  delete(
    dataAreaId: string,
    accesskey: string
  ): DeleteRequestBuilder<EfDocumentReceivedXmls<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocumentReceivedXmls`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocumentReceivedXmls` by taking the entity as a parameter.
   */
  delete(
    entity: EfDocumentReceivedXmls<T>
  ): DeleteRequestBuilder<EfDocumentReceivedXmls<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    accesskey?: string
  ): DeleteRequestBuilder<EfDocumentReceivedXmls<T>, T> {
    return new DeleteRequestBuilder<EfDocumentReceivedXmls<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EfDocumentReceivedXmls
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Accesskey: accesskey!
          }
    );
  }
}
