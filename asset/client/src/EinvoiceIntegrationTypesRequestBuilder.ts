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
import { EinvoiceIntegrationTypes } from './EinvoiceIntegrationTypes';

/**
 * Request builder class for operations supported on the {@link EinvoiceIntegrationTypes} entity.
 */
export class EinvoiceIntegrationTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EinvoiceIntegrationTypes<T>, T> {
  /**
   * Returns a request builder for querying all `EinvoiceIntegrationTypes` entities.
   * @returns A request builder for creating requests to retrieve all `EinvoiceIntegrationTypes` entities.
   */
  getAll(): GetAllRequestBuilder<EinvoiceIntegrationTypes<T>, T> {
    return new GetAllRequestBuilder<EinvoiceIntegrationTypes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `EinvoiceIntegrationTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EinvoiceIntegrationTypes`.
   */
  create(
    entity: EinvoiceIntegrationTypes<T>
  ): CreateRequestBuilder<EinvoiceIntegrationTypes<T>, T> {
    return new CreateRequestBuilder<EinvoiceIntegrationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `EinvoiceIntegrationTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link EinvoiceIntegrationTypes.dataAreaId}.
   * @param typeId Key property. See {@link EinvoiceIntegrationTypes.typeId}.
   * @returns A request builder for creating requests to retrieve one `EinvoiceIntegrationTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<EinvoiceIntegrationTypes<T>, T> {
    return new GetByKeyRequestBuilder<EinvoiceIntegrationTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeId: typeId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `EinvoiceIntegrationTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EinvoiceIntegrationTypes`.
   */
  update(
    entity: EinvoiceIntegrationTypes<T>
  ): UpdateRequestBuilder<EinvoiceIntegrationTypes<T>, T> {
    return new UpdateRequestBuilder<EinvoiceIntegrationTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `EinvoiceIntegrationTypes`.
   * @param dataAreaId Key property. See {@link EinvoiceIntegrationTypes.dataAreaId}.
   * @param typeId Key property. See {@link EinvoiceIntegrationTypes.typeId}.
   * @returns A request builder for creating requests that delete an entity of type `EinvoiceIntegrationTypes`.
   */
  delete(
    dataAreaId: string,
    typeId: string
  ): DeleteRequestBuilder<EinvoiceIntegrationTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EinvoiceIntegrationTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EinvoiceIntegrationTypes` by taking the entity as a parameter.
   */
  delete(
    entity: EinvoiceIntegrationTypes<T>
  ): DeleteRequestBuilder<EinvoiceIntegrationTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeId?: string
  ): DeleteRequestBuilder<EinvoiceIntegrationTypes<T>, T> {
    return new DeleteRequestBuilder<EinvoiceIntegrationTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof EinvoiceIntegrationTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeId: typeId!
          }
    );
  }
}
