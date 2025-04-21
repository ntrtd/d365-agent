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
import { QrBillIntegrations } from './QrBillIntegrations';

/**
 * Request builder class for operations supported on the {@link QrBillIntegrations} entity.
 */
export class QrBillIntegrationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<QrBillIntegrations<T>, T> {
  /**
   * Returns a request builder for querying all `QrBillIntegrations` entities.
   * @returns A request builder for creating requests to retrieve all `QrBillIntegrations` entities.
   */
  getAll(): GetAllRequestBuilder<QrBillIntegrations<T>, T> {
    return new GetAllRequestBuilder<QrBillIntegrations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `QrBillIntegrations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `QrBillIntegrations`.
   */
  create(
    entity: QrBillIntegrations<T>
  ): CreateRequestBuilder<QrBillIntegrations<T>, T> {
    return new CreateRequestBuilder<QrBillIntegrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `QrBillIntegrations` entity based on its keys.
   * @param dataAreaId Key property. See {@link QrBillIntegrations.dataAreaId}.
   * @param importExecutionId Key property. See {@link QrBillIntegrations.importExecutionId}.
   * @returns A request builder for creating requests to retrieve one `QrBillIntegrations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    importExecutionId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<QrBillIntegrations<T>, T> {
    return new GetByKeyRequestBuilder<QrBillIntegrations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ImportExecutionId: importExecutionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `QrBillIntegrations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `QrBillIntegrations`.
   */
  update(
    entity: QrBillIntegrations<T>
  ): UpdateRequestBuilder<QrBillIntegrations<T>, T> {
    return new UpdateRequestBuilder<QrBillIntegrations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `QrBillIntegrations`.
   * @param dataAreaId Key property. See {@link QrBillIntegrations.dataAreaId}.
   * @param importExecutionId Key property. See {@link QrBillIntegrations.importExecutionId}.
   * @returns A request builder for creating requests that delete an entity of type `QrBillIntegrations`.
   */
  delete(
    dataAreaId: string,
    importExecutionId: string
  ): DeleteRequestBuilder<QrBillIntegrations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `QrBillIntegrations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `QrBillIntegrations` by taking the entity as a parameter.
   */
  delete(
    entity: QrBillIntegrations<T>
  ): DeleteRequestBuilder<QrBillIntegrations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    importExecutionId?: string
  ): DeleteRequestBuilder<QrBillIntegrations<T>, T> {
    return new DeleteRequestBuilder<QrBillIntegrations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof QrBillIntegrations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ImportExecutionId: importExecutionId!
          }
    );
  }
}
