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
import { ProjVendInvoiceLinesExportEntity } from './ProjVendInvoiceLinesExportEntity';

/**
 * Request builder class for operations supported on the {@link ProjVendInvoiceLinesExportEntity} entity.
 */
export class ProjVendInvoiceLinesExportEntityRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
  /**
   * Returns a request builder for querying all `ProjVendInvoiceLinesExportEntity` entities.
   * @returns A request builder for creating requests to retrieve all `ProjVendInvoiceLinesExportEntity` entities.
   */
  getAll(): GetAllRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
    return new GetAllRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjVendInvoiceLinesExportEntity` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjVendInvoiceLinesExportEntity`.
   */
  create(
    entity: ProjVendInvoiceLinesExportEntity<T>
  ): CreateRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
    return new CreateRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjVendInvoiceLinesExportEntity` entity based on its keys.
   * @param projTransId Key property. See {@link ProjVendInvoiceLinesExportEntity.projTransId}.
   * @param projDataAreaId Key property. See {@link ProjVendInvoiceLinesExportEntity.projDataAreaId}.
   * @returns A request builder for creating requests to retrieve one `ProjVendInvoiceLinesExportEntity` entity based on its keys.
   */
  getByKey(
    projTransId: DeserializedType<T, 'Edm.String'>,
    projDataAreaId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
    return new GetByKeyRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>(
      this.entityApi,
      {
        ProjTransId: projTransId,
        ProjDataAreaId: projDataAreaId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjVendInvoiceLinesExportEntity`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjVendInvoiceLinesExportEntity`.
   */
  update(
    entity: ProjVendInvoiceLinesExportEntity<T>
  ): UpdateRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
    return new UpdateRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjVendInvoiceLinesExportEntity`.
   * @param projTransId Key property. See {@link ProjVendInvoiceLinesExportEntity.projTransId}.
   * @param projDataAreaId Key property. See {@link ProjVendInvoiceLinesExportEntity.projDataAreaId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjVendInvoiceLinesExportEntity`.
   */
  delete(
    projTransId: string,
    projDataAreaId: string
  ): DeleteRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjVendInvoiceLinesExportEntity`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjVendInvoiceLinesExportEntity` by taking the entity as a parameter.
   */
  delete(
    entity: ProjVendInvoiceLinesExportEntity<T>
  ): DeleteRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>;
  delete(
    projTransIdOrEntity: any,
    projDataAreaId?: string
  ): DeleteRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T> {
    return new DeleteRequestBuilder<ProjVendInvoiceLinesExportEntity<T>, T>(
      this.entityApi,
      projTransIdOrEntity instanceof ProjVendInvoiceLinesExportEntity
        ? projTransIdOrEntity
        : {
            ProjTransId: projTransIdOrEntity!,
            ProjDataAreaId: projDataAreaId!
          }
    );
  }
}
