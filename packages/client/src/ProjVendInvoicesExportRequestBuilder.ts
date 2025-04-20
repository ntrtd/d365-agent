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
import { ProjVendInvoicesExport } from './ProjVendInvoicesExport';

/**
 * Request builder class for operations supported on the {@link ProjVendInvoicesExport} entity.
 */
export class ProjVendInvoicesExportRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProjVendInvoicesExport<T>, T> {
  /**
   * Returns a request builder for querying all `ProjVendInvoicesExport` entities.
   * @returns A request builder for creating requests to retrieve all `ProjVendInvoicesExport` entities.
   */
  getAll(): GetAllRequestBuilder<ProjVendInvoicesExport<T>, T> {
    return new GetAllRequestBuilder<ProjVendInvoicesExport<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ProjVendInvoicesExport` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProjVendInvoicesExport`.
   */
  create(
    entity: ProjVendInvoicesExport<T>
  ): CreateRequestBuilder<ProjVendInvoicesExport<T>, T> {
    return new CreateRequestBuilder<ProjVendInvoicesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ProjVendInvoicesExport` entity based on its keys.
   * @param dataAreaId Key property. See {@link ProjVendInvoicesExport.dataAreaId}.
   * @param tableRefId Key property. See {@link ProjVendInvoicesExport.tableRefId}.
   * @returns A request builder for creating requests to retrieve one `ProjVendInvoicesExport` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tableRefId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProjVendInvoicesExport<T>, T> {
    return new GetByKeyRequestBuilder<ProjVendInvoicesExport<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TableRefId: tableRefId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ProjVendInvoicesExport`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProjVendInvoicesExport`.
   */
  update(
    entity: ProjVendInvoicesExport<T>
  ): UpdateRequestBuilder<ProjVendInvoicesExport<T>, T> {
    return new UpdateRequestBuilder<ProjVendInvoicesExport<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ProjVendInvoicesExport`.
   * @param dataAreaId Key property. See {@link ProjVendInvoicesExport.dataAreaId}.
   * @param tableRefId Key property. See {@link ProjVendInvoicesExport.tableRefId}.
   * @returns A request builder for creating requests that delete an entity of type `ProjVendInvoicesExport`.
   */
  delete(
    dataAreaId: string,
    tableRefId: string
  ): DeleteRequestBuilder<ProjVendInvoicesExport<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProjVendInvoicesExport`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProjVendInvoicesExport` by taking the entity as a parameter.
   */
  delete(
    entity: ProjVendInvoicesExport<T>
  ): DeleteRequestBuilder<ProjVendInvoicesExport<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tableRefId?: string
  ): DeleteRequestBuilder<ProjVendInvoicesExport<T>, T> {
    return new DeleteRequestBuilder<ProjVendInvoicesExport<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ProjVendInvoicesExport
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TableRefId: tableRefId!
          }
    );
  }
}
