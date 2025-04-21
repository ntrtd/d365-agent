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
import { ElectronicPaymentDocumentTypes } from './ElectronicPaymentDocumentTypes';

/**
 * Request builder class for operations supported on the {@link ElectronicPaymentDocumentTypes} entity.
 */
export class ElectronicPaymentDocumentTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
  /**
   * Returns a request builder for querying all `ElectronicPaymentDocumentTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ElectronicPaymentDocumentTypes` entities.
   */
  getAll(): GetAllRequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
    return new GetAllRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ElectronicPaymentDocumentTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ElectronicPaymentDocumentTypes`.
   */
  create(
    entity: ElectronicPaymentDocumentTypes<T>
  ): CreateRequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
    return new CreateRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ElectronicPaymentDocumentTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link ElectronicPaymentDocumentTypes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentDocumentTypes.layoutGroupId}.
   * @param documentType Key property. See {@link ElectronicPaymentDocumentTypes.documentType}.
   * @returns A request builder for creating requests to retrieve one `ElectronicPaymentDocumentTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    layoutGroupId: DeserializedType<T, 'Edm.String'>,
    documentType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
    return new GetByKeyRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LayoutGroupId: layoutGroupId,
        DocumentType: documentType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ElectronicPaymentDocumentTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ElectronicPaymentDocumentTypes`.
   */
  update(
    entity: ElectronicPaymentDocumentTypes<T>
  ): UpdateRequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
    return new UpdateRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentDocumentTypes`.
   * @param dataAreaId Key property. See {@link ElectronicPaymentDocumentTypes.dataAreaId}.
   * @param layoutGroupId Key property. See {@link ElectronicPaymentDocumentTypes.layoutGroupId}.
   * @param documentType Key property. See {@link ElectronicPaymentDocumentTypes.documentType}.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentDocumentTypes`.
   */
  delete(
    dataAreaId: string,
    layoutGroupId: string,
    documentType: string
  ): DeleteRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ElectronicPaymentDocumentTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ElectronicPaymentDocumentTypes` by taking the entity as a parameter.
   */
  delete(
    entity: ElectronicPaymentDocumentTypes<T>
  ): DeleteRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    layoutGroupId?: string,
    documentType?: string
  ): DeleteRequestBuilder<ElectronicPaymentDocumentTypes<T>, T> {
    return new DeleteRequestBuilder<ElectronicPaymentDocumentTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ElectronicPaymentDocumentTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LayoutGroupId: layoutGroupId!,
            DocumentType: documentType!
          }
    );
  }
}
