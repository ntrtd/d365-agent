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
import { EngineeringChangeOrderProductDocuments } from './EngineeringChangeOrderProductDocuments';

/**
 * Request builder class for operations supported on the {@link EngineeringChangeOrderProductDocuments} entity.
 */
export class EngineeringChangeOrderProductDocumentsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
  /**
   * Returns a request builder for querying all `EngineeringChangeOrderProductDocuments` entities.
   * @returns A request builder for creating requests to retrieve all `EngineeringChangeOrderProductDocuments` entities.
   */
  getAll(): GetAllRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
    return new GetAllRequestBuilder<
      EngineeringChangeOrderProductDocuments<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EngineeringChangeOrderProductDocuments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EngineeringChangeOrderProductDocuments`.
   */
  create(
    entity: EngineeringChangeOrderProductDocuments<T>
  ): CreateRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
    return new CreateRequestBuilder<
      EngineeringChangeOrderProductDocuments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EngineeringChangeOrderProductDocuments` entity based on its keys.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductDocuments.dataAreaId}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductDocuments.documentId}.
   * @returns A request builder for creating requests to retrieve one `EngineeringChangeOrderProductDocuments` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    documentId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
    return new GetByKeyRequestBuilder<
      EngineeringChangeOrderProductDocuments<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      DocumentId: documentId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EngineeringChangeOrderProductDocuments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EngineeringChangeOrderProductDocuments`.
   */
  update(
    entity: EngineeringChangeOrderProductDocuments<T>
  ): UpdateRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
    return new UpdateRequestBuilder<
      EngineeringChangeOrderProductDocuments<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductDocuments`.
   * @param dataAreaId Key property. See {@link EngineeringChangeOrderProductDocuments.dataAreaId}.
   * @param documentId Key property. See {@link EngineeringChangeOrderProductDocuments.documentId}.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductDocuments`.
   */
  delete(
    dataAreaId: string,
    documentId: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EngineeringChangeOrderProductDocuments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EngineeringChangeOrderProductDocuments` by taking the entity as a parameter.
   */
  delete(
    entity: EngineeringChangeOrderProductDocuments<T>
  ): DeleteRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    documentId?: string
  ): DeleteRequestBuilder<EngineeringChangeOrderProductDocuments<T>, T> {
    return new DeleteRequestBuilder<
      EngineeringChangeOrderProductDocuments<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof EngineeringChangeOrderProductDocuments
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DocumentId: documentId!
          }
    );
  }
}
